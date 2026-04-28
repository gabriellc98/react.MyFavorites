import { useState } from "react";

export default function StarInput({ starRating, onChange, max = 5 }) {
  // starRating: current rating (number)
  // onChange: function(newValue)
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex gap-1">
      {[...Array(max)].map((_, i) => {
        const starValue = i + 1;
        return (
          <span
            key={i}
            className={
              (
                hovered !== null
                  ? starValue <= hovered
                  : starValue <= starRating
              )
                ? "text-[#F6C667] cursor-pointer text-2xl"
                : "text-gray-600 cursor-pointer text-2xl"
            }
            onClick={() => onChange(starValue)}
            onMouseEnter={() => setHovered(starValue)}
            onMouseLeave={() => setHovered(null)}
            role="button"
            aria-label={`Set rating to ${starValue}`}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onChange(starValue);
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
