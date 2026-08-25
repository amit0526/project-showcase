const projects = [
  {
    id: 1,
    title: "TechFlow Admin Panel",
    description:
      "A full-stack admin dashboard for managing users, monitoring system status, and configuring application settings with a responsive modern interface.",
    category: "Full Stack",
    status: "New",
    features: [
      "Admin Login",
      "User Management",
      "Add, Edit & Delete Users",
      "User Search & Pagination",
      "Dashboard Analytics",
      "Application Settings",
      "PostgreSQL Database",
      "Email Notifications",
      "Responsive Design",
    ],
    tech: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "PostgreSQL"],
    image: "/images/tech-flow-dashboard.png",
    live: "https://tech-flow-steel.vercel.app/",
    github: "https://github.com/amit0526/TechFlow",
  },

  {
    id: 2,
    title: "Snake Game",
    description:
      "A responsive classic Snake Game built with HTML, CSS, and JavaScript featuring dynamic snake growth, food generation, collision detection, real-time scoring, a game timer, and persistent high scores.",
    category: "JavaScript",
    status: "Live",
    features: [
      "Responsive Design",
      "Snake Growth & Food System",
      "Collision Detection",
      "Score & Timer",
      "Persistent High Score",
      "Keyboard Controls",
      "Mobile Touch & Swipe Controls",
    ],
    tech: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    image: "/images/snake-game.png",
    live: "https://snake-game-weld-eight.vercel.app/",
    github:
      "https://github.com/amit0526/java-script-projects/tree/main/13-snake-game",
  },

  {
    id: 3,
    title: "Developer Portfolio",
    description:
      "A modern developer portfolio showcasing skills, featured projects, responsive layouts, and smooth animations.",
    category: "React",
    status: "Live",
    features: ["Responsive Design", "Dark Mode", "Smooth Animations"],
    tech: ["React", "Tailwind CSS", "JavaScript"],
    image: "/images/amit-anand.png",
    live: "https://amit-anand-dev.vercel.app/",
    github:
      "https://github.com/amit0526/java-script-projects/tree/main/10-protfolio",
  },

  {
    id: 4,
    title: "Anime Pics Generator",
    description:
      "Generate random anime images using a public API with instant loading and a clean responsive interface.",
    category: "API",
    status: "New",
    features: ["API Integration", "Random Anime Images", "Responsive Design"],
    tech: ["HTML", "CSS", "JavaScript", "API"],
    image: "/images/anime-generator.png",
    live: "https://anime-verse-self.vercel.app/",
    github:
      "https://github.com/amit0526/java-script-projects/tree/main/6-Anime-Pics-Generator",
  },

  {
    id: 5,
    title: "Number Ninja",
    description:
      "A fun number guessing game featuring score tracking, hints, and interactive gameplay.",
    category: "JavaScript",
    status: "Completed",
    features: ["Random Number Generation", "Score System", "Responsive Design"],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/gusseing-number.png",
    live: "https://number-ninja-five.vercel.app/",
    github:
      "https://github.com/amit0526/java-script-projects/tree/main/4-GuessTheNumber",
  },

  {
    id: 6,
    title: "Neo Calculator",
    description:
      "A sleek calculator supporting arithmetic operations with a modern responsive interface.",
    category: "JavaScript",
    status: "Completed",
    features: ["Basic Arithmetic", "Responsive Layout", "Clean UI"],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/calculator.png",
    live: "https://neocalcapp.vercel.app/",
    github:
      "https://github.com/amit0526/java-script-projects/tree/main/7-Calculator",
  },

  {
    id: 7,
    title: "Coffee Hub",
    description:
      "A modern coffee shop landing page with responsive layouts and elegant user experience.",
    category: "Frontend",
    status: "Completed",
    features: ["Responsive Design", "Landing Page", "Smooth Layout"],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/coffe-hub.png",
    live: "https://coffee-hub-psi.vercel.app/",
    github:
      "https://github.com/amit0526/java-script-projects/tree/main/12-coffee-hub",
  },

  {
    id: 8,
    title: "KeyCode Explorer",
    description:
      "Display keyboard key codes and event details instantly with a clean interactive interface.",
    category: "JavaScript",
    status: "Completed",
    features: ["Keyboard Events", "Key Code Display", "Responsive Design"],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/key-code.png",
    live: "https://keycode-explorer.vercel.app/",
    github:
      "https://github.com/amit0526/java-script-projects/tree/main/5-keyboard",
  },

  {
    id: 9,
    title: "BMI Calculator",
    description:
      "Calculate Body Mass Index instantly with health status results and responsive design.",
    category: "JavaScript",
    status: "Completed",
    features: ["BMI Calculation", "Instant Results", "Responsive Design"],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/bmi-calculator.png",
    live: "https://bmicalculatorapp-eight.vercel.app/",
    github:
      "https://github.com/amit0526/java-script-projects/tree/main/2-BMICalculator",
  },

  {
    id: 10,
    title: "Digital Clock",
    description:
      "A live digital clock displaying real-time hours, minutes, and seconds with a minimal UI.",
    category: "JavaScript",
    status: "Completed",
    features: ["Live Time", "Real-time Updates", "Responsive Design"],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/digital-clock.png",
    live: "https://digital-time-blue.vercel.app/",
    github:
      "https://github.com/amit0526/java-script-projects/tree/main/8-Digital-Clock",
  },

  {
    id: 11,
    title: "Snap Slider",
    description:
      "An interactive image slider featuring smooth animations and responsive navigation controls.",
    category: "JavaScript",
    status: "Completed",
    features: ["Image Slider", "Smooth Animation", "Responsive Design"],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/image-slider.png",
    live: "https://snap-slider.vercel.app/",
    github:
      "https://github.com/amit0526/java-script-projects/tree/main/9-Image-Slider",
  },

  {
    id: 12,
    title: "Theme Switcher",
    description:
      "Switch between multiple color themes instantly with persistent user preferences.",
    category: "JavaScript",
    status: "Completed",
    features: ["Multiple Themes", "Theme Persistence", "Responsive Design"],
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/images/color-switcher.png",
    live: "https://theme-switcher-two-rust.vercel.app/",
    github:
      "https://github.com/amit0526/java-script-projects/tree/main/1-Color-Switcher",
  },
];

export default projects;
