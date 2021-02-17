import Button from '../components/Button';
import { useRouter } from 'next/router';

const Error = () => {
	const router = useRouter();
	return (
		<>
			<div className='relative flex w-screen h-screen bg-no-repeat bg-cover bg-errImage'>
				<div className='z-20 flex flex-col items-center justify-center w-full h-full space-y-6'>
					<img src='/logoWhite.png' className='h-36' />
					<h1 className='font-bold tracking-wide text-red-500 text-9xl font-roboto'>
						404
					</h1>
					<Button text='Back To Home' onClick={() => router.push('/')} />
				</div>
				<div className='absolute inset-0 z-10 flex flex-col items-center justify-center bg-black opacity-70'></div>
			</div>
		</>
	);
};

// Error.getInitialProps = ({ res, err }) => {
// 	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
// 	return { statusCode };
// };

export default Error;
