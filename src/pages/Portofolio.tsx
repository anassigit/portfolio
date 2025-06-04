import { Introduction } from '@/components/page-components/introduction';
import { Hero } from '@/components/page-components/hero';
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap'

const Portofolio: React.FC = () => {

    const comp = useRef(null)

    useLayoutEffect(() => {
        let context = gsap.context(() => {
            const tl = gsap.timeline()
            // tl.to
        }, comp)

        return () => context.revert()
    }, [])

    return (
        <>
            {/* <Introduction /> */}
            <Hero />
        </>
    );
};

export default Portofolio;