import React from 'react'
import tw from 'tailwind-styled-components';

export default function Categories({ list }) {
    return (
        <CategoryContainer>
            {
                list.map((c, i) => (<Category key={i}>
                    <button  className="font-bold">{ c.name }</button>
                </Category>))
            }
        </CategoryContainer>
    )
}

const CategoryContainer = tw.div`px-4 z-10 flex items-center justify-start top-0 left-0 w-full py-4 mx-auto`
            
const Category = tw.div`
    mx-2 rounded-md shadow-md
    bg-indigo-600 font-sans capitalize
    px-4 py-2
    text-white
    hover:shadow-2xl hover:transition-shadow
    transition-shadow

`
