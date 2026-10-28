// Single source of truth for the /resume page and the generated PDF.
// Edit here, then run `npm run resume:pdf` to refresh the downloadable PDF.

export const profile = {
  name: 'Nishant Jadhav',
  title: 'Full Stack Developer',
  location: 'Mumbai, India',
  email: 'nishantjadhav.cs@gmail.com',
  phone: '+91 89287 55993',
  phoneHref: 'tel:+918928755993',
  website: 'portfolio.nishantjadhav-cs.workers.dev',
  websiteHref: 'https://portfolio.nishantjadhav-cs.workers.dev/',
  github: 'github.com/NishantJadhavCS',
  githubHref: 'https://github.com/NishantJadhavCS',
  linkedin: 'linkedin.com/in/nishant-jadhav10',
  linkedinHref: 'https://www.linkedin.com/in/nishant-jadhav10/',
  summary:
    'Full Stack Developer with 2+ years of professional experience building e-commerce platforms, custom Shopify applications, and performance-focused websites. Currently building a React + Django Shopify app for jewelry dropshipping at A&I Inc. (USA), with production work across Shopify/Liquid, AWS, and Docker. Combines engineering with analytics and SEO to ship features that measurably improve engagement and conversions.',
};

export const experience = [
  {
    company: 'A&I Inc.',
    location: 'USA · Remote',
    roles: [{ title: 'Full Stack Developer', duration: 'Jul 2025 – Present' }],
    points: [
      'Building a custom Shopify application for personalized jewelry dropshipping and e-commerce automation.',
      'Developed the React frontend on top of Django REST APIs with a modular, scalable architecture.',
      'Implemented JWT authentication and own deployments on AWS using Docker and GitHub Actions CI/CD.',
    ],
    tech: ['React', 'Django', 'Shopify APIs', 'JWT', 'Docker', 'AWS', 'GitHub Actions'],
  },
  {
    company: 'Guyal India',
    location: 'Mumbai, India',
    roles: [
      { title: 'Full Stack Developer', duration: 'Feb 2025 – Jul 2025' },
      { title: 'Full Stack Developer Intern', duration: 'Aug 2024 – Jan 2025' },
    ],
    points: [
      'Built and launched the company’s Shopify store (guyal.com), customizing themes with Liquid, HTML, CSS, and JavaScript.',
      'Automated product workflows (uploads, updates, inventory adjustments), cutting repetitive manual work.',
      'Integrated Google Analytics, Meta Pixel, and Microsoft Clarity; ran UI/UX audits and shipped data-driven design updates to lift engagement and conversions.',
      'Built custom Magento 2 modules in PHP and JavaScript and contributed to responsive frontend work with Bootstrap.',
    ],
    tech: ['Shopify', 'Liquid', 'JavaScript', 'PHP', 'Magento 2', 'Google Analytics'],
  },
  {
    company: 'Freelance',
    location: 'Remote',
    roles: [{ title: 'Web Developer', duration: 'Jun 2023 – Present' }],
    points: [
      'Deliver websites and e-commerce stores for restaurants, fashion brands, and agencies, from design to deployment.',
      'Focus on responsive UI, technical SEO, and analytics so clients can track and grow their traffic.',
    ],
    tech: ['React', 'Django', 'Shopify', 'SEO'],
  },
];

export const projects = [
  {
    name: 'Guyal: Jewelry E-commerce Store',
    href: 'https://www.guyal.com/',
    linkLabel: 'guyal.com',
    description:
      'Feature-rich Shopify store with custom sections, automated product workflows, and analytics-driven UX improvements.',
    tech: 'Shopify · Liquid · JavaScript · Analytics',
  },
  {
    name: 'RPious Couture: Fashion Storefront',
    href: 'https://rpiouscouture.com/',
    linkLabel: 'rpiouscouture.com',
    description:
      "Custom Shopify theme for a women's ethnic fashion brand, focused on a premium, mobile-first shopping experience.",
    tech: 'Shopify · Liquid · JavaScript',
  },
  {
    name: 'DumplingKhang: Restaurant Website',
    href: 'https://www.dumplingkhang.com',
    linkLabel: 'dumplingkhang.com',
    description:
      'Responsive landing page with menu highlights, smooth navigation, and WhatsApp ordering integration.',
    tech: 'HTML · CSS · JavaScript',
  },
  {
    name: 'RapidReads: News Summarizer',
    href: 'https://github.com/NishantJadhavCS/RapidReads',
    linkLabel: 'GitHub',
    description:
      'Django app that fetches articles from news APIs, parses the content, and generates concise summaries in Python.',
    tech: 'Python · Django · Bootstrap · REST APIs',
  },
];

export const skills = [
  { group: 'Languages', items: ['JavaScript', 'Python', 'PHP', 'C++', 'SQL'] },
  { group: 'Frontend', items: ['React', 'HTML5', 'CSS3', 'Liquid', 'Bootstrap'] },
  { group: 'Backend', items: ['Django', 'Django REST Framework', 'Node.js', 'JWT Auth'] },
  { group: 'E-commerce', items: ['Shopify (Themes, Apps, APIs)', 'Magento 2'] },
  { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
  { group: 'DevOps & Cloud', items: ['AWS (S3, CloudFront)', 'Docker', 'GitHub Actions', 'Git', 'Linux'] },
  { group: 'Analytics & SEO', items: ['Google Analytics', 'Meta Pixel', 'Microsoft Clarity', 'Technical SEO'] },
];

export const education = [
  {
    degree: 'B.Sc. Computer Science',
    school: 'Vikas College of Arts, Science and Commerce, Mumbai',
    duration: '2021 – 2024',
    score: 'CGPI 9.45 / 10',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    school: 'D.G. Ruparel College, Mumbai',
    duration: '2016 – 2018',
    score: '73.38%',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    school: 'Dr. Babasaheb Ambedkar Vidyalaya, Mumbai',
    duration: '2015 – 2016',
    score: '86.60%',
  },
];

export const interests = ['Football', 'Guitar'];
