const GitHubIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" className="w-[1.125rem] h-[1.125rem]">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function Hero() {
  return (
    <section className="text-center mb-8 animate-fade-up opacity-0" id="hero">
      {/* Avatar */}
      <div className="inline-block relative mb-4">
        <div className="absolute inset-[-3px] bg-gradient-to-br from-[#8b5cf6] via-[#22d3ee] to-[#f472b6] rounded-full opacity-35 blur-[10px] transition-opacity duration-500 group-hover:opacity-65" />
        <img
          src="/icon.png"
          alt="Javier Garcia"
          className="relative w-20 h-20 rounded-full border-2 border-white/10 object-cover"
        />
      </div>

      {/* Name */}
      <h1 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold tracking-tight leading-tight text-white mb-2">
        <span className="bg-gradient-to-br from-accent-purple via-accent-cyan to-accent-pink bg-[length:300%_300%] bg-clip-text text-transparent animate-gradient-shift">
          Javier Garcia
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-base text-text-muted max-w-[36rem] mx-auto mb-4 leading-relaxed">
        Frontend Developer &amp; building with{" "}
        <span className="text-accent-cyan font-medium">React</span>,{" "}
        <span className="text-accent-purple font-medium">TypeScript</span> &amp;{" "}
        <span className="text-accent-pink font-medium">Tailwind CSS</span>.
      </p>

      {/* GitHub CTA */}
      <a
        href="https://github.com/JavChz"
        target="_blank"
        rel="noopener noreferrer"
        id="cta-github"
        className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/[0.04] text-text-muted text-sm font-medium no-underline rounded-xl border border-white/[0.08] transition-all duration-300 hover:bg-white/[0.08] hover:text-white hover:border-white/15 hover:-translate-y-0.5"
      >
        <GitHubIcon />
        GitHub
      </a>
    </section>
  );
}
