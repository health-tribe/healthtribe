export interface FAQItem {
  value: string;
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    value: "item-1",
    question:
      "What makes this program different from other wellness or fitness programs?",
    answer:
      "We begin by identifying the root cause of your health challenges and then work with you step-by-step to build sustainable habits—rather than offering quick fixes or unrealistic shortcuts. Our approach is holistic and evidence-based, combining medical guidance with proven methods for habit formation, self-awareness, and stress resilience.",
  },
  {
    value: "item-2",
    question: "What kind of experts will the program include?",
    answer:
      "Our program brings together a multidisciplinary team of experienced super-speciality doctors, psychologists, fitness and wellness coaches, and dedicated mentors—all working collaboratively to support you at every step of your journey.",
  },
  {
    value: "item-3",
    question: "What kind of support can I get from the experts?",
    answer:
      "Our doctors will periodically review your health reports for the right medical interventions, while psychologists and mentors ensure you feel supported, motivated, and emotionally grounded throughout the journey. In addition, our experts will tailor your exercises, therapies, and sessions to accommodate your individual needs and any challenges you may face—so your program always works with you, not against you.",
  },
  {
    value: "item-4",
    question: "What does ‘Awareness’ mean in the program?",
    answer:
      "We believe that awareness is the first stepping stone to meaningful change. Through interactive sessions with super-speciality doctors and our expert team, you’ll learn the science behind how different factors create imbalances in the body and contribute to lifestyle disorders. Instead of pushing extreme measures, we help you understand why these issues arise and guide you toward sustainable, informed choices.",
  },
  {
    value: "item-5",
    question: "How is Support provided throughout the program?",
    answer:
      "We create a Tribe—a community of subscribers with similar goals—where members share their progress, stay motivated, and uplift one another without judgment. When like-minded people come together, success becomes easier. Each Tribe member becomes accountable not just to themselves but to the group, fostering collective momentum and shared victories.",
  },
  {
    value: "item-6",
    question: "What fitness level is required to be a part of this?",
    answer:
      "Whether you’re a complete beginner or returning to movement after a break, we guide you through your journey one step at a time. We begin slowly, focusing on essentials such as stability, joint health, and stress management, and then gradually help you build a strong foundation. This approach keeps you committed, reduces the risk of injury, and supports smarter, long-term health choices.",
  },
  {
    value: "item-7",
    question: "What kind of Movements does the program include?",
    answer:
      "Our movement plan is tailored to your individual needs and challenges. We begin gently, focusing on gradually building strength and confidence in your body. The program also includes targeted movements designed to improve metabolic and digestive health, as well as enhance blood circulation to vital organs.",
  },
  {
    value: "item-8",
    question: "Will I need to buy any equipments?",
    answer:
      "We recommend you buy a resistance band, stepper or stool, a Yoga or workout mat and weights as per your comfort.",
  },
  {
    value: "item-9",
    question: "Can this help with stress, burn out, and energy?",
    answer:
      "Our program is designed with experts to help with stress management. We focus on nutrition guidance for sustained energy and reducing emotional eating habits. We emphasize sleep and lifestyle strategies that bring about balance and sustainable daily rhythms.",
  },
  {
    value: "item-10",
    question: "Can I speak with someone from the team before registering for the program?",
    answer:
      "Yes, we encourage participants to connect with our team before enrolling. If you choose to move forward, you will be invited to a dedicated Induction session, where we will walk you through the program, and help you gear up for success.",
  },
  {
    value: "item-11",
    question: "What results can I expect?",
    answer:
      "By showing up consistently, you can expect noticeable improvements in strength and mobility, higher energy levels, healthier lifestyle habits, better metabolic health, and greater resilience to stress.",
  },
];

export default {};

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Preeti",
    role: "Participant in RESET Program",
    quote: "Today’s Yoga and Awareness session was extremely informative. We learned so many new things. Thank you so much, Nirmala and team, for your wonderful initiative.",
    rating: 5,
  },
  {
    id: 2,
    name: "Gunjan P.",
    role: "Chief Manager ICICI Bank",
    quote: "Today’s awareness session about metabolism and brain response hit the exact spot for me. What triggers our cravings at night and how to manage it. Thanks for sharing this knowledge which was experience backed!",
    rating: 5,
  },
  {
    id: 3,
    name: "Himani Kabra",
    role: "Senior Product Manager",
    quote: "The detox session in the morning was a good start for the day reset program. I tried oil pulling and laghu shankha prakshalana for the first time. Even the yoga and strength training sessions helped me ease my back and leg pain.",
    rating: 5,
  },
  {
    id: 4,
    name: "Bharat Sharma",
    role: "Co-Founder Three Sigma Asset Management and Bizmart Venture Pvt Ltd",
    quote: "The detox was very refreshing. I got a very good sleep yesterday.I am feeling light till now. It will be a big plus in my routines to follow every month. Thanks Nirmala.",
    rating: 5,
  },
];
