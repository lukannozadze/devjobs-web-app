import { useEffect, useState } from "react";

const ModeToggler = (props: {
  setIsDark: (isDark: boolean) => void;
  isDark: boolean;
}) => {
  const [cx, setCx] = useState<number>(12);
  const { isDark, setIsDark } = props;
  useEffect(() => {
    isDark ? setCx(35) : setCx(12);
  }, [isDark]);
  return (
    <svg
      onClick={() => {
        setIsDark(!isDark);
      }}
      width="48"
      height="24"
      viewBox="0 0 48 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="24" rx="12" fill="white" />
      <circle cx={cx} cy="12" r="7" fill="#5964E0" />
    </svg>
  );
};

export default ModeToggler;
