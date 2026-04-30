export type Bucket = "pro" | "fun" | "archive" | "vault";
export type Category =
  | "career"
  | "assignments"
  | "explainers"
  | "visualizations"
  | "essays"
  | "research"
  | "fun";

export type Project = {
  id: string;
  title: string;
  blurb: string;
  href: string;
  bucket: Bucket;
  category?: Category;
  tags: string[];
  thumbnail?: string;
  external?: boolean;
};

export const projects: Project[] = [
  // Pro — career-relevant work
  {
    id: "leafshift",
    title: "Leafshift",
    blurb:
      "Co-founded AgriTech venture. We build AI models that optimize crop yield across fields — sensing, forecasting, in-field decisions. Open to research collaborations and company questions.",
    href: "mailto:leafshiftsolutions@gmail.com",
    bucket: "pro",
    category: "career",
    tags: ["Co-founder", "AgriTech", "AI", "Collaboration"],
  },

  // Fun — student, hobby, creative, university work
  {
    id: "agriai-dros",
    title: "AgriAI · DROS prototype",
    blurb:
      "Early prototype tying crop-sensing to a decision system. Hobby-stage — kept here as a thinking-out-loud page.",
    href: "/AgriAI-DROS/dros.html",
    bucket: "fun",
    category: "research",
    tags: ["AI", "Agriculture", "Prototype"],
    thumbnail: "/AgriAI-DROS/Crops-Challenges.jpg",
    external: true,
  },
  {
    id: "soil=market-farm-cluster-research",
    title: "DROS — LeafShift Market-Sizing Farm Clustering Soil Moisture Sensor Research",
    blurb:
      "Hobby research draft: document answers three core operational questions across various agricultural segments in Germany and the GCC: exactly how many sensors are needed per hectare, what the total installed hardware cost per hectare will be, and what percentage of farms will need brand new equipment (greenfield) versus just a software integration. Shared to trade notes with fellow students.",
    href: "/AgriAI-DROS-Paper-Research-Possib-Usefull/soil_moisture_research.html",
    bucket: "fun",
    category: "research",
    tags: ["ML", "Agriculture", "Soil Moisture", "Research"],
    thumbnail: "/AgriAI-DROS-Paper-Research-Possib-Usefull/soil-sensor.webp",
    external: true,
  },
  {
    id: "dros-research",
    title: "DROS — Resilience & Optimization Research",
    blurb:
    "Hobby research draft: sparse MoE + selective state-spaces + bio-inspired control. Shared to trade notes with fellow students.",
    href: "/AgriAI-DROS-Paper-Research-Possib-Usefull/research.html",
    bucket: "fun",
    category: "research",
    tags: ["ML", "State-Space", "MoE", "Research"],
    thumbnail: "/AgriAI-DROS-Paper-Research-Possib-Usefull/aerialAI.jpg",
    external: true,
  },
  {
    id: "app-security-a2",
    title: "Application Security — C Exploits A2",
    blurb:
      "University assignment: buffer overflows, underflows, format-string attacks, defensive strategies.",
    href: "/Application Security - C Exploits Assignment 2A/assignment/1.html",
    bucket: "fun",
    category: "assignments",
    tags: ["Security", "C", "Exploits"],
    thumbnail: "/Application Security - C Exploits Assignment 2A/SecurityA2.png",
    external: true,
  },
  {
    id: "app-ML-a3",
    title: "Machine Learning A3 Questions",
    blurb:
    "University assignment: clustering.",
    href: "/ML_A3_Leiden/1.html",
    bucket: "fun",
    category: "assignments",
    tags: ["Machine Learning", "Clustering", "ML"],
    thumbnail: "/ML_A3_Leiden/clustering.jpg",
    external: true,
  },
  {
    id: "calc2-2nd-deriv",
    title: "Calc II — 2nd Derivative Test",
    blurb:
      "Interactive visualiser for the multivariable 2nd-derivative test. Hessian, discriminant, critical-point classification.",
    href: "/Calc2-PartialDeriv-SecondDerivTest/Calculus2.html",
    bucket: "fun",
    category: "visualizations",
    tags: ["Math", "Calculus"],
    external: true,
  },
  {
    id: "mst-visual",
    title: "Minimum Spanning Tree Visualiser",
    blurb:
      "Step-through of Prim's and Kruskal's algorithms on an interactive graph.",
    href: "/Min-Span-Tree-Visual/mst_visualizer.html",
    bucket: "fun",
    category: "visualizations",
    tags: ["DSA", "Graph"],
    external: true,
  },
  {
    id: "least-squares",
    title: "Least-Squares Projection & Rejection",
    blurb:
      "Linear algebra visualiser for projection / rejection decomposition and least-squares fits.",
    href: "/visual 1/main.html",
    bucket: "fun",
    category: "visualizations",
    tags: ["LinAlg"],
    external: true,
  },
  {
    id: "dst-aow",
    title: "AOW-Leeftijd — Policy as a Dynamical System",
    blurb:
      "Essay modelling the Dutch state-pension age as a dynamical system. Feedback loops, equilibria, policy levers.",
    href: "/DST-AOW-Leeftijd/aow_dynamical_system_1_file_html_demo.html",
    bucket: "fun",
    category: "essays",
    tags: ["Systems", "Politics", "Essay"],
    external: true,
  },

  // Archive — older coursework
  {
    id: "tfa-u",
    title: "TFA+U Explain",
    blurb: "Older coursework — Turing / formal-automata walkthrough.",
    href: "/TFA U Explain/TFA_U.html",
    bucket: "archive",
    tags: ["CS", "Coursework"],
    external: true,
  },
  {
    id: "itp-mock",
    title: "ITP Mock Exam",
    blurb: "Older coursework — digital mock-exam questions set.",
    href: "/ITP-Test/Digital test · Mock exam q2.html",
    bucket: "archive",
    tags: ["Coursework"],
    external: true,
  },

  // Vault — secret
  {
    id: "electrolight",
    title: "Electrolight Sport",
    blurb: "A small music / vibes site. Turn it up.",
    href: "/electrolight_sport/electrolight_sport.html",
    bucket: "vault",
    tags: ["Music", "Vibes"],
    external: true,
  },
  {
    id: "stopspongeclock",
    title: "Stop Sponge Clock",
    blurb: "Deeply important work.",
    href: "/stopspongeclock/spongeclock.html",
    bucket: "vault",
    tags: ["Nonsense"],
    external: true,
  },
  {
    id: "sisi-incident",
    title: "The SiSi Incident",
    blurb: "Cat. Documented.",
    href: "/sisi_incident/sisi.html",
    bucket: "vault",
    tags: ["SiSi"],
    external: true,
  },
  {
    id: "insane-sisi2",
    title: "Insane SiSi II",
    blurb: "Further developments.",
    href: "/insane_sisi2/sisi2.html",
    bucket: "vault",
    tags: ["SiSi"],
    external: true,
  },
  {
    id: "sisi-v3",
    title: "SiSi Update v3",
    blurb: "Kiwi era.",
    href: "/sisi_update_v3/sisi3.html",
    bucket: "vault",
    tags: ["SiSi"],
    external: true,
  },
  {
    id: "best-edits",
    title: "Best Edits",
    blurb: "CapCut gallery — do not judge.",
    href: "/best_edits/gallery.html",
    bucket: "vault",
    tags: ["Video"],
    external: true,
  },
  {
    id: "legacy-flat",
    title: "Legacy flat index",
    blurb: "The original tile page — kept exactly as it was.",
    href: "/legacy/",
    bucket: "vault",
    tags: ["Archive"],
    external: true,
  },
];

export const proProjects = projects.filter((p) => p.bucket === "pro");
export const funProjects = projects.filter((p) => p.bucket === "fun");
export const archiveProjects = projects.filter((p) => p.bucket === "archive");
export const vaultProjects = projects.filter((p) => p.bucket === "vault");

export const FUN_CATEGORIES: { key: Category; label: string; description: string }[] = [
  { key: "assignments", label: "Assignments", description: "University coursework write-ups." },
  { key: "explainers", label: "Explainers", description: "Things I wrote out to understand." },
  { key: "visualizations", label: "Visualizations", description: "Math + CS I turned into interactive tools." },
  { key: "essays", label: "Essays", description: "Longer-form thinking — systems, policy, books." },
  { key: "research", label: "Hobby research", description: "Working drafts I share with other students." },
  { key: "fun", label: "Fun", description: "Art, experiments, misc." },
];
