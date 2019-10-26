const maskElements = [
	'.date',
];

const pages = [
	'/'
]

const mWebDevices = [
	'iphone-6+',
	['ipad-2', 'landscape'],
];

const dWeb = [
	[1920, 1080]
];

describe('dWeb', () => {
	dWeb.forEach((size) => {
		it(`Home - top on ${size}`, () => {
			cy.setResolution(size);
			cy.visit(Cypress.env('baseURL') );
			cy.matchImageSnapshot({blackout: maskElements});
		});
		
	});
});


describe('mWeb', () => {
	mWebDevices.forEach((size) => {
		pages.forEach((page) => {
			it(` ${page} on ${size}`, () => {
				cy.setResolution(size);
				cy.visit(Cypress.env('baseURL') + `${page}`);
				cy.matchImageSnapshot({capture: 'fullPage'});
			});
		});

	});
});