import { useState, useEffect } from "react";

function Dashboard() {
  const [appliedJobs, setAppliedJobs] = useState([]);

  // Load applied jobs from localStorage
  useEffect(() => {
    const jobs = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    setAppliedJobs(jobs);
  }, []);

  // Delete a job
  const deleteJob = (id) => {
    const filtered = appliedJobs.filter((job) => job.id !== id);
    setAppliedJobs(filtered);
    localStorage.setItem("appliedJobs", JSON.stringify(filtered));
  };

  // Edit job role (simple example)
  const editJob = (id) => {
    const newRole = prompt("Enter new role:");
    if (!newRole) return;

    const updated = appliedJobs.map((job) =>
      job.id === id ? { ...job, role: newRole } : job
    );
    setAppliedJobs(updated);
    localStorage.setItem("appliedJobs", JSON.stringify(updated));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Dashboard - Applied Jobs</h2>
      {appliedJobs.length === 0 ? (
        <p>No jobs applied yet!</p>
      ) : (
        appliedJobs.map((job) => (
          <div
            key={job.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              margin: "10px",
              width: "300px",
            }}
          >
            <h3>{job.company}</h3>
            <p>{job.role}</p>
            <button onClick={() => editJob(job.id)} style={{ marginRight: "5px" }}>
              Edit
            </button>
            <button onClick={() => deleteJob(job.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default Dashboard;