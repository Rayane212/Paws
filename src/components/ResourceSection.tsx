import React from 'react';
import { BookOpen, AlertTriangle, Phone, FileText } from 'lucide-react';

interface Resource {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ResourceSection: React.FC = () => {
  const resources: Resource[] = [
    {
      id: 1,
      icon: <BookOpen className="h-8 w-8 text-amber-600" />,
      title: "Educational Materials",
      description: "Learn about the signs of cat abuse and how to identify cats in distress."
    },
    {
      id: 2,
      icon: <AlertTriangle className="h-8 w-8 text-red-600" />,
      title: "Report Abuse",
      description: "Find out how to properly document and report suspected animal abuse cases."
    },
    {
      id: 3,
      icon: <Phone className="h-8 w-8 text-green-600" />,
      title: "Emergency Contacts",
      description: "Access emergency hotlines and local resources for immediate assistance."
    },
    {
      id: 4,
      icon: <FileText className="h-8 w-8 text-blue-600" />,
      title: "Legislative Information",
      description: "Stay informed about animal welfare laws and advocacy opportunities."
    }
  ];

  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 text-center">Resources</h2>
        <p className="text-center text-xl mb-12 max-w-2xl mx-auto">
          Access these resources to help identify, report, and prevent cat abuse in your community.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource) => (
            <div key={resource.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4 flex justify-center">
                {resource.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">{resource.title}</h3>
              <p className="text-gray-700 text-center">{resource.description}</p>
              <div className="mt-6 text-center">
                <a 
                  href="#" 
                  className="text-amber-700 font-semibold hover:text-amber-800 transition-colors"
                >
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceSection;