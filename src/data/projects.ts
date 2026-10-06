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
    slug: "clarix",
    number: "01",
    title: "Clarix",
    category: "AI × EDUCATION",
    year: "2026",
    status: "BUILT",
    shortDescription:
      "A full-stack AI study platform that turns user-uploaded study material into grounded Q&A, adaptive quizzes, and personalized revision workflows.",
    description:
      "Clarix is a full-stack EdTech platform built around an AI tutor that helps students interact with their study material, test their understanding, and identify areas that need more attention.",
    role: "Founder / Solo Engineer",
    stack: [
      "Next.js",
      "FastAPI",
      "PostgreSQL",
      "ChromaDB",
      "RAG",
      "LLMs",
      "Redis",
      "Docker",
      "GitHub Actions",
    ],
    focus: [
      "RAG",
      "AI Tutoring",
      "Adaptive Learning",
      "LLM Applications",
      "Product Development",
    ],
    problem:
      "Study material is often static. Students can read their PDFs, but getting contextual explanations, testing their understanding, and identifying weaknesses usually requires switching between different tools.",
    solution:
      "Clarix combines document-grounded AI assistance with adaptive learning workflows. Users can interact with uploaded study material through an AI tutor, while adaptive quizzes identify weaknesses and support a personalized revision process.",
    architecture:
      "Clarix uses a Next.js frontend with a FastAPI backend and PostgreSQL for application data. Its AI layer uses a RAG pipeline for document-grounded Q&A and an adaptive quiz engine for structured weakness detection. The application also includes authentication, caching, email verification, an admin panel, CI/CD, Docker-based development, and automated testing.",
    learnings: [
      "Building an AI product requires much more than connecting an LLM to a frontend.",
      "Retrieval quality and grounding are critical when AI responses depend on user-provided documents.",
      "Adaptive learning requires turning user interactions into useful signals rather than simply generating more content.",
      "Production concerns such as authentication, caching, testing, deployment, and security become important very quickly in a real product.",
    ],
    links: {},
  },

  {
    slug: "agentic-chatbot",
    number: "02",
    title: "Agentic ChatBot",
    category: "AGENTIC AI",
    year: "2026",
    status: "BUILT",
    shortDescription:
      "An agentic AI system built around tool use, memory, dynamic function calling, and plan-execute workflows.",
    description:
      "Agentic ChatBot was an exploration into building AI systems that can do more than generate a single response by reasoning through multi-step tasks and dynamically selecting tools.",
    role: "Developer / Builder",
    stack: [
      "Python",
      "LangChain",
      "LLMs",
      "Tool Calling",
      "Memory",
      "Agentic Workflows",
    ],
    focus: [
      "Agentic AI",
      "Tool Use",
      "Memory",
      "Function Calling",
      "Task Decomposition",
    ],
    problem:
      "A conventional chatbot generally responds to one prompt at a time. More complex tasks require an AI system to break the problem down, decide what actions are needed, use external tools, and maintain relevant context.",
    solution:
      "The project explored an agentic architecture using tool use, memory modules, dynamic function calling, and a plan-execute workflow to support multi-step task execution.",
    architecture:
      "The system uses a LangChain-based agentic workflow with memory and tool integrations. A plan-execute pattern allows tasks to be decomposed into multiple steps, while dynamic function calling enables the system to route requests to the appropriate tools at runtime.",
    learnings: [
      "Agentic systems introduce a different set of engineering challenges from conventional chat applications.",
      "Tool selection and routing are important parts of making an agent useful.",
      "Memory needs to be designed around what information is actually useful to future steps.",
      "Breaking complex tasks into explicit steps can make agent behaviour easier to reason about.",
    ],
    links: {},
  },

  {
    slug: "ai-health-prediction",
    number: "03",
    title: "AI Health Prediction System",
    category: "AI RESEARCH",
    year: "2025",
    status: "PATENT FILED",
    shortDescription:
      "A neural-network and transformer-based system combining classification with a conversational model for personalized health recommendations.",
    description:
      "This project explored the combination of machine learning classification and a conversational AI system to provide personalized health recommendations.",
    role: "Co-Inventor",
    stack: [
      "Neural Networks",
      "Transformers",
      "ANN",
      "T5-Small",
      "Machine Learning",
    ],
    focus: [
      "Machine Learning",
      "Transformers",
      "Conversational AI",
      "Personalization",
      "Applied AI Research",
    ],
    problem:
      "Traditional prediction systems can identify classifications or risks without providing a conversational interface for users to understand and interact with the resulting recommendations.",
    solution:
      "The proposed system combines an ANN-based classification module with a fine-tuned T5-Small chatbot to support personalized health recommendations through a conversational interface.",
    architecture:
      "The system combines a neural-network classification component with a fine-tuned transformer-based conversational component, connecting prediction results with personalized natural-language recommendations.",
    learnings: [
      "Combining predictive models with conversational interfaces creates a different product layer around traditional machine learning.",
      "Model architecture needs to be considered alongside how users will interact with the system.",
      "Applied AI systems require careful consideration of both technical performance and the context in which their outputs are used.",
    ],
    links: {},
  },
];