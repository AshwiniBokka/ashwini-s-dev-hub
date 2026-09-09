export const GITHUB_URL = "https://github.com/ashwinibokka3";
export const LINKEDIN_URL = "https://www.linkedin.com/in/ashwini-bokka-350551395";
export const RESUME_URL = "[RESUME URL]";
export const EMAIL = "[YOUR EMAIL]";
export const PROJECT_GITHUB_URL = "[PROJECT GITHUB URL]";
export const LIVE_DEMO_URL = "[LIVE DEMO URL]";

export const skillGroups = [
  { title: "Programming", items: ["Java", "Python"] },
  { title: "Web", items: ["HTML", "CSS", "JavaScript"] },
  { title: "Database & Tools", items: ["MySQL", "Git", "GitHub", "VS Code", "Figma"] },
  {
    title: "Areas",
    items: ["Data Structures & Algorithms", "Machine Learning", "IoT", "Software Architecture"],
  },
];

export const currentlyLearning = [
  "Data Structures & Algorithms",
  "Web Development",
  "Machine Learning",
  "Software Architecture",
  "Open Source Development",
];

export type Project = {
  category: string;
  name: string;
  description: string;
  tech: string[];
  features: string[];
  github: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    category: "Software · Architecture",
    name: "Smart Parking System",
    description:
      "A smart parking solution designed to help users find available parking slots, reserve a slot, verify their identity, make payments and receive a digital entry receipt/QR code.",
    tech: ["Software Architecture", "Web Development", "Database", "UML"],
    features: [
      "Slot availability and reservation",
      "Identity verification",
      "Payments and digital QR entry receipt",
    ],
    github: PROJECT_GITHUB_URL,
    demo: LIVE_DEMO_URL,
  },
  {
    category: "IoT · Automation",
    name: "Smart Irrigation System",
    description:
      "An IoT-based smart irrigation system designed to monitor environmental conditions and automate irrigation based on sensor data.",
    tech: ["ESP32", "IoT", "Sensors", "Automation"],
    features: ["Environmental condition monitoring", "Sensor-driven irrigation automation"],
    github: PROJECT_GITHUB_URL,
  },
  {
    category: "Machine Learning",
    name: "House Price Prediction",
    description:
      "A machine learning regression project for predicting house prices from property-related features.",
    tech: ["Python", "Machine Learning", "Pandas", "Scikit-learn"],
    features: ["Feature-based regression modelling", "Data preparation and evaluation"],
    github: PROJECT_GITHUB_URL,
  },
  {
    category: "Machine Learning",
    name: "Fraud Detection",
    description:
      "A machine learning project focused on identifying potentially fraudulent transactions using data-driven classification techniques.",
    tech: ["Python", "Machine Learning"],
    features: ["Transaction classification", "Data-driven fraud pattern analysis"],
    github: PROJECT_GITHUB_URL,
  },
];

export const mergedPRs = ["PR #18705", "PR #18697", "PR #18688"];
