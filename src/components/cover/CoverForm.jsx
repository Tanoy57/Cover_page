import { useState } from "react";
import Card from "../ui/Card";
import Input from "../ui/Input";

export default function CoverForm({ formData, setFormData }) {
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateDate = (value) => {
    if (!value) return "Date is required";
    const date = new Date(value);
    if (isNaN(date.getTime())) return "Invalid date";
    return "";
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (name === "submissionDate") {
      setErrors((prev) => ({
        ...prev,
        submissionDate: validateDate(value),
      }));
    }
  };

  const SectionTitle = ({ children }) => (
    <p className="text-[10px] font-medium text-orange-500 uppercase tracking-wider">
      {children}
    </p>
  );

  const inputStyle =
    "w-full px-3 py-2 text-sm border border-gray-200 rounded-md bg-white " +
    "text-gray-900 placeholder-gray-400 " +
    "outline-none transition-all duration-200 " +
    "focus:border-orange-500 focus:ring-2 focus:ring-orange-100";

  return (
    <Card className="space-y-6">

      {/* HEADER */}
      <div className="space-y-1">
        <h2 className="text-base font-semibold text-gray-900">
          Assignment Details
        </h2>

        <p className="text-xs text-gray-500">
          Fill in your academic information
        </p>
      </div>

      {/* COURSE */}
      <div className="space-y-2">
        <SectionTitle>Course Information</SectionTitle>

        <Input
          name="courseTitle"
          value={formData.courseTitle}
          onChange={handleChange}
          placeholder="Course Title"
          className={inputStyle}
        />

        <Input
          name="courseCode"
          value={formData.courseCode}
          onChange={handleChange}
          placeholder="Course Code"
          className={inputStyle}
        />
      </div>

      {/* TEACHER */}
      <div className="space-y-2">
        <SectionTitle>Teacher Information</SectionTitle>

        <Input
          name="teacherName"
          value={formData.teacherName}
          onChange={handleChange}
          placeholder="Teacher Name"
          className={inputStyle}
        />

        <Input
          name="teacherDesignation"
          value={formData.teacherDesignation}
          onChange={handleChange}
          placeholder="Designation"
          className={inputStyle}
        />

        <Input
          name="teacherDepartmentName"
          value={formData.teacherDepartmentName}
          onChange={handleChange}
          placeholder="Department"
          className={inputStyle}
        />

        <Input
          name="teacherUniversityName"
          value={formData.teacherUniversityName}
          onChange={handleChange}
          placeholder="University Name"
          className={inputStyle}
        />
      </div>

      {/* STUDENT */}
      <div className="space-y-2">
        <SectionTitle>Student Information</SectionTitle>

        <Input
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          placeholder="Student Name"
          className={inputStyle}
        />

        <Input
          name="studentId"
          value={formData.studentId}
          onChange={handleChange}
          placeholder="Student ID"
          className={inputStyle}
        />

        <Input
          name="batch"
          value={formData.batch}
          onChange={handleChange}
          placeholder="Batch"
          className={inputStyle}
        />

        <Input
          name="studentDepartmentName"
          value={formData.studentDepartmentName}
          onChange={handleChange}
          placeholder="Department"
          className={inputStyle}
        />

        <Input
          name="studentUniversityName"
          value={formData.studentUniversityName}
          onChange={handleChange}
          placeholder="University Name"
          className={inputStyle}
        />
      </div>

      {/* DATE */}
      <div className="space-y-2">
        <SectionTitle>Submission Date</SectionTitle>

        <input
          type="date"
          name="submissionDate"
          value={formData.submissionDate}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`
            w-full px-3 py-2 text-sm rounded-md border bg-white
            text-gray-900
            transition-all duration-200 outline-none

            ${
              errors.submissionDate
                ? "border-red-400 focus:ring-2 focus:ring-red-100"
                : "border-gray-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            }
          `}
        />

        {errors.submissionDate && (
          <p className="text-xs text-red-500 mt-1">
            {errors.submissionDate}
          </p>
        )}
      </div>

    </Card>
  );
}