import mongoose, { Schema, Document } from 'mongoose';

// --- Enum Definitions for Goals and Programs ---

// Using native enums for better type safety and auto-completion
export enum Goal {
    WEIGHT_LOSS = 'weight_loss',
    LIFESTYLE = 'lifestyle',
    STRESS_MANAGEMENT = 'stress_management',
    STAY_FIT = 'stay_fit',
    OTHER = 'other',
}

export enum Program {
    FOUNDATION_RESET = 'foundation_reset',
    COMPREHENSIVE_REBOOT = 'comprehensive_reboot',
    MOVE_BETTER = 'move_better',
    COMPLETE_REJUVENATION = 'complete_rejuvenation',
}

// --- Store enum values for validation in the action ---
export const GOAL_VALUES = Object.values(Goal);
export const PROGRAM_VALUES = Object.values(Program);

// --- Interface Definition for the User Document ---

export interface IUser extends Document {
    name: string;
    email: string;
    password?: string; // Optional because it might not be selected in all queries
    phone: string;
    goals: Goal[];
    otherGoalDetails?: string; // Optional field for 'other' goal specifics
    programs: Program[];
    createdAt: Date;
    updatedAt: Date;
}

// --- Mongoose Schema Definition ---

const UserSchema: Schema<IUser> = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required.'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required.'],
            unique: true, // Ensures no two users can have the same email
            trim: true,
            lowercase: true,
            match: [/.+\@.+\..+/, 'Please enter a valid email address.'],
        },
        password: {
            type: String,
            required: [true, 'Password is required.'],
            // In a real application, you should add a 'select: false' to prevent it from being returned in queries by default
        },
        phone: {
            type: String,
            required: [true, 'Phone number is required.'],
            trim: true,
        },
        goals: {
            type: [{
                type: String,
                enum: {
                    values: GOAL_VALUES,
                    message: '"{VALUE}" is not a valid goal.',
                },
            }],
            required: [true, 'At least one goal must be selected.'],
            // Custom validator to ensure the array is not empty
            validate: {
                validator: (v: string[]) => v.length > 0,
                message: 'You must select at least one health goal.',
            },
        },
        // Field to store details for the 'other' goal, conditionally required
        otherGoalDetails: {
            type: String,
            trim: true,
            // Custom validator to make this field required only if 'goals' includes 'other'
            required: [
                function(this: IUser): boolean {
                    return this.goals.includes(Goal.OTHER);
                },
                'Please provide details for your "Other" goal.'
            ],
        },
        programs: {
            type: [{
                type: String,
                enum: {
                    values: PROGRAM_VALUES,
                    message: '"{VALUE}" is not a valid program.',
                },
            }],
            required: [true, 'At least one program must be selected.'],
            validate: {
                validator: (v: string[]) => v.length > 0,
                message: 'You must select at least one interested program.',
            },
        },
    },
    {
        timestamps: true, // Automatically adds createdAt and updatedAt fields
    }
);



// --- Model Export ---

// The model is compiled only if it hasn't been already to prevent Next.js hot-reloading errors
export default mongoose.models.User || mongoose.model<IUser>('User', UserSchema);