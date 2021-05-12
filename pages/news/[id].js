import { useRouter } from "next/router";
import { Remark } from "react-remark";
import axios from "axios";

// Components
import Nav from "../../components/Nav";
import Title from "../../components/Title";
import Footer from "../../components/Footer";

export async function getServerSideProps({ query }) {
	const backendUrl = process.env.BACKEND_URL;
	const { data: post } = await axios.get(
		`${backendUrl}/api/post/${query.id}`
	);

	return {
		props: {
			post,
		},
	};
}

const PostPage = ({ post }) => {
	const router = useRouter();

	return (
		<>
			<Nav />
			<Title description={post.content} image={post.image}>
				{post.title}
			</Title>
			<div className="container py-4 space-y-1 lg:px-20 lg:py-14 lg:space-y-3">
				<h1 className="text-2xl font-black text-gray-800 lg:text-5xl font-roboto dark:text-white">
					{post.title}
				</h1>
				<div className="flex items-center justify-between space-x-2 text-gray-700 dark:text-white">
					<h4>
						By <span className="font-medium">{post.author}</span>
					</h4>
					<h5>At {post.created_at}</h5>
				</div>
				<img
					src={post.image}
					alt={post.title}
					className="w-full shadow-lg rounded-xl aspect-h-4"
				/>
				<div className="flex items-center justify-center">
					<article className="pt-3 space-y-4 font-cairo dark:children:text-gray-100">
						<Remark
							remarkParseOptions={{ commonmark: true }}
							remarkToRehypeOptions={{ commonmark: true }}
							rehypeReactOptions={{
								components: {
									a: ({ children, href }) => (
										<a
											className="px-0 py-2 text-xl font-bold text-red-500 underline uppercase duration-200 ease-in-out cursor-pointer font-roboto"
											target="_blank"
											href={href}
											rel="noreferrer"
										>
											{children[0]}
										</a>
									),
									h1: ({ children }) => (
										<h1 className="text-6xl text-black dark:text-white">
											{children[0]}
										</h1>
									),
									h2: ({ children }) => (
										<h2 className="text-5xl text-black dark:text-white">
											{children[0]}
										</h2>
									),
									h3: ({ children }) => (
										<h3 className="text-3xl text-black dark:text-white">
											{children[0]}
										</h3>
									),
									h4: ({ children }) => (
										<h4 className="text-2xl text-black dark:text-white">
											{children[0]}
										</h4>
									),
									h5: ({ children }) => (
										<h5 className="text-xl text-black dark:text-white">
											{children[0]}
										</h5>
									),
									h6: ({ children }) => (
										<h6 className="text-lg text-black dark:text-white">
											{children[0]}
										</h6>
									),
									p: ({ children }) => (
										<p className="text-lg text-black dark:text-white">
											{children[0]}
										</p>
									),
								},
							}}
						>
							{post.content}
						</Remark>
					</article>
				</div>

				<div className="flex flex-col items-center justify-center space-y-2">
					<a
						className="flex items-center justify-center px-12 py-4 text-xl font-bold text-white uppercase duration-200 ease-in-out bg-blue-500 rounded-full shadow-md cursor-pointer font-roboto hover:bg-blue-600"
						href={post.facebookPost}
						target="_blank"
						rel="noreferrer"
					>
						View In
						<img
							src="/icons/facebook.png"
							className="pl-2 h-7"
							alt="facebook logo button"
						/>
					</a>
					<button
						className="px-12 py-4 text-xl font-bold text-white uppercase duration-200 ease-in-out bg-red-500 rounded-full shadow-md cursor-pointer font-roboto hover:bg-red-600"
						onClick={() => router.push("/news")}
						type="button"
					>
						Back
					</button>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default PostPage;
