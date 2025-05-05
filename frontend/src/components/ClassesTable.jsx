import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const classes = [
  {
    id: 1,
    title: "Machine Learning",
    schedule: "Mon, Wed - 13:00 ~ 14:00",
    totalStudents: 20,
    status: "Active"
  },
  {
    id: 2,
    title: "Engineering Principles",
    schedule: "Tue, Thu - 10:00 ~ 11:30",
    totalStudents: 11,
    status: "Active"
  },
  {
    id: 3,
    title: "Cybersecurity",
    schedule: "Mon, Fri - 15:00 ~ 16:30",
    totalStudents: 7,
    status: "Upcoming"
  },
  {
    id: 4,
    title: "Systems Programming",
    schedule: "Wed, Fri - 09:00 ~ 10:30",
    totalStudents: 16,
    status: "Active"
  },
];

const ClassesTable = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");

  const handleViewCourse = (courseId) => {
    navigate(`/educator/class/${courseId}`);
  };

  const filteredClasses = activeTab === "All" 
    ? classes 
    : classes.filter(cls => cls.status === activeTab);

  return (
    <div className="bg-navy-900 rounded-lg border border-navy-800 overflow-hidden w-full transition-all duration-300">
      {/* Filter Tabs */}
      <div className="flex p-4 border-b border-navy-800 gap-2">
        {["All", "Active", "Upcoming", "Completed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-lg transition-all text-sm font-medium ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-md"
                : "text-gray-400 hover:text-white hover:bg-navy-800"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="p-6 overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="text-left border-b border-navy-800">
              <th className="text-gray-400 font-medium text-md pb-4 px-4">Course</th>
              <th className="text-gray-400 font-medium text-md pb-4 px-4">Schedule</th>
              <th className="text-gray-400 font-medium text-md pb-4 px-4">Students</th>
              <th className="text-gray-400 font-medium text-md pb-4 px-4">Status</th>
              <th className="text-gray-400 font-medium text-md pb-4 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredClasses.map((cls) => (
              <tr
                key={cls.id}
                className="border-b border-navy-800 hover:bg-navy-800/50 transition-colors duration-200 last:border-b-0"
              >
                <td className="py-5 px-4">
                  <div className="flex items-center gap-3">
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-400"></div>
                    <span className="text-white font-medium">{cls.title}</span>
                  </div>
                </td>
                <td className="py-5 text-gray-300 px-4">{cls.schedule}</td>
                <td className="py-5 px-4">
                  <span className="text-white font-medium">{cls.totalStudents}</span>
                </td>
                <td className="py-5 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    cls.status === "Active" ? "bg-green-500/20 text-green-400" :
                    cls.status === "Upcoming" ? "bg-yellow-500/20 text-yellow-400" :
                    "bg-gray-500/20 text-gray-400"
                  }`}>
                    {cls.status}
                  </span>
                </td>
                <td className="py-5 px-4">
                  <button
                    onClick={() => handleViewCourse(cls.id)}
                    className="text-blue-400 hover:text-white hover:bg-blue-600/30 px-4 py-1.5 rounded-md transition-all border border-blue-600/30"
                  >
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClassesTable;
