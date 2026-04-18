export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8 font-sans">
      <div className="max-w-xl w-full space-y-6">
        <p className="text-xs uppercase tracking-[0.2em] opacity-60">ary-x86.github.io</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Aryan Swami-Persaud
        </h1>
        <p className="text-base sm:text-lg leading-relaxed opacity-80">
          Data Science &amp; AI student. Founder of Leafshift. Building AgriAI and the DROS
          (Digital Resilience and Optimization System) research project.
        </p>
        <p className="text-sm opacity-50">
          Site rebuild in progress — full portfolio arriving soon. Legacy index preserved at{" "}
          <a href="/legacy/" className="underline hover:opacity-100">/legacy/</a>.
        </p>
      </div>
    </main>
  );
}
