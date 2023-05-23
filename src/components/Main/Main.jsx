import FormContainer from './FormContainer/FormContainer'
import InfoElement from './InfoElement/InfoElement'
import MainContent from './MainContent/MainContent'

const Main = () => {
	return (
		<main className='2xl:px-30 xl:px-24 lg:px-18 md:px-12 sm:px-6 max-[640px]:px-6'>
			<div className='2xl:container 2xl:mx-auto'>
				<InfoElement />
				<MainContent />
				<FormContainer />
			</div>
		</main>
	)
}

export default Main
