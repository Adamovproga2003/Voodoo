import { Link } from 'react-router-dom'
import { ReactComponent as LogoIcon } from '../../assets/Logo.svg'
const Header = () => {
	return (
		<header className='border-b border-black mb-24 max-[640px]:mb-6'>
			<div className='2xl:container 2xl:mx-auto'>
				<div className='transition-all flex justify-between max-[640px]:items-center items-start gap-4 py-12 pl-16 pr-32 2xl:px-30 xl:px-24 lg:px-18 md:px-12 sm:px-6 max-[640px]:px-6 max-[640px]:py-0'>
					<div className='col-start-1 col-end-3 ...'>
						<Link to={'/'}>
							<LogoIcon className='transition-all lg:w-64 md:w-44 sm:w-44 max-[640px]:w-28' />
						</Link>
					</div>
					<div className='col-end-7 col-span-2 flex'>
						<button className='mr-10 py-1.5 px-4 max-[640px]:mr-2 max-[640px]:text-sm'>
							About us
						</button>
						<button className='bg-black text-white rounded py-1.5 px-4 max-[640px]:text-sm hover:bg-orange-600'>
							Sign-up
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
