import React from 'react'

export default function Backgrounds() {
    return (
        <div className="fixed top-0 w-screen h-screen overflow-hidden opacity-10">
            <img className="absolute right-0 h-full w-100" src="/backgrounds/grey-no-shadow.svg" />
            <img className="absolute right-0 h-full w-100" src="/backgrounds/purple-no-shadow.svg" />
        </div>
    )
}
