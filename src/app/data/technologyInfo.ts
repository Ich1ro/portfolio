import { Technology, ColorTypes } from '../interfaces';
import { Icons } from './icons';

export const Technologies: Technology[] = [
	{
		name: 'Axios',
		Icon: Icons.SiAxios,
		description:
			'A simple promise based HTTP client for the browser and node.js. Axios provides a simple to use library in a small package with a very extensible interface.',
		url: 'https://axios-http.com',
		primaryColor: '#5A29E4'
	},
	{
		name: 'Wordpress',
		Icon: Icons.SiWordpress,
		description:
			'A free and open-source content management system written in PHP and paired with a MySQL or MariaDB database',
		url: 'https://wordpress.org/download/',
		primaryColor: '#21759B'
	},
	{
		name: 'AWS',
		Icon: Icons.SiAmazonaws,
		description:
			'A secure cloud services platform, offering compute power, database storage, content delivery and other functionality',
		url: 'https://aws.amazon.com',
		primaryColor: '#FF9900'
	},
	{
		name: 'Babel',
		Icon: Icons.SiBabel,
		description: 'A free and open-source JavaScript transcompiler',
		url: 'https://babeljs.io',
		primaryColor: '#F9DC3E'
	},
	{
		name: 'CSS',
		Icon: Icons.SiCss3,
		description: 'The language we use to style an HTML document',
		url: 'https://www.w3schools.com/css/',
		primaryColor: '#1572B6'
	},
	{
		name: 'Docker',
		description:
			'A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers',
		Icon: Icons.SiDocker,
		url: 'https://www.docker.com',
		primaryColor: '#2496ED'
	},
	{
		name: 'Firebase',
		description: "Google's mobile platform that helps you quickly develop high-quality apps and grow your business",
		Icon: Icons.SiFirebase,
		url: 'https://firebase.google.com/',
		primaryColor: '#FFCA28'
	},
	{
		name: 'GCP',
		description: 'A suite of cloud computing services that runs on the same infrastructure that Google',
		Icon: Icons.SiGooglecloud,
		url: 'https://cloud.google.com/',
		primaryColor: '#4285F4'
	},
	{
		name: 'Github',
		description: 'A provider of Internet hosting for software development and version control using Git',
		Icon: Icons.SiGithub,
		url: 'https://github.com/',
		primaryColor: ColorTypes.DEFAULT
	},
	{
		name: 'Go',
		description: 'A statically typed, compiled programming language designed at Google',
		Icon: Icons.SiGo,
		url: 'https://golang.org/',
		primaryColor: '#00ADD8'
	},
	{
		name: 'HTML',
		description: 'The standard markup language for documents designed to be displayed in a web browser',
		Icon: Icons.SiHtml5,
		url: 'https://html.com/',
		primaryColor: '#E34F26'
	},
	{
		name: 'Heroku',
		description:
			'A platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud',
		Icon: Icons.SiHeroku,
		url: 'https://www.heroku.com/',
		primaryColor: '#430098'
	},
	{
		name: 'JavaScript',
		description:
			'A fun and flexible programming language and one of the core technologies of web development and can be used on both the front-end and the back-end',
		Icon: Icons.SiJavascript,
		url: 'https://www.javascript.com/',
		primaryColor: '#F7DF1E'
	},
	{
		name: 'Jest',
		description: 'A JavaScript testing framework designed to ensure correctness of any JavaScript codebase',
		Icon: Icons.SiJest,
		url: 'https://jestjs.io/',
		primaryColor: '#C21325'
	},
	{
		name: 'Markdown',
		description: 'A lightweight markup language for creating formatted text using a plain-text editor.',
		Icon: Icons.SiMarkdown,
		url: 'https://www.markdownguide.org/',
		primaryColor: ColorTypes.DEFAULT
	},
	{
		name: 'Mocha',
		description:
			'A feature-rich JavaScript test framework running on Node. js and in the browser, making asynchronous testing simple and fun',
		Icon: Icons.SiMocha,
		url: 'https://mochajs.org/',
		primaryColor: '#8D6748'
	},
	{
		name: 'Mongo',
		description:
			'A general purpose, document-based, distributed database built for modern application developers and for the cloud era',
		Icon: Icons.SiMongodb,
		url: 'https://www.mongodb.com/',
		primaryColor: '#47A248'
	},
	{
		name: 'Netlify',
		description:
			'A cloud computing company that offers hosting and serverless backend services for web applications and static websites',
		Icon: Icons.SiNetlify,
		url: 'https://www.netlify.com/',
		primaryColor: '#00C7B7'
	},
	{
		name: 'NextJS',
		description:
			'An open-source React front-end development web framework created by Vercel that enables functionality such as server-side rendering and generating static websites for React based web applications',
		Icon: Icons.SiNextdotjs,
		url: 'https://nextjs.org/',
		primaryColor: ColorTypes.DEFAULT
	},
	{
		name: 'NodeJS',
		description:
			'An open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser',
		Icon: Icons.SiNodedotjs,
		url: 'https://nodejs.org/',
		primaryColor: '#339933'
	},
	{
		name: 'PostgreSQL',
		description:
			'A free and open-source relational database management system emphasizing extensibility and SQL compliance',
		Icon: Icons.SiPostgresql,
		url: 'https://www.postgresql.org/',
		primaryColor: '#336791'
	},
	{
		name: 'Python',
		description: 'An interpreted high-level general-purpose programming language',
		Icon: Icons.SiPython,
		url: 'https://www.python.org/',
		primaryColor: '#3776AB'
	},
	{
		name: 'React',
		description: 'An open-source, front end, JavaScript library for building user interfaces or UI components',
		Icon: Icons.SiReact,
		url: 'https://reactjs.org/',
		primaryColor: '#61DAFB'
	},
	{
		name: 'Redux',
		description: 'A Predictable State Container for JS Apps',
		Icon: Icons.SiRedux,
		url: 'https://redux.js.org/',
		primaryColor: '#764ABC'
	},
	{
		name: 'Saas',
		description: 'A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets',
		Icon: Icons.SiSass,
		url: 'https://sass-lang.com/',
		primaryColor: '#CC6699'
	},
	{
		name: 'Svelte',
		description:
			"A new way to build web applications. It's a compiler that takes your declarative components and converts them into efficient JavaScript that surgically updates the DOM",
		Icon: Icons.SiSvelte,
		url: 'https://svelte.dev/',
		primaryColor: '#FF3E00'
	},
	{
		name: 'TypeScript',
		description:
			"An open-source language which builds on JavaScript, one of the world's most used tools, by adding static type definitions",
		Icon: Icons.SiTypescript,
		url: 'https://www.typescriptlang.org/',
		primaryColor: '#007ACC'
	},
	{
		name: 'Vercel',
		description: 'A deployment and collaboration platform for frontend developers',
		Icon: Icons.SiVercel,
		url: 'https://vercel.com/',
		primaryColor: ColorTypes.DEFAULT
	},
	{
		name: 'Vue',
		description: 'An approachable, performant and versatile framework for building web user interfaces',
		Icon: Icons.SiVuedotjs,
		url: 'https://vuejs.org/',
		primaryColor: '#3FB27F'
	},
	{
		name: 'Angular',
		description: 'Angular is an application-design framework and development platform for creating efficient and sophisticated single-page apps',
		Icon: Icons.SiAngular,
		url: 'https://angular.io/',
		primaryColor: '#DD0031'
	},
	{
		name: 'GraphQL',
		description: 'A query language for APIs and a runtime for fulfilling those queries with your existing data',
		Icon: Icons.SiGraphql,
		url: 'https://graphql.org/',
		primaryColor: '#DE33A6'
	},
	{
		name: 'ChakraUI',
		description: 'A simple, modular and accessible component library that gives you the building blocks you need to build your React applications',
		Icon: Icons.SiChakraui,
		url: 'https://chakra-ui.com/',
		primaryColor: '#319795'
	},
	{
		name: 'MaterialUI',
		description: 'MUI offers a comprehensive suite of UI tools to help you ship new features faster',
		Icon: Icons.SiMui,
		url: 'https://mui.com/',
		primaryColor: '#007FFF'
	},
	{
		name: 'TailwindCSS',
		description: 'Tailwind CSS is a utility-first CSS framework for rapidly building modern websites without ever leaving your HTML',
		Icon: Icons.SiTailwindcss,
		url: 'https://tailwindcss.com/',
		primaryColor: '#38BDF8'
	},
	{
		name: 'Salesforce',
		description:
			'Salesforce is your customer success platform, designed to help you sell, service, market, analyze, and connect with your customers',
		Icon: Icons.SiSalesforce,
		url: 'https://www.salesforce.com/',
		primaryColor: '#00A1E0'
	},
	{
		name: 'WebAssembly',
		description:
			'A binary instruction format for a stack-based virtual machine, designed as a portable compilation target',
		Icon: Icons.SiWebassembly,
		url: 'https://webassembly.org/',
		primaryColor: '#654FF0'
	},
	{
		name: 'WebPack',
		description: 'A static module bundler for JavaScript applications',
		Icon: Icons.SiWebpack,
		url: 'https://webpack.js.org/',
		primaryColor: '#8DD6F9'
	},
	{
		name: 'Stripe',
		description:
			'Stripe is a suite of payment APIs that powers commerce for online businesses of all sizes, including fraud prevention, and subscription management',
		Icon: Icons.SiStripe,
		url: 'https://stripe.com/en-in',
		primaryColor: '#008CDD'
	}
];
