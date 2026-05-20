import defaultLogo from "../../assets/university-logo.png";
import { getCoverTitle } from "../../utils/helpers";

export default function CoverPreview({
  formData,
  template,
  coverType,
  logo,
  customTitle,
}) {
  const getTemplateStyle = () => {
    switch (template) {
      case "modern":
        return {
          page: "border-t-[6px] border-blue-700",
          title: "tracking-[5px] text-blue-700",
          font: "font-sans",
        };

      case "minimal":
        return {
          page: "border border-gray-200",
          title: "tracking-[6px] text-gray-700",
          font: "font-light",
        };

      default:
        return {
          page: "",
          title: "tracking-[4px] text-black",
          font: "font-serif",
        };
    }
  };

  const styles = getTemplateStyle();

  const title = customTitle?.trim()
    ? customTitle
    : getCoverTitle(coverType);

  return (
    <div
      id="cover-preview"
      className={`
        bg-white
        w-[794px]
        min-h-[1123px]
        mx-auto
        px-[90px]
        py-[80px]
        shadow-2xl
        text-black
        ${styles.page}
        ${styles.font}
      `}
    >

      {/* LOGO */}
      <div className="flex justify-center">
        <img
          src={logo || defaultLogo}
          alt="University Logo"
          className="h-[90px] object-contain"
        />
      </div>

      {/* TITLE */}
      <div className="text-center mt-12">
        <h1 className={`text-[28px] font-bold uppercase ${styles.title}`}>
          {title}
        </h1>
        <div className="w-28 h-[2px] bg-gray-300 mx-auto mt-4"></div>
      </div>

      {/* COURSE */}
      <div className="mt-[50px] text-center text-[14px]">
        <p className="font-semibold text-gray-700">COURSE TITLE</p>
        <p className="mt-1">{formData.courseTitle || "Computer Networks "}</p>

        <p className="font-semibold text-gray-700 mt-6">COURSE CODE</p>
        <p className="mt-1">{formData.courseCode || "CSE - 123"}</p>
      </div>

      {/* SUBMITTED TO */}
      <div className="mt-[50px] text-center text-[13px] leading-7">
        <p className="font-bold text-[14px] mb-2">SUBMITTED TO</p>

        <p className="font-medium">
          {formData.teacherName || "Faculty Name"}
        </p>

        <p className="text-gray-700">
          {formData.teacherDesignation || "Faculty Designation"}
        </p>

        <p className="text-gray-700">
          {formData.teacherDepartmentName || "Department Name"}
        </p>

        <p className="text-gray-700">
          {formData.teacherUniversityName || "University Name"}
        </p>
      </div>

      {/* SUBMITTED BY */}
      <div className="mt-[50px] text-center text-[13px] leading-7">
        <p className="font-bold text-[14px] mb-2">SUBMITTED BY</p>

        <p className="font-medium">
          {formData.studentName || "Student Name"}
        </p>

        <p>{formData.studentId || "222-111-000"}</p>

        <p>Batch - {formData.batch || "57 (C)"}</p>

        <p className="text-gray-700">
          {formData.studentDepartmentName || "Department Name"}
        </p>

        <p className="text-gray-700">
          {formData.studentUniversityName || "University Name"}
        </p>
      </div>

      {/* DATE */}
      <div className="mt-[50px] text-center text-[13px]">
        <p className="font-bold text-[14px]">DATE OF SUBMISSION</p>
        <p className="mt-2 text-gray-800">
          {formData.submissionDate || "2026-05-21"}
        </p>
      </div>

    </div>
  );
}