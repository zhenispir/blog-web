export { matchers } from './client-matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19')];

export const server_loads = [];

export const dictionary = {
	"/(site)": [5,[2]],
	"/(site)/about-me": [6,[2]],
	"/api/posts": [~18],
	"/(site)/blog": [7,[2,3]],
	"/(site)/blog/category": [9,[2,3]],
	"/(site)/blog/category/[category]": [10,[2,3]],
	"/(site)/blog/page-transition-example": [13,[2,3]],
	"/(site)/blog/page": [~11,[2,3]],
	"/(site)/blog/page/[page]": [~12,[2,3]],
	"/(site)/blog/[post]": [8,[2,3]],
	"/(site)/contact": [14,[2]],
	"/demos/easing": [19,[4]],
	"/(site)/projects": [15,[2]],
	"/(site)/resume": [16,[2]],
	"/(site)/uses": [17,[2]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};