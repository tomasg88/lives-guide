import React from 'react'
import tw from 'tailwind-styled-components';

export default function Categories({ list }) {
    return (
        <CategoryContainer>
            {
                list.map((c, i) => (<Category key={i}>
                    <button>{ c.name }</button>
                </Category>))
            }
        </CategoryContainer>
    )
}

const CategoryContainer = tw.div`fixed flex items-center justify-start top-0 left-0 w-full h-16 p-4 mx-auto bg-white-600`
            
const Category = tw.div`mx-4 rounded-md shadow-md px-8 py-4 hover:shadow-2xl hover:transition-shadow transition-shadow`
