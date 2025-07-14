export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  category: 'web' | 'mobile' | 'design' | 'other'
}

export interface Skill {
  name: string
  category: 'frontend' | 'backend' | 'design' | 'devops' | 'other'
  icon: string
  proficiency: number // 1-100
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  publishedAt: string
  tags: string[]
  readTime: number
  featured: boolean
}

export interface ContactForm {
  name: string
  email: string
  message: string
  subject: string
} 