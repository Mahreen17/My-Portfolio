import { useState } from "react";
import { Menu, X, User, Code, Briefcase, Award } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const NAV_ITEMS = [
  { id: "about", label: "Description", icon: User },
  { id: "skills", label: "Skills", icon: Code },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "achievements", label: "Achievements", icon: Award },
];

function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (!element) return;

    element.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-4 left-4 md:top-6 md:left-6 z-50">
      <div className="relative">
        {/* Toggle button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 text-white p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-purple-600/30"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? (
            <X className="w-5 h-5 md:w-6 md:h-6" />
          ) : (
            <Menu className="w-5 h-5 md:w-6 md:h-6" />
          )}
        </button>

        {/* Menu */}
        <div
          className={`absolute top-12 md:top-16 left-0 transition-all duration-300 ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <div className="bg-gradient-to-br from-purple-900/95 via-purple-800/95 to-pink-800/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-1 md:p-2 shadow-xl border border-purple-600/30">
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`w-full flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 rounded-lg md:rounded-xl transition-all duration-300 group hover:bg-white/10 hover:scale-105 ${
                  activeSection === id
                    ? "bg-white/20 text-pink-200"
                    : "text-white"
                }`}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium text-sm md:text-base">
                  {label}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;