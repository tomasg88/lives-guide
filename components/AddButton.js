import React from 'react'
import tw from 'tailwind-styled-components'

export default function AddButton({ openFormCb, ...restProps }) {
    return (
        <Button onClick={openFormCb}>
            <span className="text-bold text-gray-100 bg-transparent text-3xl">+</span>
        </Button>
    )
}

const Button = tw.button`
    fixed flex w-12 h-12 justify-center items-center 
    bottom-0 m-5
    bg-gray-500 rounded-full shadow-md 
`