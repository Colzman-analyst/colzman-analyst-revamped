export const profile = {
  name: 'Collins Iorbee',
  short: 'Collins',
  roles: ['Data Analyst', 'Business Analyst', 'Data Scientist'],
  location: 'Abuja, Nigeria',
  email: 'iorbeeterver@gmail.com',
  phone: '+234 816 437 9170',
  github: 'https://github.com/Colzman-analyst',
  githubHandle: '@Colzman-analyst',
  linkedin: 'https://www.linkedin.com/',
  tagline: 'Turning Data Into Decisions.',
  intro:
    "I'm Collins Iorbee, a data analyst, business analyst and data scientist in Abuja, Nigeria. I ask why things happen, then build the models and dashboards that answer it.",
}

/** Rows shown in the hero query result. Every figure comes from the sections below. */
export const heroResults = [
  { result: 'Weekly reporting time cut', figure: '50%', source: 'Excel pivot dashboards for executive review' },
  { result: 'Data accuracy gained', figure: '30%', source: 'SQL pipelines at Cress Pharmaceuticals' },
  { result: 'Students trained', figure: '50+', source: 'Two month analytics bootcamp' },
  { result: 'Churn model AUC', figure: '0.851', source: '7,032 customer records' },
]

export const tagline = {
  text: 'Data is just scattered facts until someone asks the right questions. I ask them, then build the model or dashboard that answers.',
}

export type Project = {
  featured?: boolean
  badge?: string
  title: string
  description: string
  tags: string[]
  metrics?: { value: string; label: string }[]
  href: string
  cta: string
}

export const projects: Project[] = [
  {
    featured: true,
    badge: 'Machine learning',
    title: 'Customer churn prediction model',
    description:
      'End to end machine learning project comparing Logistic Regression and Random Forest on 7,000+ customer records. Achieved AUC of 0.851 with 81.1% recall. Delivered a $145K annual savings estimate through actionable business recommendations.',
    tags: ['R', 'Machine Learning', 'Fintech', 'Random Forest'],
    metrics: [
      { value: '0.851', label: 'AUC score' },
      { value: '81.1%', label: 'Recall' },
      { value: '7,032', label: 'Records analysed' },
      { value: '$145K', label: 'Est. annual savings' },
    ],
    href: 'https://github.com/Colzman-analyst',
    cta: 'View on GitHub',
  },
  {
    featured: true,
    badge: 'Machine learning',
    title: 'Financial transaction fraud detection',
    description:
      'Compared Logistic Regression, Random Forest and XGBoost on 284,807 credit card transactions. Handled extreme class imbalance (0.17% fraud rate) with SMOTE. Delivered a full business cost analysis: $9,638 fraud value caught per batch with the lowest false alarm rate.',
    tags: ['Python', 'XGBoost', 'SMOTE', 'Fintech', 'Random Forest'],
    metrics: [
      { value: '0.9756', label: 'ROC AUC' },
      { value: '81.05%', label: 'Recall' },
      { value: '284K+', label: 'Transactions' },
      { value: '$9,638', label: 'Fraud value caught' },
    ],
    href: 'https://github.com/Colzman-analyst',
    cta: 'View on GitHub',
  },
  {
    title: 'Data cleaning in SQL and Python',
    description:
      'Advanced data cleaning techniques on large datasets, identifying and resolving errors, duplicates and missing values through sophisticated SQL queries and data validation methods.',
    tags: ['SQL', 'Python', 'Data Cleaning', 'Data Validation'],
    href: 'https://github.com/Colzman-analyst',
    cta: 'View Project',
  },
  {
    title: 'Exploratory analysis in SQL and Python',
    description:
      'Comprehensive exploratory data analysis using advanced SQL to uncover patterns, trends and insights from complex datasets.',
    tags: ['SQL', 'Python', 'EDA', 'Analytics'],
    href: 'https://github.com/Colzman-analyst',
    cta: 'View Project',
  },
  {
    title: 'Power BI dashboards',
    description:
      'Interactive business intelligence dashboards transforming raw data into actionable insights for executive decisions.',
    tags: ['Power BI', 'Dashboards', 'Visualisation'],
    href: 'https://github.com/Colzman-analyst',
    cta: 'View Project',
  },
  {
    title: 'Microsoft Excel projects',
    description:
      'A comprehensive collection of Excel projects demonstrating advanced data manipulation, complex formula development and dynamic visualisation techniques.',
    tags: ['Excel', 'Financial Modelling', 'Automation', 'VBA'],
    href: 'https://github.com/Colzman-analyst',
    cta: 'View Excel portfolio',
  },
]

export const aboutParagraphs = [
  "I've always been drawn to patterns. Before I knew what data analytics was, I was the person who couldn't look at something scattered without wanting to organise it, and couldn't see a result without asking what caused it.",
  'My degree in Industrial Mathematics & Statistics from FUT Minna gave me the foundation. Four months of intensive training at AfriHub Centre for Excellence, Abuja (2023) gave me the tools.',
  "What makes me different is that I bridge data and people. I've taught 50+ students analytics from scratch and built dashboards that non technical executives actually use and act on.",
]

export const aboutQuote =
  'Data is just scattered facts until someone asks the right questions.'

export const aboutHighlights = [
  {
    title: 'Curious by nature',
    text: "I ask why things happen. That is what drew me to data.",
  },
  {
    title: 'Trainer and mentor',
    text: 'Taught 50+ students across Excel, Power BI & SQL.',
  },
  {
    title: 'Healthcare domain',
    text: '2+ years of HIPAA compliant healthcare data work.',
  },
  {
    title: 'Global mindset',
    text: 'Targeting remote roles across fintech, health & tech.',
  },
  {
    title: 'Problem solver',
    text: "People come to me when things don't make sense.",
  },
  {
    title: 'Self taught',
    text: 'Most of my tools were learned independently, and quickly.',
  },
]

export const skillGroups = [
  {
    title: 'Languages and querying',
    items: ['Python', 'R', 'SQL', 'MySQL', 'PostgreSQL', 'SQL Server', 'NoSQL'],
  },
  {
    title: 'Analytics and visualisation',
    items: ['Power BI', 'Excel', 'Pivot Tables', 'Dashboards', 'SPSS', 'PSPP', 'ggplot2'],
  },
  {
    title: 'Machine learning',
    items: [
      'Scikit-learn',
      'Random Forest',
      'Logistic Regression',
      'Time Series',
      'Forecasting',
      'A/B Testing',
    ],
  },
  {
    title: 'Cloud and infrastructure',
    items: ['AWS S3', 'AWS Redshift', 'Microsoft Azure', 'Google BigQuery', 'ETL Pipelines'],
  },
  {
    title: 'Python libraries',
    items: ['Pandas', 'NumPy', 'Statsmodels', 'Matplotlib', 'Web Scraping'],
  },
  {
    title: 'Tools and workflow',
    items: [
      'Git / GitHub',
      'Microsoft Teams',
      'AI assisted analytics',
      'Data Governance',
      'HIPAA Compliance',
    ],
  },
]

export const achievements = [
  {
    value: '30%',
    title: 'Data accuracy improvement',
    text: 'Achieved at Cress Pharmaceuticals by automating SQL pipelines that standardised patient and financial data across clinical systems.',
  },
  {
    value: '50%',
    title: 'Reporting time reduction',
    text: 'Cut weekly reporting time in half by building interactive Excel Pivot dashboards enabling faster insights for executive review.',
  },
  {
    value: '50+',
    title: 'Students trained in data analytics',
    text: 'Designed and delivered a two month online bootcamp teaching Excel, Power BI and SQL across 3 live sessions per week.',
  },
  {
    value: '25%',
    title: 'Healthcare reporting reliability gain',
    text: 'Improved data quality at Cress Pharmaceuticals through rigorous audits detecting anomalies in patient records.',
  },
  {
    value: '0.851',
    title: 'AUC score on churn model',
    text: 'Built a Random Forest model on 7,000+ customer records achieving strong predictive performance on unseen test data.',
  },
  {
    value: '3+',
    title: 'Recurring reports weekly',
    text: 'Tracked revenue, treatment progress and patient engagement at Cress Pharmaceuticals supporting strategic planning.',
  },
]

export const certifications = [
  {
    title: 'Data analytics training',
    status: 'Completed',
    org: 'AfriHub Centre for Excellence',
    period: '2023, Abuja, Nigeria (in person)',
    text: '4 months of intensive hands on training covering data analysis, SQL, Excel, Power BI and data storytelling.',
  },
  {
    title: 'B.Tech in Mathematics',
    status: 'Completed',
    org: 'Federal University of Technology, Minna',
    period: 'Nigeria',
    text: 'Strong foundation in statistical modelling, time series forecasting, machine learning and applied mathematics.',
  },
  {
    title: 'Microsoft PL-300, Power BI Associate',
    status: 'Pursuing',
    org: 'Microsoft Learn',
    period: 'In progress, online',
    text: 'Industry recognised certification validating Power BI data modelling, visualisation and reporting skills.',
  },
]

export const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Impact', href: '#impact' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]
