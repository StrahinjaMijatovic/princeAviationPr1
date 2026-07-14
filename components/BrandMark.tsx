export default function BrandMark({
  className,
  title = "Prince Aviation",
}: {
  className?: string;
  title?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="49" fill="var(--crimson)" />
      {/* stylised counter-rotating swirl */}
      <path
        d="M35 30 C 55 22, 70 36, 60 52 C 53 63, 40 60, 41 49"
        fill="none"
        stroke="white"
        strokeWidth="8.5"
        strokeLinecap="round"
      />
      <path
        d="M65 70 C 45 78, 30 64, 40 48 C 47 37, 60 40, 59 51"
        fill="none"
        stroke="white"
        strokeWidth="8.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
