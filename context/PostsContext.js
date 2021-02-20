import { createContext, useState } from 'react';
import postsJson from '../posts.json';

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
	const [posts, setPosts] = useState(postsJson);

	const getSinglePost = (id) => {
		return posts.find((post) => post.id == id);
	};

	return (
		<PostsContext.Provider
			value={{
				posts,
				getSinglePost,
			}}
		>
			{children}
		</PostsContext.Provider>
	);
};

export { PostsProvider, PostsContext };
