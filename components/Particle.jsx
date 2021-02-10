import Particles from 'react-tsparticles';

const Particle = ({ lineColor = '#fff', dotColor = '#e74c3c' }) => {
	return (
		<>
			<Particles
				className='absolute inset-0 -z-10'
				options={{
					background: {
						color: {
							value: 'transparent',
						},
					},
					fpsLimit: 60,
					interactivity: {
						detectsOn: 'canvas',
						modes: {
							bubble: {
								distance: 400,
								duration: 2,
								opacity: 0.8,
								size: 40,
							},
							push: {
								quantity: 4,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
						},
					},
					particles: {
						color: {
							value: dotColor,
						},
						links: {
							color: lineColor,
							distance: 100,
							enable: true,
							opacity: 0.5,
							width: 1,
						},
						collisions: {
							enable: true,
						},
						move: {
							direction: 'none',
							enable: true,
							outMode: 'bounce',
							random: false,
							speed: 6,
							straight: false,
						},
						number: {
							density: {
								enable: true,
								value_area: 800,
							},
							value: 25,
						},
						opacity: {
							value: 0.5,
						},
						shape: {
							type: ['image'],
							image: [
								{
									src: '/x.svg',
									height: 30,
									width: 30,
								},
							],
						},
						size: {
							value: 10,
							random: false,
							anim: {
								enable: true,
								speed: 2,
								size_min: 10,
								sync: false,
							},
						},
					},
					detectRetina: true,
				}}
			/>
		</>
	);
};

export default Particle;
