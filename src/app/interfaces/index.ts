import { FunctionComponent, SVGProps } from 'react';
import { IconType } from 'react-icons/lib';

export interface projectType {
	title: string;
	content: string;
	link: string;
	image: string;
	stack: Array<stackTypes>;
	direction?: 'row' | 'row-reverse';
	github?: string;
}

export interface IFormInput {
	name: string,
	email: string,
	message: string
}

export type stackTypes =
	| 'Go'
	| 'JavaScript'
	| 'Python'
	| 'CSS'
	| 'HTML'
	| 'React'
	| 'NodeJS'
	| 'Docker'
	| 'Mongo'
	| 'Saas'
	| 'Heroku'
	| 'AWS'
	| 'Babel'
	| 'DigitalOcean'
	| 'Gatsby'
	| 'Git'
	| 'Github'
	| 'Gitlab'
	| 'GCP'
	| 'Linux'
	| 'Mocha'
	| 'NextJS'
	| 'PostgreSQL'
	| 'Python'
	| 'Redux'
	| 'Sentry'
	| 'TypeScript'
	| 'Ubuntu'
	| 'Vercel'
	| 'WebAssembly'
	| 'WebPack'
	| 'GithubActions'
	| 'Firebase'
	| 'Markdown'
	| 'Jest'
	| 'Netlify'
	| 'Svelte'
	| 'Deno'
	| 'Stripe'
	| 'Wordpress'
	| 'Kubernetes'
	| 'Bash'
	| 'Salesforce'
	| 'Vue'
	| 'Angular'
	| 'GraphQL'
	| 'ChakraUI'
	| 'MaterialUI'
	| 'Axios'
	| 'TailwindCSS';

export interface Technology {
	name: stackTypes;
	Icon: IconType | FunctionComponent<SVGProps<SVGSVGElement>>;
	url: string;
	description: string;
	primaryColor: string | ColorTypes;
}

export enum ColorTypes {
	DEFAULT = 'var(--text-color)',
	NONE = ''
}
