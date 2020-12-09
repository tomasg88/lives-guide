import React from "react";
import Image from "next/image";

const CardContainer = ({ children }) => (
	<div className="relative flex items-end justify-center p-5 rounded-xl bg-white shadow-2xl min-w-40 max-w-md h-64 mx-5 z-10 hover:shadox-2xl">
		{children}
	</div>
);

const DataContainer = ({ children }) => (
	<div className="flex flex-col p-2 w-full h-1/6 relative bg-white rounded-xl">
		{children}
	</div>
);

const LiveCard = ({card}) => {
	return (
		<CardContainer>
			<div className="absolute block h-full w-full z-0 top-0 left-0">
				{/* <div style={styling}></div> */}
				<Image
					src={"/samples/Desert.jpg"}
					alt="Show picture"
					layout="fill"
					className="w-full h-full rounded-xl"
				/>
			</div>
			<DataContainer>
				<h3 className="text-bold text-xl text-center">
					{card.title}
				</h3>
				<p className="text-thin text-xs">
					{card.description ||
						"Aca una descripcion de lo que que se que va a hablar en el show"}
				</p>
				<div className="rrss">
					<span className="icon"></span>
					<div className="text-bold">
						{card.account || "_tomygonzalez.dev"}
					</div>
				</div>
				<p className="text-gray-700">
					{card.when}
				</p>
				<div className="self-center h-12 flex items-center">
					<button className="bg-gray-400 px-10 py-1 rounded-full shadow-md hover:bg-gray-700 hover:text-white transition-colors">
						Ir
					</button>
				</div>
			</DataContainer>
		</CardContainer>
	);
};

export default LiveCard;
