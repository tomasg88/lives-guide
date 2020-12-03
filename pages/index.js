import Head from 'next/head'
import Backgrounds from '../components/Backgrounds'
import Category from '../components/Category'
import Container from '../components/Container'
import LiveCard from '../components/LiveCard'

export default function Home(props) {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Backgrounds />
			<main>
				<Category />
				<Container>
					<LiveCard />
					<LiveCard />
				</Container>
				
			</main>

		</div>
	)
}
