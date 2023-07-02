import { useState } from "react";
import Spinner from "./Spinner";
const ShowMore = ({triggerLoadMoreCards}) => {
    const [load, setLoad] = useState(false);
    const loadMore = () => {
        setLoad(true)
        setTimeout(() => {
            setLoad(false);
            triggerLoadMoreCards();
        },1000)
    }
    return <div class="center">
    {load ?
        <Spinner /> :
        <button class="button" onClick={loadMore}>Show More</button>
        }
</div>
}

export default ShowMore;