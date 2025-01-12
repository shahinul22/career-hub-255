import React from 'react';

import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, job_title, logo, company_name, remote_or_onsite, location, job_type, salary } = job;

    return (
        <div className=" mx-4  mt-10">
            <div className="card bg-base-100 text-left shadow-xl shadow-gray-600 h-full flex flex-col">
                {/* Image container */}
                <div className="h-32 flex items-center justify-start p-4 border-b">
                    <img
                        className="max-h-full object-contain"
                        src={logo}
                        alt={job_title}
                    />
                </div>

                {/* Card content */}
                <div className="card-body flex flex-col flex-1 space-y-1">
                    <h2 className="text-gray-700 text-2xl font-bold">{job_title}</h2>
                    <p className="text-gray-500 font-semibold text-xl">{company_name}</p>
                    <div className="flex items-center gap-3">
                        <div className=" py-2 px-4 border-2  border-[#9873FF] text-[#9873FF] font-medium rounded-xl">
                            {remote_or_onsite}
                        </div>
                        <div className="py-2 px-4 border-2 border-[#9873FF] text-[#9873FF] font-medium rounded-xl">
                            {job_type}
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex gap-2 items-center text-gray-600 font-semibold text-xl">
                            <IoLocationOutline />
                            {location}
                        </div>
                        <div className="flex gap-2 items-center text-gray-600 font-semibold text-xl">
                            <CiDollar />
                            {salary}
                        </div>
                    </div>
                    <div className="card-actions justify-start">
                        <Link to={`/jobD/${id}`}>
                            <button className="btn btn-primary text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;
