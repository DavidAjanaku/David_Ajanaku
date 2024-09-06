import React from "react";

const articles = [
  {
    title: "Green Web Design: Bridging Tech And Sustainability",
    excerpt:
      "As the internet continues to grow, so does its ecological footprint. We have largely contributed to the immense energy consumption of data centers, which power online services and websites. However, web developers can make a difference. In this article, we embark on a profound journey to explore the environmental impact of web development and stress the pressing need for sustainable practices in this dynamic landscape.",
    imageUrl:
      "https://blog.openreplay.com/images/green-web-design--tech-and-sustainability/images/hero.png",
    link: "https://blog.openreplay.com/green-web-design--tech-and-sustainability/",
  },
  {
    title: "Advanced Animation Techniques for Flutter: A Guide",
    excerpt:
      "Animations play a crucial role in enhancing the user experience and improving an application's UI's overall look and feel. They help convey changes, transitions, and interactions more engagingly and intuitively. They can make your app feel more responsive, provide visual feedback to user actions, guide users' attention, and create a more polished and professional appearance. This article will show you ways to create great animations in Flutter.",
    imageUrl:
      "https://blog.openreplay.com/images/advanced-animation-techniques-for-flutter--a-guide/images/hero.png",
    link: "https://blog.openreplay.com/advanced-animation-techniques-for-flutter--a-guide/",
  },
  {
    title: "Mamaput Hub: Appwrite Hashnode Hackathon",
    excerpt:
      "What happens when food and code come together? An epic fusion of Appwrite and Nigerian delicacy unveiled with Mamaput Hub! Are you a food lover or a culinary enthusiast? Do you love cooking, creating recipes, and experimenting from time to time with food? Then Mamaput Hub is the only web app you will ever need!",
    imageUrl:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1685505392886/aabd1db6-f7c1-4a49-8427-e318171351d5.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    link: "https://itsjustchioma.hashnode.dev/mamaput-hub-appwrite-hashnode-hackathon#cliugxvxh007yngnv93fz0ghz",
  },
];

const Articles = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16" id="article-section">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800">
          Recent Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <a
              key={index}
              href={article.link}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
            >
              <div className="relative">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-20 transition duration-300 hover:opacity-10"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3">{article.excerpt}</p>
                <div className="mt-4">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-semibold">
                    Read More
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;