import React from 'react'
import Canvas from '../Canvas/canvas'
import Landing from '../landing/landing'
import styles from './firstpage.module.css'

const firstpage = () => {
    return (
        <div className={styles.firstpage}>
            <Canvas/>
            <Landing/>
        </div>
    )
}

export default firstpage
