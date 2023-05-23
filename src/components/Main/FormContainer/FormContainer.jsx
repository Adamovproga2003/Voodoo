const FormContainer = () => {
	return (
		<div className='max-[640px]:py-5 py-12 mb-20'>
			<h5 className='md:text-xl max-[640px]:text-sm pb-6 text-center'>
				Be the first one to know when we launch our beta!
			</h5>
			<form className='grid grid-cols-form gap-3 justify-center max-w-form m-auto'>
				<input
					type='email'
					placeholder='Email'
					className='transition-all p-3 text-base rounded placeholder:text-black placeholder:font-semibold max-[380px]:text-sm'
				/>
				<button
					type='submit'
					onClick={e => e.preventDefault()}
					className='transition-all text-base text-black bg-orange-600 py-3 px-5 rounded max-[380px]:text-sm'>
					Sign-up
				</button>
			</form>
		</div>
	)
}

export default FormContainer
