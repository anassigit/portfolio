import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const Introduction: React.FC = () => {
    const annasRef = useRef<HTMLHeadingElement>(null)
    const sigitRef = useRef<HTMLHeadingElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)

    useLayoutEffect(() => {
        const tl = gsap.timeline()

        // Position centered and hidden
        gsap.set([annasRef.current, sigitRef.current], {
            opacity: 0,
            position: 'absolute',
            top: '50%',
            left: '50%',
            xPercent: -50,
            yPercent: -50,
        })

        // Apply spacing between Annas and Sigit
        gsap.set(annasRef.current, { x: -50 }) // move slightly to the left
        gsap.set(sigitRef.current, { x: 50 })  // move slightly to the right

        tl.to([annasRef.current, sigitRef.current], {
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            delay: 1,
        })
            .to(sigitRef.current, {
                x: '+=300',
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
                delay: 2.5,
            }, '<') // start together
            .to(annasRef.current, {
                x: '-=300',
                opacity: 0,
                duration: 1,
                ease: 'power2.inOut',
            }, '<') // match timing with previous
    }, [])

    return (
        <div ref={containerRef} className="relative h-screen w-full flex items-center justify-center font-rubik-dirt">
            <h1 ref={annasRef} className="font-light absolute">Annas</h1>
            <h1 ref={sigitRef} className="font-light absolute">Sigit</h1>
        </div>
    )
}

export { Introduction }
