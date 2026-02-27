import { FC } from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer: FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = ['About', 'Skills', 'Projects', 'Achievements', 'Contact'];
  const coreSkills = [
    'Python',
    'Machine Learning',
    'Data Analysis',
    'TensorFlow',
    'AI Research',
  ];

  return (
    <footer className="bg-gradient-to-br from-purple-950 to-black border-t border-purple-600/30">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Mahreen <span className="text-pink-400">Begum</span>
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
              AI & Data Science student passionate about building intelligent
              solutions and transforming data into actionable insights.
            </p>

            <div className="flex space-x-4">
              <a
                href="https://github.com/Mahreen17"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition"
              >
                <Github size={18} />
              </a>

              <a
                href="https://www.linkedin.com/in/mahreen-begum"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="mailto:mahreenbegum1723@gmail.com"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white hover:scale-110 transition"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-300 hover:text-pink-400 transition text-sm sm:text-base"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Expertise */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Core Expertise
            </h4>

            <div className="flex flex-wrap gap-2">
              {coreSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-200 rounded-full text-xs sm:text-sm border border-purple-500/30"
                >
                  {skill}
                </span>
              ))}
            </div>

            <p className="mt-6 text-gray-400 text-xs sm:text-sm italic">
              “Turning data into insights, algorithms into solutions.”
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-purple-600/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs sm:text-sm flex items-center mb-4 md:mb-0">
            Made with <Heart className="text-pink-400 mx-1" size={14} /> by
            Mahreen Begum © 2026
          </p>

          <button
            onClick={scrollToTop}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-3 rounded-full hover:scale-110 transition group"
          >
            <ArrowUp
              size={18}
              className="group-hover:-translate-y-1 transition"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;