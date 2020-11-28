import React from 'react'
import styles from '../styles/layout.module.css'
// import grey from '../public/backgrounds/grey-shape.svg';
// import purple from '../public/backgrounds/grey-shape.svg';



const Layout = ({ children }) => {
    return (
        <div className={styles.screen}>
            <div className={styles.backgrounds}>
                <img className={styles.backImages} src="/backgrounds/grey-no-shadow.svg" />
                <img className={styles.backImages} src="/backgrounds/purple-no-shadow.svg" />
            </div>
            { children }
        </div>
    )
}

export default Layout;