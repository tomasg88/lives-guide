import React from 'react'
import styles from '../styles/live-card.module.css'

const LiveCard = () => {
    return (
        <div className={`${styles.container}`}>
            <div className={styles.dataContainer}>
                <h3 className="title"></h3>
                <p className="description"></p>
                <div className="rrss">
                    <span className="icon"></span>
                    <p className="live-account"></p>
                </div>
                <p className="date"></p>
                <div className="goto">
                    <button>

                    </button>
                </div>
            </div>
        </div>
    )
}

export default LiveCard;