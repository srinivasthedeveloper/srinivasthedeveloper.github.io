import { useEffect, useRef, useState } from "react";
import styles from './styles.module.scss';

export default function MouseTrail() {
    const trailRef = useRef();
    const [mousePosition, setMousePosition] = useState({
        top: 0,
        left: 0
    });

    const hideMouseTrail = () => {
        setMousePosition(() => ({ top: 0, left: 0 }))
        if (trailRef.current.style.display !== 'none') {
            trailRef.current.style.display = "none"
        }
    }

    useEffect(() => {
        const performAnimation = () => {
            const circleContainer = trailRef.current;
            if (circleContainer) {
                const listOfCircles = circleContainer.children;
                const noOfCircles = listOfCircles.length;

                let x = mousePosition.left;
                let y = mousePosition.top;
                if (mousePosition.left + mousePosition.top > 0) {

                    for (let i = 0; i < noOfCircles; i++) {
                        listOfCircles[i].style.top = `${y + 12}px`;
                        listOfCircles[i].style.left = `${x + 12}px`;
                        if (listOfCircles[i].style.display !== 'block') {
                            listOfCircles[i].style.display = `block`;
                            listOfCircles[i].style.transform = `scale(${(noOfCircles - i) / noOfCircles})`;
                            listOfCircles[i].style.filter = `hue-rotate(${120 / (noOfCircles - i)}deg)`;
                        }

                        listOfCircles[i].x = x;
                        listOfCircles[i].y = y;
                        const nextCircle = listOfCircles[(i + 1) % noOfCircles];
                        x += ((nextCircle.x > 0 ? nextCircle.x : 0) - x) * 0.5;
                        y += ((nextCircle.y > 0 ? nextCircle.y : 0) - y) * 0.5;
                    }
                }
            }
        }
        const triggerAnimation = () => {
            performAnimation();
            requestAnimationFrame(triggerAnimation);
        }
        triggerAnimation();
    }, [mousePosition])

    useEffect(() => {
        let hiderTimeout;
        const handleMouseMove = (event) => {
            setMousePosition(() => ({
                top: event.clientY,
                left: event.clientX
            }))
            if (trailRef.current.style.display !== 'block') {
                trailRef.current.style.display = "block";
            }
            if (hiderTimeout) {
                clearTimeout(hiderTimeout);
                // hiderTimeout = null;
            }
            hiderTimeout = setTimeout(() => {
                hideMouseTrail();
            }, 100);
        }
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [])

    useEffect(() => {
        const handleMouseOut = (e) => {
            const foucsedElement = e.relatedTarget || e.toElement;
            if (!foucsedElement || foucsedElement.nodeName === 'HTML') {
                hideMouseTrail();
            }
        }
        window.addEventListener("mouseout", handleMouseOut);
        return () => window.removeEventListener("mouseout", handleMouseOut);
    }, [])

    return (
        <div className={styles['container']} ref={trailRef}>
            <span className={styles['circle']} key={'mouse-trail-circle-1'} />
            <span className={styles['circle']} key={'mouse-trail-circle-2'} />
            <span className={styles['circle']} key={'mouse-trail-circle-3'} />
            <span className={styles['circle']} key={'mouse-trail-circle-4'} />
            <span className={styles['circle']} key={'mouse-trail-circle-5'} />
            <span className={styles['circle']} key={'mouse-trail-circle-6'} />
            <span className={styles['circle']} key={'mouse-trail-circle-7'} />
            <span className={styles['circle']} key={'mouse-trail-circle-8'} />
            <span className={styles['circle']} key={'mouse-trail-circle-9'} />
            <span className={styles['circle']} key={'mouse-trail-circle-10'} />
            <span className={styles['circle']} key={'mouse-trail-circle-11'} />
            <span className={styles['circle']} key={'mouse-trail-circle-12'} />
        </div>
    )
}