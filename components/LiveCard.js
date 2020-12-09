import React, { useState } from "react";
import Image from "next/image";
import tw from "tailwind-styled-components";

const CardContainer = tw.div`
	relative flex items-end justify-center 
	min-w-40 max-w-md h-80
	mx-5 p-5 z-10 
	rounded-xl shadow-lg bg-transparent
	hover:shadow-xl hover:transition-shadow transition-shadow
`

const ImageContainer = tw.div`
	absolute block h-full w-full z-0 top-0 left-0
`

const DataContainer = tw.div`
	flex flex-col p-2 w-4/6 max-h-1/2 relative bg-white rounded-xl
`
const GoButton = tw.button`
	bg-gray-400 px-10 py-1 rounded-full shadow-md hover:bg-gray-700 hover:text-white transition-colors
`

const LiveCard = ({ card }) => {
	const [isExpanded, setIsExpanded] = useState(false)
	const handleClick = () => {
		setIsExpanded(!isExpanded)
	}
	return (
		<CardContainer>
			<ImageContainer>
				<Image
					src={"/samples/Desert.jpg"}
					alt="Show picture"
					layout="fill"
					className="w-full h-full rounded-xl"
				/>
				
			</ImageContainer>
			<DataContainer>
				<h3 className="text-bold text-xl text-center">
					{card.title}
				</h3>
				{
					isExpanded && (
						<>
							<p className="text-thin text-xs">
								{card.description}
							</p>
							<div className="rrss">
								<span className="icon"></span>
								<div className="text-bold">
									{card.account}
								</div>
							</div>
							<p className="text-gray-700">
								{card.when}
							</p>
						</>
					)
				}
				<div className="self-center h-12 flex items-center">
					<GoButton onClick={handleClick}>
						Ir
					</GoButton>
				</div>
			</DataContainer>
		</CardContainer>
	);
};

export default LiveCard;
