import { ReactComponent as LogoMarkIcon } from '../../assets/Logomark.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='bg-white border-t border-black 2xl:px-30 xl:px-24 lg:px-18 md:px-12 sm:px-6 max-[640px]:px-6 py-20'>
			<div className='2xl:container 2xl:mx-auto'>
				<div className='grid grid-cols-4 max-[640px]:grid-cols-1 text-sm font-bold'>
					<div className='flex justify-center max-[640px]:order-last'>
						<LogoMarkIcon />
					</div>
					<div className='max-[640px]:mb-12'>
						<ul className='list-none'>
							<li className='uppercase mb-4'>
								<Link to='/'>faq</Link>
							</li>
							<li className='uppercase mb-4'>
								<Link to='/'>returns</Link>
							</li>
							<li className='uppercase'>
								<Link to='/'>contact</Link>
							</li>
						</ul>
					</div>
					<div className='max-[640px]:mb-12'>
						<ul className='list-none'>
							<li className='mb-4'>
								<Link to='/'>TERMS & CONDITIONS</Link>
							</li>
							<li className='mb-4'>
								<Link to='/'>PRIVACY POLICY</Link>
							</li>
							<li className='mb-4'>
								<Link to='/'>COOKIE POLICY</Link>
							</li>
							<li>
								<Link to='/'>COOKIE SETTINGS</Link>
							</li>
						</ul>
					</div>
					<div className='max-[640px]:mb-12'>
						<ul className='list-none'>
							<li className='mb-4'>
								<Link to='/'>ABOUT SECOND CHANCE</Link>
							</li>
							<li className='mb-4'>
								<Link to='/'>CAREER</Link>
							</li>
							<li className='mb-4'>
								<Link to='/'>FACEBOOK</Link>
							</li>
							<li>
								<Link to='/'>INSTAGRAM</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
