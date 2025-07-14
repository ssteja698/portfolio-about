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

const About = () => {
  return (
    <div className="section-padding">
      <div className="container-custom space-y-16">
        {/* Experience */}
        <section>
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
        </section>
        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-primary-700 dark:text-primary-400">Education</h2>
          <div className="card">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
              <span className="font-bold text-lg text-zinc-900 dark:text-zinc-100">{education.school}</span>
              <span className="text-primary-600 dark:text-primary-400 font-semibold">{education.degree}</span>
              <span className="text-zinc-500 dark:text-zinc-400 text-sm">{education.date}</span>
            </div>
            <div className="text-zinc-700 dark:text-zinc-300">{education.details}</div>
          </div>
        </section>
        {/* Achievements */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-primary-700 dark:text-primary-400">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((a) => (
              <div key={a.title} className="card">
                <div className="font-bold text-lg text-zinc-900 dark:text-zinc-100 mb-2">{a.title} <span className="text-xs text-zinc-500">{a.year}</span></div>
                <div className="text-zinc-700 dark:text-zinc-300 text-sm">{a.details}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default About 