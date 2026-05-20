import Card from "../ui/Card";

export default function SavePanel({ saveData }) {
  return (
    <Card>
      <button
        onClick={saveData}
        className="
          w-full
          bg-gradient-to-r from-gray-900 to-black
          hover:from-gray-800 hover:to-gray-900
          text-white
          py-3
          rounded-xl
          font-semibold
          shadow-md
          transition-all
          duration-300
          hover:scale-[1.02]
          active:scale-95
        "
      >
        Save Draft
      </button>

      <p className="text-xs text-gray-400 text-center mt-2">
        Autosave your progress locally
      </p>
    </Card>
  );
}