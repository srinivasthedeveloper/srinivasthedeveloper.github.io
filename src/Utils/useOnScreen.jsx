import { useState, useEffect } from "react"

export default function useOnScreen(
    ref,
    options={
        threshold:0.5, // to trigger after half of the view
    }
) {

    const [isIntersecting, setIntersecting] = useState(false)

    const observer = new IntersectionObserver(
        ([entry]) => {
            setIntersecting(entry.isIntersecting)
        },options
    )

    useEffect(() => {
        if(ref.current){
            observer.observe(ref.current)
        }
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [])

    return isIntersecting
}