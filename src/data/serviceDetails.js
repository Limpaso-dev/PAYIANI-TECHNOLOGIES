// Content for the dedicated service pages at /services/<slug>.
//
// Each page answers one search intent. `keywords` documents the searches the
// page is written for (it is not output as a meta tag — Google ignores those);
// the first entry is the primary target and drives the H1 and title.
// Keep metaTitle under ~45 characters (the " | Payiani Technologies" suffix is
// added automatically) and metaDescription under ~160 characters.

export const serviceDetails = [
  {
    slug: 'software-development',
    pillar: 'software-engineering',
    name: 'Software Development',
    keywords: [
      'Software development company in Kenya',
      'Enterprise software development',
      'Web application development Kenya',
      'API development and integration',
      'Database management solutions',
    ],
    metaTitle: 'Software Development Company in Kenya',
    metaDescription:
      'Software development company in Kenya building enterprise software, web applications, APIs and integrations for businesses and institutions.',
    h1: 'Software Development Company in Kenya',
    summary: 'Enterprise software, web applications, APIs and database solutions engineered for reliability and growth.',
    highlights: ['Enterprise Software', 'Web Applications', 'API Integration', 'M-Pesa Integration'],
    intro: [
      'Payiani Technologies is a software development company in Kenya that designs, builds and maintains software for businesses, schools, hospitals, NGOs and SACCOs. We turn your requirements into secure, reliable applications that your team and your customers can depend on.',
      'From web applications and enterprise platforms to API integrations and database design, we cover the full software development lifecycle: analysis, design, development, testing, deployment and long-term support.',
    ],
    offerings: [
      ['Enterprise software development', 'Scalable platforms that support many users, departments and locations.'],
      ['Web application development', 'Browser-based applications, portals and dashboards built with modern frameworks such as React and Node.js.'],
      ['API development & integration', 'Connecting your systems to each other and to services such as M-Pesa, SMS gateways, email and payment providers.'],
      ['Database management solutions', 'Database design, migration, optimization and secure backups using MySQL, PostgreSQL and MongoDB.'],
      ['M-Pesa & payment integration', 'Safaricom Daraja API (STK Push, C2B, B2C) plus Paystack, Flutterwave, DPO, Stripe and PayPal.'],
      ['Maintenance & support', 'Updates, monitoring, bug fixes and new features after your software goes live.'],
    ],
    benefits: [
      'Software engineered around your real workflows',
      'Secure, role-based access to your data',
      'Integration with the tools you already use',
      'Clear documentation and staff training',
      'Long-term maintenance from the team that built it',
    ],
    industries: ['business', 'education', 'healthcare', 'saccos', 'ngos'],
    faqs: [
      {
        question: 'What kind of software do you develop?',
        answer:
          'We develop web applications, enterprise platforms, business management systems, customer and member portals, APIs and integrations. For specific systems such as ERP, CRM, inventory, school or hospital management, see our custom software development page.',
      },
      {
        question: 'Can you integrate M-Pesa into our software?',
        answer:
          'Yes. We integrate the Safaricom Daraja API for STK Push, C2B and B2C transactions, including transaction tracking and automatic reconciliation.',
      },
      {
        question: 'Do you maintain software after launch?',
        answer:
          'Yes. We offer ongoing maintenance and support, including updates, security fixes, monitoring and new features.',
      },
    ],
  },
  {
    slug: 'custom-software-development',
    pillar: 'software-engineering',
    name: 'Custom Software Development',
    keywords: [
      'Custom software development Kenya',
      'ERP software development Kenya',
      'CRM development Kenya',
      'School management systems Kenya',
      'Hospital management system development',
      'Inventory management systems',
      'Cooperative management systems',
      'Digital records management systems',
      'Custom business software development',
    ],
    metaTitle: 'Custom Software Development in Kenya',
    metaDescription:
      'Custom software development in Kenya: ERP, CRM, inventory, school management, hospital management and SACCO systems built around your operations.',
    h1: 'Custom Software Development in Kenya',
    summary: 'ERP, CRM, inventory, school, hospital and SACCO management systems designed around your operations.',
    highlights: ['ERP Systems', 'CRM Systems', 'School & Hospital Systems', 'SACCO Systems'],
    intro: [
      'Off-the-shelf software rarely fits the way your organization actually works. Payiani Technologies develops custom business software for organizations in Kenya, including ERP, CRM, inventory, school management, hospital management and cooperative management systems.',
      'We study your processes first, then build a system that replaces spreadsheets and paperwork, automates routine work, integrates with M-Pesa and gives management accurate, real-time reports.',
    ],
    offerings: [
      ['ERP software development', 'One system for finance, procurement, inventory, HR and reporting across your organization.'],
      ['CRM development', 'Manage leads, customers, follow-ups and sales pipelines in one place.'],
      ['Inventory management systems', 'Track stock, purchases, sales and suppliers across one or many locations.'],
      ['School management systems', 'Student records, admissions, fee management with M-Pesa, exams, reports and parent communication.'],
      ['Hospital management systems', 'Patient registration, appointments, records, billing, pharmacy and reporting.'],
      ['Cooperative & SACCO management systems', 'Member records, savings, loans, dividends and statements with M-Pesa integration.'],
      ['Digital records management', 'Secure digital filing, search and access control to replace paper records.'],
      ['Business automation tools', 'Automated approvals, notifications, reports and workflows.'],
    ],
    benefits: [
      'Built around your processes, not the other way round',
      'You own a system that grows with your organization',
      'Accurate, real-time reports for decision-making',
      'M-Pesa, SMS and email integration',
      'Training, documentation and ongoing support',
    ],
    industries: ['business', 'education', 'healthcare', 'saccos', 'ngos'],
    faqs: [
      {
        question: 'Why choose custom software over an off-the-shelf system?',
        answer:
          'Custom software fits your exact processes, avoids paying for features you do not use, integrates with your existing tools and can grow with your organization. You are also not locked into a vendor’s roadmap.',
      },
      {
        question: 'Can you build a school or hospital management system?',
        answer:
          'Yes. We build school management systems (students, fees, exams, reports) and hospital management systems (patients, appointments, records, billing) tailored to each institution.',
      },
      {
        question: 'Do you build SACCO and cooperative management systems?',
        answer:
          'Yes. We develop systems for member registration, savings, loans, repayments, dividends and statements, with M-Pesa integration for contributions and repayments.',
      },
    ],
  },
  {
    slug: 'web-development',
    pillar: 'software-engineering',
    name: 'Website Development',
    keywords: [
      'Website development company in Kenya',
      'Web development services Kenya',
      'Website designers Nairobi',
      'Website developers in Kenya',
      'Professional website design Kenya',
      'E-commerce website development',
      'Corporate website development',
      'Responsive web design',
      'Custom web applications',
      'Website maintenance services',
    ],
    metaTitle: 'Website Development Company in Kenya',
    metaDescription:
      'Website design and development in Kenya. Nairobi-based web developers building responsive corporate, e-commerce and institutional websites.',
    h1: 'Website Development Company in Kenya',
    summary: 'Professional, responsive websites, e-commerce stores and custom web applications, designed in Nairobi.',
    highlights: ['Corporate Websites', 'E-Commerce', 'Responsive Design', 'Website Maintenance'],
    intro: [
      'Your website is often the first place a customer, parent, patient or donor meets your organization. Payiani Technologies is a team of website designers and developers based in Karen, Nairobi, building professional websites for businesses and institutions across Kenya.',
      'We provide complete web development services: planning your content, professional website design, development, M-Pesa and card payments, hosting, and website maintenance after launch.',
    ],
    offerings: [
      ['Corporate website development', 'Professional company websites that present your services clearly and generate enquiries.'],
      ['Professional website design', 'Clean, modern designs that reflect your brand and build trust.'],
      ['E-commerce website development', 'Online stores with product catalogues, carts and checkout via M-Pesa and cards.'],
      ['Responsive web design', 'Websites that work perfectly on phones, tablets and computers.'],
      ['Custom web applications', 'Portals, booking systems and dashboards built for your specific needs.'],
      ['Website maintenance services', 'Updates, backups, security monitoring and content changes after launch.'],
    ],
    benefits: [
      'Mobile-first, responsive design',
      'Fast loading and built for search engine visibility (SEO)',
      'M-Pesa (Daraja API) and card payment integration',
      'Hosting, domain and SSL setup included',
      'Ongoing maintenance and support',
    ],
    industries: ['business', 'education', 'healthcare', 'ngos'],
    faqs: [
      {
        question: 'How much does a website cost in Kenya?',
        answer:
          'The cost depends on the number of pages, features such as online payments or bookings, and whether you need content written for you. Contact us with your requirements and we will send a clear quotation.',
      },
      {
        question: 'Are you website designers based in Nairobi?',
        answer:
          'Yes. Payiani Technologies is based in Karen, Nairobi, and builds websites for organizations across Kenya, including Kajiado County.',
      },
      {
        question: 'Do you offer website maintenance?',
        answer:
          'Yes. We offer website maintenance plans covering updates, backups, security monitoring and content changes.',
      },
    ],
  },
  {
    slug: 'mobile-app-development',
    pillar: 'software-engineering',
    name: 'Mobile App Development',
    keywords: ['Mobile application development Kenya', 'Android app developers Kenya', 'Mobile app development Kenya'],
    metaTitle: 'Mobile App Development in Kenya',
    metaDescription:
      'Mobile application development in Kenya. Android and iOS app developers building secure apps with M-Pesa payments for businesses and institutions.',
    h1: 'Mobile Application Development in Kenya',
    summary: 'Android and iOS apps with M-Pesa payments, secure APIs and admin dashboards.',
    highlights: ['Android & iOS Apps', 'M-Pesa In-App Payments', 'Admin Dashboards', 'App Store Publishing'],
    intro: [
      'Most of your customers reach the internet through their phones. Payiani Technologies are Android and iOS app developers in Kenya, building mobile apps for businesses, startups and institutions that are simple to use, secure and connected to the systems you already run.',
      'From the first idea to publishing on the Google Play Store and Apple App Store, we design, build and support apps that solve a clear problem for your users.',
    ],
    offerings: [
      ['Android app development', 'Apps for the Android phones most Kenyan users carry.'],
      ['iOS & cross-platform apps', 'One codebase that runs on both Android and iPhone.'],
      ['Business & field apps', 'Apps for sales teams, field staff, data collection and operations.'],
      ['M-Pesa enabled apps', 'In-app payments and wallet top-ups through the Daraja API.'],
      ['Backend & APIs', 'Secure servers, databases and admin dashboards that power your app.'],
      ['App store publishing', 'Preparing and publishing your app to the Play Store and App Store.'],
    ],
    benefits: [
      'One codebase for Android and iOS to control cost',
      'Clean, intuitive design for everyday users',
      'Secure authentication and data protection',
      'Updates, monitoring and support after launch',
    ],
    industries: ['business', 'saccos', 'education'],
    faqs: [
      {
        question: 'Do you build apps for both Android and iPhone?',
        answer:
          'Yes. We use cross-platform technology so one app runs on both Android and iOS, which reduces development and maintenance cost.',
      },
      {
        question: 'Can my app connect to my existing system?',
        answer:
          'Yes. We build or extend APIs so your app shares data with your existing website, database or business system.',
      },
    ],
  },
  {
    slug: 'web-hosting',
    pillar: 'software-engineering',
    name: 'Website Hosting',
    keywords: ['Website hosting Kenya', 'Web hosting services Kenya', 'Domain registration', 'SSL certificates'],
    metaTitle: 'Website Hosting in Kenya',
    metaDescription:
      'Website hosting in Kenya: shared and VPS hosting, domain registration, SSL certificates, deployment and backups with responsive local support.',
    h1: 'Website Hosting Services in Kenya',
    summary: 'Shared and VPS hosting, domains, SSL certificates, deployment and backups.',
    highlights: ['Shared & VPS Hosting', 'Domains', 'SSL Certificates', 'Deployment & DevOps'],
    intro: [
      'A fast, secure and reliable host keeps your website and systems available to the people who depend on them. Payiani Technologies provides website hosting, domains and deployment services for businesses and institutions in Kenya, with responsive support from a team that understands your setup.',
      'Whether you need hosting for a company website or a server for a custom system, we set it up, secure it and keep it running.',
    ],
    offerings: [
      ['Shared hosting', 'Affordable hosting for company websites, blogs and small applications.'],
      ['VPS & cloud hosting', 'Dedicated resources for larger websites and business systems.'],
      ['Domain registration', 'Registering, renewing and managing your domain names.'],
      ['SSL certificates', 'HTTPS encryption that protects visitors and builds trust.'],
      ['Deployment & DevOps', 'Automated deployments on Vercel, Netlify, Render, Docker and CI/CD pipelines.'],
      ['Migration & backups', 'Moving existing sites to new hosting and setting up regular backups.'],
    ],
    benefits: ['Secure setup with SSL included', 'Regular backups', 'Local, responsive technical support', 'Hosting matched to your website or system'],
    industries: ['business', 'education', 'ngos'],
    faqs: [
      {
        question: 'Can you move my existing website to your hosting?',
        answer:
          'Yes. We migrate websites, databases and email from your current provider and plan the switch to keep downtime to a minimum.',
      },
      {
        question: 'Is an SSL certificate included?',
        answer: 'Yes. Every website we host is set up with an SSL certificate so that it loads securely over HTTPS.',
      },
    ],
  },
  {
    slug: 'digital-transformation',
    pillar: 'digital-transformation',
    name: 'Digital Transformation',
    keywords: [
      'Digital transformation services Kenya',
      'Business process automation Kenya',
      'Business automation solutions',
      'Digital solutions for businesses',
      'Technology solutions for institutions',
      'Institutional software development',
      'Digital records management systems',
    ],
    metaTitle: 'Digital Transformation Services in Kenya',
    metaDescription:
      'Digital transformation services in Kenya. Business process automation, digital records and institutional systems that replace paperwork.',
    h1: 'Digital Transformation Services in Kenya',
    summary: 'Business process automation, digital records and institutional systems that replace paperwork.',
    highlights: ['Process Automation', 'Digital Records', 'Institutional Systems', 'Staff Adoption'],
    intro: [
      'Many organizations in Kenya still run on paper forms, manual approvals and spreadsheets. Payiani Technologies helps businesses and institutions move to efficient digital operations, from mapping your current processes to automating them and training your people to use the new tools.',
      'Our digital transformation services combine IT consultancy, custom software development and digital literacy training, so the change is planned properly, built well and actually adopted by your team.',
    ],
    offerings: [
      ['Process review & roadmap', 'We map how work flows today and design a practical digital roadmap.'],
      ['Business process automation', 'Automating approvals, requests, notifications and reports.'],
      ['Digital records management', 'Moving paper files into secure, searchable digital systems.'],
      ['Institutional software', 'Systems for schools, hospitals, NGOs and SACCOs built around their operations.'],
      ['Online payments & self-service', 'M-Pesa payments and portals that let clients and members serve themselves.'],
      ['Change management & training', 'Training staff so new systems are used confidently from day one.'],
    ],
    benefits: [
      'Less paperwork and fewer manual errors',
      'Faster service for customers, students, patients and members',
      'Accurate information available when you need it',
      'A phased plan that fits your budget',
    ],
    industries: ['business', 'education', 'healthcare', 'ngos', 'saccos'],
    faqs: [
      {
        question: 'What is digital transformation?',
        answer:
          'Digital transformation is the process of replacing manual, paper-based or disconnected ways of working with integrated digital systems, so that an organization works faster, more accurately and serves people better.',
      },
      {
        question: 'Where should we start?',
        answer:
          'Most organizations start with a process review. We identify the processes that cost the most time or cause the most errors and digitize those first, in phases that fit your budget.',
      },
    ],
  },
  {
    slug: 'cybersecurity',
    pillar: 'cybersecurity',
    name: 'Cybersecurity Services',
    keywords: [
      'Cybersecurity services Kenya',
      'Cybersecurity company Kenya',
      'IT security consultancy Kenya',
      'Business cybersecurity solutions',
      'Network security services',
      'Data protection solutions',
      'Information security services',
    ],
    metaTitle: 'Cybersecurity Services in Kenya',
    metaDescription:
      'Cybersecurity services in Kenya: security audits, penetration testing, network security, data protection and IT security consultancy.',
    h1: 'Cybersecurity Services in Kenya',
    summary: 'Security audits, penetration testing, network security, data protection and awareness training.',
    highlights: ['Security Audits', 'Penetration Testing', 'Network Security', 'Data Protection'],
    intro: [
      'Cyber attacks, data breaches and online fraud affect organizations of every size. Payiani Technologies provides cybersecurity services and IT security consultancy to businesses, schools, hospitals, NGOs and SACCOs in Kenya, helping you find and fix weaknesses before attackers do.',
      'We combine technical testing with practical advice and staff training, so your systems, networks and information stay protected.',
    ],
    offerings: [
      ['Security audits', 'A structured review of your systems, configurations, access controls and policies.'],
      ['Vulnerability assessment & penetration testing', 'Authorized testing that finds weaknesses and shows what an attacker could achieve.'],
      ['Network security services', 'Securing firewalls, Wi-Fi, servers and remote access.'],
      ['Data protection solutions', 'Protecting personal data in line with the Kenya Data Protection Act, 2019.'],
      ['Information security policies', 'Practical security policies and procedures your team can follow.'],
      ['Security awareness training', 'Training staff and students to recognize phishing, scams and unsafe practices.'],
    ],
    benefits: [
      'Clear, prioritized reports in plain language',
      'Practical fixes, not just a list of problems',
      'Reduced risk of data loss, fraud and downtime',
      'Support with implementing recommendations',
    ],
    industries: ['business', 'healthcare', 'saccos', 'education', 'ngos'],
    faqs: [
      {
        question: 'What is the difference between a vulnerability assessment and penetration testing?',
        answer:
          'A vulnerability assessment identifies known weaknesses across your systems. Penetration testing goes further by safely attempting to exploit them, showing what an attacker could actually achieve.',
      },
      {
        question: 'Can you help us comply with the Data Protection Act?',
        answer:
          'We help you identify where personal data is held, how it is protected and what technical and organizational measures to put in place. For formal legal advice, we recommend working alongside a qualified data protection lawyer.',
      },
    ],
  },
  {
    slug: 'it-consultancy',
    pillar: 'it-consultancy',
    name: 'IT Consultancy',
    keywords: [
      'IT consultancy services Kenya',
      'IT consultancy for institutions',
      'IT infrastructure consultancy',
      'ICT infrastructure solutions',
      'Cloud computing services Kenya',
      'IT support and maintenance',
      'ICT consultancy for schools',
    ],
    metaTitle: 'IT Consultancy Services in Kenya',
    metaDescription:
      'IT consultancy services in Kenya for businesses and institutions: IT infrastructure, cloud computing, technology strategy and IT support.',
    h1: 'IT Consultancy Services in Kenya',
    summary: 'Technology strategy, IT infrastructure, cloud computing and ongoing IT support.',
    highlights: ['Technology Strategy', 'IT Infrastructure', 'Cloud Computing', 'IT Support'],
    intro: [
      'Technology decisions are expensive to get wrong. Payiani Technologies provides IT and ICT consultancy to businesses and institutions in Kenya, including schools, hospitals, NGOs and SACCOs, that want to invest in technology with confidence.',
      'We assess where you are today, recommend practical improvements, and help you plan, procure, implement and support the right systems, infrastructure and cloud services.',
    ],
    offerings: [
      ['Technology strategy', 'A clear roadmap aligning technology investment with your goals.'],
      ['IT infrastructure consultancy', 'Planning networks, servers, devices and connectivity that fit your organization.'],
      ['Cloud computing services', 'Moving email, files and systems to the cloud securely and cost-effectively.'],
      ['ICT consultancy for schools & institutions', 'Computer labs, networks, systems and ICT policy for educational and public institutions.'],
      ['System analysis & tender requirements', 'Documenting what you need before you build, buy or tender.'],
      ['IT support & maintenance', 'Ongoing support for your systems, devices and users.'],
    ],
    benefits: [
      'Technology investment aligned with your goals',
      'Fewer costly mistakes when buying or building systems',
      'Independent, practical recommendations',
      'Ongoing support as your needs change',
    ],
    industries: ['business', 'education', 'healthcare', 'ngos', 'saccos'],
    faqs: [
      {
        question: 'When should an organization hire an IT consultant?',
        answer:
          'Common moments are before buying or building a major system, when moving from manual to digital processes, when planning a network or cloud migration, or when existing systems are slowing the organization down.',
      },
      {
        question: 'Do you provide ICT consultancy for schools?',
        answer:
          'Yes. We advise schools on computer labs, networks, management systems, online safety and ICT policy, and can deliver digital literacy training for learners and teachers.',
      },
    ],
  },
  {
    slug: 'digital-literacy-training',
    pillar: 'digital-education',
    name: 'Digital Literacy Training',
    keywords: [
      'Digital literacy training Kenya',
      'Computer training for schools',
      'ICT training for teachers',
      'Digital skills training for students',
      'Computer literacy programmes',
      'AI literacy training',
      'Cybersecurity awareness training for schools',
      'Digital transformation in education',
    ],
    metaTitle: 'Digital Literacy Training in Kenya',
    metaDescription:
      'Digital literacy training in Kenya: computer training for schools, ICT training for teachers, digital skills for students and AI literacy.',
    h1: 'Digital Literacy Training in Kenya',
    summary: 'Computer, ICT and AI literacy training for schools, students, teachers and organizational staff.',
    highlights: ['Computer Training for Schools', 'ICT Training for Teachers', 'AI Literacy', 'Online Safety'],
    intro: [
      'Digital skills are now essential for learning and work. Payiani Technologies delivers practical digital literacy training in Kenya for school students, teachers and organizational staff, building the confidence to use technology safely and effectively.',
      'Our computer literacy programmes are hands-on and adapted to each group, from learners using computers for the first time to teachers bringing digital tools and AI into the classroom.',
    ],
    offerings: [
      ['Computer training for schools', 'Practical computer literacy programmes for primary and secondary school learners.'],
      ['ICT training for teachers', 'Helping teachers use digital tools confidently in teaching and administration.'],
      ['Digital skills training for students', 'Typing, documents, research, presentations and responsible internet use.'],
      ['AI literacy training', 'Understanding AI tools, using them responsibly and recognizing their limits.'],
      ['Cybersecurity awareness for schools', 'Online safety, privacy, cyberbullying and avoiding scams.'],
      ['Staff digital skills', 'Email, spreadsheets, cloud collaboration and new system onboarding for organizations.'],
    ],
    benefits: [
      'Hands-on, practical sessions',
      'Content adapted to age, skill level and goals',
      'Strong focus on online safety and responsible use',
      'Delivered on-site at your school or organization',
    ],
    industries: ['education', 'ngos', 'business'],
    faqs: [
      {
        question: 'Do you deliver computer training at our school?',
        answer: 'Yes. We deliver training on-site at schools and organizations, and plan sessions around your timetable.',
      },
      {
        question: 'Do you offer AI literacy training?',
        answer:
          'Yes. Our AI literacy sessions introduce learners, teachers and staff to AI tools, how to use them responsibly, and how to judge their output critically.',
      },
      {
        question: 'Who is the training for?',
        answer:
          'We train school learners, teachers, and staff in businesses, hospitals, NGOs and SACCOs, adapting the content to each group.',
      },
    ],
  },
]

export function getServiceDetail(slug) {
  return serviceDetails.find((service) => service.slug === slug)
}
