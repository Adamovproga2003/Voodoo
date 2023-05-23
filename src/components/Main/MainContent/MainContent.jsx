import { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card/Card'
import useWindowDimensions from '../../../hooks/useDimensions'

const MainContent = () => {
	const [products, setProducts] = useState([])

	const { width } = useWindowDimensions()

	useEffect(() => {
		const getProducts = async () => {
			await axios
				.get('https://voodoo-sandbox.myshopify.com/products.json?limit=12')
				.then(async function (response) {
					setProducts(response.data.products)
				})
				.catch(function (error) {
					console.error(error)
				})
		}

		const fetchData = async () => {
			await getProducts()
		}

		products.length === 0 && fetchData()
	}, [products])

	return (
		<div className='grid xl:grid-cols-4 gap-4 xl:grid-rows-3 lg:grid-cols-3 lg:grid-rows-4 md:grid-cols-2 md:grid-rows-6 max-[640px]:grid-cols-1 max-[640px]:grid-rows-6 mb-12'>
			{products && width <= 640
				? products
						.slice(0, 7)
						.map((product, key) => (
							<Card
								key={'product-' + key}
								title={product.title}
								price={product.variants[0].price}
							/>
						))
				: products.map((product, key) => (
						<Card
							key={'product-' + key}
							title={product.title}
							price={product.variants[0].price}
						/>
				  ))}
		</div>
	)
}

export default MainContent
