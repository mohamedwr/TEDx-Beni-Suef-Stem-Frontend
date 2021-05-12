import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

// Components
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Title from "../components/Title";
import Particle from "../components/Particle";

const contact = () => {
	useEffect(() => {
		document.body.classList.remove("dark:bg-gray-800");
		document.body.classList.add("bg-black");

		return () => {
			document.body.classList.remove("bg-black");
			document.body.classList.add("dark:bg-gray-800");
		};
	}, []);

	const { register, handleSubmit, errors } = useForm();
	const onSubmit = (data) => {
		let { email, message, name, subject } = data;
		axios
			.post(`https://tedx-beni-suef-api.herokuapp.com/api/contact`, {
				name,
				email,
				subject,
				message,
			})
			.then(() => {
				Swal.fire(
					"SuccessFull",
					"Form Has Been Submit. We Will Mail You",
					"success"
				);
			})
			.catch(() => {
				Swal.fire("Failed", "Please Submit Your Form Again", "error");
			});
	};

	const inputStyle =
		"block w-full mt-1 duration-200 ease-in-out bg-gray-100 rounded-md focus:border-gray-500 focus:bg-white focus:ring-0 opacity-70 hover:opacity-100 focus:opacity-100";

	return (
		<>
			<Nav />
			<Title>Contact Us</Title>
			<section className="z-20 flex items-center justify-center">
				<Particle />
				<div className="container py-10 space-y-5">
					<h2 className="pb-4 text-4xl font-bold text-center text-white uppercase font-roboto">
						contact us
					</h2>
					<div className="flex items-center justify-center ">
						<div className="w-11/12 lg:w-1/3">
							<form
								className="grid grid-cols-1 gap-6"
								onSubmit={handleSubmit(onSubmit)}
							>
								{/* Start Form */}

								<label className="block">
									<span className="text-white">
										Full Name
									</span>
									<input
										required
										type="text"
										name="name"
										ref={register({ required: true })}
										className={`${inputStyle} ${
											errors.name ? "border-red-500" : ""
										}`}
										placeholder="John Doe"
									/>
								</label>
								<label className="block">
									<span className="text-white">
										Email Address
									</span>
									<input
										type="email"
										name="email"
										ref={register({ required: true })}
										className={`${inputStyle} ${
											errors.email ? "border-red-500" : ""
										}`}
										placeholder="john@example.com"
									/>
								</label>
								<label className="block">
									<span className="text-white">Subject</span>
									<input
										type="text"
										name="subject"
										ref={register({ required: true })}
										className={`${inputStyle} ${
											errors.subject
												? "border-red-500"
												: ""
										}`}
										placeholder="Hello There"
									/>
								</label>
								<label className="block">
									<span className="text-white">Message</span>
									<textarea
										name="message"
										ref={register({ required: true })}
										className={`${inputStyle} resize-none ${
											errors.message
												? "border-red-500"
												: ""
										}`}
										rows="6"
										placeholder="Enter Message..."
									></textarea>
								</label>
								<button
									type="submit"
									className="px-2 py-3 text-xl font-bold text-white uppercase bg-red-500 rounded-full font-roboto"
								>
									Submit
								</button>
								{/* End Form */}
							</form>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default contact;
