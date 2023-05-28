import React, { useEffect, useState } from "react";

function Subheader(){

    const [coins, setCoins] = React.useState([]);

    useEffect(() => {
        fetch('https://api.ryoshi.pro/coinmarketcap')
          .then(response => response.json())
          .then(data => setCoins(data))
    }, []);

    if (!coins[0]) return '...';
    console.log('edinson', coins[0].prices[0].data);

    return (<>


        <section className='subheader__main'>

            <div className='container mx-auto'>

                <div className='subheader__details d-flex justify-content-between py-3'>

                        {coins[0].prices[0].data.slice(0, 9).map((e, i, a) => <>
                            <article className='details__article'>
                                <h2><img src={`https://raw.githubusercontent.com/Pymmdrza/Cryptocurrency_Logos/mainx/SVG/${(e.symbol).toLowerCase()}.svg`} width='20px' /> {e.symbol}</h2>
                                <h3>${(e.quote.USD.price).toFixed(2)}</h3>
                            </article>
                        </>)}


                </div>

            </div>

        </section>
        
    </>)


}

export default Subheader;