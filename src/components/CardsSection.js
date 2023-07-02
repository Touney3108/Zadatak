import Card from "./Card";
import { useState } from "react";
import { startingData } from "../util/starting-data";
import { generateCardData } from "../util/generate-card-data";
import ShowMore from "./ShowMore";
const CardsSection = () => {
    const [data, setData] = useState(startingData);
    const loadMoreCards = () => {
        setData([...data,generateCardData(),generateCardData(),generateCardData()])
    }
    return <>
        <section>
            <h2 class="section-title">Learn electronics & coding with our best-selling DIY STEM kits:</h2>
            <div class="grid">
                {data.map(item => <Card
                    key={Math.random()}
                    image={item.image}
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    color={item.color}
                />
                )}
                
            </div>
            <ShowMore triggerLoadMoreCards={loadMoreCards} />
        </section>
    </>
}

export default CardsSection;