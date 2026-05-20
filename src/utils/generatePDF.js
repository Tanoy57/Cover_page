import html2pdf from "html2pdf.js";
import html2canvas from "html2canvas";

/* =========================
   📄 PDF EXPORT (FIXED A4)
========================= */
export const downloadPDF = () => {
  const element = document.getElementById("cover-preview");

  const options = {
    margin: 0,
    filename: "assignment-cover.pdf",

    html2canvas: {
      scale: 3, // 🔥 CRITICAL FIX
      useCORS: true,
      scrollX: 0,
      scrollY: 0,
      windowWidth: 794,
      windowHeight: 1123,
    },

    jsPDF: {
      unit: "px",
      format: [794, 1123],
      orientation: "portrait",
    },
  };

  html2pdf().set(options).from(element).save();
};

/* =========================
   🖼️ IMAGE EXPORT (PNG / JPG FIXED A4)
========================= */
export const downloadImage = async (format = "png") => {
  const element = document.getElementById("cover-preview");

  if (!element) return;

  // 🔥 FORCE A4 RENDER CONTEXT
  const canvas = await html2canvas(element, {
    scale: 3, // high quality
    width: 794,
    height: 1123,
    windowWidth: 794,
    windowHeight: 1123,
    useCORS: true,
    backgroundColor: "#ffffff",
    scrollX: 0,
    scrollY: 0,
  });

  const mimeType = format === "jpg" ? "image/jpeg" : "image/png";

  const imageData =
    format === "jpg"
      ? canvas.toDataURL(mimeType, 1.0)
      : canvas.toDataURL(mimeType);

  const link = document.createElement("a");
  link.href = imageData;
  link.download = `assignment-cover.${format}`;
  link.click();
};