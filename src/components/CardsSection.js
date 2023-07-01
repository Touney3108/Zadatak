import Card from "./Card";
import { useState } from "react";
import { startingData } from "../util/starting-data";
import { generateCardData } from "../util/generate-card-data";
import Spinner from "./Spinner"
const CardsSection = () => {
    const [data, setData] = useState(startingData);
    const [load, setLoad] = useState(false);
    const loadMore = () => {
        setLoad(true);
        setTimeout(() => {
            setData([...data,generateCardData(),generateCardData(),generateCardData()])
            setLoad(false);
        },1000)
    }
    return <>
        <section>
            <h2 class="section-title">Learn electronics & coding with our best-selling DIY STEM kits:</h2>
            <div class="grid">
                {data.map(item => <Card
                    key={item.title}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    color={item.color}
                />
                )}
                
            </div>
            <div class="center">
                {load ?
                    <Spinner /> :
                    <button class="button" onClick={loadMore}>Show More</button>
                    }
            </div>
        </section>
    </>
}

export default CardsSection;