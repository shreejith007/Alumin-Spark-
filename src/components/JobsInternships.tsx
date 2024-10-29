import React, { useState } from 'react';
import { Briefcase, Building2, MapPin, Clock } from 'lucide-react';
import NavigationControls from './NavigationControls';
import JobApplicationForm from './JobApplicationForm';

export default function JobsInternships() {
  const [selectedJob, setSelectedJob] = useState(null);
  
  const listings = [
    {
      id: 1,
      title: 'Software Engineer Intern',
      company: 'Google',
      location: 'Bangalore, India',
      type: 'Internship',
      duration: '6 months',
      posted: '2d ago',
      skills: ['React', 'Node.js', 'TypeScript'],
      description: 'Join our dynamic team to work on cutting-edge technologies...',
      requirements: [
        'Currently pursuing B.Tech/BE in Computer Science',
        'Strong programming fundamentals',
        'Experience with web technologies'
      ],
      stipend: '₹60,000/month'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Microsoft',
      location: 'Hyderabad, India',
      type: 'Full-time',
      posted: '1w ago',
      skills: ['Angular', 'Python', 'AWS'],
      description: 'Looking for experienced developers to join our cloud team...',
      requirements: [
        'B.Tech/BE in Computer Science',
        '2+ years of experience',
        'Strong problem-solving skills'
      ],
      salary: '₹18-25 LPA'
    },
    {
      id: 3,
      title: 'Data Science Intern',
      company: 'Amazon',
      location: 'Bangalore, India',
      type: 'Internship',
      duration: '3 months',
      posted: '3d ago',
      skills: ['Python', 'Machine Learning', 'SQL'],
      description: 'Work on real-world data science projects...',
      requirements: [
        'Currently pursuing Masters in Data Science/ML',
        'Strong statistical knowledge',
        'Programming experience in Python'
      ],
      stipend: '₹50,000/month'
    }
  ];

  if (selectedJob) {
    return <JobApplicationForm job={selectedJob} onBack={() => setSelectedJob(null)} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <NavigationControls />
      
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Briefcase className="w-5 h-5 mr-2" />
            Jobs & Internships
          </h2>
          <div className="space-y-6">
            {listings.map((listing) => (
              <div
                key={listing.id}
                className="border rounded-lg p-6 hover:border-blue-500 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-medium">{listing.title}</h3>
                    <div className="mt-2 space-y-2">
                      <p className="flex items-center text-gray-600">
                        <Building2 className="w-4 h-4 mr-2" />
                        {listing.company}
                      </p>
                      <p className="flex items-center text-gray-600">
                        <MapPin className="w-4 h-4 mr-2" />
                        {listing.location}
                      </p>
                      {listing.duration && (
                        <p className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          {listing.duration}
                        </p>
                      )}
                    </div>
                    
                    <div className="mt-4">
                      <h4 className="font-medium">Requirements:</h4>
                      <ul className="list-disc list-inside mt-2 text-gray-600">
                        {listing.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-medium">Description:</h4>
                      <p className="text-gray-600 mt-2">{listing.description}</p>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-medium">Required Skills:</h4>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {listing.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {(listing.stipend || listing.salary) && (
                      <div className="mt-4">
                        <h4 className="font-medium">Compensation:</h4>
                        <p className="text-gray-600 mt-2">
                          {listing.stipend || listing.salary}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {listing.type}
                    </span>
                    <span className="text-sm text-gray-500 mt-2">
                      {listing.posted}
                    </span>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <button 
                    onClick={() => setSelectedJob(listing)}
                    className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}