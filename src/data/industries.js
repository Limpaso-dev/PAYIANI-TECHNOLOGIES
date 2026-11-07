// Content for the industry pages at /industries/<slug>.
// `keywords` documents the searches each page is written for.

export const industries = [
  {
    slug: 'education',
    name: 'Education',
    shortName: 'Schools & Education',
    keywords: ['School ICT solutions Kenya', 'Digital transformation in education', 'ICT consultancy for schools', 'School management systems Kenya'],
    metaTitle: 'School ICT Solutions in Kenya',
    metaDescription:
      'School ICT solutions in Kenya: school management systems, websites, M-Pesa fee payments, ICT consultancy and digital literacy training.',
    h1: 'School ICT Solutions & Digital Transformation in Education',
    intro:
      'Schools and colleges are expected to communicate with parents online, manage growing amounts of student data and prepare learners for a digital world. Payiani Technologies helps educational institutions in Kenya with practical ICT solutions, systems and training.',
    challenges: [
      'Student, fee and staff records kept in paper files or scattered spreadsheets',
      'Difficulty communicating with parents and publishing timely information',
      'Manual fee collection and reconciliation',
      'Learners and teachers who need practical digital, AI and online safety skills',
    ],
    solutions: [
      ['School management systems', 'Student records, fee management, exams, reporting and parent communication.', 'custom-software-development'],
      ['Digital literacy & AI literacy training', 'Computer training for learners and ICT training for teachers.', 'digital-literacy-training'],
      ['ICT consultancy for schools', 'Computer labs, networks, systems and ICT policy.', 'it-consultancy'],
      ['School websites', 'Professional websites with admissions, news and events.', 'web-development'],
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    shortName: 'Hospitals & Healthcare',
    keywords: ['Healthcare technology solutions', 'Hospital management system development'],
    metaTitle: 'Healthcare Technology Solutions in Kenya',
    metaDescription:
      'Healthcare technology solutions in Kenya: hospital management systems, secure patient data, cybersecurity and websites for hospitals and clinics.',
    h1: 'Healthcare Technology Solutions for Hospitals & Clinics in Kenya',
    intro:
      'Hospitals, clinics and health organizations handle sensitive patient information every day and need reliable systems to serve patients well. Payiani Technologies builds secure software and websites for healthcare institutions in Kenya and helps them protect the data they hold.',
    challenges: [
      'Patient and operational records managed manually or in disconnected tools',
      'Protecting sensitive health data from breaches and unauthorized access',
      'Obligations under the Kenya Data Protection Act, 2019',
      'Patients who expect to find services and book appointments online',
    ],
    solutions: [
      ['Hospital management systems', 'Patient registration, appointments, records, billing and reporting.', 'custom-software-development'],
      ['Cybersecurity & data protection', 'Security assessments and staff training to protect patient information.', 'cybersecurity'],
      ['Healthcare websites', 'Clear websites listing services, departments and contact details.', 'web-development'],
      ['IT consultancy', 'Infrastructure planning and digital transformation for healthcare operations.', 'it-consultancy'],
    ],
  },
  {
    slug: 'business',
    name: 'Business',
    shortName: 'Businesses, SMEs & Startups',
    keywords: ['Digital solutions for businesses', 'IT solutions company in Kenya', 'Business process automation Kenya'],
    metaTitle: 'IT Solutions for Businesses & SMEs in Kenya',
    metaDescription:
      'IT solutions for businesses, SMEs and startups in Kenya: websites, custom business software, automation, M-Pesa integration and IT support.',
    h1: 'Digital Solutions for Businesses, SMEs & Startups in Kenya',
    intro:
      'Growing businesses need to reach customers online, accept digital payments and run operations without drowning in paperwork. Payiani Technologies helps companies, SMEs and startups in Kenya digitize their operations with technology that fits their budget and goals.',
    challenges: [
      'Limited online visibility and no professional website',
      'Sales, inventory and customer records kept in spreadsheets',
      'Manual M-Pesa payment tracking and reconciliation',
      'Uncertainty about which technology to invest in',
    ],
    solutions: [
      ['Business websites & e-commerce', 'Professional websites and online stores that bring in customers.', 'web-development'],
      ['ERP, CRM & inventory systems', 'Custom business software for sales, stock, customers and reporting.', 'custom-software-development'],
      ['Business process automation', 'Automating approvals, reports and repetitive tasks.', 'digital-transformation'],
      ['Mobile apps', 'Apps for customers and field teams.', 'mobile-app-development'],
    ],
  },
  {
    slug: 'ngos',
    name: 'NGOs',
    shortName: 'NGOs & Development Organizations',
    keywords: ['ICT solutions for NGOs', 'Technology solutions for institutions'],
    metaTitle: 'ICT Solutions for NGOs in Kenya',
    metaDescription:
      'ICT solutions for NGOs and development organizations in Kenya: websites, programme and beneficiary systems, data protection and staff training.',
    h1: 'ICT Solutions for NGOs & Development Organizations in Kenya',
    intro:
      'NGOs and development organizations need to communicate their mission, manage programmes and beneficiaries, and report accurately to donors, often with limited resources. Payiani Technologies helps them do this with practical, secure and affordable technology.',
    challenges: [
      'Programme and beneficiary data spread across spreadsheets and paper forms',
      'Time-consuming donor reporting',
      'Protecting sensitive beneficiary information',
      'Staff and communities who need digital skills',
    ],
    solutions: [
      ['Organization websites', 'Websites that tell your story, share impact and support fundraising.', 'web-development'],
      ['Programme & beneficiary systems', 'Custom systems for data collection, case management and reporting.', 'custom-software-development'],
      ['Data protection & security', 'Protecting beneficiary and donor data.', 'cybersecurity'],
      ['Digital literacy training', 'Digital skills for staff, volunteers and communities.', 'digital-literacy-training'],
    ],
  },
  {
    slug: 'saccos',
    name: 'SACCOs',
    shortName: 'SACCOs & Cooperatives',
    keywords: ['Cooperative management systems', 'SACCO management system Kenya'],
    metaTitle: 'SACCO & Cooperative Management Systems',
    metaDescription:
      'SACCO and cooperative management systems in Kenya: member records, savings, loans and M-Pesa integration, with cybersecurity and IT support.',
    h1: 'SACCO & Cooperative Management Systems in Kenya',
    intro:
      'SACCOs and cooperatives are trusted with their members’ savings and need accurate, secure and transparent systems. Payiani Technologies builds cooperative management systems and provides the security and IT support that financial institutions in Kenya depend on.',
    challenges: [
      'Member, savings and loan records managed manually',
      'Reconciling M-Pesa contributions and repayments by hand',
      'Members who want statements and services on their phones',
      'Protecting financial data from fraud and breaches',
    ],
    solutions: [
      ['Cooperative management systems', 'Members, savings, loans, dividends and statements in one system.', 'custom-software-development'],
      ['M-Pesa integration', 'Automatic posting and reconciliation of contributions and repayments.', 'software-development'],
      ['Member mobile apps', 'Balances, statements and loan applications on members’ phones.', 'mobile-app-development'],
      ['Cybersecurity', 'Security audits and staff awareness to protect member funds and data.', 'cybersecurity'],
    ],
  },
]

export function getIndustry(slug) {
  return industries.find((industry) => industry.slug === slug)
}
