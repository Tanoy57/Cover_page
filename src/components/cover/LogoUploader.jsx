import { useState } from "react";
import Card from "../ui/Card";

export default function LogoUploader({ setLogo }) {
  const [preview, setPreview] = useState(null);

  const handleLogo = (file) => {
    if (file) {
      const url = URL.createObjectURL(file);
      setLogo(url);
      setPreview(url);
    }
  };

  const onChange = (e) => {
    handleLogo(e.target.files[0]);
  };

  const onDrop = (e) => {
    e.preventDefault();
    handleLogo(e.dataTransfer.files[0]);
  };

  return (
    <Card className="text-center space-y-4">

      {/* TITLE */}
      <h2 className="font-semibold text-gray-900">
        Upload Logo
      </h2>

      <p className="text-xs text-gray-500">
        Add your institution or department logo
      </p>

      {/* DROP ZONE */}
      <label
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        className="
          flex flex-col items-center justify-center
          border-2 border-dashed border-gray-300
          rounded-md p-6 cursor-pointer
          transition-all duration-200

          hover:border-orange-400 hover:bg-orange-50
        "
      >
        <input
          type="file"
          accept="image/*"
          onChange={onChange}
          className="hidden"
        />

        <p className="text-sm text-gray-700">
          Drag & drop logo here
        </p>

        <p className="text-xs text-gray-500 mt-1">
          or click to browse
        </p>
      </label>

      {/* PREVIEW */}
      {preview && (
        <div className="mt-2 flex justify-center">
          <img
            src={preview}
            alt="Logo Preview"
            className="h-14 object-contain"
          />
        </div>
      )}

    </Card>
  );
}