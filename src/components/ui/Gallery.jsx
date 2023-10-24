import "./gallery.css"

export default function Gallery() {
    const galleryItems = [
        'https://birdsofnewengland.files.wordpress.com/2016/07/catbird-d1.jpg',
        'https://cdn.pixabay.com/photo/2017/03/13/10/25/hummingbird-2139279_640.jpg',
        'https://m.economictimes.com/thumb/msid-74171981,width-1200,height-900,resizemode-4,imgsize-1195643/peacock-wiki.jpg',
        'https://www.wallpapers13.com/wp-content/uploads/2019/06/Bird-in-flight-wings-Macaws-long-tailed-Parrots-Colorful-Birds-4k-ultra-hd-1610-desktop-backgrounds-for-pc-mac-laptop-tablet-mobile-phone-840x525.jpg'
    ]
    return (
        <div className="container">
            <h2>Image Gallery</h2>
            <div className="gallery-wrapper">
                {
                    galleryItems.map((item) => {
                       return (<img className="gallery-item" src={item} />)
                    })
                }
            </div>
        </div>
    )
}