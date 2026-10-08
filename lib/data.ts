export const profile = {
  name: 'Aleksandar Janjic',
  role: 'Back-End Developer',
  location: 'Belgrade, Serbia',
  email: 'aleksandarjanjic10@hotmail.com',
  phone: '+381 69 255 0222',
  phoneHref: 'tel:+381692550222',
  intro:
    'Back-end developer with over six years of experience building web applications and integrating AI tools. I work with databases and write end-to-end and unit tests so the systems I ship stay reliable.',
  bio: 'I spend most of my time on the server side: services, data, and the tests that keep both honest. At Codifying I integrate AI tools into back-end services and keep database operations in shape. Before that, at TZARS, I built scalable back ends and the test suites around them. I started in a full-stack role at It Lion, building custom WordPress sites to a client brief.',
  socials: {
    linkedin: 'https://linkedin.com/in/aleksandar-janjic-a65958172',
    email: 'mailto:aleksandarjanjic10@hotmail.com',
    github: 'https://github.com/JanjicA/',
  },
}

export const stats = [
  { value: '6+', label: 'Years experience' },
  { value: '3', label: 'Companies' },
  { value: '22', label: 'Technologies' },
]

export const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
  Backend: ['PHP', 'Laravel', 'Node.js', 'Express', 'NestJS'],
  Data: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ'],
  'Quality & tools': ['Jest', 'Docker', 'Linux', 'AWS', 'Git', 'Jira', 'Confluence', 'Bitbucket'],
}

export const languages = [
  { name: 'Serbian', level: 'Native' },
  { name: 'English', level: 'Full professional proficiency' },
]

export const education = [
  {
    degree: 'BAS, Electrical and Computer Engineering',
    school: 'ICT College',
    location: 'Belgrade',
    dates: 'Oct 2016 — Oct 2020',
  },
  {
    degree: 'Mathematical and natural sciences',
    school: 'Mathematical Grammar School',
    location: 'Kraljevo',
    dates: 'Sep 2010 — May 2014',
  },
]

export const interests = ['Sports', 'Movies', 'Traveling', 'Cooking']

export type ProjectHighlight = {
  title: string
  body: string
}

export type Project = {
  slug: string
  title: string
  kind: 'personal' | 'work'
  summary: string
  tags: string[]
  accent: 'violet' | 'blue' | 'amber' | 'emerald'
  highlights: ProjectHighlight[]
  github?: string
  company?: string
  role?: string
  type?: string
  dates?: string
  location?: string
}

export const personalProjects: Project[] = [
  {
    slug: 'ibiy',
    title: 'Ibiy',
    kind: 'personal',
    summary: 'API for projects and participants, with payments, rewards, vouchers, and partner donations.',
    tags: ['NestJS', 'TypeScript', 'TypeORM', 'MySQL', 'Redis', 'AWS'],
    accent: 'violet',
    highlights: [
      {
        title: 'What it covers',
        body: 'The backend is organised around projects, participants, performances, payments, transactions, rewards, and vouchers. Partner donations are part of that model, including Swiss Basketball partners and amounts in CHF.',
      },
      {
        title: 'What I worked on',
        body: 'Transactions and how partner donations show up for a user, copying a project together with its participants, project admins, participant public data, performance ordering, email templates, and the contact-form mail route.',
      },
      {
        title: 'Stack',
        body: 'NestJS and TypeScript, TypeORM on MySQL, Redis, JWT auth, AWS S3 and SES, Swagger, Jest, and Docker.',
      },
    ],
  },
  {
    slug: 'rockwell-logic-portal',
    title: 'Rockwell Logic Portal',
    kind: 'personal',
    summary: 'API for a financial-advice portal: fact finds, products, risk assessments, and generated application files.',
    tags: ['NestJS', 'TypeScript', 'TypeORM', 'PostgreSQL', 'Redis', 'DocuSign'],
    accent: 'blue',
    highlights: [
      {
        title: 'What it covers',
        body: 'The portal API holds fact finds, funds, products, risk assessments, change requests, and users. Application files are filled from that data, including Zurich Master Trust and New Ireland forms, with IBAN and BIC.',
      },
      {
        title: 'What I worked on',
        body: 'Mapping fact-find data into product application files, making employer fields mandatory, login checks for phone numbers, and the email sent to an admin when a user changes their address. Also PPS number parsing and PEP override.',
      },
      {
        title: 'Stack',
        body: 'NestJS and TypeScript, TypeORM, PostgreSQL, Redis, JWT, AWS SES, DocuSign, Jest, and Docker.',
      },
    ],
  },
  {
    slug: 'stolari',
    title: 'Stolari',
    kind: 'personal',
    summary: 'Product catalog and shop: categories, cart, checkout, blogs, and job offers, with a Next.js front end.',
    tags: ['NestJS', 'TypeORM', 'PostgreSQL', 'Next.js', 'Redux'],
    accent: 'amber',
    highlights: [
      {
        title: 'What it covers',
        body: 'The API serves products, catalogs, a cart, checkout, blogs, partners, and job offers. The front end is a Next.js shop that reads that API.',
      },
      {
        title: 'What I worked on',
        body: 'Product slugs and single-product lookup, categories and filters, top products, checkout mail to several admin addresses, partner price updates, blog slugs, and registration. Checkout routes were opened without a JWT guard.',
      },
      {
        title: 'Stack',
        body: 'NestJS, TypeScript, TypeORM, PostgreSQL, Redis on the API. Next.js, React, Redux, and Sass on the front end.',
      },
    ],
  },
  {
    slug: 'family-health',
    title: 'Family Health',
    kind: 'personal',
    summary: 'Clinic API for genetics, oncogenetics, prenatal tests, and stem cells, with a Next.js CRM in front.',
    tags: ['NestJS', 'TypeORM', 'PostgreSQL', 'Next.js', 'Redis'],
    accent: 'emerald',
    highlights: [
      {
        title: 'What it covers',
        body: 'The API is split into genetics, oncogenetics, prenatal tests, stem cells, and schools, plus users, notes, notifications, and PDF generation. The front end is a Next.js CRM.',
      },
      {
        title: 'What I worked on',
        body: 'Oncogenetics fields and CSV import of patients, prenatal twin-pregnancy inputs, required-field checks, notifications, module delete permissions for admins, and extending the users list.',
      },
      {
        title: 'Stack',
        body: 'NestJS, TypeScript, TypeORM, PostgreSQL, Redis, and Jest on the API. Next.js, React, and Redux on the CRM.',
      },
    ],
  },
  {
    slug: 'riana',
    title: 'Riana',
    kind: 'personal',
    summary: 'Clinic nutrition platform: patients, visits, meals, and generated nutrition-plan PDFs.',
    tags: ['Nx', 'NestJS', 'Prisma', 'Vue', 'TypeScript'],
    accent: 'violet',
    highlights: [
      {
        title: 'What it covers',
        body: 'An Nx monorepo with a NestJS API and a Vue client. The domain is patients, visits, meals, ingredients, lab results, nutrition goals, and nutrition plans rendered to PDF.',
      },
      {
        title: 'What I worked on',
        body: 'How meals appear in the plan PDF, similar-patient matching, BMR and TDEE on the patient, visit notes, access control through a repository, and fixes to unit and integration tests.',
      },
      {
        title: 'Stack',
        body: 'Nx, NestJS, Prisma, Vue, TypeScript, JWT, Jest, and Cypress.',
      },
    ],
  },
  {
    slug: 'putuj-lako',
    title: 'Putuj Lako',
    kind: 'personal',
    summary: 'A lead finder for a travel agency: a multi-step trip questionnaire, then a hand-built offer.',
    tags: ['TanStack Start', 'React', 'Tailwind', 'Supabase'],
    accent: 'blue',
    highlights: [
      {
        title: 'What it covers',
        body: 'The visitor fills in a multi-step form about the trip they want. The agency then finds an offer and sends it by email, phone, or message. The site also has offers, a blog, and an about page.',
      },
      {
        title: 'What I worked on',
        body: 'Offers and blog posts, SEO on the offers page, a luggage step in the questionnaire and in the email, multi-country destinations, the shared footer, and the logo and type.',
      },
      {
        title: 'Stack',
        body: 'TanStack Start, React, Vite, Tailwind CSS, Supabase, and React Email.',
      },
    ],
  },
  {
    slug: 'driveme',
    title: 'DriveMe',
    kind: 'personal',
    summary: 'Backend for drivers, custom routes, expenses, and account email, with a Vue client.',
    tags: ['NestJS', 'Prisma', 'Vue', 'Nx', 'PostgreSQL'],
    accent: 'amber',
    highlights: [
      {
        title: 'What it covers',
        body: 'The backend is a set of NestJS services for DriveMe: drivers, routes, expenses, users, and mail. The client is a Vue app.',
      },
      {
        title: 'What I worked on',
        body: 'Registration and email verification, looking up a driver by user, custom routes, ride emails, car colour on the driver, and profile images. Password on register was made optional.',
      },
      {
        title: 'Stack',
        body: 'Nx, NestJS, Prisma, TypeScript, JWT, Swagger, and Docker on the API. Vue, Vite, and Pinia on the client.',
      },
    ],
  },
  {
    slug: 'intranet',
    title: 'Intranet',
    kind: 'personal',
    summary: 'Internal tool for project management and resource planning: projects, proposals, clients, and tasks.',
    tags: ['Nx', 'NestJS', 'Prisma', 'Vue', 'PostgreSQL'],
    accent: 'emerald',
    highlights: [
      {
        title: 'What it covers',
        body: 'The monorepo is an intranet for planning work. The API covers projects, proposals, clients, contacts, tasks, calendars, and subcontractors. The UI is Vue.',
      },
      {
        title: 'What I worked on',
        body: 'Project and proposal endpoints, default statuses when one is missing, moving query logic from repositories into services, non-paginated project search, and e2e tests around proposals, subjects, and subcontractors.',
      },
      {
        title: 'Stack',
        body: 'Nx, NestJS, Prisma, PostgreSQL, Vue 3, CASL, WebSockets, Docker, Jest, and Vitest.',
      },
    ],
  },
]

export const work: Project[] = [
  {
    slug: 'codifying',
    kind: 'work',
    title: 'AI integrations and back-end systems',
    company: 'Codifying',
    role: 'Back-End Developer',
    type: 'Back-end',
    dates: 'Oct 2023 — Present',
    location: 'Belgrade',
    summary:
      'Integrating AI tools into back-end services, building the systems those products run on, and keeping database operations healthy.',
    tags: ['AI tools', 'Back-end systems', 'Databases'],
    accent: 'violet',
    highlights: [
      {
        title: 'Integrating AI tools into back-end services',
        body: 'The work is to bring AI into existing services, not to leave it as a side experiment. Application features call those tools as part of a normal request: input is checked, the service passes the context it already owns, and the result comes back in a shape the rest of the system can store or act on. Timeouts, failures, and the contract between the service and the tool are part of the integration, so the feature behaves like the rest of the back end.',
      },
      {
        title: 'Developing robust back-end systems',
        body: 'Alongside the integrations, I build and extend the back-end systems the web applications run on. New behavior gets a clear place to live. Request handling stays predictable from the incoming call to the stored result, and responsibilities stay separated so the next change does not have to cut through everything. The aim is a system other people can keep shipping on.',
      },
      {
        title: 'Managing and optimizing database operations',
        body: 'I look after how these systems read and write data. That covers the shape of the data, the operations the application runs against it, and the places where those operations start to slow the product down. Optimization is practical: refine the access path, keep the data layer something the team can reason about, and treat it as part of reliability rather than a later fix.',
      },
      {
        title: 'AI features inside the service',
        body: 'Integrations stay inside the back end the product already uses. A feature calls the AI tool through the service, with the same expectations as any other dependency: a clear input, a result the application can store, and a failure path that does not leave the request half-finished.',
      },
      {
        title: 'Database work as ongoing care',
        body: 'Database operations are not a one-time setup. As features land, I keep an eye on how data is read and written and adjust the parts that start to cost the application time. The aim is a data layer that stays understandable while the product changes.',
      },
    ],
  },
  {
    slug: 'tzars',
    kind: 'work',
    title: 'Scalable back ends and test coverage',
    company: 'TZARS',
    role: 'Back-End Developer',
    type: 'Back-end',
    dates: 'Sep 2020 — Oct 2023',
    location: 'Belgrade',
    summary:
      'Three years of scalable back-end work for dynamic web applications, with end-to-end and unit tests and ongoing care of the database.',
    tags: ['E2E tests', 'Unit tests', 'Databases'],
    accent: 'blue',
    highlights: [
      {
        title: 'End-to-end and unit tests',
        body: 'I wrote unit tests around isolated behavior and end-to-end tests that follow a flow the way a client of the system would. The suites were there to protect code quality: catch regressions before they shipped, record the behavior the application was supposed to keep, and make later changes safer as the codebase grew. Testing was part of the delivery, not a pass at the end.',
      },
      {
        title: 'Scalable back-end solutions',
        body: 'I engineered back-end solutions for dynamic web applications — services that had to take on new product behavior without turning into one place that does everything. The work was structural: clear boundaries between parts of the system, APIs the rest of the product could rely on, and a codebase that could grow with the application instead of fighting it.',
      },
      {
        title: 'Database structures and performance',
        body: 'I administered and refined database structures and their performance. That meant how the data was organized, how the application queried it, and the ongoing work of keeping that layer healthy as features and volume accumulated. When a structure or a query started to hold the product back, it was revised rather than worked around in application code.',
      },
      {
        title: 'Tests as part of delivery',
        body: 'Coverage was written with the feature, not after it. Unit tests pinned down the behavior that had to stay stable, and end-to-end tests checked the path a client of the system actually takes. That made the next change easier to review and safer to ship.',
      },
      {
        title: 'Structures that match the queries',
        body: 'Database work followed how the applications really read and wrote data. When a structure and the queries on top of it drifted apart, I refined the structure or the access path so the application was not compensating for a model that no longer fit.',
      },
    ],
  },
  {
    slug: 'it-lion',
    kind: 'work',
    title: 'Custom WordPress websites',
    company: 'It Lion',
    role: 'Full Stack Engineer',
    type: 'Full stack',
    dates: 'Mar 2020 — Aug 2020',
    location: 'Belgrade',
    summary:
      'Custom WordPress websites built to each client’s specification, from structure and content through to how the site is presented.',
    tags: ['WordPress', 'Full stack'],
    accent: 'amber',
    highlights: [
      {
        title: 'Sites shaped to the brief',
        body: 'I built custom WordPress websites around what each client actually needed. The site’s structure, the way content was organized, and how it was presented followed the specification instead of a generic template dropped in and lightly restyled. The job was the whole site: understand the brief, build it, and leave the client with something they could use.',
      },
      {
        title: 'Full-stack delivery',
        body: 'The role was full stack, so the work did not stop at a theme. Pages, content, and the behavior the client asked for were delivered together. Each site was its own small product: scoped to that client, finished to their requirements, and handed over as a working website rather than a partial front end.',
      },
      {
        title: 'Structure, content, and presentation',
        body: 'Each site was organized around the brief: how pages were structured, how content was grouped, and how it was presented. The layout and the content model were part of the same job, so the site read the way the client had asked for it to read.',
      },
      {
        title: 'Built to the specification',
        body: 'Client requirements set the scope. Where a stock layout would have missed the brief, the site was adapted — pages, sections, and the behavior they needed — instead of forcing the specification into a generic theme.',
      },
      {
        title: 'A site the client could use',
        body: 'Delivery meant a working website, not a partial front end. Content was in place, the pages held together, and the client could take the site and use it. The handoff was the finished site matched to what they had specified.',
      },
    ],
  },
]

export const projects = [...personalProjects, ...work]

export const navItems = ['About', 'Skills', 'Projects', 'Work', 'Contact']

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
