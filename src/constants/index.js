const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const projects = [
  {
    id: 1,
    image: '/images/delivr.png',
    alt: 'Delivr',
    title: 'Delivr — Last-Mile Delivery Operations Dashboard',
    description: 'A full-stack delivery ops dashboard for Nigerian logistics businesses, featuring live maps, CSV export, pagination, and keyboard shortcuts.',
    tag: 'Full-Stack',
    featured: true,
    bg: '#e8f0fd',
    liveLink: 'https://delivr-fawn.vercel.app/',
    githubLink: 'https://github.com/ibrahimnuhu0/delivr',
  },
  {
    id: 2,
    image: '/images/project1.png',
    alt: 'Smzee Kiddies',
    title: 'Shopping made easy with Smzee Kiddies',
    description: 'An e-commerce website built with HTML, CSS and JavaScript for Smzee.',
    tag: 'E-Commerce',
    bg: '#e8f4fd',
    liveLink: 'https://ibrahimnuhu0.github.io/SM_Zee_kiddies/',
    githubLink: 'https://github.com/ibrahimnuhu0/SM_Zee_kiddies',
  },
  {
    id: 3,
    image: '/images/project2.png',
    alt: 'Little Lemon',
    title: 'Little Lemon Restaurant',
    description: 'Restaurant website with a table booking system.',
    bg: '#ffefdb',
    liveLink: 'hhttps://little-lemonapp.netlify.app/',
    githubLink: 'https://github.com/ibrahimnuhu0/little-lemon',
  },
  {
    id: 4,
    image: '/images/project3.png',
    alt: 'Paradise Nursery',
    title: 'Paradise Nursery',
    description: 'A plant shop and care guide built with React.',
    bg: '#ffe7eb',
    liveLink: 'https://ibrahimnuhu0.github.io/e-plantShopping/',
    githubLink: 'https://github.com/ibrahimnuhu0/e-plantShopping',
  },
]

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 15, suffix: "+", label: "Satisfied Clients" },
  { value: 20, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Client Retention Rate" },
];



const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Detail-Oriented",
    desc: "Building pixel-perfect UIs that closely match design specs and deliver great user experiences.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Collaborative",
    desc: "Working closely with designers and team leads to ship features that meet product goals.",
  },
  {
    imgPath: "/images/time.png",
    title: "Responsive by Default",
    desc: "Crafting interfaces that look and feel great on every screen — mobile, tablet, and desktop.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Tailwind CSS",
    imgPath: "/images/logos/tailwind.png",
  },
  {
    name: "TypeScript",
    imgPath: "/images/logos/typescript.png",
  },
  {
    name: "Node.js / NestJS",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Git & Version Control",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb", // swap for TS model if available
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Git Workflow",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Nuhu played a key role in building out our multi-dashboard frontend. His attention to responsive design and clean component architecture made a real difference to the product.",
    imgPath: "/images/logo1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer — OnadaInnovative",
    date: "2025 - Present",
    responsibilities: [
      "Built and maintained three separate dashboards (admin, tutor, student) using Next.js and Tailwind CSS.",
      "Led the responsive design overhaul, converting sidebars to mobile drawers and updating navbar components across all dashboards.",
      "Integrated REST APIs using a shared apiClient, including user profile fetching and updates.",
    ],
  },
  {
    review:
      "Nuhu consistently delivers clean, readable code and communicates well across the team. His ability to pick up new patterns quickly makes him a reliable contributor.",
    imgPath: "/images/logo1.png",
    logoPath: null,
    title: "Freelance Fullstack Developer",
    date: "2022 - present",
    responsibilities: [
      "Developed responsive web interfaces for small business clients using React and CSS.",
      "Collaborated with clients to translate design mockups into functional, accessible UIs.",
      "Maintained codebases and implemented iterative improvements based on user feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.webp",
  },
  {
    name: "logo2",
    imgPath: "/images/logo1.webp",
  },
];

const testimonials = [
  {
    name: "George Cipher",
    mentions: "@Georgeck",
    review:
      "Nuhu is a dependable developer who takes feedback seriously and grows with every sprint. His work on the responsive dashboard overhaul was thorough and well-executed.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Nuhu was a great experience. He's thorough, communicates clearly, and always delivers on time. His frontend work is clean and easy to build on.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "Nuhu built out our interface with incredible attention to detail. Every component was responsive and matched our designs closely. Would absolutely work with him again.",
    imgPath: "/images/client2.png",
  },
];

const socialImgs = [
  {
    name: "fb",
    url: "https://web.facebook.com/ibrahim.nuhu.906/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://x.com/ibrahimnuhu0",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/ibrahim-nuhu-963b0512b/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
  projects
};