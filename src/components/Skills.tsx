const skills = [
  { name: 'Python', icon: '🐍' },
  { name: 'Machine Learning', icon: '🤖' },
  { name: 'Data Analysis', icon: '📊' },
  { name: 'TensorFlow', icon: '🧠' },
  { name: 'PyTorch', icon: '🔥' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Pandas', icon: '🐼' },
  { name: 'NumPy', icon: '🔢' },
  { name: 'Scikit-learn', icon: '⚙️' },
  { name: 'Jupyter Notebook', icon: '📓' },
  { name: 'Data Visualization', icon: '📈' },
  { name: 'Deep Learning', icon: '🔬' },
  { name: 'Statistics', icon: '📉' },
  { name: 'HTML/CSS', icon: '🌐' },
  { name: 'JavaScript', icon: '⚡' },
] as const;

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
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6" />
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            A comprehensive toolkit spanning machine learning, data analysis,
            and software development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-purple-600/30 hover:border-pink-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-4">
                <div className="text-2xl sm:text-3xl group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-pink-400 mb-4">
              Data Science
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Statistical analysis, data mining, and predictive modeling
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-purple-400 mb-4">
              Machine Learning
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Supervised, unsupervised learning, and deep neural networks
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-400 mb-4">
              Development
            </h3>
            <p className="text-sm sm:text-base text-gray-300">
              Full-stack development and data visualization tools
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;