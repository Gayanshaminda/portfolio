"use client";

import { useEffect, useState } from "react";

const phrases = ["Full-Stack Development", "AI & Machine Learning", "Cloud & DevOps"];

export function TypewriterText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrase = phrases[phraseIndex];

  useEffect(() => {
    let delay = isDeleting ? 42 : 76;

    if (!isDeleting && characterCount === phrase.length) delay = 1700;
    if (isDeleting && characterCount === 0) delay = 280;

    const timer = window.setTimeout(() => {
      if (!isDeleting && characterCount < phrase.length) {
        setCharacterCount((count) => count + 1);
        return;
      }

      if (!isDeleting) {
        setIsDeleting(true);
        return;
      }

      if (characterCount > 0) {
        setCharacterCount((count) => count - 1);
        return;
      }

      setIsDeleting(false);
      setPhraseIndex((index) => (index + 1) % phrases.length);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [characterCount, isDeleting, phrase]);

  return (
    <p className="mt-6 flex min-h-8 items-center font-display text-xl font-medium text-primary sm:text-2xl">
      <span className="sr-only">
        Full-Stack Development, AI and Machine Learning, Cloud and DevOps
      </span>
      <span aria-hidden="true">
        {phrase.slice(0, characterCount)}
        <span className="ml-1 inline-block h-[1em] w-0.5 animate-pulse bg-primary align-[-0.1em] motion-reduce:animate-none" />
      </span>
    </p>
  );
}
