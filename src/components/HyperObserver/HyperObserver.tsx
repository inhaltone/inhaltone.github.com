import React, {useEffect, useRef, useState} from "react";

type HyperObserverProps = {
    children: React.ReactNode,
    animationClass?: string,
    delay?: number,
    ratio?: number | number[]
}
export default function HyperObserver({children, delay = 0, ratio = [1.0]}: HyperObserverProps) {
    const hyperObserverRef = useRef<HTMLDivElement>(null);
    const [observed, setObserved] = useState<boolean>(false);

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: ratio
    }
    const callbackFunction = (entries: IntersectionObserverEntry[]) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                setObserved(true);
                const delayFunction = setTimeout(() => {
                    // setObserved(true);
                    clearTimeout(delayFunction);
                }, delay);
            }
        }
    }

    useEffect(() => {
        const {current} = hyperObserverRef;
        const observer = new IntersectionObserver(callbackFunction, options);
        if (current) observer.observe(current);
        if (observed) observer.disconnect();
        return () => {
            if (current) observer.unobserve(current);
        }
    }, [hyperObserverRef, observed]);

    return (
            <div ref={hyperObserverRef}>
                { observed ? children : null}
            </div>
    )
}
