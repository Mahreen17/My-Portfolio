interface SkillCategory {
  title: string;
  icon: string;
  accent: string; // gradient for the icon badge
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: '💻',
    accent: 'from-pink-500 to-purple-500',
    skills: ['Python', 'SQL', 'Java', 'C', 'R'],
  },
  {
    title: 'Data Analytics & Visualization',
    icon: '📊',
    accent: 'from-purple-500 to-indigo-500',
    skills: [
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'Power BI',
      'Tableau',
      'Microsoft Excel',
    ],
  },
  {
    title: 'Machine Learning & Deep Learning',
    icon: '🤖',
    accent: 'from-indigo-500 to-blue-500',
    skills: [
      'Scikit-learn',
      'TensorFlow',
      'Keras',
      'VGG16',
      'Random Forest',
      'SHAP',
      'Classification',
      'Regression',
      'Predictive Modeling',
    ],
  },
  {
    title: 'Generative AI & Agentic AI',
    icon: '✨',
    accent: 'from-pink-500 to-rose-500',
    skills: [
      'Google Gemini',
      'LangChain',
      'Retrieval-Augmented Generation (RAG)',
      'AI Agents',
      'Model Context Protocol (MCP)',
    ],
  },
  {
    title: 'Data Engineering & Vector Databases',
    icon: '🗄️',
    accent: 'from-purple-500 to-pink-500',
    skills: [
      'SQLite',
      'ChromaDB',
      'Sentence Transformers',
      'Data Preprocessing',
      'Feature Engineering',
    ],
  },
  {
    title: 'Computer Vision',
    icon: '👁️',
    accent: 'from-teal-500 to-cyan-500',
    skills: ['OpenCV', 'MediaPipe', 'Image Classification', 'Pose Estimation'],
  },
  {
    title: 'Web Development & Deployment',
    icon: '🌐',
    accent: 'from-orange-500 to-pink-500',
    skills: ['Flask', 'Streamlit', 'Vercel', 'Render', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'MLOps & Experiment Tracking',
    icon: '🔁',
    accent: 'from-blue-500 to-purple-500',
    skills: [
      'MLflow',
      'DVC',
      'Model Evaluation',
      'Experiment Tracking',
      'Model Versioning',
    ],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    accent: 'from-pink-500 to-orange-500',
    skills: [
      'Jupyter Notebook',
      'Git',
      'GitHub',
      'VS Code',
      'LaTeX',
      'Microsoft Office',
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-purple-900 to-purple-950"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Technical{' '}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6" />
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            A full-lifecycle toolkit spanning data analytics, machine learning,
            generative AI, computer vision and deployment
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map(({ title, icon, accent, skills }) => (
            <div
              key={title}
              className="group bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm p-5 sm:p-6 rounded-2xl border border-purple-600/30 hover:border-pink-500/50 transition-all duration-300 hover:shadow-xl"
            >
              {/* Card heading */}
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-10 h-10 shrink-0 bg-gradient-to-br ${accent} rounded-full flex items-center justify-center text-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <span aria-hidden="true">{icon}</span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
                  {title}
                </h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-100 rounded-full text-xs sm:text-sm border border-purple-500/30 hover:border-pink-400/60 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
