import Head from "next/head";
import Backgrounds from "../components/Backgrounds";
import Category from "../components/Category";
import Container from "../components/Container";
import LiveCard from "../components/LiveCard";
import { getLives } from "../utils/getLives";

function Home(props) {
	console.log("Home -> props", props);
	return (
		<div>
			<Head>
				<title>Live Guide</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Backgrounds />
			<main>
				<Category />
				<Container>
					{props.lives &&
						props.lives.map((l, i) => (
							<LiveCard key={i} card={l} />
						))}
					{/* <LiveCard />
					<LiveCard /> */}
				</Container>
			</main>
		</div>
	);
}

export async function getServerSideProps() {
	const res = await getLives();
	const lives = await res.map((p) => {
		return p.fields;
	});

	return {
		props: {
			lives,
		},
	};
}

export default Home;
