import Hero from "./Hero";
import ProjectGrid from "./ProjectGrid";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full">
      {/* Noise texture overlay */}
      <div className="fixed inset-0 z-50 w-full h-full opacity-[0.02] pointer-events-none bg-[url(&quot;data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E&quot;)]" />

      {/* Ambient glow orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[15%] -left-[8%] w-[500px] h-[500px] rounded-full bg-[rgba(139,92,246,0.15)] blur-[80px] animate-float" />
        <div className="absolute top-[30%] -right-[10%] w-[400px] h-[400px] rounded-full bg-[rgba(34,211,238,0.1)] blur-[80px] animate-float-delayed" />
        <div className="absolute -bottom-[15%] left-1/4 w-[500px] h-[500px] rounded-full bg-[rgba(244,114,182,0.07)] blur-[80px] animate-glow-pulse" />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex flex-col justify-center px-12 py-16 md:py-24 max-w-5xl w-full mx-auto max-md:justify-start max-md:pt-16">
        <Hero />
        <ProjectGrid />
      </main>

      <Footer />
    </div>
  );
}
