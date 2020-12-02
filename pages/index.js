import Head from 'next/head'
import Backgrounds from '../components/Backgrounds'
import Container from '../components/Container'
import LiveCard from '../components/LiveCard'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Backgrounds />

				<Container>
					<LiveCard />
					<LiveCard />
					<LiveCard />
				</Container>
				
			</main>

		</div>
	)
}
