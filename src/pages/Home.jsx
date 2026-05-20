import { useState } from "react";

import CoverForm from "../components/cover/CoverForm";
import CoverPreview from "../components/cover/CoverPreview";
import TemplateSelector from "../components/cover/TemplateSelector";
import DownloadButton from "../components/cover/DownloadButton";
import LogoUploader from "../components/cover/LogoUploader";
import SavePanel from "../components/cover/SavePanel";

export default function Home() {
  const [logo, setLogo] = useState(null);
  const [template, setTemplate] = useState("classic");
  const [coverType, setCoverType] = useState("theory");
  const [customTitle, setCustomTitle] = useState("");

  const [formData, setFormData] = useState({
    courseTitle: "",
    courseCode: "",
    teacherName: "",
    teacherDesignation: "",
    teacherDepartmentName: "",
    teacherUniversityName: "",
    studentName: "",
    studentId: "",
    batch: "",
    studentDepartmentName: "",
    studentUniversityName: "",
    submissionDate: "",
  });

  const saveData = () => {
    localStorage.setItem("cover-data", JSON.stringify(formData));
    alert("Draft Saved Successfully!");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col">

      {/* HEADER */}
      <header className="sticky top-0 z-20 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-3">

          <div className="flex items-start justify-between">

            {/* BRAND */}
            <div
              className="cursor-pointer select-none group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <h1 className="text-xl sm:text-2xl font-semibold tracking-tight group-hover:opacity-80 transition">
                <span className="text-black">Uni</span>
                <span className="text-orange-500">Cover</span>
              </h1>

              <p className="text-xs sm:text-sm text-gray-500 mt-1 max-w-md group-hover:text-gray-700 transition">
                A simple tool to design elegant academic cover pages instantly
              </p>
            </div>

            {/* STATUS */}
            <div className="hidden sm:flex items-center gap-2 text-xs">
              <span className="px-2 py-0.5 border border-gray-200 rounded text-gray-600">
                Editor
              </span>
              <span className="px-2 py-0.5 border border-orange-200 rounded text-orange-600">
                Live Preview
              </span>
            </div>

          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* LEFT PANEL */}
          <aside className="lg:col-span-4 space-y-4">

            {/* ASSIGNMENT DETAILS (renamed Features section) */}
            <div
              id="assignment-details"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:border-orange-200 transition"
            >
              <TemplateSelector
                template={template}
                setTemplate={setTemplate}
                coverType={coverType}
                setCoverType={setCoverType}
                customTitle={customTitle}
                setCustomTitle={setCustomTitle}
              />
            </div>

            {/* LOGO UPLOADER */}
            <div
              id="logo-uploader"
              className="bg-white border border-gray-200 rounded-lg p-4 hover:border-orange-200 transition"
            >
              <LogoUploader setLogo={setLogo} />
            </div>

            {/* FORM */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 hover:border-orange-200 transition">
              <CoverForm formData={formData} setFormData={setFormData} />
            </div>

            {/* ACTIONS */}
            <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3 hover:border-orange-200 transition">
              <SavePanel saveData={saveData} />
              <DownloadButton />
            </div>

          </aside>

          {/* RIGHT PANEL */}
          <section className="lg:col-span-8 flex justify-center">

            <div className="w-full max-w-[900px]">

              <div className="flex items-center justify-between mb-3 px-1">
                <h2 className="text-sm font-medium text-gray-700">
                  Live Preview
                </h2>
                <span className="text-[11px] text-gray-500 border border-gray-200 px-2 py-0.5 rounded">
                  A4 • 794×1123
                </span>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg overflow-auto shadow-sm">

                <div className="flex justify-center min-w-[320px]">

                  <CoverPreview
                    formData={formData}
                    template={template}
                    coverType={coverType}
                    logo={logo}
                    customTitle={customTitle}
                  />

                </div>

              </div>

            </div>

          </section>

        </div>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-gray-200 bg-white mt-10">
        <div className="max-w-7xl mx-auto px-4 py-6">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold tracking-tight">
                <span className="text-black">Uni</span>
                <span className="text-orange-500">Cover</span>
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Build elegant academic cover pages in seconds
              </p>
            </div>

            {/* NAV LINKS */}
            <div className="flex items-center gap-6 text-sm text-gray-600">

              <a href="#assignment-details" className="hover:text-orange-500 transition">
                Templates
              </a>

              <a href="#logo-uploader" className="hover:text-orange-500 transition">
                Logo Upload
              </a>

              <a href="#assignment-details" className="hover:text-orange-500 transition">
                Assignment Details
              </a>

            </div>

            <div className="text-xs text-gray-500 text-center sm:text-right">
              © {new Date().getFullYear()} UniCover. All rights reserved.
            </div>

          </div>

        </div>
      </footer>

    </div>
  );
}