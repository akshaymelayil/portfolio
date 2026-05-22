export default function BackgroundGrid() {
  return (
    <div className="fixed inset-0 z-0 opacity-15 pointer-events-none">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
    </div>
  );
}   