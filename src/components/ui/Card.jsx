export default function Card({
  children,
  className = "",
  variant = "default",
}) {
  const baseStyle =
    "rounded-2xl p-5 transition-all duration-300";

  const variants = {
    default:
      "bg-white border border-gray-100 shadow-sm hover:shadow-md",

    elevated:
      "bg-white border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1",

    glass:
      "bg-white/70 backdrop-blur-xl border border-white/30 shadow-lg",

    dark:
      "bg-gray-900 border border-gray-800 text-white shadow-md hover:shadow-lg",
  };

  return (
    <div className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}