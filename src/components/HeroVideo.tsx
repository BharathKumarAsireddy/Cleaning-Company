export default function HeroVideo({ className }: { className?: string }) {
  return (
    <video
      className={className}
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    >
      <source src="/videos/hero-background.mp4" type="video/mp4" />
    </video>
  );
}
