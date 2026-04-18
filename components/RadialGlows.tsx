export default function RadialGlows() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute -top-40 -left-40 h-[42rem] w-[42rem] rounded-full blur-[120px] opacity-50"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124, 58, 237, 0.55), transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 -right-40 h-[38rem] w-[38rem] rounded-full blur-[120px] opacity-40"
        style={{
          background:
            "radial-gradient(closest-side, rgba(14, 165, 233, 0.55), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-[-20rem] left-1/4 h-[40rem] w-[40rem] rounded-full blur-[140px] opacity-35"
        style={{
          background:
            "radial-gradient(closest-side, rgba(236, 72, 153, 0.45), transparent 70%)",
        }}
      />
      <div className="noise" />
    </div>
  );
}
