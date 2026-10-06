import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/data/projects";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 pb-24 pt-32 lg:px-10 lg:pb-40">
      <div className="mx-auto max-w-7xl">

        {/* Back */}
        <Link
          href="/#work"
          className="mb-20 inline-flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-black"
        >
          <ArrowLeft size={16} />
          Back to work
        </Link>

        {/* Header */}
        <header className="max-w-5xl">

          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.18em] text-neutral-500">
            <span>{project.category}</span>
            <span>/</span>
            <span>{project.year}</span>
            <span>/</span>
            <span>{project.status}</span>
          </div>

          <h1 className="text-6xl font-medium leading-[0.9] tracking-[-0.07em] md:text-8xl lg:text-[9rem]">
            {project.title}
            <span className="text-[#ff5c35]">.</span>
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-relaxed text-neutral-600 md:text-3xl">
            {project.shortDescription}
          </p>
        </header>

        {/* Metadata */}
        <div className="mt-20 grid border-y border-neutral-300 md:grid-cols-3">

          <div className="border-b border-neutral-300 py-8 md:border-b-0 md:border-r md:pr-8">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
              Role
            </p>

            <p className="mt-3">{project.role}</p>
          </div>

          <div className="border-b border-neutral-300 py-8 md:border-b-0 md:border-r md:px-8">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
              Stack
            </p>

            <p className="mt-3 leading-relaxed">
              {project.stack.join(" · ")}
            </p>
          </div>

          <div className="py-8 md:pl-8">
            <p className="text-xs uppercase tracking-[0.15em] text-neutral-400">
              Focus
            </p>

            <p className="mt-3 leading-relaxed">
              {project.focus.join(" · ")}
            </p>
          </div>

        </div>

        {/* Case study */}
        <div className="mt-32 grid gap-16 lg:grid-cols-[220px_1fr]">

          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
              The project
            </p>
          </div>

          <div className="max-w-3xl">

            <p className="text-2xl leading-relaxed text-neutral-700 md:text-4xl">
              {project.description}
            </p>

            <CaseStudySection
              number="01"
              title="The problem"
              content={project.problem}
            />

            <CaseStudySection
              number="02"
              title="The solution"
              content={project.solution}
            />

            <CaseStudySection
              number="03"
              title="How it works"
              content={project.architecture}
            />

            <div className="mt-24 border-t border-neutral-300 pt-8">
              <p className="text-xs uppercase tracking-[0.18em] text-neutral-400">
                04 / What I learned
              </p>

              <div className="mt-8 space-y-5">
                {project.learnings.map((learning, index) => (
                  <div
                    key={learning}
                    className="grid grid-cols-[40px_1fr] gap-4 border-b border-neutral-200 pb-5"
                  >
                    <span className="text-sm text-neutral-400">
                      0{index + 1}
                    </span>

                    <p className="text-lg text-neutral-700">
                      {learning}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Links */}
        {project.links &&
          (project.links.live || project.links.github) && (
            <div className="mt-24 flex flex-wrap gap-4 border-t border-neutral-300 pt-8">

              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm text-white"
                >
                  Live project
                  <ArrowUpRight size={16} />
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-3 text-sm transition-colors hover:border-black"
                >
                  GitHub
                  <ArrowUpRight size={16} />
                </a>
              )}

            </div>
          )}

      </div>
    </main>
  );
}

function CaseStudySection({
  number,
  title,
  content,
}: {
  number: string;
  title: string;
  content: string;
}) {
  return (
    <section className="mt-24 border-t border-neutral-300 pt-8">
      <div className="grid gap-6 md:grid-cols-[80px_1fr]">

        <span className="text-sm text-neutral-400">
          {number}
        </span>

        <div>
          <h2 className="text-3xl font-medium tracking-[-0.03em]">
            {title}
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            {content}
          </p>
        </div>

      </div>
    </section>
  );
}