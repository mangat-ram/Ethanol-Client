
type FeatureArrType = {
    heading:string,
    content:string,
    class:string
  }

export const FeatureArr:Array<FeatureArrType> = [
  {
    heading:"Streamline team communication",
    content: "Ethanol offers a centralized platform for seamless communication, enabling team members to collaborate effectively and stay connected regardless of their location.",
    class:"bg-[#ffd100] bg-opacity-30"
  },
  {
    heading:"Task management made easy",
    content:"With Ethanol, assigning tasks, setting deadlines, and tracking progress becomes effortless, ensuring that everyone stays on track and productive.",
    class:"bg-[#99d6ea] bg-opacity-30"
  },
  {
    heading:"Enhanced project organization",
    content:"Ethanol provides intuitive project organization features, allowing teams to categorize tasks, prioritize work, and maintain clarity on project timelines and goals.",
    class:"bg-[#c86bfa] bg-opacity-30"
  },
  {
    heading:"Real-time collaboration",
    content:"Enjoy real-time collaboration on documents, spreadsheets, and presentations within the Ethanol platform, promoting teamwork and boosting productivity.",
    class:"bg-[#c9a227] bg-opacity-30"
  },
  {
    heading:"Secure data storage",
    content:"Ethanol prioritizes data security, offering robust encryption and secure storage to safeguard sensitive information and ensure compliance with privacy regulations.",
    class:"bg-[#d6d6d6] bg-opacity-30"
  },
  {
    heading:"Customizable workflows",
    content:"Tailor Ethanol to suit your team's unique workflows and preferences with customizable features and integrations, maximizing efficiency and productivity.",
    class:"bg-[#eec7fc] bg-opacity-30"
  },
  {
    heading:"Seamless integration",
    content:"ntegrate Ethanol with your existing tools and software, streamlining workflows and eliminating the need for manual data entry and task duplication.",
    class:"bg-[#cfe57d] bg-opacity-30"
  }
]

type TestimonialsArrType = {
  avatar: any;
  name: string;
  role: string;
  companyName: string;
  review:string;
  bg:string;
}
import image from "./pro1.jpg"

export const TestimonialsArr:Array<TestimonialsArrType> = [
  {
    avatar:image,
    name:"Fraser McGurk",
    role:"CEO",
    companyName:"ZooPe Inc.",
    review:"Ethanol is very helpful tool for our team it has given us more clarity about how we will start our project how to proceed and how everyone is going to do their part and track progress of every department and tasks assigned to each person.",
    bg: "bg-[#a2d6f9]/40"
  },
  {
    avatar:image,
    name:"David Lynch",
    role:"Engineering Manager",
    companyName:"Watters LLC.",
    review:"Ethanol has truly revolutionized our project management approach. It's provided us with a clear roadmap, ensuring everyone understands their roles and responsibilities. Tracking progress has never been easier, thanks to its intuitive features.",
    bg: "bg-[#ff65b3]/40"
  },
  {
    avatar:image,
    name:"Timothy Chalamet",
    role:"CTO",
    companyName:"Pfayzer Group.",
    review:"Using Ethanol has been a game-changer for our team. It's streamlined our project planning process, allowing us to allocate tasks efficiently and monitor their progress seamlessly. It's become an indispensable tool in our toolkit.",
    bg: "bg-[#cfe57d]/40"
  },
  {
    avatar:image,
    name:"Mangat Leelaram",
    role:"Founder and CXO",
    companyName:"BenzeneLabs & Co.",
    review:"Ethanol has exceeded our expectations in project management. It's empowered our team to collaborate effectively, clarifying roles and responsibilities from the get-go. With its robust tracking capabilities, we're able to stay on top of tasks and milestones effortlessly.",
    bg: "bg-[#02cecb]/40"
  },
  {
    avatar:image,
    name:"Ashton Smurf",
    role:"Founder",
    companyName:"PayRent.com",
    review:"We can't imagine managing our project without Ethanol now. It's been instrumental in providing us with a structured approach, ensuring everyone is aligned with the project objectives. The ability to track progress in real-time has significantly boosted our productivity.",
    bg: "bg-[#4aa77c]/40"
  },
  {
    avatar:image,
    name:"Geoff Siefert",
    role:"Tech Lead",
    companyName:"Croff Solutions",
    review:"Ethanol has simplified our project coordination immensely. With its user-friendly interface and comprehensive features, we've gained a newfound level of clarity in our workflows. It's become an essential companion for keeping our team organized and on track.",
    bg: "bg-[#eefc57]/40"
  }
]


export const pricingCardsArr = [
  {
    planType: 'Free Plan',
    price: '0',
    description: 'Limited block trials  for teams',
    highlightFeature: 'Best to start',
    freatures: [
      '10 projects per users',
      'limited access to ethanol progress area ',
      '30 day page history',
      'Invite 2 guests',
    ],
  },
  {
    planType: 'Pro Plan',
    price: '12.99',
    description: 'Billed annually. $17 billed monthly',
    highlightFeature: 'Everything in free +',
    freatures: [
      'Unlimited projects for users',
      'Unlimited customizations uploads',
      '1 year day page history',
      'Invite 10 guests',
    ],
  },
  {
    planType: 'Firm Plan',
    price: '24.99',
    description: 'Billed annually. $30 billed monthly',
    highlightFeature: 'Everything in free +',
    freatures: [
      'Unlimited projects for teams',
      'Free Access to all ethanol APIs on the go',
      '2 years day page history',
      'Invite unlimited guests',
    ],
  },
];

export const PRICING_PLANS = { proplan: 'Pro Plan', freeplan: 'Free Plan' ,entPlan:'Firm Plan'};