import { useState } from 'react'
import { ReactComponent as AlertIcon } from '../../../assets/Alert.svg'
import { ReactComponent as ArrowIcon } from '../../../assets/Arrow.svg'
import styles from './InfoElement.module.css'
import { BsArrowRight } from 'react-icons/bs'

const InfoElement = () => {
	const [isOpen, setOpen] = useState(false)

	return (
		<div className='bg-black text-[#FCF7E6] p-6 rounded mb-12'>
			<div className='grid grid-cols-alert gap-11 max-[640px]:gap-3 '>
				<div className='grid grid-cols-info gap-2 justify-start'>
					<div>
						<AlertIcon />
					</div>
					<div>
						<span className='uppercase'>alpha</span>
					</div>
				</div>
				<div className='font-medium text-sm'>
					<span>
						Important info{' '}
						<span className='max-[650px]:hidden'>regarding our service</span>
					</span>
					<div
						className={
							styles.infoContainer +
							' max-[650px]:hidden ' +
							(isOpen && styles.active)
						}>
						<div className='border-y-2 py-4 my-4 border-[#FCF7E6]'>
							We're working on a new service to offer you returned online goods
							at a discount near you.
						</div>
						<div className='transition-all max-[650px]:hidden grid grid-cols-hidden1 max-[1050px]:grid-cols-hidden2 gap-y-1.5 max-[650px]:gap-y-2 max-[650px]:gap-x-0 gap-x-10'>
							<h5>CURRENTLY</h5>
							<div></div>
							<h5>FUTURE</h5>
							<ol className='list-decimal pl-4 font-thin text-xs flex items-center'>
								<li>
									<span>Very limited assortment of items that we resell</span>
								</li>
							</ol>
							<div className='flex justify-center items-center max-[650px]:items-start'>
								<BsArrowRight className='text-3xl max-[650px]:text-2xl' />
							</div>
							<ol className='list-decimal pl-4 font-thin text-xs flex items-center max-[1050px]:items-start'>
								<li>Returned items from other shoppers</li>
							</ol>
							<ol
								className='list-decimal pl-4 font-thin text-xs flex items-center'
								start='2'>
								<li>
									<span>All sorts of product categories</span>
								</li>
							</ol>
							<div className='flex justify-center items-center max-[650px]:items-start'>
								<BsArrowRight className='text-3xl max-[650px]:text-2xl' />
							</div>
							<ol
								className='list-decimal pl-4 font-thin text-xs flex items-center max-[1050px]:items-start'
								start='2'>
								<li>Select product categories</li>
							</ol>
							<ol
								className='list-decimal pl-4 font-thin text-xs flex items-center'
								start='3'>
								<li>
									<span>
										Focus on testing the ordering and pick-up experience
									</span>
								</li>
							</ol>
							<div className='flex justify-center items-center max-[650px]:items-start'>
								<BsArrowRight className='text-3xl max-[650px]:text-2xl' />
							</div>
							<ol
								className='list-decimal pl-4 font-thin text-xs flex items-center max-[1050px]:items-start'
								start='3'>
								<li>Focus on end-to-end service experience</li>
							</ol>
						</div>
					</div>
				</div>
				<div>
					<button onClick={() => setOpen(!isOpen)}>
						<ArrowIcon
							className={
								styles.hiddenButton + ' ' + (isOpen && styles.activeButton)
							}
						/>
					</button>
				</div>
			</div>
			<div
				className={
					styles.infoContainer +
					' max-[650px]:block hidden ' +
					(isOpen && styles.active)
				}>
				<div className='border-y-2 py-4 my-4 border-[#FCF7E6]'>
					We're working on a new service to offer you returned online goods at a
					discount near you.
				</div>
				<div className='grid gap-y-2'>
					<h5>CURRENTLY</h5>
					<div className='grid grid-cols-1 gap-y-3 mb-3'>
						<ol className='list-decimal pl-4 font-thin text-xs grid gap-y-2'>
							<li>
								<span>Very limited assortment of items that we resell</span>
							</li>
							<li>
								<span>All sorts of product categories</span>
							</li>
							<li>
								<span>
									Focus on testing the ordering and pick-up experience
								</span>
							</li>
						</ol>
					</div>
					<div className='grid grid-cols-1 gap-y-3 mb-3'>
						<h5>FUTURE</h5>
						<ol className='list-decimal pl-4 font-thin text-xs grid gap-y-2'>
							<li>Returned items from other shoppers</li>
							<li>Select product categories</li>
							<li>Focus on end-to-end service experience</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	)
}

export default InfoElement
