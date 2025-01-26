import React, { useState } from "react";

function JobDescription() {
    const [jobDescription, setJobDescription] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Job Title Job Description: ${jobDescription}`);
    };

    return (
        <div className="w-full max-w-4xl mx-auto"
        >
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <textarea
                        id="jobDescription"
                        className="w-full max-w-4xl  mx-auto  border border-dashed bg-white  border-neutral-200 rounded-lg"
                        placeholder="Enter the job description"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        required
                        style={{padding:"20px", height:"280px"}}
                    ></textarea>
                </div>
            </form>
        </div>
    );
}

export default JobDescription;
