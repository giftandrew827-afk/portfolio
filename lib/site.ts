export const contact = {
  email: 'giftandrew827@gmail.com',
  whatsappDisplay: '+234 708 873 7289',
  whatsappUrl:
    'https://wa.me/2347088737289?text=' +
    encodeURIComponent("Hi Gift, I found your portfolio and I'd love to talk."),
  tiktokHandle: '@cgiftedtales',
  tiktokUrl: 'https://www.tiktok.com/@cgiftedtales',
}

export const navLinks = [
  { href: '/work', label: 'Work' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export type Project = {
  slug: string
  number: string
  title: string
  summary: string
  tags: string[]
  video: string
  format?: string
}

const projectTags = ['Script', 'AI video', 'Edit']

export const projects: Project[] = [
  {
    slug: 'project-01',
    number: '01',
    title: 'Project 01',
    summary: 'An original AI-generated video. I wrote, produced and edited it myself.',
    tags: projectTags,
    video: '/videos/project-01.mp4',
  },
  {
    slug: 'project-02',
    number: '02',
    title: 'Project 02',
    summary: 'An original AI-generated video. I wrote, produced and edited it myself.',
    tags: projectTags,
    video: '/videos/project-02.mp4',
  },
  {
    slug: 'project-03',
    number: '03',
    title: 'Project 03',
    summary: 'An original AI-generated video. I wrote, produced and edited it myself.',
    tags: projectTags,
    video: '/videos/project-03.mp4',
  },
  {
    slug: 'advertisement',
    number: '04',
    title: 'Advertisement',
    summary: 'An engaging short-form advertisement created to capture attention and communicate a brand message clearly.',
    tags: ['Advertisement', 'Script', 'Edit'],
    video: '/videos/advertisement.mp4',
    format: 'Social media advertisement',
  },
]

export type ServiceIcon = 'film' | 'pen' | 'megaphone' | 'calendar' | 'scissors' | 'palette'

export const services: { title: string; description: string; icon: ServiceIcon }[] = [
  {
    title: 'AI cinematic video',
    description: 'Cinematic videos and short films made with AI, from first idea to final cut.',
    icon: 'film',
  },
  {
    title: 'Scriptwriting',
    description: 'Original scripts with the story, characters and structure that hold a piece together.',
    icon: 'pen',
  },
  {
    title: 'Social media management',
    description: 'Accounts on Instagram, Facebook, TikTok and YouTube kept active, consistent and on-brand.',
    icon: 'megaphone',
  },
  {
    title: 'Content planning',
    description: 'A plan for each platform, so every post has a purpose and a clear voice.',
    icon: 'calendar',
  },
  {
    title: 'Video editing',
    description: 'Clean, engaging edits paced and sized for the platform they live on.',
    icon: 'scissors',
  },
  {
    title: 'Graphic design',
    description: 'Graphics that support the content and keep a brand looking consistent.',
    icon: 'palette',
  },
]

export type Brand = { name: string; note: string; logo: string }

export const tools: Brand[] = [
  { name: 'Google Flow', note: 'AI filmmaking', logo: '/logos/google-flow.svg' },
  { name: 'Google Gemini', note: 'AI assistant', logo: '/logos/gemini.svg' },
  { name: 'ChatGPT', note: 'AI assistant', logo: '/logos/chatgpt.svg' },
  { name: 'CapCut', note: 'Video editing', logo: '/logos/capcut.svg' },
]

export const platforms: Brand[] = [
  { name: 'Instagram', note: 'Reels & posts', logo: '/logos/instagram.svg' },
  { name: 'Facebook', note: 'Pages & posts', logo: '/logos/facebook.svg' },
  { name: 'TikTok', note: 'Short video', logo: '/logos/tiktok.svg' },
  { name: 'YouTube', note: 'Films & shorts', logo: '/logos/youtube.svg' },
]

export type ExperienceIcon = 'user' | 'church' | 'clapperboard' | 'cake'

export const experience: { label: string; icon: ExperienceIcon }[] = [
  { label: 'Personal brands', icon: 'user' },
  { label: 'Churches and religious organisations', icon: 'church' },
  { label: 'Entertainment and short-film content', icon: 'clapperboard' },
  { label: 'My former cake business', icon: 'cake' },
]

export const process = [
  { title: 'Idea', description: 'I shape the concept and what the piece should make people feel.' },
  { title: 'Script', description: 'I write the story, scenes and lines.' },
  { title: 'Produce', description: 'I generate the visuals with AI tools.' },
  { title: 'Edit', description: 'I cut, pace and polish the final video.' },
  { title: 'Publish', description: 'I plan where and how it goes out.' },
]
