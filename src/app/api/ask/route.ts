import { NextResponse } from "next/server";
import { knowledge } from "@/data/knowledge";

function normalize(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .trim();
}

function includesAny(text: string, words: string[]) {
  return words.some((word) => text.includes(word));
}

function getAnswer(question: string) {
  const q = normalize(question);

  /*
   * ABOUT
   */
  if (
    includesAny(q, [
      "who is abhay",
      "who is abhay mahajan",
      "about abhay",
      "tell me about abhay",
    ])
  ) {
    return `${knowledge.about.name} is an ${knowledge.about.role}. He is based in ${knowledge.about.location} and graduated in 2026 with a B.Tech in Artificial Intelligence and Machine Learning from Symbiosis Institute of Technology, Pune.`;
  }

  /*
   * EDUCATION
   */
  if (
    includesAny(q, [
      "education",
      "degree",
      "college",
      "university",
      "study",
      "studied",
    ])
  ) {
    return knowledge.about.education;
  }

  /*
   * COROVER
   */
  if (
    includesAny(q, [
      "corover",
      "internship",
      "intern",
      "work experience",
      "experience",
    ])
  ) {
    const experience = knowledge.experience[0];

    return `At ${experience.company}, Abhay worked as a ${experience.role} during ${experience.period}. ${experience.description}`;
  }

  /*
   * GRADLY
   */
  if (
    includesAny(q, [
      "gradly",
      "student startup",
      "student platform",
      "student project",
    ])
  ) {
    const project = knowledge.projects.find(
      (project) => project.name === "Gradly"
    );

    return `${project?.name} is ${project?.description} It is currently ${project?.status.toLowerCase()}.`;
  }

  /*
   * SCHOLARLYAI
   */
  if (
    includesAny(q, [
      "scholarlyai",
      "scholarly",
      "study assistant",
      "study app",
      "study project",
      "rag project",
    ])
  ) {
    const project = knowledge.projects.find(
      (project) => project.name === "ScholarlyAI"
    );

    return `${project?.name} is ${project?.description} Technologies include ${project?.technologies.join(
      ", "
    )}.`;
  }

  /*
   * TECHNOLOGIES
   */
  if (
    includesAny(q, [
      "technology",
      "technologies",
      "tech stack",
      "tech",
      "skills",
      "stack",
      "programming",
      "framework",
    ])
  ) {
    const technologies = new Set<string>();

    knowledge.projects.forEach((project) => {
      project.technologies.forEach((technology) => {
        technologies.add(technology);
      });
    });

    return `Some technologies Abhay has worked with include ${Array.from(
      technologies
    ).join(", ")}. His work also includes Generative AI, RAG, LLM applications, and agentic workflows.`;
  }

  /*
   * PHOTOGRAPHY
   */
  if (
    includesAny(q, [
      "photography",
      "photographer",
      "photos",
      "photographs",
      "instagram",
      "camera",
    ])
  ) {
    return `${knowledge.photography.description} His photography work is shared through ${knowledge.photography.handle}.`;
  }

  /*
   * AI
   */
  if (
    includesAny(q, [
      "ai",
      "artificial intelligence",
      "generative ai",
      "genai",
      "llm",
      "rag",
      "agent",
    ])
  ) {
    return "Abhay works across AI/ML and Generative AI, with experience in RAG, LLM applications, conversational AI, and agentic workflows. ScholarlyAI is one of his projects in this space, while his GenAI internship at CoRover.ai gave him practical experience building AI applications.";
  }

  /*
   * PROJECTS
   */
  if (
    includesAny(q, [
      "project",
      "projects",
      "built",
      "build",
      "created",
      "made",
    ])
  ) {
    return `Abhay's featured projects include ${knowledge.projects
      .map((project) => project.name)
      .join(
        " and "
      )}. He also has experience building Generative AI and web applications.`;
  }

  /*
   * FALLBACK
   */
  return "I know a few things about Abhay's work. Try asking about his projects, GenAI experience, education, technologies, Gradly, ScholarlyAI, CoRover.ai, or photography.";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const question = body?.question;

    if (question.length > 300) {
      return NextResponse.json(
        {
          error: "Question is too long.",
        },
        {
          status: 400,
        }
      );
    }

    if (
      typeof question !== "string" ||
      !question.trim()
    ) {
      return NextResponse.json(
        {
          error: "Question is required.",
        },
        {
          status: 400,
        }
      );
    }

    const answer = getAnswer(question);

    return NextResponse.json({
      answer,
    });
  } catch {
    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}