const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-application');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
};

const saveJobApplication = id => {
    const storedJobApplication = getStoredJobApplication();
    if (!storedJobApplication.includes(id)) { // Check if ID already exists
        storedJobApplication.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplication));
    }
};

export { saveJobApplication, getStoredJobApplication };
