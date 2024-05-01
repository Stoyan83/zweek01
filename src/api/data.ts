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
    tag: 'SALES',
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
