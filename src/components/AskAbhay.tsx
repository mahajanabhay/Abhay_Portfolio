"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Loader2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const suggestions = [
  "What has Abhay built?",
  "Tell me about Gradly",
  "What did he do at CoRover?",
  "What technologies does he use?",
];

export default function AskAbhay() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const displayedAnswer = useTypewriter(answer);

  async function askQuestion(questionToAsk?: string) {
    const query = (questionToAsk ?? question).trim();

    if (!query || loading) return;

    setQuestion(query);
    setLoading(true);
    setAnswer("");

    try {
      const response = await fetch("/api/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: query,
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const data = await response.json();

      setAnswer(data.answer);
    } catch {
      setAnswer(
        "Something went wrong. Try again in a moment."
      );
    } finally {
      setLoading(false);
    }
  }

function useTypewriter(text: string, speed = 12) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");

    if (!text) return;

    let index = 0;

    const interval = setInterval(() => {
      index++;

      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayed;
}

  return (
    <section className="border-t border-neutral-300 px-6 py-32 lg:px-10 lg:py-44">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">

          {/* Left */}
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-neutral-500">
              <Sparkles size={14} />
              05 / Ask Abhay
            </div>

            <h2 className="mt-5 text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              Curious?
              <br />
              Ask away.
            </h2>
          </div>

          {/* Right */}
          <div>

            <p className="max-w-2xl text-xl leading-relaxed text-neutral-600 md:text-2xl">
              Ask about my projects, experience, technologies,
              photography, or what I&apos;m currently building.
            </p>

            {/* Input */}
            <div className="mt-10 flex items-center border-b border-neutral-900 pb-4">

              <input
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    askQuestion();
                  }
                }}
                placeholder="Ask something..."
                className="w-full bg-transparent text-xl outline-none placeholder:text-neutral-400 md:text-2xl"
              />

              <button
                onClick={() => askQuestion()}
                disabled={loading || !question.trim()}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-black text-white transition-transform hover:scale-105 disabled:cursor-not-allowed disabled:opacity-30"
                aria-label="Ask"
              >
                {loading ? (
                  <Loader2
                    size={18}
                    className="animate-spin"
                  />
                ) : (
                  <ArrowUpRight size={18} />
                )}
              </button>

            </div>

            {/* Suggestions */}
            <div className="mt-6 flex flex-wrap gap-2">
              {suggestions.map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => askQuestion(suggestion)}
                  className="rounded-full border border-neutral-300 px-4 py-2 text-sm text-neutral-600 transition-colors hover:border-black hover:text-black"
                >
                  {suggestion}
                </button>
              ))}
            </div>

            {/* Answer */}
            {answer && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 border-t border-neutral-300 pt-8"
              >
                <p className="mb-4 text-xs uppercase tracking-[0.15em] text-neutral-400">
                  Abhay&apos;s AI
                </p>

                <p className="max-w-3xl whitespace-pre-wrap text-lg leading-relaxed text-neutral-700">
                  {displayedAnswer}
                </p>
              </motion.div>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}