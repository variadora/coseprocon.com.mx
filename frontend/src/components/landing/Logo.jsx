export const Logo = ({ className = "", light = false }) => {
  const bg = light ? "#F4F4F0" : "#0A0A0A";
  const fg = light ? "#0A0A0A" : "#F4F4F0";
  return (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="100" height="100" fill={bg} />
      <rect x="20" y="66" width="60" height="14" fill={fg} />
      <rect x="20" y="43" width="42" height="14" fill={fg} />
      <rect x="20" y="20" width="24" height="14" fill="#FF3B30" />
    </svg>
  );
};
