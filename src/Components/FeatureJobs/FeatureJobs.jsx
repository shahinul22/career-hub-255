import React, { useEffect, useState } from 'react';
import Job from '../Job/Job';

const FeatureJobs = () => {
    const [jobs, setJobs] = useState([]); // State to store the fetched jobs
    const [loading, setLoading] = useState(true); // State to manage the loading state
    const [error, setError] = useState(null); // State to handle errors
    const [cardNum, setCardNum] = useState(4); // State for visible job cards

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch('jobs.json'); // Replace with your API URL
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const result = await response.json();
                setJobs(result); // Update jobs state
            } catch (err) {
                setError(err.message); // Update error state if fetching fails
            } finally {
                setLoading(false); // Stop the loading spinner
            }
        };

        fetchJobs(); // Call the async function to fetch jobs
    }, []); // Empty dependency array to fetch jobs only once when the component mounts

    if (loading) return <p>Loading...</p>; // Show a loading message while jobs are being fetched
    if (error) return <p>Error: {error}</p>; // Show an error message if something goes wrong

    return (
        <div className="items-center">
            {/* Header */}
            <div className="text-center">
                <h2 className="text-5xl font-bold mb-4">Featured Jobs: {jobs.length}</h2>
                <p className="text-gray-600">Explore thousands of job opportunities with all the information you need. It’s your future!</p>
            </div>

            {/* Job Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {jobs.slice(0, cardNum).map((job) => (
                    <Job key={job.id} job={job} />
                ))}
            </div>

            {/* See All Button */}
            {cardNum < jobs.length && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={() => setCardNum(jobs.length)}
                        className="btn px-7 text-2xl btn-primary text-white bg-gradient-to-r from-[#7E90FE] to-[#9873FF]"
                    >
                        See All
                    </button>
                </div>
            )}
        </div>
    );
};

export default FeatureJobs;
