import React from 'react'

const CategoryContainer = ({ children }) => {
    return (
        <div>
            { children }
        </div>
    )
}


export default function Category({categoryImage, categoryName}) {
    return (
        <CategoryContainer>
            {/* background */}
            <span>{categoryName}</span>
        </CategoryContainer>
    )
}
