import React from 'react';
import { Table, FileSpreadsheet, Download, Eye, X } from 'lucide-react';

export default function AdminDashboard() {
  const applications = [
    {
      id: 1,
      applicantName: 'Rahul Sharma',
      position: 'Software Engineer Intern',
      company: 'Google',
      appliedDate: '2024-03-15',
      status: 'Under Review',
      email: 'rahul.s@example.com',
      phone: '+91 98765 43210'
    },
    {
      id: 2,
      applicantName: 'Priya Patel',
      position: 'Full Stack Developer',
      company: 'Microsoft',
      appliedDate: '2024-03-14',
      status: 'Shortlisted',
      email: 'priya.p@example.com',
      phone: '+91 98765 43211'
    },
    {
      id: 3,
      applicantName: 'Ayush  Patel',
      position: 'Full Stack Developer',
      company: 'Microsoft',
      appliedDate: '2024-03-14',
      status: 'Shortlisted',
      email: 'priya.p@example.com',
      phone: '+91 98765 43211'
    },
    // Add more applications
  ];

  const handleExport = () => {
    // In production, this would export to Excel
    console.log('Exporting to Excel...');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold flex items-center">
              <Table className="w-5 h-5 mr-2" />
              Job Applications Dashboard
            </h2>
            <button
              onClick={handleExport}
              className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
            >
              <FileSpreadsheet className="w-4 h-4" />
              Export to Excel
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applicant
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Position
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Company
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Applied Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {applications.map((application) => (
                  <tr key={application.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {application.applicantName}
                      </div>
                      <div className="text-sm text-gray-500">
                        {application.email}
                      </div>
                      <div className="text-sm text-gray-500">
                        {application.phone}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {application.position}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {application.company}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {application.appliedDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                        ${application.status === 'Shortlisted' 
                          ? 'bg-green-100 text-green-800'
                          : application.status === 'Rejected'
                          ? 'bg-red-100 text-red-800'
                          : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {application.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="text-green-600 hover:text-green-900">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}