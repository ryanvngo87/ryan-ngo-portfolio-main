import {useRef, useEffect, useState} from "react";

function useFadeIn() {
    const element = useRef();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(entry.isIntersecting);
                    console.log("Element is visible:", entry.target);
                }
            }
        );

        if (element.current) {
            observer.observe(element.current);
            console.log("Observing element:", element.current);
        }

        return () => observer.disconnect();
    }, []);

    return [element, isVisible];
}

export default useFadeIn;