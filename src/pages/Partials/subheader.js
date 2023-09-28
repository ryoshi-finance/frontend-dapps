import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import ReactTooltip from "react-tooltip";
import LoaderCryptoCurrency from "../../Utils/currencySubheaderLine";

function Subheader() {
  const [coins, setCoins] = React.useState([]);

  // API Exclusive for domain ryoshi.finance
  useEffect(() => {
    fetch("https://x.ryoshi.finance/coinmarketcap")
      .then((response) => response.json())
      .then((data) => setCoins(data));
  }, []);

  var logos = [
    {
        name: 'BTC'
    },
    {
        name: 'ETH'
    }
  ]

  return (
    <>
      <section className="subheader__main">
        <div className="container mx-auto">
          {(() => {
            if (!coins[0]) {
              return (
                <>
                  <div className="subheader__details d-flex justify-content-between py-3">
                    <Marquee pauseOnHover={true} speed={30}>
                      {logos.map((e, i, a) => (
                        <>
                          <article
                            className="details__article"
                            data-tip={`...`}
                          >
                            <span className="position">{i + 1}</span>
                            <h2>
                            <img
                                src={`https://raw.githubusercontent.com/Pymmdrza/Cryptocurrency_Logos/mainx/SVG/${e.name.toLowerCase()}.svg`}
                                width="20px"
                              />{" "}
                              {e.name}
                            </h2>
                            <h3>$...</h3>
                          </article>
                          <ReactTooltip />
                        </>
                      ))}
                    </Marquee>
                  </div>
                </>
              );
            } else {
              return (
                <>
                  <div className="subheader__details d-flex justify-content-between py-3">
                    <Marquee pauseOnHover={true} speed={30}>
                      {coins[0].prices[0].data.slice(0, 20).map((e, i, a) => (
                        <>
                          <article
                            className="details__article"
                            data-tip={`${e.quote.USD.percent_change_24h.toFixed(
                              2
                            )}%`}
                          >
                            <span className="position">{i + 1}</span>
                            <h2>
                              <img
                                src={`https://raw.githubusercontent.com/Pymmdrza/Cryptocurrency_Logos/mainx/SVG/${e.symbol.toLowerCase()}.svg`}
                                width="20px"
                              />{" "}
                              {e.symbol}
                            </h2>
                            <h3>${e.quote.USD.price.toFixed(2)}</h3>
                          </article>
                          <ReactTooltip />
                        </>
                      ))}
                    </Marquee>
                  </div>
                </>
              );
            }
          })()}
        </div>
      </section>
    </>
  );
}

export default Subheader;
