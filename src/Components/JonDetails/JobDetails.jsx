import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { PiShoppingBagOpenLight } from "react-icons/pi";
import { CiDollar } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getStoredJobApplication, saveJobApplication } from "../../Utility/locatStorage";

const JobDetails = () => {
    const jobs = useLoaderData() || []; // Ensure loader data is always an array
    const { id } = useParams();
    const jobId = parseInt(id, 10);

    const job = Array.isArray(jobs) ? jobs.find((job) => job.id === jobId) : null; // Check if jobs is an array

    if (!job) {
        return (
            <div className="text-center text-red-500 font-bold mt-10">
                No job found with ID: {id}
            </div>
        );
    }

    const {
        job_description = "Not Available",
        job_responsibility = "Not Available",
        educational_requirements = "Not Available",
        experiences = "Not Available",
        contact_information = {},
        job_title = "Unknown Title",
        salary = "Negotiable",
        location = "Not Available",
    } = job;

    const { phone = "Not Available", email = "Not Available" } = contact_information;

    const handleApplyNow = () => {
        const appliedJobs = getStoredJobApplication();
        if (!appliedJobs.includes(jobId)) {
            saveJobApplication(jobId);
            toast.success("Application submitted successfully!");
        } else {
            toast.warn("You have already applied!");
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Section */}
                <div className="col-span-2 space-y-6">
                    <div className="p-6 bg-white rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">{job_title}</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Job Description:</h3>
                                <p className="text-gray-600 text-sm">{job_description}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Job Responsibility:</h3>
                                <p className="text-gray-600 text-sm">{job_responsibility}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Educational Requirements:</h3>
                                <p className="text-gray-600 text-sm">{educational_requirements}</p>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-gray-700">Experience:</h3>
                                <p className="text-gray-600 text-sm">{experiences}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="space-y-6">
                    {/* Job Details */}
                    <div className="p-6 bg-indigo-50 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Job Details</h3>
                        <div className="space-y-4">
                            <div className="flex items-center text-gray-700">
                                <CiDollar className="text-xl text-indigo-500 mr-2" />
                                <span className="font-medium">Salary:</span> {salary}
                            </div>
                            <div className="flex items-center text-gray-700">
                                <PiShoppingBagOpenLight className="text-xl text-indigo-500 mr-2" />
                                <span className="font-medium">Title:</span> {job_title}
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="p-6 bg-indigo-50 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
                        <div className="space-y-4">
                            <div className="flex items-center text-gray-700">
                                <LuPhone className="text-xl text-indigo-500 mr-2" />
                                <span className="font-medium">Phone:</span> {phone}
                            </div>
                            <div className="flex items-center text-gray-700">
                                <PiShoppingBagOpenLight className="text-xl text-indigo-500 mr-2" />
                                <span className="font-medium">Email:</span> {email}
                            </div>
                            <div className="flex items-center text-gray-700">
                                <IoLocationOutline className="text-xl text-indigo-500 mr-2" />
                                <span className="font-medium">Location:</span> {location}
                            </div>
                        </div>
                    </div>

                    {/* Apply Button */}
                    <button
                        onClick={handleApplyNow}
                        className="w-full py-3 text-white bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg shadow-md font-semibold hover:opacity-90"
                    >
                        Apply Now
                    </button>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default JobDetails;
