import React, { useState } from 'react';
import { BookOpen, Download, ExternalLink, Search, Filter, SortAsc } from 'lucide-react';
import NavigationControls from './NavigationControls';

export default function ResearchPapers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const papers = [
    {
      id: 1,
      title: 'Deep Learning Approaches in Healthcare: A Comprehensive Survey',
      authors: ['Dr. Priya Sharma', 'Dr. Rajesh Kumar'],
      institution: 'Indian Institute of Technology, Delhi',
      journal: 'IEEE Transactions on AI in Healthcare',
      year: 2023,
      category: 'Artificial Intelligence',
      abstract: 'This comprehensive survey explores the applications of deep learning in healthcare, focusing on diagnostic accuracy, patient care optimization, and predictive analytics...',
      keywords: ['Deep Learning', 'Healthcare', 'AI', 'Medical Diagnosis'],
      citations: 45,
      downloads: 1234
    },
    {
      id: 2,
      title: 'Sustainable Smart Cities: IoT-Based Infrastructure Management',
      authors: ['Dr. Amit Patel', 'Prof. Sarah Johnson'],
      institution: 'Indian Institute of Science, Bangalore',
      journal: 'Smart Cities Journal',
      year: 2023,
      category: 'IoT',
      abstract: 'This research presents a novel framework for managing smart city infrastructure using IoT devices, focusing on energy efficiency and sustainable development...',
      keywords: ['IoT', 'Smart Cities', 'Sustainability', 'Infrastructure'],
      citations: 32,
      downloads: 876
    },
    {
      id: 3,
      title: 'Quantum Computing Applications in Cryptography',
      authors: ['Dr. Vikram Singh', 'Dr. Lisa Chen'],
      institution: 'Indian Institute of Technology, Bombay',
      journal: 'Journal of Quantum Computing',
      year: 2024,
      category: 'Quantum Computing',
      abstract: 'This paper explores the implications of quantum computing on modern cryptographic systems and proposes quantum-resistant encryption methods...',
      keywords: ['Quantum Computing', 'Cryptography', 'Security'],
      citations: 28,
      downloads: 654
    },
    {
      id: 4,
      title: 'Machine Learning for Climate Change Prediction',
      authors: ['Dr. Ananya Desai', 'Prof. Michael Brown'],
      institution: 'Indian Institute of Science, Bangalore',
      journal: 'Environmental Data Science',
      year: 2023,
      category: 'Machine Learning',
      abstract: 'A novel machine learning approach for predicting climate change patterns using satellite data and historical weather records...',
      keywords: ['Machine Learning', 'Climate Change', 'Prediction Models'],
      citations: 56,
      downloads: 1432
    },
    {
      id: 5,
      title: 'Blockchain Technology in Supply Chain Management',
      authors: ['Dr. Rahul Mehta', 'Dr. Emma Wilson'],
      institution: 'Indian Institute of Technology, Madras',
      journal: 'Journal of Supply Chain Management',
      year: 2024,
      category: 'Blockchain',
      abstract: 'This research demonstrates the implementation of blockchain technology in supply chain management, focusing on transparency and traceability...',
      keywords: ['Blockchain', 'Supply Chain', 'Logistics'],
      citations: 19,
      downloads: 567
    },
    {
      id: 6,
      title: 'Neural Networks in Natural Language Processing',
      authors: ['Dr. Sanjay Kumar', 'Prof. David Lee'],
      institution: 'Indian Institute of Technology, Kanpur',
      journal: 'Computational Linguistics Journal',
      year: 2023,
      category: 'Artificial Intelligence',
      abstract: 'An innovative approach to natural language processing using advanced neural network architectures...',
      keywords: ['NLP', 'Neural Networks', 'AI'],
      citations: 67,
      downloads: 2134
    },
    {
      id: 7,
      title: 'Cybersecurity in Cloud Computing Environments',
      authors: ['Dr. Neha Patel', 'Dr. John Smith'],
      institution: 'Indian Institute of Science, Bangalore',
      journal: 'Journal of Cloud Security',
      year: 2024,
      category: 'Security',
      abstract: 'A comprehensive analysis of security challenges and solutions in modern cloud computing environments...',
      keywords: ['Cloud Computing', 'Cybersecurity', 'Network Security'],
      citations: 23,
      downloads: 789
    },
    {
      id: 8,
      title: 'Edge Computing for IoT Applications',
      authors: ['Dr. Arjun Reddy', 'Prof. Maria Garcia'],
      institution: 'Indian Institute of Technology, Hyderabad',
      journal: 'Edge Computing Review',
      year: 2023,
      category: 'IoT',
      abstract: 'This paper presents novel approaches to edge computing in IoT applications, focusing on latency reduction and efficiency...',
      keywords: ['Edge Computing', 'IoT', 'Performance'],
      citations: 41,
      downloads: 987
    },
    {
      id: 9,
      title: 'Big Data Analytics in Healthcare Systems',
      authors: ['Dr. Meera Shah', 'Dr. Robert Johnson'],
      institution: 'All India Institute of Medical Sciences',
      journal: 'Healthcare Informatics Journal',
      year: 2024,
      category: 'Big Data',
      abstract: 'An analysis of big data applications in healthcare systems, focusing on patient care optimization and resource management...',
      keywords: ['Big Data', 'Healthcare', 'Analytics'],
      citations: 34,
      downloads: 876
    },
    {
      id: 10,
      title: 'Artificial Intelligence in Autonomous Vehicles',
      authors: ['Dr. Karthik Raman', 'Prof. Sarah Williams'],
      institution: 'Indian Institute of Technology, Chennai',
      journal: 'Autonomous Systems Journal',
      year: 2023,
      category: 'Artificial Intelligence',
      abstract: 'This research explores AI applications in autonomous vehicle navigation and decision-making systems...',
      keywords: ['AI', 'Autonomous Vehicles', 'Navigation'],
      citations: 89,
      downloads: 2345
    }
  ];

  const categories = ['all', ...new Set(papers.map(paper => paper.category))];

  const filteredPapers = papers.filter(paper => {
    const matchesSearch = paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.authors.join(' ').toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.keywords.join(' ').toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || paper.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <NavigationControls />
      
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <BookOpen className="w-5 h-5 mr-2" />
            Research Papers
          </h2>

          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by title, author, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-6">
            {filteredPapers.map((paper) => (
              <div
                key={paper.id}
                className="border rounded-lg p-6 hover:border-blue-500 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-blue-600 hover:text-blue-800">
                      {paper.title}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {paper.authors.join(', ')}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {paper.institution} • {paper.journal} • {paper.year}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {paper.category}
                  </span>
                </div>

                <p className="text-gray-600 mt-4">{paper.abstract}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {paper.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-2 py-1 rounded-full bg-gray-100 text-gray-600 text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>{paper.citations} citations</span>
                    <span>{paper.downloads} downloads</span>
                  </div>
                  <div className="flex space-x-2">
                    <button className="flex items-center px-3 py-1 rounded-md bg-blue-100 text-blue-800 hover:bg-blue-200">
                      <Download className="w-4 h-4 mr-1" />
                      PDF
                    </button>
                    <button className="flex items-center px-3 py-1 rounded-md bg-green-100 text-green-800 hover:bg-green-200">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Cite
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}