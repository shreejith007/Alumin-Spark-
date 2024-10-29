import React from 'react';
import { Trophy, ThumbsUp, MessageCircle, Share2, Bookmark } from 'lucide-react';
import NavigationControls from './NavigationControls';

export default function SuccessStories() {
  const stories = [
    {
      id: 1,
      alumni: {
        name: 'Priya Sharma',
        batch: '2018',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
        role: 'Senior Software Engineer at Google',
        location: 'Bangalore'
      },
      title: 'From Campus to Silicon Valley: My Journey to Google',
      content: 'After graduating, I focused on building strong fundamentals in Data Structures and Algorithms. Regular practice on coding platforms and contributing to open source projects helped me land my dream job at Google. Today, I work on cutting-edge AI projects that impact millions of users.',
      likes: 256,
      comments: 43,
      shares: 28,
      tags: ['Technology', 'Career Growth', 'Software Engineering']
    },
    {
      id: 2,
      alumni: {
        name: 'Rajesh Kumar',
        batch: '2019',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
        role: 'Product Manager at Microsoft',
        location: 'Hyderabad'
      },
      title: 'Transitioning from Engineering to Product Management',
      content: 'My journey from being a software engineer to a product manager was challenging but rewarding. Key to my success was understanding user needs and business metrics. The leadership opportunities I took during college helped shape my career path.',
      likes: 189,
      comments: 32,
      shares: 21,
      tags: ['Product Management', 'Career Switch', 'Leadership']
    },
    {
      id: 3,
      alumni: {
        name: 'Ananya Desai',
        batch: '2017',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
        role: 'AI Research Scientist at Amazon',
        location: 'Bangalore'
      },
      title: 'Breaking Barriers in AI Research',
      content: "Pursuing a career in AI research seemed daunting initially, but with persistence and continuous learning, I have contributed to groundbreaking ML models at Amazon. My advice to students: focus on mathematics and stay updated with latest research.",
      likes: 312,
      comments: 56,
      shares: 45,
      tags: ['Artificial Intelligence', 'Research', 'Women in Tech']
    },
    {
      id: 4,
      alumni: {
        name: 'Vikram Singh',
        batch: '2016',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
        role: 'Founder & CEO, TechStart Solutions',
        location: 'Mumbai'
      },
      title: 'Building a Successful Startup from Scratch',
      content: 'Starting my own company was a leap of faith. The entrepreneurship cell at college gave me the initial push. Today, TechStart Solutions serves over 100 enterprise clients. Remember, every big company started small.',
      likes: 423,
      comments: 67,
      shares: 89,
      tags: ['Entrepreneurship', 'Startup', 'Leadership']
    },
    {
      id: 5,
      alumni: {
        name: 'Neha Patel',
        batch: '2020',
        image: 'https://images.unsplash.com/photo-1619085098388-91d096343c88?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
        role: 'Data Scientist at IBM',
        location: 'Pune'
      },
      title: 'Fast-tracking My Career in Data Science',
      content: 'Leveraging college projects and internships, I built a strong portfolio in data science. Participating in kaggle competitions and working on real-world datasets helped me stand out during interviews.',
      likes: 167,
      comments: 29,
      shares: 18,
      tags: ['Data Science', 'Career Tips', 'Technology']
    },
    {
      id: 6,
      alumni: {
        name: 'Arjun Reddy',
        batch: '2015',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
        role: 'Engineering Manager at Adobe',
        location: 'Noida'
      },
      title: 'Leading Engineering Teams at Scale',
      content: 'The transition from developer to engineering manager taught me valuable lessons in leadership. Focus on building soft skills alongside technical expertise. Mentoring juniors can be incredibly rewarding.',
      likes: 234,
      comments: 45,
      shares: 32,
      tags: ['Leadership', 'Engineering', 'Management']
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <NavigationControls />
      
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-6 flex items-center">
            <Trophy className="w-5 h-5 mr-2" />
            Alumni Success Stories
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <div
                key={story.id}
                className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={story.alumni.image}
                      alt={story.alumni.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-gray-900">{story.alumni.name}</h3>
                      <p className="text-sm text-gray-500">{story.alumni.role}</p>
                      <p className="text-sm text-gray-500">{story.alumni.location} • Batch of {story.alumni.batch}</p>
                    </div>
                  </div>

                  <h4 className="text-lg font-semibold mb-2">{story.title}</h4>
                  <p className="text-gray-600 mb-4 line-clamp-4">{story.content}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {story.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="flex space-x-4">
                      <button className="flex items-center text-gray-600 hover:text-blue-600">
                        <ThumbsUp className="w-4 h-4 mr-1" />
                        <span className="text-sm">{story.likes}</span>
                      </button>
                      <button className="flex items-center text-gray-600 hover:text-blue-600">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        <span className="text-sm">{story.comments}</span>
                      </button>
                      <button className="flex items-center text-gray-600 hover:text-blue-600">
                        <Share2 className="w-4 h-4 mr-1" />
                        <span className="text-sm">{story.shares}</span>
                      </button>
                    </div>
                    <button className="text-gray-600 hover:text-blue-600">
                      <Bookmark className="w-4 h-4" />
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