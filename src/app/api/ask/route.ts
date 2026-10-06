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

  // ABOUT
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

  // EDUCATION
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

  // COROVER
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

    return `At ${experience.company}, Abhay worked as a ${experience.role} from ${experience.period}. ${experience.description}`;
  }

  // CLARIX
  if (
    includesAny(q, [
      "clarix",
      "study platform",
      "ai study platform",
      "study app",
      "ai tutor",
      "adaptive quiz",
    ])
  ) {
    const project = knowledge.projects.find(
      (project) => project.name === "Clarix"
    );

    return `${project?.name} is ${project?.description} Abhay built it as the ${project?.role}. ${project?.details}`;
  }

  // AGENTIC CHATBOT
  if (
    includesAny(q, [
      "agentic chatbot",
      "agentic chat bot",
      "chatbot",
      "agentic ai",
      "agents",
      "agent",
      "tool use",
      "function calling",
    ])
  ) {
    const project = knowledge.projects.find(
      (project) => project.name === "Agentic ChatBot"
    );

    return `${project?.name} is ${project?.description} ${project?.details}`;
  }

  // HEALTH PROJECT
  if (
    includesAny(q, [
      "health prediction",
      "health project",
      "patent",
      "health ai",
      "prediction system",
    ])
  ) {
    const project = knowledge.projects.find(
      (project) => project.name === "AI Health Prediction System"
    );

    return `${project?.name} is ${project?.description} Abhay worked on it as a ${project?.role}.`;
  }

  // TECHNOLOGIES / SKILLS
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
      "what does abhay use",
    ])
  ) {
    const skills = knowledge.skills;

    return `Abhay works with Python, JavaScript, TypeScript, Next.js, React, FastAPI, PostgreSQL, Docker, LangChain, RAG, agentic workflows, machine learning, and Generative AI technologies.`;
  }

  // PHOTOGRAPHY
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

  // AI
  if (
    includesAny(q, [
      "ai",
      "artificial intelligence",
      "generative ai",
      "genai",
      "llm",
      "rag",
    ])
  ) {
    return "Abhay works across AI/ML and Generative AI, with experience in RAG, LLM applications, conversational AI, and agentic workflows. His work includes Clarix, an AI study platform, and an Agentic ChatBot exploring tool use and multi-step AI workflows.";
  }

  // PROJECTS
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
      .join(", ")}. His work spans AI education, agentic AI, machine learning, and applied AI research.`;
  }

  return "I know a few things about Abhay's work. Try asking about his projects, GenAI experience, education, technologies, Clarix, Agentic ChatBot, CoRover.ai, the AI Health Prediction System, or photography!";
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const question = body?.question;

    if (typeof question !== "string" || !question.trim()) {
      return NextResponse.json(
        { error: "Question is required." },
        { status: 400 }
      );
    }

    if (question.length > 300) {
      return NextResponse.json(
        { error: "Question is too long." },
        { status: 400 }
      );
    }

    const answer = getAnswer(question);

    return NextResponse.json(
      { answer },
      {
        headers: {
          "Cache-Control": "no-store",
        },
      }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong." },
      { status: 500 }
    );
  }
}