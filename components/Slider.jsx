// Components
import SlickSlider from "react-slick";

// Style Files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = ({ images = [] }) => (
	<SlickSlider
		infinite
		slidesToScroll={1}
		slidesToShow={1}
		speed={500}
		autoplay
		autoplaySpeed={3000}
		className="overflow-hidden bg-black"
	>
		{images?.map((image, index) => (
			<img
				key={image}
				src={image}
				alt={`number ${index}`}
				className="object-cover object-center w-screen h-screen"
			/>
		))}
	</SlickSlider>
);

export default Slider;
