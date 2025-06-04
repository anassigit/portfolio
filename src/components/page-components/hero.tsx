import React, { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero: React.FC = () => {

    useLayoutEffect(() => {
        
    }, [])

    return (
        <div className="relative h-screen w-full flex items-center justify-center font-limelight">
            <h1 className="font-light">Hello!</h1>
            <h1 className="font-light">Welcome to my Portofolio :)</h1>
        </div>
    )
}

export { Hero }
