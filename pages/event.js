// Components
import Nav from "../components/Nav";
import Section from "../components/Section";
import Timer from "../components/Timer";
import Title from "../components/Title";
import Footer from "../components/Footer";
import TicketCard from "../components/TicketCard";
import PersonCard from "../components/PersonCard";

const event = () => {
	const tickets = [
		{
			name: "Normal",
			price: 120,
			sold: true,
			form: "https://forms.gle/K5ycFiAq9CRpYpg68",
			benefits: [
				"Attendance & Breakfast",
				"Normal Welcome Package",
				"Normal Sticker Package",
				"Face Mask",
				"-",
				"-",
				"-",
			],
		},
		{
			name: "Pro",
			price: 150,
			sold: true,
			form: "https://forms.gle/wqgY9f4EsQyURy5H9",
			benefits: [
				"Attendance & Breakfast",
				"Pro Welcome Package",
				"Pro Sticker Package",
				"Face Mask",
				"Printed T-Shirt",
				"Pro Seat",
				"-",
			],
		},
		{
			name: "VIP",
			price: 180,
			sold: true,
			form: "https://forms.gle/uS2jDJYTsfQ5X7k49",
			benefits: [
				"Attendance & Breakfast",
				"VIP Welcome Package",
				"Full Sticker Package",
				"Face Mask",
				"Printed T-Shirt",
				"VIP Seat",
				"Lunch",
			],
		},
	];

	const speakers = [
		{
			name: "Abdurahman El Gammal",
			img: "https://res.cloudinary.com/dxaqlmgag/image/upload/v1621173287/Speakers%20Event%202021/Abdurahman_El_Gammal_dlx4g1.png",
		},
		{
			name: "Manar ElSaeed",
			img: "https://res.cloudinary.com/dxaqlmgag/image/upload/v1621173295/Speakers%20Event%202021/Manar_Elsaeed_jmo9ea.png",
		},
		{
			name: "Omar Hefnawy",
			img: "https://res.cloudinary.com/dxaqlmgag/image/upload/v1621173306/Speakers%20Event%202021/Omar_Hefnawy_ofjpkt.png",
		},
		{
			name: "Essam Gouda",
			img: "https://res.cloudinary.com/dxaqlmgag/image/upload/v1621173287/Speakers%20Event%202021/Essam_Gouda_zn2u1d.png",
		},
		{
			name: "Nayyera Askar",
			img: "https://res.cloudinary.com/dxaqlmgag/image/upload/v1621173300/Speakers%20Event%202021/Nayyera_Askar_juzcbt.png",
		},
		{
			name: "Ahmed Elgebaly",
			img: "https://res.cloudinary.com/dxaqlmgag/image/upload/v1621173287/Speakers%20Event%202021/Ahmed_Elgebaly_oy3je2.png",
		},
		{
			name: "Mahmoud Edris",
			img: "https://res.cloudinary.com/dxaqlmgag/image/upload/v1621173291/Speakers%20Event%202021/Mahmoud_Edris_rbggbw.png",
		},
	];

	return (
		<>
			<Nav />
			<Title
				image="https://res.cloudinary.com/dxaqlmgag/image/upload/v1619954113/Event-29-5-2021.jpg"
				description="TEDxYouth@BeniSuefSTEM season 2021 event will be held at the end
							of this month, 29 May 2021. Do not miss the chance of joining our
							big event by buying our ticket as soon as tickets are available.
							We are waiting for you all."
				keywords={[
					"ticket",
					"tickets",
					"event",
					"Helwan university",
					"event beniSuef",
				]}
			>
				Event Details
			</Title>
			<div className="container py-5 space-y-6">
				<section className="px-6 pb-16 space-y-4 bg-red-500 rounded-md shadow-lg pt-11">
					<h1 className="text-4xl font-bold text-center text-white">
						Event Date
					</h1>
					<Timer time="May 29, 2021" />
				</section>

				<Section withBorder title="Event Description">
					<p className="font-light text-black dark:text-white">
						<p dir="ltr">
							On TEDx’s red carpet, over 2600 talks had been
							presented till now, millions of people are all ears,
							sitting and glaring at the speakers. TEDx event is
							an annual event which is held by its own people and
							community at the end of each season. Thus, our
							mission as TEDxYouth@BeniSuefSTEM - a TEDx
							distributer - is to reach out to all people,
							exposing insights, beliefs, inspirations, and WORTH
							SPREADING IDEAS.
						</p>
						<p dir="ltr">
							TEDxYouth@BeniSuefSTEM season 2021 event will be
							held at the end of this month, 29 May 2021. Do not
							miss the chance of joining our big event by buying
							our ticket as soon as tickets are available. We are
							waiting for you all.
						</p>
						<br />
						<p dir="rtl">
							على السجادة الحمراء لـ TEDx، تم تقديم أكثر من 2600
							مؤتمر حتى الآن، الملايين من الناس كلهم ​​آذان صاغية،
							جالسون ومستمعون للمتحدثين والمقدمين. حدث TEDx هو حدث
							سنوي يقام من قبل الناس والمجتمع الخاص به في نهاية كل
							موسم. وبالتالي، فإن مهمتنا بصفتنا
							TEDxYouth@BeniSuefSTEM - أحد موزعي TEDx - هي الوصول
							إلى جميع الأشخاص، وكشف الرؤى والمعتقدات والإلهام
							والأفكار التي تستحق الانتشار. سيقام حدث
							TEDxYouth@BeniSuefSTEM لموسم 2021 في نهاية هذا
							الشهر، 29 مايو 2021. لا تفوت فرصة الانضمام إلى حدثنا
							الكبير عن طريق شراء تذكرتنا بمجرد توفر التذاكر
							قريبا. نحن في انتظاركم جميعا.
						</p>
					</p>
				</Section>

				{/* Tickets */}
				<Section
					title="Tickets"
					withBorder
					className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
				>
					{tickets.map(({ name, price, form, benefits, sold }) => (
						<TicketCard
							key={name}
							name={name}
							price={price}
							form={form}
							benefits={benefits}
							sold={sold}
						/>
					))}
				</Section>

				{/* Partners & Sponsors */}
				{/* <Section
					withBorder
					title='Partners & Sponsors'
					className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'
				>
					{[1, 2, 3, 4, 5, 6].map((card) => (
						<PersonCard
							key={card}
							isMember
							img='/cover.jpg'
							name={`Person ${card}`}
						/>
					))}
				</Section> */}

				{/* Speakers */}
				<Section
					withBorder
					title="Speakers"
					className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"
				>
					{speakers.map(({ name, img }) => (
						<PersonCard key={name} img={img} name={name} />
					))}
				</Section>
			</div>
			<Footer />
		</>
	);
};

export default event;
