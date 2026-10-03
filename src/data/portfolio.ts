export interface Experience {
	number: string;
	role: string;
	company: string;
	dates: string;
	focus: string[];
	highlights: string[];
}

export interface Education {
	level: string;
	degree: string;
	institution: string;
	dates: string;
	note: string;
}

export interface SkillGroup {
	number: string;
	title: string;
	items: string[];
}

export const experiences: Experience[] = [
	{
		number: '01',
		role: 'Software Full-Stack Developer',
		company: 'Boosting Analytics',
		dates: 'Sep 2024 — Oct 2025',
		focus: ['RAG', 'LLM integrations', 'HubSpot & LinkedIn'],
		highlights: [
			'Engineered a production RAG system for semantic search across 1,000+ industrial datasheets, significantly reducing document retrieval time.',
			'Built a full-stack HubSpot and LinkedIn integration with LLM-powered messaging, automating lead report generation and increasing sales outreach efficiency.',
		],
	},
	{
		number: '02',
		role: 'Software Frontend Developer',
		company: 'Entrust',
		dates: 'Jul 2023 — Jul 2024',
		focus: ['React', 'Certificate Transparency', 'SSL/TLS'],
		highlights: [
			'Architected a React single-page application to visualize and analyze high-volume Certificate Transparency (CT) logs, delivering an automated monitoring tool for the security team to audit domain SSL/TLS certificates.',
		],
	},
	{
		number: '03',
		role: 'Software Engineering Intern',
		company: 'Entrust',
		dates: 'Sep 2022 — Jul 2023',
		focus: ['React Native', 'Self-Sovereign Identity', 'Digital identity'],
		highlights: [
			'Developed a React Native mobile wallet proof of concept integrating Self-Sovereign Identity (SSI) concepts with an IDaaS platform for decentralized digital certificate issuance.',
		],
	},
];

export const education: Education[] = [
	{
		level: 'POSTGRADUATE',
		degree: 'Postgraduate in Quantum Engineering',
		institution: 'UPC School',
		dates: 'Oct 2025 — Jun 2026',
		note: '',
	},
	{
		level: "BACHELOR'S DEGREE",
		degree: "Bachelor's Degree in Informatics Engineering",
		institution: 'UPC — Barcelona School of Informatics (FIB)',
		dates: 'Sep 2018 — Jun 2022',
		note: 'Major in Software Engineering',
	},
];

export const skillGroups: SkillGroup[] = [
	{
		number: '01',
		title: 'Generative AI & LLMs',
		items: ['RAG', 'Prompt Engineering', 'LangChain', 'LlamaIndex', 'OpenAI API', 'Gemini Grounding Search'],
	},
	{
		number: '02',
		title: 'Languages & Backend',
		items: ['Python', 'TypeScript', 'JavaScript (ES6+)', 'Go', 'C#', 'Docker', 'CI/CD', 'Git', 'PostgreSQL', 'MongoDB'],
	},
	{
		number: '03',
		title: 'Frontend & Mobile',
		items: ['React.js', 'React Native', 'Tailwind CSS', 'shadcn/ui', 'Material UI', 'HTML5', 'CSS3'],
	},
	{
		number: '04',
		title: 'Ways of working',
		items: ['Agile (Scrum)', 'Clean Code', 'Design Patterns'],
	},
	{
		number: '05',
		title: 'Languages',
		items: ['Spanish — Native', 'Catalan — Native', 'English — Fluent'],
	},
	{
		number: '06',
		title: 'Quantum Technology',
		items: ['Post-Quantum Cryptography (PQC)', 'QKD', 'Qiskit', 'Quantum Circuit Design'],
	},
];
