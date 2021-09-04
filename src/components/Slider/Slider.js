import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const Slider = () => {

    const data = [
        {
            name: "Coffee",
            href: "https://c4.wallpaperflare.com/wallpaper/246/462/453/laptop-macbook-iphone-apple-wallpaper-preview.jpg"
        },
        {
            name: "Cake",
            href: "https://c4.wallpaperflare.com/wallpaper/443/895/772/women-brunette-green-eyes-black-clothing-wallpaper-preview.jpg"
        },
        {
            name: "Drink",
            href: "https://c4.wallpaperflare.com/wallpaper/747/312/981/coffee-coffee-beans-cup-wallpaper-preview.jpg"
        }
    ]
    return (
        <Carousel
            autoPlay
            useKeyboardArrows={true}
            showArrows={true}
            swipeable={true}
            stopOnHover={false}
            showThumbs={true}
            thumbWidth={200}
            width="100"
        >
            <div>
                <img src="https://c4.wallpaperflare.com/wallpaper/462/598/373/cake-sweets-food-strawberries-wallpaper-preview.jpg" />
            </div>
            <div>
                <img src="https://c4.wallpaperflare.com/wallpaper/627/878/419/cake-food-sweets-reflection-wallpaper-preview.jpg" />
            </div>
            <div>
                <img src="https://c4.wallpaperflare.com/wallpaper/39/624/1001/colorful-dessert-pink-cakes-wallpaper-preview.jpg" />
            </div>
            <div>
                <img src="https://c4.wallpaperflare.com/wallpaper/462/598/373/cake-sweets-food-strawberries-wallpaper-preview.jpg" />
            </div>
            <div>
                <img src="https://c4.wallpaperflare.com/wallpaper/627/878/419/cake-food-sweets-reflection-wallpaper-preview.jpg" />
            </div>
            <div>
                <img src="https://c4.wallpaperflare.com/wallpaper/39/624/1001/colorful-dessert-pink-cakes-wallpaper-preview.jpg" />
            </div>
            <div>
                <img src="https://c4.wallpaperflare.com/wallpaper/462/598/373/cake-sweets-food-strawberries-wallpaper-preview.jpg" />
            </div>
            <div>
                <img src="https://c4.wallpaperflare.com/wallpaper/627/878/419/cake-food-sweets-reflection-wallpaper-preview.jpg" />
            </div>
            <div>
                <img src="https://c4.wallpaperflare.com/wallpaper/39/624/1001/colorful-dessert-pink-cakes-wallpaper-preview.jpg" />
            </div>
        </Carousel>
    )
}

export default Slider
