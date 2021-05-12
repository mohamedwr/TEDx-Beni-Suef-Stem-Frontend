import { useState } from "react";

// Styles
import "keen-slider/keen-slider.min.css";

const PersonCard = ({
	img,
	name,
	role,
	isSlide,
	isMember = false,
	grayscale = false,
	margin = false,
}) => {
	const [hover, setHover] = useState(false);

	return (
		<div
			className={`${
				isSlide ? "keen-slider__slide" : ""
			} inline-flex flex-col justify-start items-center select-none ${
				margin ? "sm:mx-12" : ""
			}`}
		>
			<div
				className="relative mb-4 overflow-hidden duration-200 ease-in-out bg-gray-600 border border-black rounded-full dark:bg-gray-100 hover:bg-black dark:hover:bg-black"
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				{!isMember && (
					<div className="absolute inset-0 flex items-center justify-center">
						<img
							src="/x.svg"
							className={`h-60 z-0 duration-500 ease-in-out opacity-100 ${
								hover
									? ""
									: "transform rotate-180 scale-0 translate-x-56 opacity-0"
							}`}
							alt={name}
						/>
					</div>
				)}
				<img
					src={img}
					alt={name}
					className={`w-44 h-44 lg:h-52 lg:w-52 object-cover rounded-full relative z-20 duration-200 ease-in-out ${
						grayscale && isMember ? "grayscale" : ""
					}`}
				/>
			</div>

			<div className="text-center duration-300 ease-in-out">
				<h3 className="text-xl font-bold text-black capitalize font-roboto dark:text-white lg:text-2xl">
					{name}
				</h3>
				<h4 className="text-lg font-medium text-gray-800 capitalize font-roboto dark:text-gray-200 lg:text-xl">
					{role}
				</h4>
			</div>
		</div>
	);
};

export default PersonCard;
