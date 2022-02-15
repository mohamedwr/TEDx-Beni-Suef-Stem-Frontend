import Timer from "./Timer";

const EventTimer = () => (
	<section className="px-6 pb-16 space-y-4 bg-red-500 rounded-md shadow-lg pt-11">
		<h1 className="text-4xl font-bold text-center text-white">
			Event Date
		</h1>
		<Timer y="2022" m="1" d="17" h="10" />
	</section>
);

export default EventTimer;
