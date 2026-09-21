import { motion } from 'motion/react';
import {
  FileSpreadsheet,
  Layers,
  FileText,
  Palette,
  ArrowUp,
  Briefcase,
  CheckCircle2,
  Clock,
  ShieldCheck,
  FolderOpen
} from 'lucide-react';
import { ContactSection } from './ContactSection';

const ABOUT_HIGHLIGHTS = [
  {
    icon: CheckCircle2,
    title: 'Reliable Execution',
    desc: 'Committed to task accuracy, punctual delivery, and clean organization.'
  },
  {
    icon: Clock,
    title: 'Time & Schedule Savvy',
    desc: 'Adept at managing tight deadlines, multi-calendar agendas, and fast environments.'
  },
  {
    icon: ShieldCheck,
    title: 'Discreet & Professional',
    desc: 'Maintaining high confidentiality, clear client communications, and integrity.'
  }
];

const SKILL_CATEGORIES = [
  {
    title: 'Administrative Support',
    icon: FolderOpen,
    skills: [
      'Email Management',
      'Calendar Management',
      'Data Entry',
      'Data Validation',
      'Data Cleaning',
      'Document Organization',
      'File Management',
      'Internet Research'
    ]
  },
  {
    title: 'Data & Office Skills',
    icon: FileSpreadsheet,
    skills: [
      'Microsoft Excel',
      'Excel Data Validation',
      'Sorting & Filtering',
      'Spreadsheet Organization',
      'Microsoft Word',
      'Google Sheets',
      'Google Docs',
      'Google Drive'
    ]
  },
  {
    title: 'Virtual Assistant Skills',
    icon: Briefcase,
    skills: [
      'Inbox Management',
      'Client Communication',
      'Appointment Coordination',
      'Follow-ups',
      'Database Updating',
      'Record Keeping',
      'Information Verification',
      'Multitasking'
    ]
  },
  {
    title: 'Customer & Team Support',
    icon: CheckCircle2,
    skills: [
      'Customer Support',
      'Professional Communication',
      'Task Coordination',
      'Time Management',
      'Problem Solving',
      'Attention to Detail',
      'Team Collaboration',
      'Remote Support'
    ]
  }
];

const EXPERIENCES = [
  {
    company: 'Stranger Soccer',
    role: 'Customer Service Representative · Current',
    current: true,
    points: [
      'Support real-time bookings and cancellations.',
      'Send invitations and handle event bookings.',
      'Assist with rescheduling and customer concerns.'
    ]
  },
  {
    company: 'Finasa Agency',
    role: 'Chatter · Remote · 2025',
    current: false,
    points: [
      'Worked effectively in fast-paced environments.',
      'Collaborated independently and with a team.',
      'Adapted quickly and communicated clearly.'
    ]
  },
  {
    company: 'Wanfang Technology Inc.',
    role: 'Team Leader · 2017–2024',
    current: false,
    points: [
      'Led agents and coordinated daily workflows.',
      'Delegated tasks and handled customer concerns.',
      'Resolved operational issues and trained new team members.'
    ]
  },
  {
    company: 'Connect 88 Inc.',
    role: 'CI · 2014–2017',
    current: false,
    points: [
      'Verified records and information for accuracy.',
      'Monitored online systems and identified issues.',
      'Prepared reports and coordinated with technical teams.'
    ]
  },
  {
    company: 'Maxicuisine Inc.',
    role: 'Demi Chef · 2012–2014',
    current: false,
    points: [
      'Supported daily operations and preparation.',
      'Managed inventory and supply ordering.',
      'Maintained safety standards and trained junior staff.'
    ]
  }
];

const TOOLS = [
  {
    name: 'Microsoft Excel',
    icon: FileSpreadsheet,
    desc: 'Data entry · Data validation · Sorting & filtering · Spreadsheet organization'
  },
  {
    name: 'Google Workspace',
    icon: Layers,
    desc: 'Google Docs · Google Sheets · Google Drive · Gmail'
  },
  {
    name: 'Microsoft Office',
    icon: FileText,
    desc: 'Word · Excel · Outlook · Document and file organization'
  },
  {
    name: 'Canva',
    icon: Palette,
    desc: 'Basic graphic design · Documents · Presentations · Visual content'
  }
];

export const PortfolioSections = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <section id="about" className="section paper">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <span className="kicker">A LITTLE ABOUT ME</span>
            <h2 className="section-title">Professional, organized, and people-focused.</h2>
          </div>
          <p className="lead">
            I am a dependable and organized professional who enjoys keeping tasks structured,
            information accurate, and communication clear. I am comfortable working independently,
            managing multiple priorities, and providing consistent support to clients and teams.
          </p>
        </motion.div>

        <motion.div
          className="about-features"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {ABOUT_HIGHLIGHTS.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="about-feature"
                whileHover={{ y: -3, scale: 1.01 }}
                transition={{ type: 'spring', stiffness: 350 }}
              >
                <Icon className="about-feature-icon" size={20} />
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      <section id="skills" className="section">
        <motion.div
          className="section-head-stacked"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="kicker">WHAT I BRING</span>
          <h2 className="section-title">Core skills</h2>
          <p className="lead">
            Practical skills for virtual assistance, administration, data handling, and customer support.
          </p>
        </motion.div>

        <div className="skills-grid">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                className="skill-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
              >
                <h3>
                  <Icon size={19} className="text-stone-700" />
                  <span>{cat.title}</span>
                </h3>
                <div className="tags">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section id="experience" className="section paper">
        <motion.div
          className="section-head-stacked"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="kicker">CAREER JOURNEY</span>
          <h2 className="section-title">Experience you can rely on.</h2>
          <p className="lead">
            A diverse background in customer service, team leadership, operations, coordination,
            and fast-paced professional environments.
          </p>
        </motion.div>

        <div className="experience-list">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.company}
              className="experience-card"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
            >
              <div className="experience-card-header">
                <h3>{exp.company}</h3>
                {exp.current && <span className="experience-badge">Current</span>}
              </div>
              <span>{exp.role}</span>
              <ul>
                {exp.points.map((pt, pIdx) => (
                  <li key={pIdx}>{pt}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="tools" className="section">
        <motion.div
          className="section-head-stacked"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
        >
          <span className="kicker">TOOLS I USE</span>
          <h2 className="section-title">Tools & platforms</h2>
        </motion.div>

        <div className="tools">
          {TOOLS.map((t, idx) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.name}
                className="tool"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
              >
                <div className="tool-icon-wrapper">
                  <Icon size={20} />
                </div>
                <div>
                  <strong>{t.name}</strong>
                  <p>{t.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      <ContactSection />

      <div className="footer-wrapper">
        <footer>
          <span>© {new Date().getFullYear()} Katrina Regalado. All rights reserved.</span>
          <motion.button
            className="back-to-top"
            onClick={scrollToTop}
            type="button"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </motion.button>
        </footer>
      </div>
    </>
  );
};
