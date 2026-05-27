import { Github, ExternalLink, Star } from 'lucide-react';

const projects = [
  {
  title: 'ChurnGuard',
  description:
    '📊 ChurnGuard is a machine learning dashboard that predicts telecom customer churn using Random Forest. Includes SHAP explainability, batch CSV scoring, retention ROI calculator, prediction history logging, and PDF export reports.',
  tech: ['Python', 'Machine Learning', 'Streamlit', 'Random Forest'],
  image:
    'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1200',
  github: 'https://github.com/Mahreen17/ChurnGuard',
  demo: 'https://churnguard-customer1721.streamlit.app/',
  featured: true,
},
{
  title: 'FitHub',
  description:
    '💪 FitHub is a real-time fitness assistant powered by OpenCV and MediaPipe. It detects exercises, counts repetitions, analyzes posture accuracy, and provides instant feedback for smarter workouts.',
  tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
  image:
    'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1200',
  github: 'https://github.com/Mahreen17/Fithub',
  demo: 'https://fithub-r96v.onrender.com/',
  featured: true,
},
{
  title: 'Iris Flower Classifier',
  description:
    '🌸 A modern full-stack machine learning web application that predicts Iris flower species using physical measurements. Demonstrates ML model integration with an interactive and responsive web interface.',
  tech: ['Python', 'Flask', 'Machine Learning', 'Scikit-learn'],
  image:
    'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=1200',
  github: 'https://github.com/Mahreen17/iris-flower-classifier',
  demo: 'https://iris-flower-classifier.vercel.app/',
  featured: false,
  },
  {
    title: 'House Price Predictor',
    description:
      '🏠 Smart House Price Predictor is a Streamlit-based AI web app that predicts house prices using machine learning. Users enter property details like area, rooms, age, and location to get instant predictions.',
    tech: ['Python', 'Machine Learning', 'Streamlit', 'Scikit-learn'],
    image:
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/Mahreen17/House_Price_predictor',
    demo: 'https://housepricepredictor-mahreenbegum1723.streamlit.app/', 
    featured: true,
  },
  {
  title: 'Exploratory Data Analysis (EDA) Project',
  description:
    '📈 Comprehensive exploratory data analysis project focused on uncovering trends, patterns, correlations, and insights through statistical analysis and visual storytelling using Python libraries.',
  tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
  image:
    'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=1200',
  github: 'https://github.com/Mahreen17/Exploratory-Data-Analysis-EDA-Project',
  featured: false,
},
{
  title: 'Predictive Modeling Using Machine Learning',
  description:
    '🤖 Machine learning project focused on building predictive models using data preprocessing, feature engineering, model training, evaluation metrics, and performance optimization techniques.',
  tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Data Analysis'],
  image:
    'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200',
  github: 'https://github.com/Mahreen17/Predictive-Modeling-Using-Machine-Learning',
  featured: true,
},
{
  title: 'Data Cleaning & Visualization Project',
  description:
    '🧹 End-to-end data cleaning and visualization project involving missing value handling, preprocessing, transformation, and creating insightful visual dashboards for data-driven analysis.',
  tech: ['Python', 'Pandas', 'Data Visualization', 'Matplotlib'],
  image:
    'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=1200',
  github: 'https://github.com/Mahreen17/Data-Cleaning-Visualization-Project',
  featured: false,
},
  {
    title: 'E-commerce Sales Analysis',
    description:
      'E-commerce sales analysis using SQL and Python. Includes data cleaning, customer insights, sales trends, ranking top customers, and visualizations to uncover revenue growth patterns.',
    tech: ['Python', 'SQL', 'Pandas', 'Data Analysis'],
    image:
      'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/Mahreen17/Ecommerce-Analysis_python-sql',
    featured: false,
  },
  {
    title: 'Spotify Data Visualization (Up to 2023)',
    description:
      'Data visualization of streaming songs, popular artists, and musical trends using Spotify datasets. Focuses on insights into listening behavior and popularity patterns.',
    tech: ['Python', 'Data Visualization', 'Matplotlib', 'Seaborn'],
    image:
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1200',
    github: 'https://github.com/Mahreen17/Spotify_DataVisualizationUpto2023',
    featured: false,
  },
] as const;

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-purple-950 to-purple-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6" />
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Innovative AI and data science projects showcasing practical
            applications and technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-purple-600/30 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {project.featured && (
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold flex items-center space-x-1">
                  <Star size={12} />
                  <span>Featured</span>
                </div>
              )}

              <div
                className={`flex flex-col ${
                  project.featured ? 'lg:flex-row' : ''
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    project.featured ? 'lg:w-1/2' : ''
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 sm:h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div
                  className={`p-4 sm:p-6 flex flex-col justify-between ${
                    project.featured ? 'lg:w-1/2' : ''
                  }`}
                >
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 sm:px-3 py-1 bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-200 rounded-full text-xs sm:text-sm border border-purple-500/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 border-2 border-pink-400 text-pink-400 px-4 py-2 rounded-lg hover:bg-pink-400 hover:text-white transition-all duration-300 hover:scale-105"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Mahreen17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
