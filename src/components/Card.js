const Card = ({image,title,description,price,color}) => {
    return <>
        <div class="card">
                <div class="img-wrapper">
                    <img src={image} alt="" />
                </div>
                <div class="card-content">
                    <div class="card-body">
                    <h3 class="card-title" style={{color:color}}>{title}</h3>
                    <p class="card-text">{description}</p>
                    </div>
                    <div class="card-footer" >

                    <h3 class="card-price" style={{color:color}}>
                        <span>${(price * 1.25).toFixed(2)}</span> ${price}
                    </h3>
                        <p class="card-discount" style={{color:color}}>Limited 20% discount</p>
                        <div class="card-widgets">
                            <button class="button" style={{backgroundColor:color}}>Shop now</button>
                            <div class="age-limit" style={{backgroundColor:color}}>
                                <p class="age-limit-text">ages</p>
                                <p class="age-limit-number">11+</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </>
}

export default Card;