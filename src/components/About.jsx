import React from "react";

export default function About() {
  return (
    <section className="px-6 md:px-20 py-16 bg-white text-neutral-900">
      <h2 className="text-[28px] md:text-[40px] font-semibold mb-6">About Me</h2>
      <p className="text-[16px] md:text-[18px] max-w-2xl leading-relaxed mb-8">
        I’m a data analyst with a passion for automating workflows and uncovering actionable insights.
        With a background in marketing analytics and process improvement, I help businesses operate smarter.
      </p>
      <div className="flex flex-wrap gap-3">
        {["Python", "SQL", "Google Sheets", "Apps Script", "Looker Studio", "Marketing Analytics"].map((skill, idx) => (
          <span key={idx} className="bg-neutral-200 text-neutral-800 text-sm md:text-base px-4 py-2 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
