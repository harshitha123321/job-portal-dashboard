import { useNavigate } from "react-router-dom";

function Jobs() {
  const navigate = useNavigate();

  const jobList = [
    { id: 1, company: "Cognizant", role: "Software Engineer" },
    { id: 2, company: "Capgemini", role: "React Developer" },
    { id: 3, company: "TCS", role: "Frontend Engineer" }
  ];

  const applyJob = (job) => {
    // Save applied job in localStorage
    const existing = JSON.parse(localStorage.getItem("appliedJobs")) || [];
    localStorage.setItem("appliedJobs", JSON.stringify([...existing, job]));

    alert("Job applied successfully!");

    // Navigate to Dashboard
    navigate("/dashboard");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Available Jobs</h2>
      {jobList.map((job) => (
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
          <button onClick={() => applyJob(job)}>Apply</button>
        </div>
      ))}
    </div>
  );
}

export default Jobs;