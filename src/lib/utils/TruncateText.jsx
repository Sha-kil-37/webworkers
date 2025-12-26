import { useMemo } from "react";

const TruncateText = ({ text, limit = 25 }) => {
  const truncatedText = useMemo(() => {
    if (!text) return "";

    const words = text.trim().split(/\s+/);

    if (words.length <= limit) {
      return text;
    }

    return words.slice(0, limit).join(" ") + " ....";
  }, [text, limit]);

  return <p>{truncatedText}</p>;
};

export default TruncateText;
