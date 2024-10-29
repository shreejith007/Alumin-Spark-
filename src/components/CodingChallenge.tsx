import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Play, CheckCircle, AlertCircle } from 'lucide-react';
import NavigationControls from './NavigationControls';
import { codingChallenges } from '../data/codingChallenges';

export default function CodingChallenge() {
  const { id } = useParams();
  const [code, setCode] = useState('');
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState<'idle' | 'running' | 'success' | 'error'>('idle');

  const challenge = codingChallenges.find(c => c.id === id);

  useEffect(() => {
    if (challenge) {
      setCode(challenge.starterCode);
    }
  }, [challenge]);

  const handleRun = () => {
    setStatus('running');
    try {
      // In production, this would be handled by a secure backend
      const testFunction = new Function('return ' + code)();
      const results = challenge?.testCases.map(test => {
        const input = JSON.parse(`[${test.input}]`);
        const result = testFunction(...input);
        return {
          input: test.input,
          expected: test.output,
          actual: JSON.stringify(result),
          passed: JSON.stringify(result) === test.output
        };
      });
      
      setOutput(JSON.stringify(results, null, 2));
      setStatus(results?.every(r => r.passed) ? 'success' : 'error');
    } catch (error) {
      setOutput(error.toString());
      setStatus('error');
    }
  };

  if (!challenge) return <div>Challenge not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <NavigationControls />
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">{challenge.title}</h2>
        <span className={`px-3 py-1 rounded-full text-sm font-medium
          ${challenge.difficulty === 'Hard' 
            ? 'bg-red-100 text-red-800'
            : challenge.difficulty === 'Medium'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-green-100 text-green-800'
          }`}
        >
          {challenge.difficulty}
        </span>

        <div className="mt-6 prose max-w-none">
          <h3 className="text-lg font-semibold">Problem Statement</h3>
          <p className="text-gray-600">{challenge.description}</p>

          <div className="mt-4">
            <h4 className="font-semibold">Test Cases:</h4>
            {challenge.testCases.map((test, index) => (
              <div key={index} className="mt-2">
                <p className="font-medium">Input: {test.input}</p>
                <p className="font-medium">Expected Output: {test.output}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Code Editor</h3>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-96 font-mono p-4 bg-gray-50 rounded-md border focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Write your solution here..."
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Output</h3>
            <div className="h-96 bg-gray-50 rounded-md border p-4 overflow-auto">
              {status === 'running' && (
                <div className="flex items-center text-yellow-600">
                  <AlertCircle className="w-5 h-5 mr-2" />
                  Running tests...
                </div>
              )}
              {status === 'success' && (
                <div className="flex items-center text-green-600">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  All test cases passed!
                </div>
              )}
              <pre className="mt-2 font-mono text-sm">{output}</pre>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={handleRun}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Play className="w-4 h-4" />
            Run Code
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
            Submit Solution
          </button>
        </div>
      </div>
    </div>
  );
}