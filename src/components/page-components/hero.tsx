import React, { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const helloRef = useRef<HTMLHeadingElement>(null)
    const welcomeRef = useRef<HTMLHeadingElement>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline()

            // Initial hidden state
            gsap.set([helloRef.current, welcomeRef.current], {
                opacity: 0,
                y: 50,
            })

            // Animate Hello!
            tl.to(helloRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'power2.out',
            })
                .to(helloRef.current, {
                    opacity: 0,
                    y: -50,
                    duration: 0.6,
                    ease: 'power2.in',
                    delay: 1, // stays visible for 1s
                })
                // Animate Welcome
                .to(welcomeRef.current, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                })

        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} className="relative h-screen w-full flex items-center justify-center font-limelight">
            <h1 ref={helloRef} className="text-4xl font-light absolute">Hello!</h1>
            <h1 ref={welcomeRef} className="text-4xl font-light absolute">Welcome to my Portofolio :)</h1>
        </div>
    )
}

export { Hero }
