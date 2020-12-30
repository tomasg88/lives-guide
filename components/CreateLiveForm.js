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
				<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
					<div className="-mx-3 md:flex mb-6">
						<div className="md:w-full px-3 mb-6 md:mb-0">
							<label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-first-name">
								Título
							</label>
							<input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" 
								id="grid-first-name" 
								type="text" 
								placeholder="Indique un título para la guía" 
								name="title"
								onChange={handleChange}
								value={data.title}
							/>
						</div>
					</div>
					<div className="-mx-3 md:flex mb-6">
						<div className="md:w-full px-3">
							<label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-password">
								Descripción
							</label>
							<textarea className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" 
								id="grid-password" 
								type="password" 
								placeholder="Ingrese una descripción" 
								name="description"
								onChange={handleChange}
								value={data.description}
							/>
							<p className="text-grey-dark text-xs italic">Make it as long and as crazy as you'd like</p>
						</div>
					</div>
					<div className="-mx-3 md:flex mb-2">
						<div className="px-3 mb-6 md:mb-0">
							<label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-city">
								Cuando?
							</label>
							<input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
								id="grid-city" 
								type="text" 
								placeholder="" 
								onChange={handleChange}
								value={data.when}
							/>
						</div>
						<div className="px-3">
							<label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-state">
								Por donde?
							</label>
							<div className="relative">
								<select className="block appearance-none w-full bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded" 
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
								<div className="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
									<svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
									</svg>
								</div>
							</div>
						</div>
						<div className="px-3">
							<label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-zip">
								¿Desde que cuenta trasmite?
							</label>
							<input className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
								id="grid-zip" 
								type="text" 
								name="account"
								onChange={handleChange}
								value={data.account}
							/>
						</div>
					</div>
					<div>
						<button onClick={closeFormCb}>Cerrar</button>
						<button onClick={submit}>Enviar</button>
					</div>
				</div>
			</FormContainer>
        </>
    )
}

const FormContainer = tw.div`
    absolute flex w-screen h-screen justify-center items-center z-10
`