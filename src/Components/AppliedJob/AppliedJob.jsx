import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { Link } from "react-router-dom";

const AppliedJob = ({ job }) => {
    const {
        id,
        job_title,
        logo,
        company_name,
        remote_or_onsite,
        location,
        job_type,
        salary,
    } = job;

    return (
        <div className="bg-base-200 mx-4 flex flex-wrap items-center rounded-3xl shadow-lg shadow-gray-500 p-4">
            {/* Logo Section */}
            <div className="w-full md:w-1/4 flex justify-center mb-4 md:mb-0">
                <img
                    src={logo}
                    alt="Company Logo"
                    className="w-40 h-40 rounded-lg shadow-md object-contain"
                />
            </div>

            {/* Job Details Section */}
            <div className="w-full md:w-2/4 space-y-4 flex-1 px-4">
                <h2 className="text-gray-700 text-xl md:text-2xl font-bold">
                    {job_title}
                </h2>
                <p className="text-gray-500 font-semibold text-lg">{company_name}</p>

                {/* Job Type & Remote/Onsite */}
                <div className="flex flex-wrap gap-3">
                    <div className="py-2 px-4 border-2 border-[#9873FF] text-[#9873FF] font-medium rounded-xl">
                        {remote_or_onsite}
                    </div>
                    <div className="py-2 px-4 border-2 border-[#9873FF] text-[#9873FF] font-medium rounded-xl">
                        {job_type}
                    </div>
                </div>

                {/* Location & Salary */}
                <div className="flex flex-wrap items-center gap-4 text-gray-600 font-semibold">
                    <div className="flex gap-2 items-center text-sm md:text-base">
                        <IoLocationOutline className="text-lg text-[#9873FF]" />
                        {location}
                    </div>
                    <div className="flex gap-2 items-center text-sm md:text-base">
                        <CiDollar className="text-lg text-[#9873FF]" />
                        {salary}
                    </div>
                </div>
            </div>

            {/* Button Section */}
            <div className="w-full md:w-auto mt-4 md:mt-0 flex justify-end">
                <Link
                    to={`/jobD/${id}`} // Correct path matching the router
                    className="btn btn-primary text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF] px-6 py-3 rounded-lg"
                >
                    View Details
                </Link>


            </div>
        </div>
    );
};

export default AppliedJob;
