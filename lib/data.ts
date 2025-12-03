import { FAQItem, Testimonial } from './types';

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

export const testimonialsData: Testimonial[] = [
  {
    id: 1,
    name: "Preeti",
    role: "Yoga Session Attendee",
    quote: "Today’s yoga and awareness session was extremely informative. We learned so many new things. Thank you so much, Nirmala and team, for your wonderful initiative.",
    rating: 5,
  },
  {
    id: 2,
    name: "Gunjan",
    role: "Programme Participant",
    quote: "Today’s awareness session hit the exact spot for me, what we crave to eat, why we crave and how to able to manage it. Thanks for sharing this knowledge which was experience backed!",
    rating: 5,
  },
  {
    id: 3,
    name: "Kabrahimani",
    role: "Programme Participant",
    quote: "The detox session in the morning was very good start to the 15 day reset program. Tried oil pulling and laghu shankha prakshalana for the first time. Feeling much lighter today.",
    rating: 5,
  },
  {
    id: 4,
    name: "Bharat Sharma",
    role: "Programme Participant",
    quote: "I am feeling light till now. It will be a big plus in my routines now. Thanks Nirmala.",
    rating: 5,
  },
];

export const ALL_COURSE_DATA = {
  // --- Comprehensive Health Reboot (Your Original Data) ---
  'reboot': {
    id: 'reboot',
    title: 'Comprehensive Health Reboot',
    subtitle: 'Transform Your Body & Mind in 12 Weeks',
    tagline: 'A science-backed program designed for busy professionals who want lasting results',
    heroImage: 'comprehensive.svg',

    painPoints: [
      'Tried countless diets but nothing sticks long-term',
      'Feel exhausted despite sleeping 7-8 hours',
      'Know what to do but struggle with consistency',
      'Information overload—too many conflicting opinions',
      'No accountability or personalized guidance'
    ],

    outcomes: [
      'Sustainable weight management without restrictive dieting',
      'Energy levels that carry you through your busiest days',
      'A personalized system that fits your lifestyle',
      'Evidence-based strategies, not internet myths',
      '1-on-1 support and weekly accountability check-ins'
    ],

    curriculum: [
      {
        week: 'Week 1-2',
        title: 'Foundation & Assessment',
        description: 'Comprehensive health evaluation, goal setting, and baseline measurements',
        lessons: [
          'Complete metabolic assessment',
          'Lifestyle and habit analysis',
          'Personalized nutrition planning framework',
          'Setting realistic milestones'
        ]
      },
      {
        week: 'Week 3-5',
        title: 'Nutrition Fundamentals',
        description: 'Build your custom meal plan and learn sustainable eating habits',
        lessons: [
          'Calorie and macro calculations for your body',
          'Meal prep strategies for busy schedules',
          'Restaurant and social eating guidelines',
          'Supplement recommendations'
        ]
      },
      {
        week: 'Week 6-8',
        title: 'Movement & Recovery',
        description: 'Optimize exercise routines and recovery protocols',
        lessons: [
          'Home workout programming',
          'Mobility and flexibility training',
          'Sleep optimization techniques',
          'Stress management practices'
        ]
      },
      {
        week: 'Week 9-12',
        title: 'Mastery & Maintenance',
        description: 'Lock in habits and create your long-term success blueprint',
        lessons: [
          'Plateau-breaking strategies',
          'Building sustainable routines',
          'Social support systems',
          'Your personalized maintenance plan'
        ]
      }
    ],

    projects: [
      {
        title: 'Your Custom Meal Plan',
        description: 'Tailored nutrition guide with 50+ recipes',
        image: 'comprehensive.svg'
      },
      {
        title: 'Weekly Progress Dashboard',
        description: 'Track metrics, photos, and milestones',
        image: 'foundation.svg'
      }
    ],

    differentiators: [
      {
        icon: '👤',
        title: 'Expert Guidance',
        description: 'Certified nutritionists with 10+ years experience'
      },
      {
        icon: '📱',
        title: 'Daily WhatsApp Support',
        description: 'Get answers within 2 hours, every single day'
      },
      {
        icon: '📊',
        title: 'Data-Driven Approach',
        description: 'Track everything that matters, adjust in real-time'
      },
      {
        icon: '🔄',
        title: 'Lifetime Access',
        description: 'Keep all materials and resources forever'
      }
    ],

    pricing: {
      options: [
        {
          id: 'monthly',
          label: 'Monthly Plan',
          price: 4999,
          period: 'month',
          commitment: '1 month',
          isRecommended: false
        },
        {
          id: 'quarterly',
          label: 'before Dec 2025',
          price: 62490,
          period: '3 months',
          commitment: '3 months',
          savings: 74990,
          isRecommended: true
        }
      ],
      includes: [
        'Personalized diet charts updated weekly',
        'Daily WhatsApp support (7 days/week)',
        'Grocery shopping guides and meal prep videos',
        'Progress tracking dashboard',
        'Monthly 1-on-1 video consultations',
        'Private community access'
      ],
      guarantee: '14-day money-back guarantee—no questions asked'
    }
  },

  // --- New Course 1: Rejuvenation ---
  'rejuvenation': {
    id: 'rejuvenation',
    title: 'Cellular Rejuvenation Protocol',
    subtitle: 'Biohack Your Sleep, Stress, and Longevity in 8 Weeks',
    tagline: 'Deep-dive into hormonal balance and recovery for peak performance',
    heroImage: 'reju.svg',

    painPoints: [
      'Constant stress and feeling burnt out',
      'Trouble falling asleep or staying asleep',
      'Hormonal imbalances affecting mood and energy',
      'Wanting to proactively invest in long-term health'
    ],

    outcomes: [
      'Dramatically improved sleep quality and duration',
      'Actionable strategies to lower chronic stress',
      'A personalized supplement stack for longevity',
      'Increased mental clarity and focus'
    ],

    curriculum: [
      {
        week: 'Week 1-2',
        title: 'Hormonal & Sleep Audit',
        description: 'Testing, tracking, and personalized chronobiology',
        lessons: [
          'Understanding cortisol and melatonin',
          'Advanced sleep tracking (HRV, deep sleep)',
          'Setting up a perfect sleep environment',
          'Morning and evening rituals'
        ]
      },
      {
        week: 'Week 3-4',
        title: 'Stress Management',
        description: 'Techniques to modulate the nervous system and lower allostatic load.',
        lessons: [
          'Breathwork protocols for relaxation',
          'Mindfulness and cognitive restructuring',
          'Optimizing light exposure',
          'Neuro-nutrients for mood support'
        ]
      },
      {
        week: 'Week 5-6',
        title: 'Longevity Nutrition',
        description: 'Fueling your cells for long-term health and vitality.',
        lessons: [
          'Intermittent fasting guidelines',
          'Optimizing mitochondrial function',
          'Antioxidant and anti-inflammatory diets',
          'Key longevity supplements (e.g., NAD+, Resveratrol)'
        ]
      },
      {
        week: 'Week 7-8',
        title: 'Integration & Future-Proofing',
        description: 'Solidifying habits and creating a maintenance plan.',
        lessons: [
          'Creating a recovery hierarchy',
          'Identifying stress triggers',
          'Annual health screening plan',
          'Your personalized Rejuvenation Blueprint'
        ]
      }
    ],

    projects: [
      {
        title: 'Personalized Sleep Environment Plan',
        description: 'A detailed plan to optimize your bedroom and nightly routine.',
        image: 'sleep.svg'
      },
      {
        title: 'Supplement & Nutrient Blueprint',
        description: 'A custom, evidence-based supplement protocol.',
        image: 'supplements.svg'
      }
    ],

    differentiators: [
      { icon: '🧠', title: 'Biohacking Focus', description: 'Deep-dive into cellular and hormonal optimization.' },
      { icon: '📉', title: 'HRV Integration', description: 'Learn to use Heart Rate Variability for real-time recovery feedback.' },
      { icon: '🧪', title: 'Test-Based Strategy', description: 'Strategies based on potential blood work markers (e.g., cortisol, thyroid).' },
      { icon: '🧘', title: 'Nervous System Training', description: 'Specific protocols to manage stress and anxiety.' }
    ],

    pricing: {
      options: [
        { id: 'full-pay', label: 'Full Pay', price: 48999, period: '45 Days', commitment: '45 Days', isRecommended: true, savings: 0 },
       
      ],
      includes: [
        'Advanced HRV tracking techniques',
        'Personalized stress reduction blueprint',
        '3 coaching calls',
        'Detailed Biohacking E-book',
        'Sleep environment checklist',
        'Private community access'
      ],
      guarantee: '14-day money-back guarantee—no questions asked'
    }
  },

  // --- New Course 2: Move Better ---
  'move-better': {
    id: 'move-better',
    title: 'The Move Better System',
    subtitle: 'Fix Posture, Eliminate Pain, and Build Functional Strength',
    tagline: 'A 6-week program focused on mobility and structural integrity for lasting physical health',
    heroImage: 'movebetter.svg',

    painPoints: [
      'Chronic low back or neck pain from sitting',
      'Feeling stiff and limited in range of motion',
      'Wanting to lift weights safely and effectively',
      'Don\'t know where to start with flexibility training'
    ],

    outcomes: [
      'Measurable reduction in chronic joint pain',
      'Noticeably better posture and stability',
      'A safe, personalized home mobility routine',
      'Increased confidence in your body\'s movement capabilities'
    ],
    curriculum: [
      { week: 'Week 1', title: 'Anatomy & Assessment', description: 'Understanding your current movement patterns and pain points.', lessons: ['Full movement screen (Hip, Shoulder, Spine)', 'Introduction to neutral spine position', 'Breathing mechanics for core stability', 'Myofascial release fundamentals'] },
      { week: 'Week 2-3', title: 'Hip & Lower Body Mobility', description: 'Restoring range of motion in the hips, glutes, and hamstrings.', lessons: ['Hip flexor release and strengthening', 'Ankle and knee joint preparation', 'Glute activation exercises', 'Deep squat progression'] },
      { week: 'Week 4-5', title: 'Shoulder & Upper Body Stability', description: 'Improving thoracic spine mobility and shoulder stability.', lessons: ['Rotator cuff strengthening', 'Desk posture correction drill', 'T-spine extension exercises', 'Scapular control'] },
      { week: 'Week 6', title: 'Integration & Maintenance', description: 'Combining new mobility with foundational strength.', lessons: ['The 15-minute daily maintenance routine', 'Progression to loaded movements (squat/deadlift)', 'Preventing relapse strategies', 'Your long-term movement plan'] }
    ],
    projects: [
      { title: 'Personalized Mobility Routine', description: 'A 15-minute daily video routine customized to your pain/stiffness areas.', image: 'mobility.svg' },
      { title: 'Posture Assessment Checklist', description: 'A checklist and video guide for self-assessment of common postural issues.', image: 'posture.svg' }
    ],
    differentiators: [
      { icon: '🦴', title: 'Focus on Biomechanics', description: 'Programs designed by a Certified Movement Specialist.' },
      { icon: '🛠️', title: 'Corrective Exercises', description: 'Targeted drills to fix common movement dysfunctions.' },
      { icon: '🔄', title: 'Video Follow-Alongs', description: 'High-quality follow-along videos for every daily routine.' },
      { icon: '🚫', title: 'Pain Elimination', description: 'Strategies specifically designed to reduce chronic, non-specific pain.' }
    ],
    pricing: {
      options: [
        { id: 'standard', label: 'Standard Access', price: 5999, period: '6 weeks', commitment: '6 weeks', isRecommended: true, savings: 0 },
      ],
      includes: [
        'Weekly video mobility follow-alongs',
        'Posture assessment checklist',
        'Joint-by-joint assessment guide',
        'Private community access'
      ],
      guarantee: '14-day money-back guarantee—no questions asked'
    }
  },

  // --- New Course 3: Foundation Reset Program ---
  'foundation-reset': {
    id: 'foundation-reset',
    title: 'Foundation Reset Program',
    subtitle: 'The 4-Week Kickstart to Healthier Habits',
    tagline: 'The perfect entry point for beginners to create consistent, lasting healthy habits',
    heroImage: 'foundation.svg',

    painPoints: [
      'Overwhelmed by complex health information',
      'Need a simple, structured starting point',
      'Struggle to maintain motivation past the first week',
      'Not sure what to eat or how to move'
    ],

    outcomes: [
      'Clear, actionable plan for the first month',
      'Mastery of 3 core foundational habits',
      'Initial weight loss and energy boost',
      'Confidence to progress to a longer program'
    ],
    curriculum: [
      { week: 'Week 1', title: 'Hydration & Sleep', description: 'Mastering the two non-negotiable foundations of health.', lessons: ['Calculating your optimal water intake', 'Setting an non-negotiable bedtime', 'The 10-minute wind-down routine', 'Morning light exposure'] },
      { week: 'Week 2', title: 'Protein & Movement', description: 'Dialing in the right fuel and minimum effective dose of exercise.', lessons: ['Calculating your minimum daily protein goal', 'Protein sources and meal planning', 'The 3-day bodyweight strength circuit', 'Steps goal setting'] },
      { week: 'Week 3', title: 'Fibre & Stress', description: 'Focusing on gut health and stress mitigation.', lessons: ['Tracking and increasing daily fibre intake', 'Introduction to simple meditation', 'The 5-minute stress break', 'Meal timing basics'] },
      { week: 'Week 4', title: 'Consistency & Review', description: 'Solidifying habits and planning the next step.', lessons: ['The habit stacking formula', 'Reviewing progress and feedback', 'What to do when you slip up', 'Your next-step health goals'] }
    ],
    projects: [
      { title: 'Daily Habit Checklist', description: 'A simple printable checklist to ensure you hit your targets.', image: 'checklist.svg' },
      { title: 'Starter Recipe Guide', description: '10 easy, high-protein, high-fibre recipes for busy professionals.', image: 'recipes.svg' }
    ],
    differentiators: [
      { icon: '👶', title: 'Beginner Friendly', description: 'Focus on 1-2 habits per week to prevent overwhelm.' },
      { icon: '⏱️', title: 'Time-Boxed', description: 'Perfect 4-week commitment for immediate results and momentum.' },
      { icon: '📝', title: 'Simple Checklists', description: 'Easy-to-follow daily action plans.' },
      { icon: '⏫', title: 'Clear Progression', description: 'A defined path to the longer Comprehensive Reboot course.' }
    ],
    pricing: {
      options: [
        { id: 'single-payment', label: 'Single Payment', price: 17490, period: '3 Months', commitment: '3 Months', isRecommended: true, savings: 0 },
          { id: 'single-payment', label: 'Single Payment', price: 29990, period: '6 Months', commitment: '6 Months', isRecommended: true, savings: 0 },
            { id: 'single-payment', label: 'Single Payment', price: 44990, period: '12 Months', commitment: '12 Months', isRecommended: true, savings: 0 }
      ],
      includes: [
        'Simple daily checklist',
        '4 Weekly check-in videos',
        'Starter recipe guide',
        'Access to foundational movement library'
      ],
      guarantee: '14-day money-back guarantee—no questions asked'
    }
  }
};

export default {};


