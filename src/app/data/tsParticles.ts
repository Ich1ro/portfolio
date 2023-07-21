export const tsParticlesConfig = {
	background: {
		color: {
			value: '#faeee7'
		},
		image: '',
		position: '',
		repeat: '',
		size: '',
		opacity: 1
	},
	backgroundMask: {
		cover: {
			color: {
				value: '#fff'
			},
			opacity: 1
		},
		enable: false
	},
	detectRetina: true,
	fpsLimit: 30,
	infection: {
		cure: false,
		delay: 0,
		enable: false,
		infections: 0,
		stages: []
	},
	interactivity: {
		detectsOn: 'window',

		modes: {
			attract: {
				distance: 200,
				duration: 0.4,
				speed: 1
			},
			bubble: {
				distance: 250,
				duration: 2,
				opacity: 0,
				size: 0
			},
			connect: {
				distance: 80,
				links: {
					opacity: 0.5
				},
				radius: 60
			},
			grab: {
				distance: 400,
				links: {
					opacity: 1
				}
			},
			push: {
				quantity: 4
			},
			remove: {
				quantity: 2
			},
			repulse: {
				distance: 100,
				duration: 0.4,
				speed: 1
			},
			slow: {
				factor: 3,
				radius: 200
			},
			trail: {
				delay: 1,
				quantity: 1
			}
		}
	},
	particles: {
		collisions: {
			enable: false,
			mode: 'bounce'
		},
		color: {
			value: '#33272a',
			animation: {
				enable: false,
				speed: 1,
				sync: true
			}
		},
		links: {
			blink: false,
			color: {
				value: '#33272a'
			},
			consent: false,
			distance: 150,
			enable: false,
			opacity: 0.4,
			shadow: {
				blur: 5,
				color: {
					value: '#00ff00'
				},
				enable: false
			},
			triangles: {
				enable: false
			},
			width: 1,
			warp: false
		},
		move: {
			angle: 90,
			attract: {
				enable: false,
				rotate: {
					x: 600,
					y: 600
				}
			},
			direction: 'none',
			enable: true,
			noise: {
				delay: {
					random: {
						enable: false,
						minimumValue: 0
					},
					value: 0
				},
				enable: false
			},
			outMode: 'bounce',
			random: true,
			speed: 0.3,
			straight: false,
			trail: {
				enable: false,
				length: 10,
				fillColor: {
					value: '#000000'
				}
			},
			vibrate: false,
			warp: false
		},
		number: {
			density: {
				enable: true,
				area: 800,
				factor: 1000
			},
			limit: 0,
			value: 100
		},
		opacity: {
			animation: {
				enable: true,
				minimumValue: 0,
				speed: 1,
				sync: false
			},
			random: {
				enable: true,
				minimumValue: 1
			},
			value: 1
		},
		rotate: {
			animation: {
				enable: false,
				speed: 0,
				sync: false
			},
			direction: 'clockwise',
			path: false,
			random: false,
			value: 0
		},
		shadow: {
			blur: 0,
			color: {
				value: '#000000'
			},
			enable: false,
			offset: {
				x: 0,
				y: 0
			}
		},
		shape: {
			options: {
				polygon: {
					nb_sides: 5
				},
				star: {
					nb_sides: 5
				},
				image: {
					src: 'https://cdn.matteobruni.it/images/particles/github.svg',
					width: 100,
					height: 100
				},
				images: {
					src: 'https://cdn.matteobruni.it/images/particles/github.svg',
					width: 100,
					height: 100
				}
			},
			type: 'circle'
		},
		size: {
			animation: {
				destroy: 'none',
				enable: false,
				minimumValue: 0.3,
				speed: 4,
				startValue: 'max',
				sync: false
			},
			random: {
				enable: true,
				minimumValue: 1
			},
			value: 3
		},
		stroke: {
			width: 0,
			color: {
				value: '#000000',
				animation: {
					enable: false,
					speed: 1,
					sync: true
				}
			}
		},
		twinkle: {
			lines: {
				enable: false,
				frequency: 0.05,
				opacity: 1
			},
			particles: {
				enable: false,
				frequency: 0.05,
				opacity: 1
			}
		}
	},
	pauseOnBlur: true
};