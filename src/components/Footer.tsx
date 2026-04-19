export default function Footer() {
  return (
    <footer className="relative z-10 py-4 px-6 border-t border-white/[0.04] text-center animate-fade-up-d2 opacity-0">
      <p className="text-xs text-text-dimmed">
        &copy; {new Date().getFullYear()} Javier Garcia <a href="https://github.com/JavChz" target="_blank" rel="noopener noreferrer">(@JavChz)</a>
      </p>
    </footer>
  );
}
