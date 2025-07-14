import { motion } from 'framer-motion'

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

const Projects = () => {
  return (
    <div className="section-padding">
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
    </div>
  )
}

export default Projects 