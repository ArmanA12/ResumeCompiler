import React, { useState } from "react";
import { SquarePen } from 'lucide-react';

function JobDescription() {
    const [jobDescription, setJobDescription] = useState("");
    const [showDummy, setShowDummy] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Job Title Job Description: ${jobDescription}`);
    };

    return (
        <div className="w-full max-w-4xl mx-auto"
        >
            <form onSubmit={handleSubmit}>
                <div className="mb-4 relative" >
                    <textarea
                        id="jobDescription"
                        className="w-full max-w-4xl  mx-auto  border border-dashed bg-white  border-neutral-200 rounded-lg"
                        placeholder="Enter the job description"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        required
                        style={{padding:"10px", height:"280px"}}
                    ></textarea>
                    {
                        showDummy && <div onMouseEnter={()=> setShowDummy(false)}  style={{height:"280px"}} className="absolute w-full  border border-dashed bg-white rounded-lg border-neutral-200 top-0 flex justify-center items-center">
                        <div className=" w-full h-full flex justify-center items-center">
                           <div>
                               <center><SquarePen className=" text-black" size={30} /></center>
                           <p className="text-[#5f5d5c]" style={{marginTop:"10px"}}>Enter Your Job Description Here</p>
                           </div>
                        </div>
                   </div>
                    }
                </div>
            </form>
        </div>
    );
}

export default JobDescription;
