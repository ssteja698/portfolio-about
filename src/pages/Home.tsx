import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const experience = [
  {
    company: 'LEADSQUARED',
    role: 'Frontend Developer',
    date: 'July 2022 - Current | Bangalore, KA',
    bullets: [
      'Worked on various products such as Chatbot which helps the leads get the relevant details directly without any agents interference, Leadsboard and Nudges which help the agents perform faster.',
      'Implemented the latest technologies such as Vite, tailwindcss. Used the best practices and the best tools namely Cursor which improve productivity.'
    ]
  },
  {
    company: "BYJU'S FUTURE SCHOOL",
    role: 'Frontend Developer',
    date: 'Apr 2021 - June 2022 | Bangalore, KA',
    bullets: [
      "Worked on industry leading website Byju's Math keeping user experience at forefront.",
      'Implemented the best practices and delivered the product within the timelines.'
    ]
  },
  {
    company: 'IDEABOARD',
    role: 'Full Stack Developer',
    date: 'Dec 2019 - Mar 2021 | Bangalore, KA',
    bullets: [
      'Worked on end-to-end web application development',
      'Gained good knowledge over the technologies (React JS with Redux, Ruby on Rails, PostgreSQL) | Involved and built websites more focused on the User Experience (UX)'
    ]
  }
]

const projects = [
  {
    name: 'CHATBOT AND BOT BUILDER',
    stack: 'React JS, Vite, React Redux',
    year: '2024',
    bullets: [
      'Wrote the chat bot code from the scratch using the latest tools mainly Vite and tailwindcss. Focus is always on using the best practices and the optimized code to give users the best UX (User experience).',
      'Bot Builder is implemented using ReactFlow and Redux where each node is created and connected effortlessly for the seamless bot flow experience.'
    ]
  },
  {
    name: "BYJU'S MATH",
    stack: 'NextJS, React JS (Hooks Version)',
    year: '2022',
    bullets: [
      "Developed Byju's Math website for grades 4 to 8 ensuring pixel perfection, least bugs and delivering within the deadlines.",
      'This project mainly deals with providing practice tests, videos, daily challenges, chapter journey and a free math class for the students of grades 4 to 8.'
    ]
  },
  {
    name: 'SPROUTSPACE',
    stack: 'React JS (Hooks Version), Node JS (Backend)',
    year: '',
    bullets: [
      'Worked on a progressive web application to provide an experience to help parents join and subscribe to books for their children in the age of up to 7 years.'
    ]
  },
  {
    name: 'PARENT PORTAL',
    stack: 'React JS with Redux, Ruby on Rails',
    year: '2019',
    bullets: [
      'Developed a progressive web application end-to-end which ensured a bug-free and reliable experience for all those parents who wanted to get an in-depth insight into their child’s test performance.'
    ]
  }
]

const skills = {
  programming: ['JavaScript', 'CSS', 'C++', 'Python', 'TypeScript', 'SCSS', 'HTML', 'PostgreSQL', 'Ruby'],
  libraries: ['React JS', 'Next.js', 'Tailwindcss', 'Redux', 'Angular', 'Node JS'],
  tools: ['Git', 'Vite', 'Cursor', 'Vercel', 'Heroku', 'JIRA']
}

const education = {
  school: 'SASTRA UNIVERSITY',
  degree: "BACHELOR'S IN COMPUTER SCIENCE AND ENGINEERING",
  date: 'July 2016 - 2020 | Thanjavur, TN',
  details: 'School of Computing, CGPA: 8.17'
}

const achievements = [
  {
    title: 'CLASH OF CODERS',
    year: '2021',
    details: 'Secured first place out of 8 to 10 teams as a company hackathon champion (hacking marathon) for the chatbot innovation. The chatbot improves the user experience and in turn conversion rate.'
  },
  {
    title: 'UNIVERSITY CODESPRINT 5',
    year: '2018',
    details: 'Secured a Bronze Medal in the Hackerearth Coding Marathon.'
  },
  {
    title: 'HOSTEL SCHOLARSHIP',
    year: '2018',
    details: 'Received a scholarship of “Rs.160000/-”'
  }
]

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-primary-100 dark:from-zinc-800 dark:to-zinc-900">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="text-5xl md:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                Sai Siva Teja <span className="text-gradient">Bejjipuram</span>
              </h1>
              <h2 className="text-2xl font-semibold text-primary-700 dark:text-primary-400 mb-4">
                Senior Software Developer
              </h2>
              <div className="flex flex-wrap items-center gap-4 mb-6 text-lg text-zinc-700 dark:text-zinc-300">
                <span>📧 <a href="mailto:ssteja2205@gmail.com" className="underline">ssteja2205@gmail.com</a></span>
                <span>📱 <a href="tel:+917539964620" className="underline">+91 75399 64620</a></span>
                <span>💼 <a href="https://www.linkedin.com/in/ssteja698/" className="underline" target="_blank" rel="noopener noreferrer">ssteja698</a></span>
                <span>github <a href="https://github.com/ssteja698" className="underline" target="_blank" rel="noopener noreferrer">ssteja698</a></span>
              </div>
              <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed max-w-2xl">
                Senior Software Developer with experience in frontend and full-stack development. Passionate about building high-quality products and improving productivity with modern technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="#experience" className="btn-primary text-center">Experience</Link>
                <Link to="#projects" className="btn-secondary text-center">Projects</Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                  <p className="text-xl font-medium">Software Portfolio</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-padding bg-white dark:bg-zinc-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-primary-700 dark:text-primary-400">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp) => (
              <div key={exp.company} className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <span className="font-bold text-lg text-zinc-900 dark:text-zinc-100">{exp.company}</span>
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">{exp.role}</span>
                  <span className="text-zinc-500 dark:text-zinc-400 text-sm">{exp.date}</span>
                </div>
                <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300">
                  {exp.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding bg-zinc-50 dark:bg-zinc-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-primary-700 dark:text-primary-400">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((proj) => (
              <div key={proj.name} className="card">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-lg text-zinc-900 dark:text-zinc-100">{proj.name}</span>
                  <span className="text-primary-600 dark:text-primary-400 text-sm font-semibold">{proj.stack}</span>
                  {proj.year && <span className="text-zinc-500 dark:text-zinc-400 text-xs">{proj.year}</span>}
                </div>
                <ul className="list-disc pl-6 text-zinc-700 dark:text-zinc-300">
                  {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-white dark:bg-zinc-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-primary-700 dark:text-primary-400">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Programming</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.programming.map((s) => <li key={s} className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 rounded-full text-sm">{s}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Libraries / Frameworks</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.libraries.map((s) => <li key={s} className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 rounded-full text-sm">{s}</li>)}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">Tools / Platforms</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.tools.map((s) => <li key={s} className="px-3 py-1 bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300 rounded-full text-sm">{s}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-padding bg-zinc-50 dark:bg-zinc-800">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-primary-700 dark:text-primary-400">Education</h2>
          <div className="card">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <span className="font-bold text-lg text-zinc-900 dark:text-zinc-100">{education.school}</span>
              <span className="text-primary-600 dark:text-primary-400 font-semibold">{education.degree}</span>
              <span className="text-zinc-500 dark:text-zinc-400 text-sm">{education.date}</span>
            </div>
            <div className="text-zinc-700 dark:text-zinc-300">{education.details}</div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section-padding bg-white dark:bg-zinc-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-primary-700 dark:text-primary-400">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((a) => (
              <div key={a.title} className="card">
                <div className="font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-2">{a.title} <span className="text-xs text-zinc-500">{a.year}</span></div>
                <div className="text-zinc-700 dark:text-zinc-300 text-sm">{a.details}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 