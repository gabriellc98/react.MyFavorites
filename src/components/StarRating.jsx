export function StarRating({ rating }) {
  const stars = Math.round(rating);
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < stars ? "text-[#F6C667]" : "text-gray-600"}
        >
          ★
        </span>
      ))}
    </div>
  );
}
