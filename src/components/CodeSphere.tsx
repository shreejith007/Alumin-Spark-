import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Trophy, Code, Star } from 'lucide-react';
import NavigationControls from './NavigationControls';
import { codingChallenges } from '../data/codingChallenges';

export default function CodeSphere() {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <NavigationControls />
      
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Code className="w-5 h-5 mr-2" />
            Coding Challenges
          </h2>
          <div className="space-y-4">
            {codingChallenges.map((challenge) => (
              <div
                key={challenge.id}
                className="border rounded-lg p-4 hover:border-blue-500 transition-colors cursor-pointer"
                onClick={() => navigate(`/student-dashboard/code-sphere/challenge/${challenge.id}`)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg">{challenge.title}</h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium
                        ${challenge.difficulty === 'Hard' 
                          ? 'bg-red-100 text-red-800'
                          : challenge.difficulty === 'Medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                        }`}
                      >
                        {challenge.difficulty}
                      </span>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                    Solve
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