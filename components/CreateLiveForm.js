import React, { useState } from 'react'
import tw from 'tailwind-styled-components'
import { createLive } from '../utils/createLives'
import Mask from './Mask'

const getSuggestedTime = () => {
	const now = new Date();
	now.setHours(now.getHours() + 1);
	now.setMinutes(0);
	now.setSeconds(0);
	now.setMilliseconds(0);
	console.log("🚀 ~ file: CreateLiveForm.js ~ line 18 ~ getSuggestedTime ~ now", now)
	return now;
}

export default function CreateLiveForm({ closeFormCb }) {
	const [data, setData] = useState({
		title: '',
		description: '',
		when: getSuggestedTime(),
		account: '',
		rrss: ''
	});

	const handleChange = (ev) => {
		const {name, value} = ev.target;
		setData(prev => ({
			...prev,
			[name]: value
		}))
	}
	const submit = async() => {
		createLive(data);
		closeFormCb();
	}
    return (
		<>
			<Mask />
			<FormContainer>
				<div className="flex flex-col w-full max-w-xl p-6 my-2 mb-4 bg-white rounded shadow-md">
					<h2 className="mb-6 font-sans text-2xl font-bold text-indigo-700 border-b border-indigo-400">Añadir evento</h2>
					<div className="w-full md:flex">
						<div className="w-full">
							<label className="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker" htmlFor="grid-first-name">
								Título
							</label>
							<input className="block w-full px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-red" 
								id="grid-first-name" 
								type="text" 
								placeholder="Indique un título para la guía" 
								name="title"
								onChange={handleChange}
								value={data.title}
							/>
						</div>
					</div>
					<div className="flex">
						<div className="w-full ">
							<label className="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker" htmlFor="grid-password">
								Descripción
							</label>
							<textarea className="block w-full px-4 py-3 mb-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter" 
								id="grid-password" 
								type="password" 
								placeholder="Ingrese una descripción" 
								name="description"
								onChange={handleChange}
								value={data.description}
							/>
							<p className="text-xs italic text-grey-dark">Make it as long and as crazy as you'd like</p>
						</div>
					</div>
					<div className="flex flex-col mb-6">
						<div className="mb-6 ">
							<label className="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker" htmlFor="grid-city">
								Cuando?
							</label>
							<input className="block w-full px-4 py-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter" 
								id="grid-city" 
								type="text" 
								placeholder="" 
								onChange={handleChange}
								value={data.when}
							/>
						</div>
						<div className="mb-4">
							<label className="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker" htmlFor="grid-state">
								Por donde?
							</label>
							<div className="relative">
								<select className="block w-full px-4 py-3 pr-8 border rounded appearance-none bg-grey-lighter border-grey-lighter text-grey-darker" 
									id="grid-state"
									name="rrss"
									onChange={handleChange}
									value={data.rrss}
								>
									<option>Instagram</option>
									<option>Facebook</option>
									<option>YouTube</option>
									<option>Twitch</option>
								</select>
								<div className="absolute top-0 right-0 flex items-center px-2 my-4 pointer-events-none pin-y pin-r text-grey-darker">
									<svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</div>
							</div>
						</div>
						<div className="">
							<label className="block mb-2 text-xs font-bold tracking-wide uppercase text-grey-darker" htmlFor="grid-zip">
								¿Desde que cuenta trasmite?
							</label>
							<input className="block w-full px-4 py-3 border rounded appearance-none bg-grey-lighter text-grey-darker border-grey-lighter" 
								id="grid-zip" 
								type="text" 
								name="account"
								onChange={handleChange}
								value={data.account}
							/>
						</div>
					</div>
					<div className="flex mt-2 ">
						<button className="w-full py-2 mr-6 font-bold text-red-400" onClick={closeFormCb}>Cerrar</button>
						<button className="w-full py-2 font-bold text-white bg-indigo-600"
						onClick={submit}>Enviar</button>
					</div>
				</div>
			</FormContainer>
        </>
    )
}

const FormContainer = tw.div`
    absolute flex w-screen h-screen justify-center items-center z-50
`