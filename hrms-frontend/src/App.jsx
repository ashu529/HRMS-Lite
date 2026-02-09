import { useEffect, useState } from "react";
import axios from "axios";

const API = "https://hrms-lite-qfga.onrender.com/api";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({
    employeeId: "",
    fullName: "",
    email: "",
    department: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadEmployees = async () => {
    try {
      const res = await axios.get(`${API}/employees`);
      setEmployees(res.data);
    } catch {
      setError("Failed to load employees");
    }
  };

  useEffect(() => {
    loadEmployees();
  }, []);

  const addEmployee = async () => {
    setError("");
    setLoading(true);
    try {
      await axios.post(`${API}/employees`, form);
      setForm({
        employeeId: "",
        fullName: "",
        email: "",
        department: ""
      });
      loadEmployees();
    } catch (err) {
      setError(err.response?.data?.error || "Error adding employee");
    }
    setLoading(false);
  };

  const deleteEmployee = async (id) => {
    await axios.delete(`${API}/employees/${id}`);
    loadEmployees();
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>HRMS Lite</h1>
        <p style={styles.subtitle}>Employee Management Dashboard</p>

        {/* Add Employee Card */}
        <div style={styles.card}>
          <h3>Add Employee</h3>

          <input
            style={styles.input}
            placeholder="Employee ID"
            value={form.employeeId}
            onChange={(e) =>
              setForm({ ...form, employeeId: e.target.value })
            }
          />
          <input
            style={styles.input}
            placeholder="Full Name"
            value={form.fullName}
            onChange={(e) =>
              setForm({ ...form, fullName: e.target.value })
            }
          />
          <input
            style={styles.input}
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          <input
            style={styles.input}
            placeholder="Department"
            value={form.department}
            onChange={(e) =>
              setForm({ ...form, department: e.target.value })
            }
          />

          <button style={styles.primaryBtn} onClick={addEmployee} disabled={loading}>
            {loading ? "Adding..." : "Add Employee"}
          </button>

          {error && <p style={styles.error}>{error}</p>}
        </div>

        {/* Employee List */}
        <div style={styles.card}>
          <h3>Employees</h3>

          {employees.length === 0 ? (
            <p style={styles.empty}>No employees found</p>
          ) : (
            <table style={styles.table}>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp) => (
                  <tr key={emp.employeeId}>
                    <td>{emp.fullName}</td>
                    <td>{emp.department}</td>
                    <td>
                      <button
                        style={styles.dangerBtn}
                        onClick={() => deleteEmployee(emp.employeeId)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#0f172a",
    display: "flex",
    justifyContent: "center",
    padding: "40px"
  },
  container: {
    width: "100%",
    maxWidth: "900px",
    color: "#e5e7eb",
    fontFamily: "Inter, Arial, sans-serif"
  },
  title: {
    fontSize: "32px",
    marginBottom: "4px"
  },
  subtitle: {
    color: "#94a3b8",
    marginBottom: "30px"
  },
  card: {
    background: "#020617",
    padding: "24px",
    borderRadius: "12px",
    marginBottom: "24px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)"
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "6px",
    border: "1px solid #334155",
    background: "#020617",
    color: "#e5e7eb"
  },
  primaryBtn: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#2563eb",
    color: "white",
    fontWeight: "600",
    cursor: "pointer"
  },
  dangerBtn: {
    padding: "6px 12px",
    borderRadius: "6px",
    border: "none",
    background: "#dc2626",
    color: "white",
    cursor: "pointer"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "12px"
  },
  error: {
    color: "#f87171",
    marginTop: "10px"
  },
  empty: {
    color: "#94a3b8"
  }
};
