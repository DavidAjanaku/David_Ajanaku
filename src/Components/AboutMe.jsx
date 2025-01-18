import React, { useState } from 'react';
import { Rocket, Star, Code, Terminal, Briefcase, Download, ExternalLink } from 'lucide-react';
import jsPDF from 'jspdf';

// CV Component with PDF Generation
const CV = () => {
  const generatePDF = () => {
    const doc = new jsPDF();
    
    // Helper function for wrapping text
    const wrapText = (text, x, y, maxWidth, lineHeight) => {
      const lines = doc.splitTextToSize(text, maxWidth);
      lines.forEach((line, i) => {
        doc.text(line, x, y + (i * lineHeight));
      });
      return lines.length * lineHeight;
    };

    // Helper function for sections
    const addSection = (title, y) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(11);
      doc.text(title, 20, y);
      doc.line(20, y + 1, 190, y + 1);
      return y + 8;
    };

    // Helper function for experience entries
    const addExperience = (company, location, title, date, description, tools, y) => {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
      doc.text(company, 20, y);
      doc.text(location, 160, y, { align: 'right' });
      doc.text(title, 20, y + 4);
      doc.text(date, 160, y + 4, { align: 'right' });
      doc.setFont('helvetica', 'normal');
      y += 8;
      y += wrapText(description, 20, y + 4, 170, 4);
      if (tools) {
        doc.setFont('helvetica', 'bold');
        doc.text('Development Tools:', 20, y + 8);
        doc.setFont('helvetica', 'normal');
        y += wrapText(tools, 20, y + 12, 170, 4);
      }
      return y + 12;
    };

    // Header
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('David Ajanaku', 105, 15, { align: 'center' });

    // Contact Info
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Lagos, Nigeria | davidajanaku46163@gmail.com | +2347032159407', 105, 22, { align: 'center' });
    doc.text('LinkedIn: linkedin.com/in/ajanaku-david-45375424b | GitHub: github.com/DavidAjanaku', 105, 27, { align: 'center' });
    doc.text('Portfolio: david-ajanaku.vercel.app', 105, 32, { align: 'center' });

    // Education
    let currentY = 40;
    currentY = addSection('EDUCATION', currentY);
    
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text('University of NIIT Nigeria', 20, currentY + 4);
    doc.setFont('helvetica', 'normal');
    doc.text('Lagos, Nigeria', 160, currentY + 4, { align: 'right' });
    doc.text('B.S. in Software Engineering', 20, currentY + 8);
    doc.text('May 2024', 160, currentY + 8, { align: 'right' });

    // Professional Summary
    currentY += 15;
    const summary = 'As a Frontend developer with three years of experience, I specialize in creating smooth user interfaces, delivering seamless web and mobile experiences using React.js, Next.js, and Flutter. I am passionate about improving accessibility, solving problems, and optimizing performance.';
    doc.setFontSize(10);
    const summaryHeight = wrapText(summary, 20, currentY, 170, 4);

    // Skills
    currentY += summaryHeight + 8;
    currentY = addSection('SKILLS', currentY);

    doc.setFontSize(10);
    const skills = [
      { title: 'Software:', content: 'HTML/CSS (Tailwind), Java, Javascript (Reactjs, Next.js), Typescript, Postman, Firebase, Appwrite, Flutter(Dart), React Native' },
      { title: 'Software Tools:', content: 'Android Studio, IntelliJ, Jira, Confluence, Git, Vercel, Vscode, Markdown, Cloudfare' },
      { title: 'Backend Technologies:', content: 'Firebase, Appwrite, NodeJs' },
      { title: 'Soft Skills:', content: 'Teamwork, Critical thinking, Communication, Research Skills, Report writing' }
    ];

    skills.forEach((skill) => {
      doc.setFont('helvetica', 'bold');
      doc.text(skill.title, 20, currentY + 4);
      doc.setFont('helvetica', 'normal');
      currentY += wrapText(skill.content, 20 + doc.getTextWidth(skill.title) + 5, currentY + 4, 150, 4) + 4;
    });

    // Experience
    currentY += 8;
    currentY = addSection('EXPERIENCE', currentY);

    // SuperNar
    currentY = addExperience(
      'SuperNar',
      'Lagos, Nigeria',
      'Mobile Developer & Website Developer',
      'May 2024 – Oct 2024',
      'At SuperNar, I collaborated with a team to develop a fitness mobile app offering workout plans, live updates, and tools for tracking reps, tailored to users focused on muscle building and running. I also built and optimized the company\'s e-commerce website for purchasing sportswear, delivering a seamless and engaging experience for fitness enthusiasts.',
      'React Native, Expo, Redux, WooCommerce, PHP, Yoast SEO, Google Analytics, WPForms',
      currentY
    );

    // Shortlet Bookings
    currentY = addExperience(
      'Shortlet Bookings - Vacation Rental Company',
      'Lagos, Nigeria',
      'Website Developer',
      'Nov 2023 – Feb 2024',
      'At Shortlet Bookings, I spearhead the front-end development of a web application designed for hosting and booking apartments, similar to Airbnb. Collaborating on API integration, I ensure seamless payment processing and map functionalities, while optimizing data consumption for an improved user experience.',
      'React, Redux, Axios, Tailwind, Google Maps, Jest',
      currentY
    );

    // MamaPut Hub
    currentY = addExperience(
      'MamaPut Hub',
      'Lagos, Nigeria',
      'FrontEnd Developer',
      'May 2023 – Jun 2023',
      'I developed MamaPut Hub, a culinary web app that allows users to explore, save, and create recipes, along with step-by-step cooking instructions. I also integrated a shopping list feature, enabling users to jot down ingredients for their recipes and easily track items to buy. The project was designed to make cooking and meal planning more interactive and user-friendly, offering a seamless experience for food enthusiasts.',
      'React, React Query, Appwrite, Tailwind',
      currentY
    );

    doc.save('David_Ajanaku_CV.pdf');
  };

  return (
    <button
      onClick={generatePDF}
      className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full text-white font-medium flex items-center justify-center space-x-2 hover:from-purple-600 hover:to-blue-600 transition-all transform hover:scale-105 mx-auto"
    >
      <Download size={20} />
      <span>Download CV</span>
    </button>
  );
};

// Main AboutMe Component
const AboutMe = () => {
  const [activePanel, setActivePanel] = useState(0);

  const storyPanels = [
    {
      title: "The Journey",
      content: "Frontend Developer & Problem Solver",
      description: "With three years of experience creating smooth user interfaces and seamless web experiences using React.js, Next.js, and Flutter.",
      icon: <Rocket className="text-purple-400" size={32} />
    },
    {
      title: "The Arsenal",
      content: "Technical Expertise",
      description: "Mastering HTML/CSS (Tailwind), JavaScript (React.js, Next.js), TypeScript, Flutter (Dart), and React Native.",
      icon: <Code className="text-blue-400" size={32} />
    },
    {
      title: "The Projects",
      content: "Building Impactful Solutions",
      description: "From SuperNar's fitness app to Shortlet Bookings' vacation rental platform, creating applications that make a difference.",
      icon: <Terminal className="text-green-400" size={32} />
    }
  ];

  const experiences = [
    {
      company: "SuperNar",
      role: "Mobile Developer & Website Developer",
      period: "May 2024 - Oct 2024",
      description: "Developed a fitness mobile app and e-commerce website, enhancing user engagement through workout plans and live updates."
    },
    {
      company: "Shortlet Bookings",
      role: "Website Developer",
      period: "Nov 2023 - Feb 2024",
      description: "Led front-end development of an Airbnb-style vacation rental platform, enabling property hosts to list and manage apartments through an interactive calendar system."
    },
    {
      company: "MamaPut Hub",
      role: "Website Developer",
      period: "May 2023 - Jun 2023",
      description: "Created an interactive culinary web app for recipe exploration and meal planning."
    }
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-12 relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            <Star size={Math.random() * 4 + 2} className="text-white/20" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-xl" />
            <h1 className="relative text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
              David Ajanaku
            </h1>
            <p className="text-gray-400 text-lg">Frontend Developer in Lagos, Nigeria</p>
            
            {/* CV Download Button */}
            <CV />
          </div>
        </div>

        {/* Story Panels */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {storyPanels.map((panel, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                activePanel === index ? 'scale-105' : ''
              }`}
              onClick={() => setActivePanel(index)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl animate-pulse" />
              <div className="relative bg-gray-800/80 backdrop-blur-sm border border-gray-700 p-6 rounded-xl h-full">
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-full transform rotate-12 group-hover:rotate-0 transition-transform">
                  {panel.icon}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white">{panel.title}</h3>
                  <div className="h-px bg-gradient-to-r from-purple-500/50 to-blue-500/50" />
                  <p className="text-gray-300 font-semibold">{panel.content}</p>
                  <p className="text-gray-400 text-sm">{panel.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Professional Journey</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-purple-500/30">
                <div className="absolute -left-3 top-0">
                  <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                </div>
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl transform hover:scale-[1.02] transition-all">
                  <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  <p className="text-purple-400">{exp.role}</p>
                  <p className="text-sm text-gray-400 mb-2">{exp.period}</p>
                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Technical Arsenal</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "React.js", "Next.js", "Flutter", "TypeScript",
              "Tailwind CSS", "Firebase", "Node.js", "Git"
            ].map((skill, index) => (
              <div key={index} className="bg-gray-700/30 rounded-lg p-4 text-center transform hover:scale-105 transition-all">
                <span className="text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Links */}
        <div className="flex justify-center space-x-6">
          {[
            { icon: <ExternalLink size={20} />, label: "Portfolio", url: "https://david-ajanaku.vercel.app/" },
            { icon: <Code size={20} />, label: "GitHub", url: "https://github.com/DavidAjanaku" },
            { icon: <Briefcase size={20} />, label: "LinkedIn", url: "http://www.linkedin.com/in/ajanaku-david-45375424b" }
          ].map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMe;