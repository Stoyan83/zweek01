export const items = [
  {
    id: 1,
    title: "Lead customers to happiness",
    description:
      "Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.",
    icon: "/benefit-icon1.svg",
  },
  {
    id: 2,
    title: "Support your support",
    description:
      "Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.",
    icon: "/benefit-icon2.svg",
  },
  {
    id: 3,
    title: "Grow without growing pains",
    description:
      "Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow.",
    icon: "/benefit-icon3.svg",
  },
]

export const services = [
  {
    id: 1,
    tag: 'sales',
    title: 'Increase company revenue up to 65%',
    image: "/service1.svg",
    text: {
      paragraph: 'Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging.',
      bullets: [
        { id: 1, text: 'Close more deals with single-page contact management' },
        { id: 2, text: 'Enjoy one-click calling, call scripts and voicemail automation' },
        { id: 3, text: 'Track stages and milestones of your deals to keep the sales process on track' },
      ],
    },
  },
  {
    id: 2,
    tag: 'MARKETING',
    title: 'Marketing',
    image: "/service2.svg",
    text: {
      paragraph: "Market like the most successful companies in the world with Agile CRM's marketing automation software.",
      bullets: [
        { id: 4, text: 'Marketing workflows with an easy drag-and-drop designer' },
        { id: 5, text: 'Use our templates to create high converting, mobile responsive landing pages' },
        { id: 6, text: 'Integrate social media easily into your marketing campaigns & contact views' },
      ],
    },
  },
  {
    id: 3,
    tag: 'SERVICE',
    title: 'Help Desk Software',
    image: "/service3.svg",
    text: {
      paragraph: 'Great customer support separates decent companies from excellent companies. A positive customer support experience is a crucially important piece of the customer journey. ',
      bullets: [
        { id: 7, text: 'Resolve every issue in the shortest possible time with powerful ticketing features' },
        { id: 8, text: 'Categorize tickets according to the issue and route them to the appropriate group (e.g. sales or support)' },
        { id: 9, text: 'Enjoy at-a-glance views of important data—such as ticket priority—on your dashboard' },
      ],
    },
  },
];


export const logoApps = [
  {
    id: 1,
    image: "/app1.svg"
  },
  {
    id: 2,
    image: "/app2.svg"
  },
  {
    id: 3,
    image: "/app3.svg"
  },
  {
    id: 4,
    image: "/app4.svg"
  },
  {
    id: 5,
    image: "/app5.svg"
  },
  {
    id: 6,
    image: "/app6.svg"
  },
  {
    id: 7,
    image: "/app7.svg"
  },
  {
    id: 8,
    image: "/app8.svg"
  },
  {
    id: 9,
    image: "/app9.svg"
  },
  {
    id: 10,
    image: "/app10.svg"
  },
];


export const news = [
  {
    id: 1,
    tag: 'service',
    title: 'How To Deliver a Successful Product Launch',
    date: '2024-09-05',
    publisher: 'Joshua Nash',
    image: '/new1.png',
  },
  {
    id: 2,
    tag: 'service',
    title: 'What Makes an Authentic Employee Profile, and Why Does It Matter?',
    date: '2024-09-07',
    publisher: 'Ivan Neshev',
    image: '/new2.png',
  },
]

export const charts = [
  {
    id: 1,
    percent: "$2.5 M",
    title: "Generate sales",
    description: "Using Кирилица CRM is one of the best decisions we’ve ever made. We’ve seen our annual revenue explode, and the outlook just keeps getting sunnier.",
    name: "Nellie Foster",
    role: "Founder & CEO, Foster Business Strategies",
    image: '/chart1.png',
  },
  {
    id: 2,
    percent: "45%",
    title: "Grew revenue",
    description: "Yoora is created for sales people. It’s the kind of software that just works. I don’t have to try to make it work. It already does. It’s just perfect.",
    name: "Lawrence Gibbs",
    role: "Marketing Director",
    image: '/chart2.png',
  }
]

export const feedback = [
  {
    id: 1,
    comment: "The best thing we love about Yoora is it does two-way sync with Google Apps. It has helped us to better organize and keep everything on track.",
    name: "Lola Ross",
    role: "Marketing Director",
    image: '/client1.png',
  },
  {
    id: 2,
    comment: "It has made our sales department more effective and efficient. It’s easy to use and it’s constantly updated. It’s easy to use and it’s constantly updated.",
    name: "Daisy Phelps",
    role: "Speaker and Author, Lifeiseasy",
    image: '/client2.png',
  },
  {
    id: 3,
    comment: "Easy to use, reasonably priced, and ensures I don’t drop the ball on following up with my leads!",
    name: "Andrew Wilkins",
    role: "Managing Director, Nirma Studio",
    image: '/client3.png',
  },
]

export const prices = [
  {
    id: 1,
    title: "Starter",
    offer: false,
    description: "Get organized and set up simple sales processes lorem ipsum",
    price: "$8,90",
    period: "month",
    button: {
      text: "Try for Free",
      type: "secondary",
    },
    trial: "Free 14-day trial. No credit card required.",
    list: [
      {
        text: "2 team members",
        inactive: false,
      },
      {
        text: "1,000 Contacts & Companies",
        inactive: false,
      },
      {
        text: "5 Campaign Workflows",
        inactive: false,
      },
      {
        text: "10 Nodes Per Campaign",
        inactive: false,
      },
      {
        text: "5 Automation Rules (Triggers)",
        inactive: false,
      },
      {
        text: "3 Plugins/Integrations",
        inactive: false,
      },
      {
        text: "Marketing Automation",
        inactive: true,
      },
      {
        text: "Custom Deal Tracks",
        inactive: true,
      },
      {
        text: "Automated Voicemails",
        inactive: true,
      },
      {
        text: "Post-call Automation",
        inactive: true,
      },
    ],
  },
  {
    id: 2,
    title: "Professional",
    offer: true,
    description:
      "Everything you need to boost performance and revenue lorem ipsum",
    price: "$29,90",
    period: "month",
    button: {
      text: "Try for Free",
      type: "primary",
    },
    trial: "Free 14-day trial. No credit card required.",
    list: [
      {
        text: "10 team members",
        inactive: false,
      },
      {
        text: "2,500 Contacts & Companies",
        inactive: false,
      },
      {
        text: "5 Campaign Workflows",
        inactive: false,
      },
      {
        text: "10 Nodes Per Campaign",
        inactive: false,
      },
      {
        text: "5 Automation Rules (Triggers)",
        inactive: false,
      },
      {
        text: "3 Plugins/Integrations",
        inactive: false,
      },
      {
        text: "Marketing Automation",
        inactive: false,
      },
      {
        text: "Custom Deal Tracks",
        inactive: false,
      },
      {
        text: "Automated Voicemails",
        inactive: true,
      },
      {
        text: "Post-call Automation",
        inactive: true,
      },
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    offer: false,
    description:
      "Customize without limits and access unrivaled support lorem ipsum",
    price: "$39,90",
    period: "month",
    button: {
      text: "Try for Free",
      type: "secondary",
    },
    trial: "Free 14-day trial. No credit card required.",
    list: [
      {
        text: "Unlimited team members",
        inactive: false,
      },
      {
        text: "5,000 Contacts & Companies",
        inactive: false,
      },
      {
        text: "25 Campaign Workflows",
        inactive: false,
      },
      {
        text: "20 Nodes Per Campaign",
        inactive: false,
      },
      {
        text: "15 Automation Rules (Triggers)",
        inactive: false,
      },
      {
        text: "10 Plugins/Integrations",
        inactive: false,
      },
      {
        text: "Marketing Automation	",
        inactive: false,
      },
      {
        text: "Custom Deal Tracks",
        inactive: false,
      },
      {
        text: "Automated Voicemails",
        inactive: false,
      },
      {
        text: "Post-call Automation",
        inactive: false,
      },
    ],
  },
];


export const logos = [
  { src: "/Google.png", alt: "google", width: 97, height: 32 },
  { src: "/Atlassian.png", alt: "atlassian", width: 135, height: 17 },
  { src: "/Canon.png", alt: "canon", width: 95, height: 20 },
  { src: "/Walmart.png", alt: "walmart", width: 129, height: 30 },
  { src: "/Amazon.png", alt: "amazon", width: 95, height: 29 },
];

import article1 from '../../public/article1.png';
import article2 from '../../public/article2.png';
import article3 from '../../public/article3.png';
import article4 from '../../public/article4.png';
import article5 from '../../public/article5.png';
import article6 from '../../public/article6.png';
import article7 from '../../public/article7.png';
import article8 from '../../public/article8.png';
import article9 from '../../public/article9.png';
import article10 from '../../public/article10.png';
import article11 from '../../public/article11.png';

export const articles = [
  {
    id: 1,
    type: 'service',
    title: 'The 2024 State of Marketing & Trends Report: Data from 1400+ Global Marketers',
    date: '05 Sep 2024',
    author: 'Maxwell Iskiev',
    image: article1,
    role: 'Marketing Analyst'
  },
  {
    id: 2,
    type: 'news',
    title: 'Learn from My Mistakes: 7 Digital Course Pitfalls to Skip',
    date: '29 Jun 2024',
    author: 'Joshua Nash',
    image: article2,
    role: 'Content Developer'
  },
  {
    id: 3,
    type: 'sales',
    title: 'How To Do Representation in Marketing the Right Way ',
    date: '20 Mar 2022',
    author: 'Bill Holloway',
    image: article3,
    role: 'Sales Representative'
  },
  {
    id: 4,
    type: 'sales',
    title: 'The Psychology of Short-Form Content: Why We Love...',
    date: '07 Jun 2024',
    author: 'Stephen Henderson',
    image: article4,
    role: 'Sales Strategist'
  },
  {
    id: 5,
    type: 'sales',
    title: 'The Challenger Sale model: How to lead the conversation',
    date: '09 Jan 2024',
    author: 'Joshua Nash',
    image: article5,
    role: 'Sales Consultant'
  },
  {
    id: 6,
    type: 'product',
    title: '3 ways To automate your lead generation process ',
    date: '08 Jul 2024',
    author: 'Leroy Figueroa',
    image: article6,
    role: 'Product Manager'
  },
  {
    id: 7,
    type: 'product',
    title: 'Marketplace Monthly Apps Spotlight: Aug 2023',
    date: '05 Aug 2024',
    author: 'Joshua Nash',
    image: article7,
    role: 'Product Marketing Manager'
  },
  {
    id: 8,
    type: 'marketing',
    title: 'Email marketing best practices: 10 experts share their email tips',
    date: '23 Nov 2023',
    author: 'Joshua Nash',
    image: article8,
    role: 'Email Marketing Specialist'
  },
  {
    id: 9,
    type: 'product',
    title: 'Access Roooby leads features on your mobile',
    date: '11 Aug 2023',
    author: 'Joshua Nash',
    image: article9,
    role: 'Mobile App Developer'
  },
  {
    id: 10,
    type: 'sales',
    title: 'Sales presentations: templates, examples and ideas on how to present like a pro',
    date: '11 Oct 2022',
    author: 'Laura Ryan',
    image: article10,
    role: 'Sales Trainer'
  },
  {
    id: 11,
    type: 'news',
    title: 'How To Deliver a Successful Product Launch',
    date: '30 Jan 2022',
    author: 'Alice Washington',
    image: article11,
    role: 'Product Launch Manager'
  },
  {
    id: 12,
    type: 'service',
    title: 'Sales Funnels: Definition, Process, Stages and Examples',
    date: '01 Dec 2022',
    author: 'Edith Rose',
    image: article9,
    role: 'Sales Funnel Analyst'
  },
  {
    id: 13,
    type: 'sales',
    title: 'What is a sales and how do you build one?',
    date: '29 Mar 2022',
    author: 'Amanda Brooks',
    image: article10,
    role: 'Sales Developer'
  },
  {
    id: 14,
    type: 'service',
    title: '10 real estate cold calling scripts to increase lead',
    date: '27 Dec 2022',
    author: 'Roxie Sandoval',
    image: article11,
    role: 'Sales Script Writer'
  }
]
