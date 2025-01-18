import React, { useState } from 'react';
import { BookOpen, ArrowRight, Star, Sparkles, Book } from 'lucide-react';

const Articles = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const articles = [
    {
      title: "Green Web Design: Bridging Tech And Sustainability",
      excerpt: "As the internet continues to grow, so does its ecological footprint. We have largely contributed to the immense energy consumption of data centers, which power online services and websites. However, web developers can make a difference. In this article, we embark on a profound journey to explore the environmental impact of web development and stress the pressing need for sustainable practices in this dynamic landscape.",
      imageUrl: "https://blog.openreplay.com/images/green-web-design--tech-and-sustainability/images/hero.png",
      link: "https://blog.openreplay.com/green-web-design--tech-and-sustainability/",
      icon: "🌱",
      category: "Sustainability"
    },
    {
      title: "Advanced Animation Techniques for Flutter: A Guide",
      excerpt: "Animations play a crucial role in enhancing the user experience and improving an application's UI's overall look and feel. They help convey changes, transitions, and interactions more engagingly and intuitively. They can make your app feel more responsive, provide visual feedback to user actions, guide users' attention, and create a more polished and professional appearance.",
      imageUrl: "https://blog.openreplay.com/images/advanced-animation-techniques-for-flutter--a-guide/images/hero.png",
      link: "https://blog.openreplay.com/advanced-animation-techniques-for-flutter--a-guide/",
      icon: "✨",
      category: "Development"
    },
    {
      title: "Mamaput Hub: Appwrite Hashnode Hackathon",
      excerpt: "What happens when food and code come together? An epic fusion of Appwrite and Nigerian delicacy unveiled with Mamaput Hub! Are you a food lover or a culinary enthusiast? Do you love cooking, creating recipes, and experimenting from time to time with food? Then Mamaput Hub is the only web app you will ever need!",
      imageUrl: "https://cdn.hashnode.com/res/hashnode/image/upload/v1685505392886/aabd1db6-f7c1-4a49-8427-e318171351d5.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
      link: "https://itsjustchioma.hashnode.dev/mamaput-hub-appwrite-hashnode-hackathon",
      icon: "🍳",
      category: "Project"
    }
  ];

  return (
    <section className="bg-gradient-to-b from-gray-900 to-black py-24 relative overflow-hidden min-h-screen">
      {/* Animated constellation background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(98,0,255,0.1),transparent_50%)]" />
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              backgroundColor: `rgba(${Math.random() * 155 + 100}, ${Math.random() * 100}, 255, ${Math.random() * 0.5 + 0.1})`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Enhanced header section */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 blur-xl animate-pulse" />
            <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 px-8 py-4 rounded-2xl">
              <div className="flex items-center justify-center space-x-3">
                <Book className="text-purple-500 animate-spin-slow" size={24} />
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                  Knowledge Chronicle
                </h1>
              </div>
              <p className="text-gray-400 mt-2 font-mono">Exploring the Digital Frontier</p>
            </div>
          </div>
        </div>

        {/* Articles grid with enhanced layout */}
        <div className="space-y-12">
          {articles.map((article, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className={`relative bg-gray-800/30 backdrop-blur-sm rounded-3xl border border-gray-700/50 overflow-hidden
                  transform transition-all duration-500 ${hoveredIndex === index ? 'scale-[1.02] shadow-xl shadow-purple-500/20' : ''}`}
                >
                  {/* Category badge */}
                  <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-700">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl">{article.icon}</span>
                      <span className="text-purple-400 font-medium">{article.category}</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8 p-8">
                    {/* Image section */}
                    <div className="relative group">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        className="w-full h-[300px] object-cover rounded-xl transform transition-all duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Content section */}
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                        {article.title}
                      </h2>
                      <p className="text-gray-400 leading-relaxed line-clamp-4">
                        {article.excerpt}
                      </p>
                      <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500
                        text-white font-medium rounded-xl transition-all duration-300
                        hover:from-purple-600 hover:to-blue-600 hover:shadow-lg hover:shadow-purple-500/20"
                      >
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute bottom-4 right-4">
                    <Sparkles className="text-purple-500/30 animate-pulse" size={24} />
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;