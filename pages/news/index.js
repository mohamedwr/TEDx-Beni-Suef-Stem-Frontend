import axios from "axios";

// Components
import Nav from "../../components/Nav";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Title from "../../components/Title";

export async function getServerSideProps() {
	const { data: posts } = await axios.get(`${process.env.apiURL}/api/post`);

	return {
		props: {
			posts,
		},
	};
}

const news = ({ posts }) => (
	<>
		<Nav />
		<Title>News</Title>
		<div className="container py-5 md:px-52">
			<div className="grid grid-cols-1 gap-5">
				{posts.map((post) => (
					<Card
						key={post.title}
						id={post.id}
						title={post.title}
						author={post.author}
						time={post.created_at}
						img={post.image}
					/>
				))}
			</div>
		</div>
		<Footer />
	</>
);

export default news;
