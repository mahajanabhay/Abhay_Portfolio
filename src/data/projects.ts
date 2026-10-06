export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  year: string;
  status: string;
  shortDescription: string;
  description: string;
  role: string;
  stack: string[];
  focus: string[];
  problem: string;
  solution: string;
  architecture: string;
  learnings: string[];
  links?: {
    live?: string;
    github?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "gradly",
    number: "01",
    title: "Gradly",
    category: "AI × EDUCATION",
    year: "2026",
    status: "BUILDING",

    shortDescription:
      "An AI-powered platform I'm building to help students navigate learning, opportunities, and their next steps.",

    description:
      "Gradly is an early-stage product built around the idea of making the student journey simpler by bringing useful tools, guidance, opportunities, and AI-powered assistance into one place.",

    role: "Founder / Builder",

    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "AI",
    ],

    focus: [
      "AI Products",
      "Student Experience",
      "Product Design",
      "Agentic Workflows",
    ],

    problem:
      "Students often have to jump between disconnected platforms for opportunities, guidance, resources, and career-related decisions.",

    solution:
      "Gradly explores a unified experience where AI can understand a student's context and help them discover, organize, and act on relevant opportunities and information.",

    architecture:
      "The platform is being designed around a modern web application architecture with a Next.js frontend, backend services, PostgreSQL-based data storage, authentication, and AI-powered workflows.",

    learnings: [
      "Building a product is very different from building a feature.",
      "The problem needs to be validated before the solution becomes too complicated.",
      "Good UX matters just as much as the underlying AI.",
    ],

    links: {},
  },

  {
    slug: "scholarlyai",
    number: "02",
    title: "ScholarlyAI",
    category: "AI × LEARNING",
    year: "2026",
    status: "BUILT",

    shortDescription:
      "An AI-powered study assistant built around document understanding, RAG, adaptive learning, and personalized study workflows.",

    description:
      "ScholarlyAI explores how Generative AI can turn static study material into interactive learning experiences.",

    role: "Developer / Builder",

    stack: [
      "Next.js",
      "React",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "RAG",
      "LLMs",
    ],

    focus: [
      "RAG",
      "Document Grounding",
      "Adaptive Learning",
      "LLM Applications",
    ],

    problem:
      "Traditional study material is often static. Students can read documents, but getting explanations, questions, summaries, and personalized assistance usually requires switching between different tools.",

    solution:
      "ScholarlyAI combines document-grounded AI assistance with learning workflows such as quizzes and personalized interactions.",

    architecture:
      "The application uses a web frontend backed by API services, document processing, embedding-based retrieval, and an LLM layer for generating grounded responses.",

    learnings: [
      "Retrieval quality is critical to the quality of a RAG application.",
      "A useful AI product needs more than just an LLM API call.",
      "Authentication, persistence, deployment, and error handling become important very quickly in real applications.",
    ],

    links: {
      github: "https://github.com/mahajanabhay/scholarlyai",
    },
  },
];