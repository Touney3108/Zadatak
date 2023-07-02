const imgs = [
    {
        img: "https://cdn.shopify.com/s/files/1/0552/3269/2430/files/gift-bundle-retro-min.jpg",
        color:"#27AE60"
    },
    {
        img:"https://cdn.shopify.com/s/files/1/0552/3269/2430/files/gift-bundle-music-min.jpg",
        color:"#FFC629"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0552/3269/2430/files/gift-bundle-start-min.jpg",
        color:"#00BED6"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0552/3269/2430/files/gift-bundle-rc-min.jpg",
        color:"#1045BA"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0552/3269/2430/files/gift-batmobile-1-min.jpg",
        color:"#00BED"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0552/3269/2430/files/gift-gaming-bundle-min.jpg",
        color:"#642D91"
    },
]
const titles=["Spencer","Jay-D","Nibble","Wacky robots"]
const descriptions = [
    "A DIY voice assistant that talks,lights up, and understands voice commands",
    "Build & code your own DJ mixer",
    "Build & code your very own retro game console",
    
]


export const generateCardData = () => {
    const {img,color} = imgs[Math.floor(Math.random() * imgs.length)];
    return {
        image:img,
        title: titles[Math.floor(Math.random() * titles.length)],
        description: descriptions[Math.floor(Math.random() * descriptions.length)],
        price: (Math.random() * 1000).toFixed(2),
        color:color,
    }
}