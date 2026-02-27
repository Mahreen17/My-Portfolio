import { Github, Linkedin, Mail } from "lucide-react";

const PROFILE = {
  name: "Mahreen",
  surname: "Begum",
  title: "AI & Data Science Student",
  description:
    "Passionate about transforming data into insights and building intelligent systems. Exploring the frontiers of machine learning, artificial intelligence, and data visualization to create innovative solutions for real-world problems.",
};

function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-950 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center min-h-screen">
        {/* Avatar */}
        <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
          <div className="relative w-64 sm:w-80 lg:w-96 aspect-square">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-full animate-spin-slow shadow-2xl">
              <div className="absolute inset-4 bg-gradient-to-br from-purple-900 to-pink-900 rounded-full flex items-center justify-center">
                <div className="w-24 sm:w-32 aspect-square bg-gradient-to-br from-pink-300 to-purple-300 rounded-full relative animate-bounce-slow">
                  <span className="sr-only">Animated avatar</span>
                  <div className="absolute top-6 left-4 w-3 h-3 bg-purple-900 rounded-full animate-blink" />
                  <div className="absolute top-6 right-4 w-3 h-3 bg-purple-900 rounded-full animate-blink" />
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-6 h-3 bg-purple-900 rounded-full" />
                </div>
              </div>
            </div>

            {/* Floating tags */}
            <Tag label="AI" className="-top-6 -right-6 bg-pink-400" />
            <Tag label="ML" className="-bottom-6 -left-6 bg-purple-400 animate-float-delayed" />
            <Tag label="DS" className="top-1/2 -right-10 bg-indigo-400 text-xs rounded-full" />
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-4">
            {PROFILE.name}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              {PROFILE.surname}
            </span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-pink-300 mb-6">
            {PROFILE.title}
          </h2>

          <p className="text-gray-300 max-w-2xl mb-8">
            {PROFILE.description}
          </p>

          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
          >
            Get In Touch
          </button>

          <div className="flex gap-6 justify-center lg:justify-start mt-8">
            <SocialIcon Icon={Github} />
            <SocialIcon Icon={Linkedin} />
            <SocialIcon Icon={Mail} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Small reusable helpers ---------- */

function Tag({ label, className }: { label: string; className: string }) {
  return (
    <div
      className={`absolute w-12 h-12 flex items-center justify-center text-white font-bold shadow-lg animate-float ${className}`}
    >
      {label}
    </div>
  );
}

function SocialIcon({ Icon }: { Icon: any }) {
  return (
    <a
      href="#"
      className="text-gray-400 hover:text-pink-400 transition hover:scale-110"
    >
      <Icon className="w-6 h-6" />
    </a>
  );
}

export default Hero;