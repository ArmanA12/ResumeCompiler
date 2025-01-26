import React, { useRef, useState } from "react";
import { Upload, Trash } from "lucide-react";


const ResumeUploader = () => {
  const fileInputRef = useRef(null);
  const [files, setFile] = useState("");
  const [fileSize, setFilesize] = useState('');

  const handleFileUpload = (event) => {
    const files = event.target.files;
    if (files[0] && files[0].size / (1024 * 1024) >= 2) {
      console.log("Entered the if block");
      alert("File Size is greater than 2 MB");
      return
    }

    setFile(files);
    setFilesize(files[0].size)
    console.log(files[0].size)
    };

  return (
    <div
      className="w-full max-w-4xl mx-auto border border-dashed bg-white border-neutral-200 rounded-lg"
      style={{
        backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.2) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
        backgroundColor: "white",
        padding: "30px",
        height:'280px'
      }}

    >
      <div>
        <p className="relative text-center z-20 font-bold text-base text-[#5f5d5c]">
          Upload Your Resume
        </p>
        <p className="relative text-center font-normal text-neutral-400 dark:text-neutral-400 text-base mt-2" style={{ marginTop: "5px", marginBottom: "20px" }}>
          Drag or drop your files here or click to upload
        </p>

        {
          !files && <div className="flex justify-center mt-6">
            <div
              className="flex items-center shadow-md justify-center  w-36 h-36 rounded-md bg-white cursor-pointer"
              style={{
                background: "#fff",
                transition: "box-shadow 0.3s ease",
                border: "1px solid rgba(0,0,0,0.1)"
              }}
              onClick={() => fileInputRef.current.click()}
            >
              <Upload className=" text-black" />
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              style={{ display: 'none' }}
              accept=".pdf,.doc,.docx"
            />
          </div>
        }
        {
          files && <div className="flex justify-between   bg-white shadow rounded" style={{ padding: "15px" }}>
            <div>
              <p className="text-[#5f5d5c]">{files[0].name}</p>
              <p className="text-[#5f5d5c] bg-gray-100 text-center rounded text-sm" style={{ position: "relative", marginTop: "7px", padding: "2px" }}>
                {files[0].type}
              </p>
            </div>
            <div>
              <p className="text-[#5f5d5c] shadow rounded text-center" style={{ padding: "3px 8px" }}>
                {(fileSize / (1024 * 1024)).toFixed(2)}
                &nbsp; MB
              </p>
              <button onClick={() => setFile("")}
                className="text-center text-red-400 flex items-center justify-center gap-2"
                style={{
                  padding: "2px 8px",
                  border: "1px solid rgba(0,0,0,0.1)",
                  borderRadius: "4px",
                  marginTop: "5px"
                }}
              >
                Remove <Trash size={16} />
              </button>
            </div>
          </div>
        }

      </div>
    </div>
  );
};

export default ResumeUploader;
