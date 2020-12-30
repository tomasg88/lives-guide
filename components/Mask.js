import React from 'react'

export default function Mask({ children }) {
    return (
        <div className="absolute flex w-screen h-screen bg-black opacity-50 justify-center items-center z-10">
        </div>
    )
}
