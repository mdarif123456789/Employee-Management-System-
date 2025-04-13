// EditEmployee.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    title: '',
    department: '',
    role: '',
  });

  useEffect(() => {
    async function fetchEmployee() {
      try {
        const res = await fetch(`http://localhost:3000/api/v1/getUser/${id}`);
        const data = await res.json();
        if (res.ok) {
          setEmployee(data.data);
        } else {
          alert('Failed to fetch employee');
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/v1/updateUser/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      });

      const data = await res.json();
      if (res.ok) {
        alert('Employee updated successfully!');
        navigate('/');
      } else {
        alert(data.message || 'Failed to update');
      }
    } catch (error) {
      console.error(error)
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 px-4">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-xl transition-all duration-300">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Edit Employee</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              placeholder="Enter name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              placeholder="Enter email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={employee.title}
              onChange={handleChange}
              placeholder="e.g. Software Engineer"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Department</label>
            <input
              type="text"
              name="department"
              value={employee.department}
              onChange={handleChange}
              placeholder="e.g. IT"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Role</label>
            <input
              type="text"
              name="role"
              value={employee.role}
              onChange={handleChange}
              placeholder="e.g. Manager"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition duration-300 shadow-md"
          >
            Update Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditEmployee;
