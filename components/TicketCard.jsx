import { useRouter } from "next/router";

// Components
import Separator from "./Separator";
import Button from "./Button";

const TicketCard = ({
	name = "Ticket",
	price = 150,
	benefits = [
		"Lorem, ipsum dolor.",
		"Lorem, ipsum dolor.",
		"Lorem, ipsum dolor.",
	],
	form = "/error",
	sold = false,
}) => {
	const router = useRouter();
	return (
		<div className="flex flex-col py-10 space-y-5 text-center bg-gray-100 border-2 rounded-md shadow-md px-7 xl:px-20 dark:bg-gray-700 dark:border-red-500">
			<h2 className="text-5xl font-bold text-red-500 uppercase dark:text-white">
				{name}
			</h2>
			<Separator darkColor="bg-red-500" />
			<h4 className="text-4xl font-bold dark:text-white">
				{price} <span className="text-xl font-normal">EGP</span>
			</h4>
			<div className="flex flex-col space-y-3">
				{benefits.map((benefit) => (
					<h3
						key={`${name} - ${benefit}`}
						className="text-xl font-medium text-gray-500 dark:text-white"
					>
						{benefit}
					</h3>
				))}
			</div>
			<Button
				type="filled"
				onClick={() => {
					if (!sold) router.push(form);
				}}
			>
				{sold ? "Sold Out" : "Book Your Ticket"}
			</Button>
		</div>
	);
};
export default TicketCard;
