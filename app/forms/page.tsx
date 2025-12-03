"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { toast } from "sonner"
// --- Import Server Action ---
import { submitFormAction } from "./actions";

// --- 1. Define Zod Schema ---
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(10, "Phone number is too short"),
  goals: z.array(z.string()).refine((value) => value.length > 0, {
    message: "You must select at least one goal.",
  }),
  other_goal: z.string().optional(),
  programs: z.array(z.string()).optional(),
});

type FormValues = z.infer<typeof formSchema>;

// --- Constants for Checkboxes ---
const GOAL_ITEMS = [
  { id: "weight_loss", label: "Weight Loss" },
  { id: "lifestyle", label: "Lifestyle Improvement" },
  { id: "stress_management", label: "Stress Management" },
  { id: "stay_fit", label: "Stay Fit" },
] as const;

const PROGRAM_ITEMS = [
  { id: "foundation_reset", label: "Foundation Reset Program" },
  { id: "comprehensive_reboot", label: "Comprehensive Health Reboot" },
  { id: "move_better", label: "Move Better - Health Reset" },
  { id: "complete_rejuvenation", label: "Complete Health Rejuvenation" },
] as const;

export default function ActionForm() {
  const [isPending, startTransition] = useTransition();


  // --- 2. Initialize Form ---
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      goals: [],
      programs: [],
      other_goal: "",
    },
  });

  // --- 3. Submit Handler ---
  async function onSubmit(data: FormValues) {
    startTransition(async () => {
      // Convert the plain object into a FormData instance because the
      // server action expects `FormData` (so it can call `get`/`getAll`).
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("phone", data.phone);
      if (data.other_goal) formData.append("other_goal", data.other_goal);
      // append all goals/programs as repeated fields
      data.goals.forEach((g) => formData.append("goals", g));
      data.programs?.forEach((p) => formData.append("programs", p));

      const result = await submitFormAction(formData);

      if (result.success) {
        toast.success("Application Received", {
          description: "We've received your health goals. We'll be in touch shortly.",
        });
        form.reset();
      } else {
        toast.error("Error", {
          description: "Something went wrong. Please try again.",
        });
      }
    });
  }

  return (
    <Card className="w-full max-w-2xl my-36 mx-auto shadow-lg border-muted/60">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Health Assessment</CardTitle>
        <CardDescription>
          Tell us about your goals so we can curate the perfect program for you.
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            
            {/* --- Section: Personal Info --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="john@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="md:col-span-2">
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+1 (555) 000-0000" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="h-px bg-border" />

            {/* --- Section: Goals & Programs Grid --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Goals Column */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="goals"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">Primary Goals</FormLabel>
                        <FormDescription>Select all that apply.</FormDescription>
                      </div>
                      <div className="space-y-3">
                        {GOAL_ITEMS.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="goals"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        const current = field.value ?? [];
                                        return checked
                                          ? field.onChange([...current, item.id])
                                          : field.onChange(current.filter((v) => v !== item.id));
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                {/* Other Goal Input nested under Goals */}
                <FormField
                  control={form.control}
                  name="other_goal"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input 
                            placeholder="Other specific goals..." 
                            className="mt-2 text-sm" 
                            {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              {/* Programs Column */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="programs"
                  render={() => (
                    <FormItem>
                      <div className="mb-4">
                        <FormLabel className="text-base">Interested Programs</FormLabel>
                        <FormDescription>Which programs interest you?</FormDescription>
                      </div>
                      <div className="space-y-3">
                        {PROGRAM_ITEMS.map((item) => (
                          <FormField
                            key={item.id}
                            control={form.control}
                            name="programs"
                            render={({ field }) => {
                              return (
                                <FormItem
                                  key={item.id}
                                  className="flex flex-row items-start space-x-3 space-y-0"
                                >
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value?.includes(item.id)}
                                      onCheckedChange={(checked) => {
                                        const current = field.value ?? [];
                                        return checked
                                          ? field.onChange([...current, item.id])
                                          : field.onChange(current.filter((v) => v !== item.id));
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="font-normal cursor-pointer">
                                    {item.label}
                                  </FormLabel>
                                </FormItem>
                              );
                            }}
                          />
                        ))}
                      </div>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>

            <Button type="submit" className="w-full h-11" disabled={isPending}>
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Application <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}