import React, { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    grade: "",
  });

  const [students, setStudents] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddStudent = () => {
    if (!formData.name || !formData.age || !formData.grade) return;

    setStudents([...students, formData]);
    setFormData({ name: "", age: "", grade: "" });
  };

  const handleClear = () => {
    setFormData({ name: "", age: "", grade: "" });
  };

  const handleRemove = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Student Entry Form</h1>
        <p className="subtitle">Add students and review the list below.</p>

        <div className="form-row">
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="e.g. MS Dhoni"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="e.g. 14"
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Grade</label>
            <select name="grade" value={formData.grade} onChange={handleChange}>
              <option value="">Select grade</option>
              <option value="Class 5">Class 5</option>
              <option value="Class 6">Class 6</option>
              <option value="Class 7">Class 7</option>
              <option value="Class 8">Class 8</option>
            </select>
          </div>
        </div>

        <div className="buttons">
          <button className="add" onClick={handleAddStudent}>
            Add Student
          </button>
          <button className="clear" onClick={handleClear}>
            Clear
          </button>
        </div>

        {students.length === 0 ? (
          <p className="empty">No students added yet.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Grade</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, index) => (
                <tr key={index}>
                  <td>{student.name}</td>
                  <td>{student.age}</td>
                  <td>{student.grade}</td>
                  <td>
                    <button
                      className="remove"
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default App;
