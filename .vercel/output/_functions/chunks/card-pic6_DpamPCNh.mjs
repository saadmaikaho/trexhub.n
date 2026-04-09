const c6 = new Proxy({"src":"/_astro/card-pic6.CXJkFMY0.png","width":210,"height":170,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/d4ault/Downloads/Positivus-main/src/assets/pics/card-pic6.png";
							}
							
							return target[name];
						}
					});

export { c6 as c };
