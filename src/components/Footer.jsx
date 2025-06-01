import React from "react";

export default function Footer() {
  return (
    <footer className="px-6 md:px-20 py-10 bg-neutral-900 text-white text-center">
      <p className="text-sm md:text-base">© 2025 Sojeong Park. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-4">
        <a href="https://github.com/0tobebetter" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
        <a href="https://www.linkedin.com/in/sojeong-park" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
      </div>
    </footer>
  );
}
