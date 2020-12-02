import React from 'react'

const CardContainer = ({ children }) => (
	<div className="flex align-end p-5 rounded-xl bg-white shadow-lg w-1/6 h-64 ml-5 mr-5 z-10">
		{ children }
	</div>
)

const DataContainer = ({ children }) => (
	<div>
		{ children }
	</div>
)


const LiveCard = () => {
    return (
        <CardContainer>
			{/* Background image */}
			<DataContainer >
				<h3 className="title"></h3>
				<p className="description"></p>
				<div className="rrss">
					<span className="icon"></span>
					<p className="live-account"></p>
				</div>
				<p className="date"></p>
				<div className="goto">
					<button>

					</button>
				</div>
			</DataContainer>
        </CardContainer>
    )
}

export default LiveCard;