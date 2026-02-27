import { useState } from 'react';
import { Award, Eye, X, Calendar, ExternalLink } from 'lucide-react';

interface Achievement {
  title: string;
  issuer: string;
  date: string;
  description: string;
  certificate: string;
  credentialId: string;
  skills: string[];
}

const Achievements: React.FC = () => {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Achievement | null>(null);

  const achievements: Achievement[] = [
    {
      title: 'British Airways – Data Science Job Simulation',
      issuer: 'Forage',
      date: '2025',
      description:
        'Hands-on experience solving real airline data problems including customer segmentation, predictive modeling, and insight generation.',
      certificate:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_8vCWod8Aa5tHBW7eF_1752155123680_completion_certificate.pdf',
      credentialId: '82zachPX7bHporLph',
      skills: ['Machine Learning', 'Data Visualization', 'Data Modeling', 'Data Cleaning'],
    },
    {
      title: 'Deloitte Australia – Data Analytics Job Simulation',
      issuer: 'Forage',
      date: '2025',
      description:
        'Analyzed client datasets, extracted business insights, and created data-driven recommendations similar to real Deloitte consulting projects.',
      certificate:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_8vCWod8Aa5tHBW7eF_1751987538817_completion_certificate.pdf',
      credentialId: 'qB4PtM2MjjypogQde',
      skills: ['Excel', 'Tableau', 'Data Analysis', 'Data Modeling'],
    },
    {
      title: 'Introduction to Large Language Models',
      issuer: 'Google',
      date: '2025',
      description:
        'Learned core concepts of Large Language Models including transformers, NLP tasks, and real-world AI applications.',
      certificate:
        'https://www.cloudskillsboost.google/public_profiles/cb2d6c95-16d8-4d29-ae85-f583394f757b/badges/16889050',
      credentialId: '16889050',
      skills: ['LLMs', 'Deep Learning', 'Neural Networks', 'NLP'],
    },
    {
      title: 'Tata – Data Visualization Job Simulation',
      issuer: 'Forage',
      date: '2025',
      description:
        'Focused on data cleaning, dashboard creation, and communicating insights for strategic business decisions.',
      certificate:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_8vCWod8Aa5tHBW7eF_1752151282015_completion_certificate.pdf',
      credentialId: 'nHbjcG7asiNK43fMe',
      skills: ['Power BI', 'Tableau', 'Data Analysis', 'Data Modeling'],
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: '2025',
      description:
        'Covered HTML, CSS, Flexbox, Grid, and accessibility while building fully responsive web layouts.',
      certificate:
        'https://freecodecamp.org/certification/Mahreen1723/responsive-web-design',
      credentialId: 'mahreen1723-rwd',
      skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    },
    {
      title: 'Deloitte Australia – Cyber Job Simulation',
      issuer: 'Forage',
      date: '2025',
      description:
        'Worked on cybersecurity fundamentals including threat identification, risk analysis, and mitigation strategies.',
      certificate:
        'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_8vCWod8Aa5tHBW7eF_1752001273620_completion_certificate.pdf',
      credentialId: 'xhLiQHAesgX9YG4Jd',
      skills: ['Cybersecurity', 'Risk Management', 'Threat Analysis'],
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-purple-900 to-purple-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto">
            Certifications showcasing continuous learning in AI, Data Science, and Web Development.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-6 rounded-2xl border border-purple-600/30 hover:scale-105 transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Award className="text-white" />
                </div>
                <span className="text-gray-400 text-sm flex items-center gap-1">
                  <Calendar size={14} /> {item.date}
                </span>
              </div>

              <h4 className="text-white font-semibold mb-1">{item.title}</h4>
              <p className="text-purple-300 text-sm mb-3">{item.issuer}</p>

              <p className="text-gray-300 text-sm line-clamp-3 mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {item.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs bg-purple-600/30 text-purple-200 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setSelectedCertificate(item)}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 rounded-lg flex items-center justify-center gap-2"
                >
                  <Eye size={14} /> View
                </button>

                <a
                  href={item.certificate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 border border-pink-400 text-pink-400 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-pink-400 hover:text-white transition"
                >
                  <ExternalLink size={14} /> Verify
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCertificate && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-6 max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-white text-xl font-bold">
                {selectedCertificate.title}
              </h3>
              <button onClick={() => setSelectedCertificate(null)}>
                <X className="text-gray-400 hover:text-white" />
              </button>
            </div>

            <img
              src={selectedCertificate.certificate}
              alt="Certificate"
              className="w-full rounded-lg mb-4"
            />

            <p className="text-gray-300">
              Credential ID: <span className="text-white">{selectedCertificate.credentialId}</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;