import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto">
            Let's discuss your project and bring your ideas to life.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact 