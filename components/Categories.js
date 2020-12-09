import React from 'react'

const CategoryContainer = ({ children }) => {
    return (
        <div className="fixed flex items-center justify-start top-0 left-0 w-full h-16 p-4 mx-auto bg-white-600">
            { children }
        </div>
    )
}

const Category = ({ category }) => (
    <div className="mx-4 rounded-md shadow-md px-8 py-4 hover:shadow-2xl hover:transition-shadow transition-shadow">
        <button>{ category.name }</button>
    </div>
)


export default function Categories({ list }) {
    return (
        <CategoryContainer>
            {
                list.map((c, i) => <Category key={i} category={c} />)
            }
        </CategoryContainer>
    )
}
