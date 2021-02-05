// Components
import SlickSlider from 'react-slick';

// Style Files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider = ({ images = [] }) => (
	<SlickSlider
		infinite
		slidesToScroll={1}
		slidesToShow={1}
		speed={500}
		autoplay
		autoplaySpeed={3000}
		className='overflow-hidden bg-blue-400'
	>
		{images?.map((image) => (
			<img
				key={image}
				src={image}
				className='w-screen lg:h-screen object-cover object-center'
			/>
		))}
	</SlickSlider>
);

export default Slider;
