import { useState } from "react"
import "./carousel.css"

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const items = [
        'https://www.birdadvisors.com/wp-content/uploads/2022/09/Sandhill-Crane-flying-2-edited-1024x770.jpg',
        'https://a-z-animals.com/media/2021/11/Types-of-Big-Birds-header.jpg',
        'https://www.australiangeographic.com.au/wp-content/uploads/2018/10/brolga.jpg'
        ]

    const prevSlide = () => {
        setCurrentIndex((prevSlide) => prevSlide === 0 ? items.length - 1 : prevSlide - 1)
    }
    const nextSlide = () => {
        setCurrentIndex((prevSlide) => prevSlide === items.length - 1 ? 0 : prevSlide + 1 )
    }
    return (
        <div className="carousel">
            <div onClick={prevSlide} className="prev-button">
                
            </div>
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`carousel-item ${index === currentIndex ? 'active' : ''}`}
                >
                    <img src={item} alt="" />
                
                </div>
            ))}
            <div onClick={nextSlide} className="next-button">
                
            </div>
        </div>
    )
}