export default function Input({
  className = "",
  variant = "default",
  ...props
}) {
  const baseStyle =
    "w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-4";

  const variants = {
    default:
      "bg-white border border-gray-300 text-gray-800 focus:border-blue-500 focus:ring-blue-200",

    error:
      "bg-white border border-red-400 text-gray-800 focus:border-red-500 focus:ring-red-200",

    success:
      "bg-white border border-emerald-400 text-gray-800 focus:border-emerald-500 focus:ring-emerald-200",

    dark:
      "bg-gray-900 border border-gray-700 text-white placeholder-gray-400 focus:border-gray-500 focus:ring-gray-700",
  };

  return (
    <input
      {...props}
      className={`${baseStyle} ${variants[variant]} ${className}`}
    />
  );
}