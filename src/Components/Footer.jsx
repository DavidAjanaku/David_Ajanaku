import React from 'react';
import { Mail, MapPin, Star, Rocket } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white py-16 relative overflow-hidden">
      {/* Floating Elements Animation */}
      <div className="absolute inset-0">
        <div className="animate-float absolute top-10 left-10">
          <Star className="text-yellow-300 h-4 w-4" />
        </div>
        <div className="animate-float-delayed absolute top-20 right-20">
          <Star className="text-yellow-300 h-3 w-3" />
        </div>
        <div className="animate-rocket absolute bottom-full right-1/4">
          <Rocket className="text-white h-6 w-6 transform rotate-45" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 animate-fade-in">
            Let's Create Something Amazing Together! 🚀
          </h2>
          <p className="text-xl text-blue-200 animate-slide-up">
            Journey through the digital universe with me
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-500 p-3 rounded-full">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Base of Operations</h3>
                <p className="text-blue-200">Lagos, Nigeria</p>
              </div>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded" />
          </div>

          <div className="bg-white/10 rounded-lg p-6 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-purple-500 p-3 rounded-full">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Send a Signal</h3>
                <a 
                  href="mailto:davidajanaku46163@gmail.com"
                  className="text-blue-200 hover:text-blue-400 transition-colors duration-300"
                >
                  davidajanaku46163@gmail.com
                </a>
              </div>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded" />
          </div>
        </div>

        <div className="text-center border-t border-white/20 pt-8">
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} David Ajanaku | Crafting Digital Dreams
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes rocket {
          from { transform: translateY(100vh) rotate(45deg); }
          to { transform: translateY(-100vh) rotate(45deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        
        .animate-rocket {
          animation: rocket 10s linear infinite;
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
        
        .animate-slide-up {
          animation: slideUp 1s ease-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;