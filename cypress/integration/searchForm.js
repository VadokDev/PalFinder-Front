describe("My First Test", () => {
	beforeEach(function () {
		cy.visit("/");
		cy.server();
		cy.route({
			method: "GET",
			url: "/products?search*",
		}).as("productSearchApi");
	});

	it("test short string", () => {
		cy.get('input[name="searchProduct"]').type("abc");
		cy.window()
			.its("store")
			.invoke("getState")
			.then((store) => {
				console.log(store);
				expect(store.searchReducer.productList).to.deep.eq([]);
			});
	});

	it("find product by id '12'", () => {
		cy.get('input[name="searchProduct"]').type("12");
		cy.wait("@productSearchApi").then((xhr) => {
			expect(xhr.response.body).to.have.lengthOf(1);
			console.log(cy.get("#productResult"));
			cy.window()
				.its("store")
				.invoke("getState")
				.then((store) => {
					console.log(store);
					expect(store.searchReducer.productList).to.deep.eq([
						{
							id: 12,
							brand: "vfbjgpt",
							description: "iwpazñ ltxsh",
							image: "www.lider.cl/catalogo/images/tvIcon.svg",
							price: 647307,
						},
					]);
				});
		});
	});

	it("find product by id '121' (palindrome)", () => {
		cy.get('input[name="searchProduct"]').type("121");
		cy.wait("@productSearchApi").then((xhr) => {
			expect(xhr.response.body).to.have.lengthOf(1);
			console.log(cy.get("#productResult"));
			cy.window()
				.its("store")
				.invoke("getState")
				.then((store) => {
					console.log(store);
					expect(store.searchReducer.productList).to.deep.eq([
						{
							id: 121,
							brand: "erehzgj",
							description: "gzifl ngfxpr",
							image:
								"www.lider.cl/catalogo/images/electronicsIcon.svg",
							price: 426816,
							priceF: 213408,
						},
					]);
				});
		});
	});

	it("find products with 'dafa'", () => {
		cy.get('input[name="searchProduct"]').type("dafa");
		cy.wait("@productSearchApi").then((xhr) => {
			//expect(xhr.response.body).to.have.lengthOf(1);
			console.log(cy.get("#productResult"));
			cy.window()
				.its("store")
				.invoke("getState")
				.then((store) => {
					console.log(store);
					expect(store.searchReducer.productList).to.deep.eq([
						{
							id: 51,
							brand: "dafad",
							description: "qrñfsf avzim",
							image:
								"www.lider.cl/catalogo/images/smartphoneIcon.svg",
							price: 696740,
						},
						{
							id: 211,
							brand: "dafad",
							description: "jnkx fxoafrat",
							image:
								"www.lider.cl/catalogo/images/furnitureIcon.svg",
							price: 424323,
						},
						{
							id: 227,
							brand: "dafad",
							description: "uhiscx ñsdbs",
							image:
								"www.lider.cl/catalogo/images/computerIcon.svg",
							price: 345898,
						},
						{
							id: 229,
							brand: "sdafads",
							description: "hykpd jwfavb",
							image: "www.lider.cl/catalogo/images/homeIcon.svg",
							price: 520218,
						},
						{
							id: 615,
							brand: "sdafads",
							description: "dquyja crdgj",
							image:
								"www.lider.cl/catalogo/images/computerIcon.svg",
							price: 237729,
						},
						{
							id: 994,
							brand: "sdafads",
							description: "exqñvj ttunh",
							image:
								"www.lider.cl/catalogo/images/whiteLineIcon.svg",
							price: 502416,
						},
						{
							id: 1053,
							brand: "dafad",
							description: "fsyqji ñnmso",
							image:
								"www.lider.cl/catalogo/images/electronicsIcon.svg",
							price: 804475,
						},
						{
							id: 1152,
							brand: "sdafads",
							description: "dkuc rxkuqpnm",
							image:
								"www.lider.cl/catalogo/images/bicycleIcon.svg",
							price: 295031,
						},
						{
							id: 1272,
							brand: "dafad",
							description: "tzin qbeñswzz",
							image: "www.lider.cl/catalogo/images/toysIcon.svg",
							price: 406710,
						},
						{
							id: 1639,
							brand: "dafad",
							description: "vqhev enjhfd",
							image:
								"www.lider.cl/catalogo/images/bicycleIcon.svg",
							price: 566809,
						},
						{
							id: 1779,
							brand: "sdafads",
							description: "hcpqws jyufm",
							image:
								"www.lider.cl/catalogo/images/bedRoomIcon.svg",
							price: 521754,
						},
						{
							id: 2084,
							brand: "dafad",
							description: "yfoh dzhuejñh",
							image: "www.lider.cl/catalogo/images/babyIcon.svg",
							price: 682142,
						},
						{
							id: 2798,
							brand: "sdafads",
							description: "hdvt tbrdeiñl",
							image:
								"www.lider.cl/catalogo/images/furnitureIcon.svg",
							price: 779903,
						},
						{
							id: 2827,
							brand: "dafad",
							description: "eydmñu jugxe",
							image: "www.lider.cl/catalogo/images/gamesIcon.svg",
							price: 366989,
						},
					]);
				});
		});
	});
	/*
	it("find product by id '121' (palindrome)", () => {
		cy.get('input[name="searchProduct"]').type("adda");
		cy.wait("@productSearchApi").then((xhr) => {
				expect(xhr.response.body).to.have.lengthOf(23);
				console.log(cy.get("#productResult"));
				cy.window().its('store').invoke('getState').then(store => {
					console.log(store);
					expect(store.searchReducer.productList).to.deep.eq(23);
				});
		});
	});
	*/
});

[
	{
		id: 12,
		brand: "vfbjgpt",
		description: "iwpazñ ltxsh",
		image: "www.lider.cl/catalogo/images/tvIcon.svg",
		price: 647307,
	},
];
