export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="var(--signal)" fillOpacity="0.18" />
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="var(--signal)" strokeOpacity="0.4" />
      {/* 3D Keycap shape */}
      <rect x="6" y="7" width="20" height="18" rx="4" fill="#080B12" stroke="var(--signal)" strokeWidth="1.5" />
      <rect x="8" y="9" width="16" height="11" rx="2.5" fill="var(--signal)" fillOpacity="0.25" />
      <path d="M12 15L15 12M15 12L18 15M15 12V20" stroke="var(--signal)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
