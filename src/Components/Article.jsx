// Components/Articles.js
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
    title: "The AI Revolution for Developers",
    excerpt:
      "In the ever-evolving environment of software development, a subtle yet transformative revolution is taking place one that promises to redefine the role of developers. A field that has rapidly moved from science fiction in the movies to practical reality. AI is no longer a myth or a distant concept, as AI continues to evolve, it is poised to revolutionize the way we develop, test, and maintain software.",
    imageUrl:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*iiorGzY10QWwNLZ9hYRVHQ.png",
    link: "https://medium.com/@davidajanaku46163/the-ai-revolution-for-developers-60b4ecac3537",
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
    <div className="flex flex-col items-center my-10" id="article-section">
      <h2 className="text-3xl font-bold mb-6">Recent Articles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto px-5 max-w-7xl">
        {articles.map((article, index) => (
          <a
            key={index}
            href={article.link}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
          >
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-gray-600">{article.excerpt}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Articles;
