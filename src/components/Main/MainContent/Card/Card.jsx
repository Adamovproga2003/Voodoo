import styles from './Card.module.css'

const Card = ({ title, price, ...props }) => {
	return (
		<div className={'mb-6 ' + styles.cardContainer}>
			<div className='border rounded border-black h-80 w-full relative'>
				<div className='text-xs absolute top-0 left-0 uppercase m-3 px-2 py-1 bg-black rounded text-white'>
					used
				</div>
			</div>
			<div className='flex justify-between'>
				<div className='font-bold truncate ...'>{title}</div>
				<div className='font-medium'>Condition</div>
			</div>
			<div className='flex justify-between mb-3'>
				<div className='font-bold'>{price} KR.</div>
				<div className='font-normal'>Slightly used</div>
			</div>
			<div
				className={
					styles.pickButton +
					' max-[650px]:opacity-100 max-[650px]:visible invisible opacity-0 transition-opacity'
				}>
				<button
					className={
						'uppercase bg-black rounded text-white w-full py-2 text-base'
					}>
					Pick-up in{' '}
					<span className='underline underline-offset-3'>{price}</span>
				</button>
			</div>
		</div>
	)
}

export default Card
