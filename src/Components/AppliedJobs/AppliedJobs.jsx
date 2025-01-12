import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredJobApplication } from '../../Utility/locatStorage';
import AppliedJob from '../AppliedJob/AppliedJob';
import { IoIosArrowDown } from "react-icons/io";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [appliedJob, setAppliedJob] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState(false); // State to track dropdown visibility

    const handleJobsFilter = (filter) => {
        if (filter === 'all') {
            setDisplayJobs(appliedJob);
        } else if (filter === 'remote') {
            const remoteJobs = appliedJob.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        } else if (filter === 'onsite') {
            const onsiteJobs = appliedJob.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
        setDropdownOpen(false); // Close the dropdown after selecting a filter
    };

    useEffect(() => {
        const storedJobsId = getStoredJobApplication();
        if (storedJobsId.length > 0) {
            const appliedJobs = jobs.filter(job => storedJobsId.includes(job.id));
            setAppliedJob(appliedJobs);
            setDisplayJobs(appliedJobs);
        }
    }, [jobs]);

    return (
        <div>
            <h3>Applied jobs {appliedJob.length}</h3>
            <div className="flex justify-end">
                <div className="relative">
                    <button
                        className="btn m-1 flex items-center"
                        onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown visibility
                    >
                        <IoIosArrowDown className="mr-2" /> Filter by
                    </button>
                    {dropdownOpen && ( // Show dropdown if `dropdownOpen` is true
                        <ul className="menu absolute gap-2 right-0 mt-2 bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li
                                className="bg-gray-400 text-xl border-green-400 rounded-2xl text-center p-2 text-white cursor-pointer"
                                onClick={() => handleJobsFilter('all')}
                            >
                                All
                            </li>
                            <li
                                className="bg-gray-400 text-xl border-green-400 rounded-2xl text-center p-2 text-white cursor-pointer"
                                onClick={() => handleJobsFilter('remote')}
                            >
                                Remote
                            </li>
                            <li
                                className="bg-gray-400 text-xl border-green-400 rounded-2xl text-center p-2 text-white cursor-pointer"
                                onClick={() => handleJobsFilter('onsite')}
                            >
                                Onsite
                            </li>
                        </ul>
                    )}
                </div>
            </div>

            <div className="space-y-4">
                {displayJobs.map((job) => (
                    <AppliedJob key={job.id} job={job} />
                ))}
            </div>
        </div>
    );
};

export default AppliedJobs;
