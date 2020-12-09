import Head from "next/head";
import Backgrounds from "../components/Backgrounds";
import Categories from "../components/Categories";
import Container from "../components/Container";
import LiveCard from "../components/LiveCard";
import { getCategories, getLives } from "../utils/getLives";

function Home(props) {
	return (
		<div>
			<Head>
				<title>Live Guide</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Backgrounds />
			<main>
				<Categories list={props.categories} />
				<Container>
					{props.lives &&
						props.lives.map((l, i) => (
							<LiveCard key={i} card={l} />
						))}
				</Container>
			</main>
		</div>
	);
}

export async function getServerSideProps() {
	const livesRes = await getLives();
	const lives = await livesRes.map((p) => {
		return p.fields;
	});

	const catRes = await getCategories();
	console.log("getServerSideProps -> catRes", catRes)
	const categories = await catRes.map((c) => {
		return c.fields;
	});

	return {
		props: {
			lives,
			categories
		},
	};
}

export default Home;
