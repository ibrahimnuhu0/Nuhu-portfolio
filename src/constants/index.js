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
    imgPath: "/images/exp1.png",
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
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Freelance Frontend Developer",
    date: "2022 - 2023",
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
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
];

const testimonials = [
  {
    name: "Steven Ogunjobi",
    mentions: "@stephenogunjobi",
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
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
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
};