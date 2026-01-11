import { useMemo } from "react";

const TruncateText = ({ text, limit, className }) => {
  const truncatedText = useMemo(() => {
    if (!text) return "";

    const words = text.trim().split(/\s+/);

    if (words.length <= limit) {
      return text;
    }

    return words.slice(0, limit).join(" ") + " ....";
  }, [text, limit]);

  return <p className={className}><span className="font-bold">“</span> {truncatedText} <span className="font-bold">”</span></p>;
};

export default TruncateText;
