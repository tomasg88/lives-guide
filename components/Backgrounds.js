import React from 'react'

export default function Backgrounds() {
    return (
        <div className="h-screen w-screen fixed top-0 overflow-hidden">
            <img className="absolute w-100 right-0 h-full" src="/backgrounds/grey-no-shadow.svg" />
            <img className="absolute w-100 right-0 h-full" src="/backgrounds/purple-no-shadow.svg" />
        </div>
    )
}
