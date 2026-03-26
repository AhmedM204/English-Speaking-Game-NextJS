"use client";

import { useEffect, useState } from "react";

interface AppleTextProps {
  question?: string;
}

export const AppleText = ({
  question = "Press start to get a random question",
}: AppleTextProps) => {
  // We use a key that changes when the question changes to re-trigger the CSS animation
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
  }, [question]);

  // Check if it's the initial state to style it slightly differently
  const isInitial = question.toLowerCase().includes("press start");

  return (
    <div className="flex flex-col items-center text-center space-y-3 min-h-[140px] justify-center px-2">
      {/* Eyebrow Label (Subtle, uppercase, wide tracking) */}
      <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase">
        {isInitial ? "Welcome" : "Current Question"}
      </span>

      {/* Main Question Text */}
      <h2
        key={animationKey}
        className={`text-2xl md:text-[26px] font-semibold tracking-tight antialiased leading-snug text-balance ${
          isInitial ? "text-gray-400" : "text-gray-900"
        }`}
        style={{
          // Apple's signature smooth spring-like easing
          animation:
            "appleFadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {question}
      </h2>

      {/* 
        Injecting the keyframe directly so you don't have to configure tailwind.config.js.
        This creates that buttery smooth iOS slide-up-and-fade effect.
      */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes appleFadeInUp {
            from { opacity: 0; transform: translateY(10px) scale(0.98); filter: blur(2px); }
            to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
          }
        `,
        }}
      />
    </div>
  );
};
