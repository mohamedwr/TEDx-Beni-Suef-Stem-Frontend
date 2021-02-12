import Button from '../components/Button';
import { useRouter } from 'next/router';

const Error = () => {
	const router = useRouter();
	return (
		<>
			<div className='flex h-screen w-screen bg-errImage bg-no-repeat bg-cover relative'>
				<div className='flex flex-col justify-center items-center h-full w-full z-20 space-y-6'>
					<img src='/logoWhite.png' className='h-36' />
					<h1 className='text-9xl text-red-500 font-roboto font-bold tracking-wide'>
						404
					</h1>
					<Button text='Back To Home' onClick={() => router.push('/')} />
				</div>
				<div className='z-10 absolute inset-0 bg-black opacity-70 flex flex-col justify-center items-center'></div>
			</div>
		</>
	);
};

// Error.getInitialProps = ({ res, err }) => {
// 	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
// 	return { statusCode };
// };

export default Error;
