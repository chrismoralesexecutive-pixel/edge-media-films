import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setHidden(true), 1300);
    const doneTimer = setTimeout(() => onComplete(), 1350);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  return (
    <div id="loader" className={hidden ? "hide" : ""} aria-hidden={hidden}>
      <div style={{ textAlign: "center" }}>
        <div className="mark">EDGE MEDIA FILMS</div>
        <span>Loading the reel</span>
      </div>
    </div>
  );
}
