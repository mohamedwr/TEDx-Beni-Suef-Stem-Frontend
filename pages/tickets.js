/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";

import axios from "axios";
import Swal from "sweetalert2";

// Components
import Nav from "../components/Nav";
import EventTimer from "../components/EventTimer";
import Section from "../components/Section";
import TicketCard from "../components/TicketCard";
import Footer from "../components/Footer";

const tickets = () => {
	const expireAt = 1645084800;
	const isStillAvailable = !(expireAt <= Math.floor(Date.now() / 1000));
	const ticketsData = [
		{
			name: "Silver",
			price: 120,
			sold: !isStillAvailable,
			form: "https://forms.gle/oshbkM2fhLye3pur8",
			benefits: [
				"Attendance",
				"Silver Seat",
				"Silver Welcome Package",
				"Button",
				"-",
			],
		},
		{
			name: "Gold",
			price: 150,
			sold: true,
			form: "https://forms.gle/NBoS5AwKtcP3cYPn9",
			benefits: [
				"Attendance",
				"Golden Seat",
				"Golden Welcome Package",
				"Button",
				"Lunch",
			],
		},
	];
	const wheelItems = [
		"Free Ticket",
		"25% Discount",
		"50% Discount",
		"75% Discount",
		"Free Cap",
		"Free T-shirt",
		"Free Mug",
		"2 Free Tickets",
	];

	const giftValidHours = 3;

	const phoneExpiration = (tel, dateString) => {
		Swal.fire({
			title: "Gift Expired!",
			html: `Unfortunately, the gift to <span class="font-bold">${tel}</span> expired at <span class="font-bold">${dateString}</span>`,
			icon: "warning",
		});
	};

	const phoneSuccess = (tel, gift, dateString) => {
		Swal.fire({
			title: "Congratulations!",
			html: `<p>Your gift is <span class="text-ted font-bold">${gift}</span></p><p>It is valid till <span class="font-bold">${dateString}</span> to <span class="font-bold">${tel}</span></p><p class="text-left mt-2">Buy the ticket before the expiration date and make sure to use the same phone number in the form to have the offer applied.</p>`,
			icon: "success",
		});
	};

	const phoneError = () => {
		Swal.fire({
			title: "Failed!",
			text: "Invalid phone number.",
			icon: "error",
			preConfirm: () => {
				// eslint-disable-next-line no-use-before-define
				handleSpin();
			},
		});
	};

	const offerEnded = () => {
		Swal.fire(
			"Tickets has been sold!",
			"This offer is not available.",
			"error"
		);
	};

	const wheel = useRef(null);
	const wheelBtn = useRef(null);
	const verifyPhone = (tel) => {
		if (tel.match(/^01([0-2]|5){1}[0-9]{8}$/)) {
			axios
				.post(process.env.wheelApiURL, {
					phone: tel,
				})
				.then(({ data, code }) => {
					if (code === 204) {
						offerEnded();
					} else {
						const expirationTimestamp =
							(data.stamp + giftValidHours * 60 * 60) * 1000;
						const dateString = new Date(
							expirationTimestamp
						).toLocaleString();
						if (expirationTimestamp > Date.now() / 1000) {
							const gift =
								wheelItems[data.random % wheelItems.length];
							if (data.new) {
								wheelBtn.current.disabled = true;
								wheel.current.style.transform = `rotate(-${
									data.random * (360 / wheelItems.length)
								}deg)`;
								setTimeout(() => {
									phoneSuccess(tel, gift, dateString);
									wheel.current.style.transform =
										"rotate(0deg)";
									wheelBtn.current.disabled = false;
								}, 5500);
							} else {
								phoneSuccess(tel, gift, dateString);
							}
						} else {
							phoneExpiration(tel, dateString);
						}
					}
				})
				.catch((error) => {
					if (error.response && error.response.status === 400) {
						phoneError();
					} else {
						Swal.fire(
							"Failed!",
							"Please try again later or contact an administrator",
							"error"
						);
					}
				});
		} else {
			phoneError();
		}
	};

	const handleSpin = async () => {
		if (isStillAvailable) {
			Swal.fire({
				title: "Enter your phone number to start the spin!",
				input: "tel",
				inputLabel: "only Egyptian phone numbers are allowed",
				inputPlaceholder: "01XXXXXXXXX",
				preConfirm: (tel) => {
					verifyPhone(tel);
				},
			});
		} else {
			offerEnded();
		}
	};

	return (
		<>
			<Nav />
			<div className="container py-5 space-y-6">
				{/* Event Timer */}
				<EventTimer />

				{/* Luck Wheel */}
				<Section
					title="SPIN to get a gift!"
					withBorder
					className="grid grid-cols-1"
				>
					<div className="wheel-container">
						<div className="wheel">
							<div ref={wheel} className="wheel-items">
								{wheelItems.map((item, index) => (
									<div
										className="wheel-item"
										key={`wheel-item - ${index + 1}`}
									>
										<div className="wheel-item-text">
											{item}
										</div>
									</div>
								))}
							</div>
							<div className="wheel-arrow">
								<button
									ref={wheelBtn}
									onClick={() => handleSpin()}
									className="wheel-arrow-btn"
									type="button"
								>
									SPIN!
								</button>
							</div>
						</div>
					</div>
				</Section>
				{/* Tickets */}
				<Section
					title="Tickets"
					withBorder
					className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-8 lg:gap-20"
				>
					<div className="hidden lg:block" />
					{ticketsData.map(
						({ name, price, form, benefits, sold }) => (
							<TicketCard
								key={name}
								name={name}
								price={price}
								form={form}
								benefits={benefits}
								sold={sold}
								className="lg:col-span-3"
							/>
						)
					)}
					<div className="hidden lg:block" />
				</Section>
			</div>
			<Footer />
		</>
	);
};

export default tickets;
