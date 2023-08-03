import axios from "axios";
import { useState, createContext } from "react";

const JobContext = createContext();

export const JobProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [created, setCreated] = useState(null);
  const [updated, setUpdated] = useState(null);
  const [deleted, setDeleted] = useState(null);
  const [applied, setApplied] = useState(false);
  const [paid, setPaid] = useState(false);
  const [approved, setApproved] = useState(false);
  const [rejected, setRejected] = useState(false);
  const [status, setStatus] = useState("");
  const [positionsLeft, setpositionsLeft] = useState("");
  const [stats, setStats] = useState(false);

  // Create a new job
  const newJob = async (data, access_token) => {
    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.API_URL}/api/jobs/new/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (res.data) {
        setLoading(false);
        setCreated(true);
      }
    } catch (error) {
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Update job
  const updateJob = async (id, data, access_token) => {
    try {
      setLoading(true);

      const res = await axios.put(
        `${process.env.API_URL}/api/jobs/${id}/update/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (res.data) {
        setLoading(false);
        setUpdated(true);
      }
    } catch (error) {
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Apply to Job
  const applyToJob = async (id, access_token) => {
    try {
      setLoading(true);

      const res = await axios.post(
        `${process.env.API_URL}/api/jobs/${id}/apply/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      if (res.data.applied === true) {
        setLoading(false);
        setApplied(true);
      }
    } catch (error) {
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Check job applied
  const checkJobApplied = async (id, access_token) => {
    try {
      setLoading(true);

      const res = await axios.get(
        `${process.env.API_URL}/api/jobs/${id}/check/`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      setLoading(false);
      setApplied(res.data);
    } catch (error) {
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Get topic stats
  const getTopicStats = async (topic) => {
    try {
      setLoading(true);

      const res = await axios.get(`${process.env.API_URL}/api/stats/${topic}/`);

      setLoading(false);
      setStats(res.data);
    } catch (error) {
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };

  // Delete job
  const deleteJob = async (id, access_token) => {
    try {
      setLoading(true);

      const res = await axios.delete(
        `${process.env.API_URL}/api/jobs/${id}/delete/`,
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      setLoading(false);
      setDeleted(true);
    } catch (error) {
      setLoading(false);
      setError(
        error.response &&
          (error.response.data.detail || error.response.data.error)
      );
    }
  };



// Approve Application
const approveApplication = async (id, access_token) => {
  try {
    setLoading(true);

    const res = await axios.put(
      `${process.env.API_URL}/api/candidates/${id}/approve/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
 
    setApproved(res.data.isApproved);
    setpositionsLeft(res.data.positionsLeft)
    setLoading(false); 
  } catch (error) {
    setLoading(false);
    setError(
      error.response &&
        (error.response.data.detail || error.response.data.error)
    );
  }
};

//Check is Approved
const checkIsApproved = async (id, access_token) => {
  try {
    setLoading(true);

    const res = await axios.get(
      `${process.env.API_URL}/api/candidates/${id}/isApproved/`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    setLoading(false);
    setApproved(res.data.isApproved);
    setStatus(res.data.status);

    
  } catch (error) {
    setLoading(false);
    setError(
      error.response &&
        (error.response.data.detail || error.response.data.error)
    );
  }
};

//Check is Rejected
const checkIsRejected = async (id, access_token) => {
  try {
    setLoading(true);

    const res = await axios.get(
      `${process.env.API_URL}/api/candidates/${id}/isRejected/`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    setLoading(false);
    setRejected(res.data.isRejected);
    setStatus(res.data.status);

    
  } catch (error) {
    setLoading(false);
    setError(
      error.response &&
        (error.response.data.detail || error.response.data.error)
    );
  }
};

// const checkPositionsLeft = async (id, access_token) => {
//   try {
//     setLoading(true);

//     const res = await axios.get(
//       `${process.env.API_URL}/api/jobs/${id}/checkPositionsLeft/`,
//       {
//         headers: {
//           Authorization: `Bearer ${access_token}`,
//         },
//       }
//     );

//     setLoading(false);
//     setApplied(res.data);
//   } catch (error) {
//     setLoading(false);
//     setError(
//       error.response &&
//         (error.response.data.detail || error.response.data.error)
//     );
//   }
// };



// check Job paid for
const candidateHasPaid = async (id, access_token) => {
  try {
    setLoading(true);

    const res = await axios.get(
      `${process.env.API_URL}/api/candidates/${id}/paid/`,
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (res.data.paid === true) {
      setLoading(false);
      setPaid(res.data.paid);
    }
  } catch (error) {
    setLoading(false);
    setError(
      error.response &&
        (error.response.data.detail || error.response.data.error)
    );
  }
};




  // Clear Errors
  const clearErrors = () => {
    setError(null);
  };

  return (
    <JobContext.Provider
      value={{
        loading,
        error,
        created,
        updated,
        deleted,
        applied,
        paid,
        approved,
        rejected,
        status,
        positionsLeft,
        stats,
        approveApplication,
        setApproved,
        checkIsApproved,
        checkIsRejected,
        newJob,
        updateJob,
        deleteJob,
        getTopicStats,
        applyToJob,
        candidateHasPaid,
        setUpdated,
        setStatus,
        checkJobApplied,
        setCreated,
        setDeleted,
        clearErrors,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};

export default JobContext;
