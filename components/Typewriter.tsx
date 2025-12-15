import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  pause?: number;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 100, pause = 2000, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length - 1));
        }, speed / 2);
      } else {
        setIsDeleting(false);
      }
    } else {
      if (displayText.length < text.length) {
        timeout = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length + 1));
        }, speed);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pause);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, text, speed, pause]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
