import { useState } from 'react';
import { Github, ExternalLink, Star, ChevronDown, ChevronUp } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  image?: string;
  emoji?: string;
  gradient?: string;
  featured: boolean;
}

const INITIAL_COUNT = 6; // 2 rows x 3 columns

const projects: Project[] = [
  /* ---------- NEW PROJECTS ---------- */
  {
    title: 'InsightFlow Data Copilot',
    description:
      'A multi-agent AI assistant that answers plain-English questions from databases, documents and external tools. An orchestrator routes each query to SQL, RAG or MCP agents, and every answer shows its source.',
    tech: ['Google Gemini', 'SQLite', 'ChromaDB', 'RAG', 'MCP', 'Streamlit'],
    image:
      'https://raw.githubusercontent.com/Mahreen17/InsightFlow-Data-Copilot/main/landing-page.png',
    github: 'https://github.com/Mahreen17/InsightFlow-Data-Copilot',
    demo: 'https://insightflow-data-copilot.streamlit.app/',
    featured: true,
  },
  {
    title: 'VideoMind AI',
    description:
      'A RAG-powered learning assistant that turns YouTube transcripts or uploaded TXT/VTT captions into searchable knowledge. Ask questions, get summaries and structured study notes, and export them as TXT, PDF or Word.',
    tech: ['Python', 'Groq API', 'ChromaDB', 'Sentence Transformers', 'RAG', 'Streamlit'],
    image:
      'https://raw.githubusercontent.com/Mahreen17/videomind-ai/main/dashboard.png',
    github: 'https://github.com/Mahreen17/VideoMind-AI',
    demo: 'https://videomind-ai-m1707.streamlit.app/',
    featured: true,
  },
  {
    title: 'Kidney Disease Classification',
    description:
      'An end-to-end deep learning pipeline that classifies kidney CT scans as Normal or Tumor using VGG16 transfer learning. Tracked with MLflow, versioned with DVC and deployed as a Dockerized Flask app on Render.',
    tech: ['TensorFlow', 'VGG16', 'MLflow', 'DVC', 'Flask', 'Docker'],
    image:
      'https://raw.githubusercontent.com/Mahreen17/Kidney-Disease-Classification-Deep-Learning/main/Screenshot%202026-08-29%20162038.png',
    github: 'https://github.com/Mahreen17/Kidney-Disease-Classification-Deep-Learning',
    demo: 'https://kidney-disease-classification-deep-girb.onrender.com/',
    featured: true,
  },

  /* ---------- EXISTING PROJECTS ---------- */
  {
    title: 'ChurnGuard',
    description:
      'ML dashboard that predicts telecom customer churn using Random Forest. Includes SHAP explainability, batch CSV scoring, retention ROI calculator, prediction history and PDF reports.',
    tech: ['Python', 'Machine Learning', 'Streamlit', 'Random Forest'],
    image:
      'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/Mahreen17/ChurnGuard',
    demo: 'https://churnguard-customer1721.streamlit.app/',
    featured: true,
  },
  {
    title: 'FitHub',
    description:
      'Real-time fitness assistant powered by OpenCV and MediaPipe. Detects exercises, counts repetitions, analyzes posture accuracy and gives instant feedback.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
    image:
      'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/Mahreen17/Fithub',
    demo: 'https://fithub-r96v.onrender.com/',
    featured: true,
  },
  {
    title: 'House Price Predictor',
    description:
      'Streamlit-based AI web app that predicts house prices from details like area, rooms, age and location, giving instant predictions.',
    tech: ['Python', 'Machine Learning', 'Streamlit', 'Scikit-learn'],
    image:
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/Mahreen17/House_Price_predictor',
    demo: 'https://housepricepredictor-mahreenbegum1723.streamlit.app/',
    featured: true,
  },
  {
    title: 'Predictive Modeling Using Machine Learning',
    description:
      'Builds predictive models using data preprocessing, feature engineering, model training, evaluation metrics and performance optimization.',
    tech: ['Python', 'Machine Learning', 'Scikit-learn', 'Data Analysis'],
    image:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/Mahreen17/Predictive-Modeling-Using-Machine-Learning',
    featured: true,
  },
  {
    title: 'Iris Flower Classifier',
    description:
      'Full-stack ML web app that predicts Iris flower species from physical measurements, with an interactive and responsive interface.',
    tech: ['Python', 'Flask', 'Machine Learning', 'Scikit-learn'],
    image:
      'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/Mahreen17/iris-flower-classifier',
    demo: 'https://iris-flower-classifier.vercel.app/',
    featured: false,
  },
  {
    title: 'Exploratory Data Analysis (EDA) Project',
    description:
      'Uncovers trends, patterns and correlations through statistical analysis and visual storytelling using Python libraries.',
    tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
    image:
      'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/Mahreen17/Exploratory-Data-Analysis-EDA-Project',
    featured: false,
  },
  {
    title: 'Data Cleaning & Visualization Project',
    description:
      'End-to-end data cleaning and visualization: missing value handling, preprocessing, transformation and insightful visual dashboards.',
    tech: ['Python', 'Pandas', 'Data Visualization', 'Matplotlib'],
    image:
      'https://images.pexels.com/photos/577210/pexels-photo-577210.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/Mahreen17/Data-Cleaning-Visualization-Project',
    featured: false,
  },
  {
    title: 'E-commerce Sales Analysis',
    description:
      'Sales analysis using SQL and Python: data cleaning, customer insights, sales trends, top customer ranking and revenue growth visuals.',
    tech: ['Python', 'SQL', 'Pandas', 'Data Analysis'],
    image:
      'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/Mahreen17/Ecommerce-Analysis_python-sql',
    featured: false,
  },
  {
    title: 'Spotify Data Visualization (Up to 2023)',
    description:
      'Visualizes streaming songs, popular artists and musical trends from Spotify datasets, focusing on listening behavior and popularity patterns.',
    tech: ['Python', 'Data Visualization', 'Matplotlib', 'Seaborn'],
    image:
      'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/Mahreen17/Spotify_DataVisualizationUpto2023',
    featured: false,
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-purple-950 to-purple-900"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
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

        {/* Projects Grid: 3 columns, as many rows as needed */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {visibleProjects.map((project) => (
            <div
              key={project.title}
              className="group relative flex flex-col bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-purple-600/30 hover:border-pink-500/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              {project.featured && (
                <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-2 py-0.5 rounded-full text-[10px] font-semibold flex items-center space-x-1">
                  <Star size={10} />
                  <span>Featured</span>
                </div>
              )}

              {/* Banner: image, or gradient + emoji for projects without one */}
              <div className="relative h-32 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div
                    className={`w-full h-full bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                  >
                    <span className="text-5xl drop-shadow-lg transition-transform duration-500 group-hover:scale-125">
                      {project.emoji}
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-pink-300 transition-colors duration-300 line-clamp-1">
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-300 mb-3 leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tech.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 bg-gradient-to-r from-purple-600/30 to-pink-600/30 text-purple-200 rounded-full text-[10px] sm:text-xs border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons pinned to the bottom */}
                <div className="flex gap-2 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1.5 rounded-lg text-sm hover:shadow-lg transition-all duration-300"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-1.5 border border-pink-400 text-pink-400 px-3 py-1.5 rounded-lg text-sm hover:bg-pink-400 hover:text-white transition-all duration-300"
                    >
                      <ExternalLink size={14} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More / Show Less + GitHub link */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          {projects.length > INITIAL_COUNT && (
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="flex items-center gap-2 border-2 border-pink-400 text-pink-400 px-8 py-3 rounded-full font-semibold hover:bg-pink-400 hover:text-white transition-all duration-300"
            >
              {showAll ? (
                <>
                  Show Less <ChevronUp size={18} />
                </>
              ) : (
                <>
                  Show More Projects ({projects.length - INITIAL_COUNT} more){' '}
                  <ChevronDown size={18} />
                </>
              )}
            </button>
          )}

          <a
            href="https://github.com/Mahreen17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
