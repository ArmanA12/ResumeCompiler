import React from 'react'
import ResumeUploader from './ResumeUploader'
import Header from './Header'
import JobDescription from './JobDescription'
import { BotMessageSquare, Download, MessageSquare } from "lucide-react";


function Compiler() {
    return (
        <div className="mx-auto w-full max-w-screen-2xl    absolute top-0">
            <Header />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ padding: "80px" }}>
                <div>
                    <ResumeUploader />
                </div>
                <div>
                    <JobDescription />
                </div>
            </div>
            <div className=" flex justify-center items-center gap-20 content-center">
                <div>
                    <button className='button'>
                    <MessageSquare className=" text-blue-500" size={20} />
                        <span>Analyze Resume</span>
                    </button>
                </div>
                <div>
                    <button className='button'>
                        <span>Download Resume</span>
                        <Download className="text-[#5f5d5c]" size={20} />
                    </button>

                </div>
                <div>
                    <button className='button'>
                    <BotMessageSquare className=" text-green-500" />

                        <span>AI Resume Assistant</span>

                    </button>

                </div>
            </div>
        </div>
    )
}

export default Compiler