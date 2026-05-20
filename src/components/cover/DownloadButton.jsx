import { downloadPDF, downloadImage } from "../../utils/generatePDF";

export default function DownloadButton() {
  const base =
    "w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-md border text-sm font-medium transition-all duration-200 active:scale-[0.98]";

  return (
    <div className="space-y-3">

      {/* PRIMARY: PDF (ORANGE) */}
      <button
        onClick={downloadPDF}
        className={`
          ${base}

          bg-orange-500 border-orange-500 text-white

          hover:bg-orange-600
          hover:border-orange-600
          hover:shadow-sm

          focus:ring-2 focus:ring-orange-100
        `}
      >
        Export PDF
      </button>

      {/* SECONDARY: PNG (BLACK / NEUTRAL) */}
      <button
        onClick={() => downloadImage("png")}
        className={`
          ${base}

          bg-white border-gray-200 text-gray-800

          hover:border-orange-300
          hover:text-orange-500
          hover:bg-orange-50

          focus:ring-2 focus:ring-orange-100
        `}
      >
        Export PNG
      </button>

      {/* SECONDARY: JPG (BLACK / NEUTRAL) */}
      <button
        onClick={() => downloadImage("jpg")}
        className={`
          ${base}

          bg-white border-gray-200 text-gray-800

          hover:border-orange-300
          hover:text-orange-500
          hover:bg-orange-50

          focus:ring-2 focus:ring-orange-100
        `}
      >
        Export JPG
      </button>

    </div>
  );
}