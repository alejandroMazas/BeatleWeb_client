import React, { createContext, useState } from 'react'

const LikesContext = createContext()

const LikeProvider = ({ children }) => {
    const [likesCount, setLikesCount] = useState(0)

    const increase = () => {
        setLikesCount(likesCount + 1)
    }

    const decrease = () => {
        setLikesCount(likesCount - 1)
    }


    return (
        <LikesContext.Provider value={{ likesCount, increase, decrease }}>
            {children}
        </LikesContext.Provider>

    )
}

export { LikeProvider, LikesContext }