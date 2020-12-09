import React from 'react'
import tw from 'tailwind-styled-components'

export default function CreateLiveForm({ closeFormCb }) {
    return (
        <FormContainer>
            <button className="bg-gray-700 text-white p-5 " onClick={closeFormCb}>CERRAR</button>
        </FormContainer>
    )
}

const FormContainer = tw.div`
    absolute flex w-screen h-screen bg-black opacity-50 justify-center items-center z-10
`