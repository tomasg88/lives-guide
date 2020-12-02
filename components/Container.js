import React from 'react'

export default function Container({ children }) {
    return (
        <div className="h-80 w-screen mt-10 p-6 flex justify-center align-end">
            { children }
        </div>
    )
}
