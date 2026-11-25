import { useEffect, useState } from "react";

function calc(target) {
  const diff = Math.max(0, target.getTime() - Date.now());
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    finished: diff === 0,
  };
}

export function useCountdown({ year, month, day, hour = 0, minute = 0 }) {
  const target = new Date(year, month - 1, day, hour, minute);
  const [time, setTime] = useState(() => calc(target));

  useEffect(() => {
    const id = setInterval(() => setTime(calc(target)), 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year, month, day, hour, minute]);

  return time;
}
