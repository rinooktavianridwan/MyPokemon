import React from 'react'
import './Preloader.css'
import { useEffect } from 'react'
import { preLoaderAnim } from '../../animation/animation'

const Preloader = () => {

    useEffect(() => {
        preLoaderAnim()
    }, [])
  return (
    <div className="preloader">
        <div className="texts-container">
            <span>Developer</span>
            <span>Developer</span>
            <span>Developer</span>
        </div>
    </div>
  )
}

export default Preloader