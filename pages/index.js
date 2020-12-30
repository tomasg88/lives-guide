import Head from "next/head";
import { useState } from "react";
import tw from "tailwind-styled-components";
import AddButton from "../components/AddButton";
import Backgrounds from "../components/Backgrounds";
import Categories from "../components/Categories";
import CreateLiveForm from "../components/CreateLiveForm";
import LiveCard from "../components/LiveCard";
import { getCategories, getLives } from "../utils/getLives";

function Home(props) {
	const [showCreateForm, setShowCreateForm] = useState(false)
	return (
		<div>
			<Head>
				<title>Live Guide</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="absolute w-screen h-screen">
				<Backgrounds />
				{
					showCreateForm && 
						<CreateLiveForm closeFormCb={() => setShowCreateForm(false)} />
				}
				<AddButton openFormCb={() => setShowCreateForm(true)} />
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
		</div>
	);
}

const Container = tw.div`
	mt-64 h-auto p-40 flex justify-center items-end overflow-hidden
`

export async function getServerSideProps() {
	const livesRes = await getLives();
	const lives = await livesRes.map((p) => {
		return p.fields;
	});
    
	const catRes = await getCategories();
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
