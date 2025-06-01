import React from "react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-20 bg-neutral-900 text-white">
      <h1 className="text-[40px] md:text-[64px] font-bold leading-tight mb-4">
        Hi, I’m Sojeong.
      </h1>
      <p className="text-[20px] md:text-[28px] max-w-xl">
        I build streamlined, data-driven workflows.
      </p>
    </section>
  );
}
