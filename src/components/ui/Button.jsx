export default function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const baseStyle =
    "px-5 py-3 rounded-xl font-medium transition-all duration-300 active:scale-95 focus:outline-none focus:ring-4";

  const variants = {
    primary:
      "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-200",

    dark:
      "bg-gray-900 hover:bg-black text-white focus:ring-gray-300",

    success:
      "bg-emerald-600 hover:bg-emerald-700 text-white focus:ring-emerald-200",

    danger:
      "bg-red-600 hover:bg-red-700 text-white focus:ring-red-200",

    ghost:
      "bg-white border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-200",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}