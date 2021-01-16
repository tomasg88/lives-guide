import React, { useState } from "react";
import Image from "next/image";
import tw from "tailwind-styled-components";

const CardContainer = tw.div`
	relative flex flex-col overflow-hidden rounded-lg bg-white shadow-md
`;

const ImageContainer = tw.div`
	relative h-64 w-full z-40
`;

const DataContainer = tw.div`
	flex flex-col w-full z-20 justify-end pt-3

`;
const GoButton = tw.button`
	px-2 text-base uppercase relative z-50 font-mono bg-indigo-500 text-white w-full py-2
`;

const LiveCard = ({ card }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const handleClick = () => {
		setIsExpanded(!isExpanded);
	};
	return (
		<CardContainer>
			<ImageContainer>
				{isExpanded && (
					<div className="absolute inset-0 z-30 px-6 py-5 overflow-hidden bg-indigo-100">
						<p className="font-sans text-base text-thin">
							{card.description}
						</p>
					</div>
				)}
				<Image
					src={"/samples/Desert.jpg"}
					alt="Show picture"
					layout="fill"
					className="object-cover w-full h-64"
				/>
			</ImageContainer>
			<DataContainer>
				<div className="z-50 flex flex-col items-center justify-start px-2 pb-6 ">
					<h3 className="text-xl font-normal text-left text-indigo-900 ">
						{card.title}
					</h3>
					@{card.account}
					<time className="text-gray-700">{card.when}</time>
				</div>
				<div className="flex items-center justify-center w-full">
					<GoButton onClick={handleClick}>Detalle</GoButton>
				</div>
			</DataContainer>
		</CardContainer>
	);
};

export default LiveCard;
