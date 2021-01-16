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
			<AppContainer>
				<Backgrounds />
				{
					showCreateForm && 
						<CreateLiveForm closeFormCb={() => setShowCreateForm(false)} />
				}
				<AddButton openFormCb={() => setShowCreateForm(true)} />
				<Categories list={props.categories} />
				<Main>
				<h2 className="relative pl-12 my-6 font-sans text-6xl text-gray-900">
					En directo
					<span class="flex h-6 w-6 absolute top-0 left-0 transform-gpu translate-y-5">
						<span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
						<span class="relative inline-flex rounded-full h-6 w-6 bg-red-500"></span>
					</span>
				</h2>
				<Container>
					{props.lives &&
						props.lives.map((l, i) => (
							<LiveCard key={i} card={l} />
						))}
				</Container>
				</Main>
			</AppContainer>
		</div>
	);
}

const Container = tw.div`
	grid grid-cols-5 gap-4
`

const AppContainer = tw.div`
	bg-gray-100 min-h-screen pb-24
`

const Main = tw.main`
	px-6
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
