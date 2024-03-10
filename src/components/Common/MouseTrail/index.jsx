import { useEffect, useRef, useState, useCallback } from "react";
import styles from './styles.module.scss';

export default function MouseTrail() {
    const trailRef = useRef();
    const [mousePosition, setMousePosition] = useState({
        top: 0,
        left: 0
    });
    const animationFrameRef = useRef();

    const hideMouseTrail = useCallback(() => {
        setMousePosition(() => ({ top: 0, left: 0 }))
        if (trailRef.current.style.display !== 'none') {
            trailRef.current.style.display = "none"
        }
    }, []);

    const performAnimation = useCallback(() => {
        const circleContainer = trailRef.current;
        if (circleContainer) {
            const listOfCircles = circleContainer.children;
            const noOfCircles = listOfCircles.length;

            let x = mousePosition.left;
            let y = mousePosition.top;
            if (mousePosition.left + mousePosition.top > 0) {
                for (let i = 0; i < noOfCircles; i++) {
                    // Update circle position and styles
                    listOfCircles[i].style.top = `${y + 12}px`;
                    listOfCircles[i].style.left = `${x + 12}px`;
                    if (listOfCircles[i].style.display !== 'block') {
                        listOfCircles[i].style.display = `block`;
                        listOfCircles[i].style.transform = `scale(${(noOfCircles - i) / noOfCircles})`;
                        listOfCircles[i].style.filter = `hue-rotate(${120 / (noOfCircles - i)}deg)`;
                    }

                    // Update circle coordinates
                    listOfCircles[i].x = x;
                    listOfCircles[i].y = y;

                    // Calculate next circle position
                    const nextCircle = listOfCircles[(i + 1) % noOfCircles];
                    x += ((nextCircle.x > 0 ? nextCircle.x : 0) - x) * 0.5;
                    y += ((nextCircle.y > 0 ? nextCircle.y : 0) - y) * 0.5;
                }
            }
        }
    }, [mousePosition]);

    useEffect(() => {

        let timeoutId;


        const handleMouseMove = (event) => {
            clearTimeout(timeoutId);
            setMousePosition(() => ({
                top: event.clientY,
                left: event.clientX
            }))
            if (trailRef.current.style.display !== 'block') {
                trailRef.current.style.display = "block";
            }
            timeoutId = setTimeout(hideMouseTrail, 100); // Adjust the delay as needed
        };

        const handleMouseOut = (e) => {
            const foucsedElement = e.relatedTarget || e.toElement;
            if (!foucsedElement || foucsedElement.nodeName === 'HTML') {
                hideMouseTrail();
            }
        };

        const animationLoop = () => {
            performAnimation();
            animationFrameRef.current = requestAnimationFrame(animationLoop);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseOut);
        animationLoop();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseOut);
            cancelAnimationFrame(animationFrameRef.current);
        };
    }, [hideMouseTrail, performAnimation]);

    return (
        <div className={styles['container']} ref={trailRef}>
            {[...Array(12)].map((_, index) => (
                <span className={styles['circle']} key={`mouse-trail-circle-${index+1}`} />
            ))}
        </div>
    );
}