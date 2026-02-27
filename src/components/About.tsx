import { BookOpen, Target, Heart } from "lucide-react";

const STATS = [
  { value: "5+", label: "Projects", color: "text-pink-400" },
  { value: "15+", label: "Skills", color: "text-purple-400" },
  { value: "10+", label: "Certifications", color: "text-indigo-400" },
];

const CARDS = [
  {
    title: "Education",
    icon: BookOpen,
    content:
      "Currently pursuing a Bachelor's of Technology degree in AI & Data Science, focusing on machine learning, deep learning, and statistical modeling with hands-on real-world applications.",
  },
  {
    title: "Goals",
    icon: Target,
    content:
      "Aspiring to become a leading AI researcher and data scientist, contributing to impactful innovations and making AI accessible for societal benefit.",
  },
  {
    title: "Passion",
    icon: Heart,
    content:
      "Passionate about the intersection of technology and human potential, believing AI and data science can drive positive change.",
  },
];

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-purple-950 to-purple-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text + stats */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I am a dedicated AI & Data Science student with a passion for
              uncovering insights from complex datasets and building intelligent
              systems. My journey is driven by curiosity and real-world problem
              solving.
            </p>

            <p className="text-gray-300 leading-relaxed">
              With experience in machine learning, statistical analysis, and
              data visualization, I enjoy transforming raw data into meaningful
              narratives that drive decisions.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-8">
              {STATS.map(({ value, label, color }) => (
                <div key={label} className="text-center">
                  <h3 className={`text-2xl font-bold ${color}`}>{value}</h3>
                  <p className="text-sm text-gray-400">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Info cards */}
          <div className="space-y-6">
            {CARDS.map(({ title, icon: Icon, content }) => (
              <InfoCard
                key={title}
                title={title}
                Icon={Icon}
                content={content}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Card ---------- */

function InfoCard({
  title,
  Icon,
  content,
}: {
  title: string;
  Icon: any;
  content: string;
}) {
  return (
    <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-600/30 hover:border-pink-500/50 transition hover:scale-105">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
          <Icon className="text-white" size={20} />
        </div>
        <h3 className="text-xl font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-300">{content}</p>
    </div>
  );
}

export default About;