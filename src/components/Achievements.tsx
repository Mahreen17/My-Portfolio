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
  title: 'Microsoft Applied Skills: Generate Reports with AI Research Agents',
  issuer: 'Microsoft',
  date: '2026',
  description:
    'Learned to generate intelligent reports using AI research agents and generative AI tools for automated insights and productivity enhancement.',
  certificate: 'https://learn.microsoft.com/en-us/users/mahreenbegum-4485/credentials/8d4d3cfe225d2ce2?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  credentialId: '8D4D3CFE225D2CE2',
  skills: ['Generative AI', 'AI Research Agents', 'Report Automation'],
},
{
  title: 'GenAI in Data Analytics',
  issuer: 'Meta',
  date: '2025',
  description:
    'Explored the integration of Generative AI in data analytics workflows, including insight generation, automation, and AI-powered analytical techniques.',
  certificate: 'https://www.coursera.org/account/accomplishments/verify/D7XA86BN7SBV',
  credentialId: 'D7XA86BN7SBV',
  skills: ['Generative AI', 'Data Analysis', 'AI Tools'],
},
{
  title: 'Data Analysis Using Python',
  issuer: 'IBM',
  date: '2025',
  description:
    'Focused on data analysis techniques using Python libraries such as NumPy and Pandas, including data cleaning, visualization, and statistical analysis.',
  certificate: 'https://www.credly.com/badges/dc1b60c4-0874-4a21-8e87-a962cb51441c/linked_in_profile',
  credentialId: '',
  skills: ['Python', 'NumPy', 'Pandas', 'Data Visualization'],
},
{
  title: 'British Airways – Data Science Job Simulation',
  issuer: 'Forage',
  date: '2025',
  description:
    'Completed practical data science tasks involving customer insights, predictive modeling, and business-focused machine learning solutions.',
  certificate: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/tMjbs76F526fF5v3G/NjynCWzGSaWXQCxSX_tMjbs76F526fF5v3G_8vCWod8Aa5tHBW7eF_1752155123680_completion_certificate.pdf',
  credentialId: '82zachPX7bHporLph',
  skills: ['Machine Learning', 'Data Science', 'Predictive Modeling'],
},
{
  title: 'Tata – Data Visualisation: Empowering Business with Effective Insights',
  issuer: 'Forage',
  date: '2025',
  description:
    'Focused on creating impactful business visualizations, extracting insights from datasets, and presenting data effectively for decision-making.',
  certificate: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_8vCWod8Aa5tHBW7eF_1752151282015_completion_certificate.pdf',
  credentialId: 'nHbjcG7asiNK43fMe',
  skills: ['Seaborn', 'Matplotlib', 'Data Visualization', 'Business Insights'],
},
{
  title: 'Deloitte Australia – Data Analytics Job Simulation',
  issuer: 'Deloitte',
  date: '2025',
  description:
    'Worked on real-world analytics tasks involving data interpretation, business problem-solving, dashboard reporting, and analytical thinking.',
  certificate: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_8vCWod8Aa5tHBW7eF_1751987538817_completion_certificate.pdf',
  credentialId: 'qB4PtM2MjjypogQde',
  skills: ['Data Analytics', 'Dashboard Reporting', 'Business Analysis'],
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
