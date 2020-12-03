import React from 'react'

export default function Container({ children }) {
    return (
        <div className="h-screen w-screen mt-10 px-6 flex justify-center align-end overflow-hidden">
            { children }
        </div>
    )
}
