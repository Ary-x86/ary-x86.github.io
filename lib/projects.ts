export type Bucket = "pro" | "uni" | "essay" | "research" | "archive" | "vault";

export type Project = {
  id: string;
  title: string;
  blurb: string;
  href: string;
  bucket: Bucket;
  tags: string[];
  thumbnail?: string;
  external?: boolean;
};

export const projects: Project[] = [
  {
    id: "agriai-dros",
    title: "AgriAI + DROS",
    blurb:
      "Leafshift's flagship — precision-agriculture system paired with DROS (Digital Resilience and Optimization System) for in-field decision support.",
    href: "/AgriAI-DROS/dros.html",
    bucket: "pro",
    tags: ["Leafshift", "AI", "Agriculture", "Systems"],
    thumbnail: "/AgriAI-DROS/Crops-Challenges.jpg",
  },
  {
    id: "dros-research",
    title: "DROS Research Paper",
    blurb:
      "Architecture synthesis: Sparse MoE + selective state-space models + bio-inspired control. Core research backing the DROS system.",
    href: "/AgriAI-DROS-Paper-Research-Possib-Usefull/research.html",
    bucket: "pro",
    tags: ["Research", "ML", "State-Space", "MoE"],
    thumbnail: "/AgriAI-DROS-Paper-Research-Possib-Usefull/aerialAI.jpg",
  },
  {
    id: "app-security-a2",
    title: "Application Security — C Exploits A2",
    blurb:
      "Full assignment write-up covering buffer overflows, underflows, format-string attacks, and defensive strategies.",
    href: "/Application Security - C Exploits Assignment 2A/assignment/1.html",
    bucket: "pro",
    tags: ["Security", "C", "Exploits", "Coursework"],
    thumbnail: "/Application Security - C Exploits Assignment 2A/SecurityA2.png",
  },
  {
    id: "calc2-2nd-deriv",
    title: "Calc II — 2nd Derivative Test (Partial Derivatives)",
    blurb:
      "Interactive visualiser for the multivariable 2nd-derivative test. Hessian, discriminant, critical-point classification.",
    href: "/Calc2-PartialDeriv-SecondDerivTest/Calculus2.html",
    bucket: "uni",
    tags: ["Math", "Calculus", "Visualizer"],
  },
  {
    id: "mst-visual",
    title: "Minimum Spanning Tree Visualiser",
    blurb:
      "Step-through of Prim's and Kruskal's algorithms on an interactive graph.",
    href: "/Min-Span-Tree-Visual/mst_visualizer.html",
    bucket: "uni",
    tags: ["DSA", "Graph", "Visualizer"],
  },
  {
    id: "least-squares",
    title: "Least-Squares Projection & Rejection",
    blurb:
      "Linear algebra visualiser for projection / rejection decomposition and least-squares fits.",
    href: "/visual 1/main.html",
    bucket: "uni",
    tags: ["LinAlg", "Visualizer"],
  },
  {
    id: "dst-aow",
    title: "DST × AOW-Leeftijd — Systems Thinking × Politics",
    blurb:
      "Essay modelling the Dutch state-pension age as a dynamical system — feedback loops, equilibria, policy levers.",
    href: "/DST-AOW-Leeftijd/aow_dynamical_system_1_file_html_demo.html",
    bucket: "essay",
    tags: ["Systems", "Politics", "Essay"],
  },
  {
    id: "tfa-u",
    title: "TFA+U Explain",
    blurb: "Older coursework — Turing / formal-automata walkthrough.",
    href: "/TFA U Explain/TFA_U.html",
    bucket: "archive",
    tags: ["CS", "Coursework"],
  },
  {
    id: "itp-mock",
    title: "ITP Mock Exam",
    blurb: "Older coursework — digital mock-exam questions set.",
    href: "/ITP-Test/Digital test · Mock exam q2.html",
    bucket: "archive",
    tags: ["Coursework"],
  },
];

export const proProjects = projects.filter((p) => p.bucket === "pro");
export const uniProjects = projects.filter((p) => p.bucket === "uni");
export const essayProjects = projects.filter((p) => p.bucket === "essay");
export const researchProjects = projects.filter((p) => p.bucket === "research");
export const archiveProjects = projects.filter((p) => p.bucket === "archive");
