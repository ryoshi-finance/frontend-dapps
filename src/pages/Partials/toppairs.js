import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import ReactTooltip from "react-tooltip";
import { FiCheckCircle } from "react-icons/fi";

function TopPairs() {
  return (
    <>
      <section className="top__pairs mt-4">
        <div className="container">
          <div className="d-flex justify-content-between">
            <div className="top__pairs--contain">
              <header className="pairs__single--header">
                <h2 className="d-flex align-items-center">
                  <FiCheckCircle />
                  <span className="ps-1">Verified projects</span>
                </h2>
              </header>
              <article className="pairs__single d-flex justify-content-between">
                <div className="single__iz d-flex">
                  <div className="single__position">
                    <span>#1</span>
                  </div>
                  <div className="single__name d-flex align-items-center">
                    <img
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/24478.png"
                      width="25"
                    />
                    <div className="name__pair ps-1">
                      <span>PEPE</span>
                      <span>/</span>
                      <span>WBNB</span>
                    </div>
                  </div>
                </div>

                <div className="single__De d-flex">
                  <div className="single__price">
                    <span>$0.0699</span>
                  </div>
                  <div className="single__percentage">
                    <span>%1</span>
                  </div>
                </div>
              </article>

              <article className="pairs__single d-flex justify-content-between mt-3">
                <div className="single__iz d-flex">
                  <div className="single__position">
                    <span>#2</span>
                  </div>
                  <div className="single__name d-flex align-items-center">
                    <img
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/19618.png"
                      width="25"
                    />
                    <div className="name__pair ps-1">
                      <span>CAW</span>
                      <span>/</span>
                      <span>WBNB</span>
                    </div>
                  </div>
                </div>

                <div className="single__De d-flex">
                  <div className="single__price">
                    <span>$0.0699</span>
                  </div>
                  <div className="single__percentage">
                    <span>%1</span>
                  </div>
                </div>
              </article>

              <article className="pairs__single d-flex justify-content-between mt-3">
                <div className="single__iz d-flex">
                  <div className="single__position">
                    <span>#3</span>
                  </div>
                  <div className="single__name d-flex align-items-center">
                    <img
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/24102.png"
                      width="25"
                    />
                    <div className="name__pair ps-1">
                      <span>PAW</span>
                      <span>/</span>
                      <span>WBNB</span>
                    </div>
                  </div>
                </div>

                <div className="single__De d-flex">
                  <div className="single__price">
                    <span>$0.0699</span>
                  </div>
                  <div className="single__percentage">
                    <span>%1</span>
                  </div>
                </div>
              </article>

              <article className="pairs__single d-flex justify-content-between mt-3">
                <div className="single__iz d-flex">
                  <div className="single__position">
                    <span>#4</span>
                  </div>
                  <div className="single__name d-flex align-items-center">
                    <img
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/7440.png"
                      width="25"
                    />
                    <div className="name__pair ps-1">
                      <span>BARN</span>
                      <span>/</span>
                      <span>WBNB</span>
                    </div>
                  </div>
                </div>

                <div className="single__De d-flex">
                  <div className="single__price">
                    <span>$0.0699</span>
                  </div>
                  <div className="single__percentage">
                    <span>%1</span>
                  </div>
                </div>
              </article>
            </div>

            <div className="top__pairs--contain">
              <header className="pairs__single--header">
                <h2 className="d-flex align-items-center">
                  <FiCheckCircle />
                  <span className="ps-1">Daily gainers</span>
                </h2>
              </header>
              <article className="pairs__single d-flex justify-content-between">
                <div className="single__iz d-flex">
                  <div className="single__position">
                    <span>#1</span>
                  </div>
                  <div className="single__name d-flex align-items-center">
                    <img
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png"
                      width="25"
                    />
                    <div className="name__pair ps-1">
                      <span>SHIBA</span>
                      <span>/</span>
                      <span>ETH</span>
                    </div>
                  </div>
                </div>

                <div className="single__De d-flex">
                  <div className="single__price">
                    <span>$0.0699</span>
                  </div>
                  <div className="single__percentage">
                    <span>%1</span>
                  </div>
                </div>
              </article>

              <article className="pairs__single d-flex justify-content-between mt-3">
                <div className="single__iz d-flex">
                  <div className="single__position">
                    <span>#2</span>
                  </div>
                  <div className="single__name d-flex align-items-center">
                    <img
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/19011.png"
                      width="25"
                    />
                    <div className="name__pair ps-1">
                      <span>LunaFI</span>
                      <span>/</span>
                      <span>ETH</span>
                    </div>
                  </div>
                </div>

                <div className="single__De d-flex">
                  <div className="single__price">
                    <span>$0.0699</span>
                  </div>
                  <div className="single__percentage">
                    <span>%1</span>
                  </div>
                </div>
              </article>

              <article className="pairs__single d-flex justify-content-between mt-3">
                <div className="single__iz d-flex">
                  <div className="single__position">
                    <span>#3</span>
                  </div>
                  <div className="single__name d-flex align-items-center">
                    <img
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/20396.png"
                      width="25"
                    />
                    <div className="name__pair ps-1">
                      <span>Kaspa</span>
                      <span>/</span>
                      <span>ETH</span>
                    </div>
                  </div>
                </div>

                <div className="single__De d-flex">
                  <div className="single__price">
                    <span>$0.0699</span>
                  </div>
                  <div className="single__percentage">
                    <span>%1</span>
                  </div>
                </div>
              </article>

              <article className="pairs__single d-flex justify-content-between mt-3">
                <div className="single__iz d-flex">
                  <div className="single__position">
                    <span>#4</span>
                  </div>
                  <div className="single__name d-flex align-items-center">
                    <img
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/7950.png"
                      width="25"
                    />
                    <div className="name__pair ps-1">
                      <span>FLARE</span>
                      <span>/</span>
                      <span>ETH</span>
                    </div>
                  </div>
                </div>

                <div className="single__De d-flex">
                  <div className="single__price">
                    <span>$0.0699</span>
                  </div>
                  <div className="single__percentage">
                    <span>%1</span>
                  </div>
                </div>
              </article>
            </div>

            <div className="top__pairs--contain">
              <header className="pairs__single--header">
                <h2 className="d-flex align-items-center">
                  <FiCheckCircle />
                  <span className="ps-1">Reported Projects</span>
                </h2>
              </header>
              <article className="pairs__single d-flex justify-content-between">
                <div className="single__iz d-flex">
                  <div className="single__position">
                    <span>#1</span>
                  </div>
                  <div className="single__name d-flex align-items-center">
                    <img
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/3640.png"
                      width="25"
                    />
                    <div className="name__pair ps-1">
                      <span>Livepeer</span>
                      <span>/</span>
                      <span>ETH</span>
                    </div>
                  </div>
                </div>

                <div className="single__De d-flex">
                  <div className="single__price">
                    <span>$0.0699</span>
                  </div>
                  <div className="single__percentage">
                    <span>%1</span>
                  </div>
                </div>
              </article>

              <article className="pairs__single d-flex justify-content-between mt-3">
                <div className="single__iz d-flex">
                  <div className="single__position">
                    <span>#2</span>
                  </div>
                  <div className="single__name d-flex align-items-center">
                    <img
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/4066.png"
                      width="25"
                    />
                    <div className="name__pair ps-1">
                      <span>Chiliz</span>
                      <span>/</span>
                      <span>ETH</span>
                    </div>
                  </div>
                </div>

                <div className="single__De d-flex">
                  <div className="single__price">
                    <span>$0.0699</span>
                  </div>
                  <div className="single__percentage">
                    <span>%1</span>
                  </div>
                </div>
              </article>

              <article className="pairs__single d-flex justify-content-between mt-3">
                <div className="single__iz d-flex">
                  <div className="single__position">
                    <span>#3</span>
                  </div>
                  <div className="single__name d-flex align-items-center">
                    <img
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/7878.png"
                      width="25"
                    />
                    <div className="name__pair ps-1">
                      <span>MOB</span>
                      <span>/</span>
                      <span>ETH</span>
                    </div>
                  </div>
                </div>

                <div className="single__De d-flex">
                  <div className="single__price">
                    <span>$0.0699</span>
                  </div>
                  <div className="single__percentage">
                    <span>%1</span>
                  </div>
                </div>
              </article>

              <article className="pairs__single d-flex justify-content-between mt-3">
                <div className="single__iz d-flex">
                  <div className="single__position">
                    <span>#4</span>
                  </div>
                  <div className="single__name d-flex align-items-center">
                    <img
                      src="https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png"
                      width="25"
                    />
                    <div className="name__pair ps-1">
                      <span>SOL</span>
                      <span>/</span>
                      <span>WBNB</span>
                    </div>
                  </div>
                </div>

                <div className="single__De d-flex">
                  <div className="single__price">
                    <span>$0.0699</span>
                  </div>
                  <div className="single__percentage">
                    <span>%1</span>
                  </div>
                </div>
              </article>
            </div>

            <div className="top__pairs--contain">
              <header className="pairs__single--header">
                <h2 className="d-flex align-items-center">
                  <FiCheckCircle />
                  <span className="ps-1">New users</span>
                </h2>
              </header>
              <article className="pairs__single d-flex justify-content-between">
                <div className="single__iz d-flex">
                  <div className="single__position">
                    <span>#1</span>
                  </div>
                  <div className="single__name d-flex align-items-center">
                    <img
                      src="https://only1.app/_next/image?url=https%3A%2F%2Fs.only1.app%2F91ab0c32568fc385e837b3f0eb4b10f5&w=3840&q=75"
                      width="25"
                    />
                    <div className="name__pair ps-1">
                      <span>@Roshi</span>
                      <span>-</span>
                      <span>1 minute</span>
                    </div>
                  </div>
                </div>

                <div className="single__De d-flex">
                  <div className="single__price">
                    <span>
                      <img src="https://raw.githubusercontent.com/hampusborgos/country-flags/main/png250px/ch.png" width='30' />
                    </span>
                  </div>
                </div>
              </article>

              <article className="pairs__single d-flex justify-content-between mt-3">
                <div className="single__iz d-flex">
                  <div className="single__position">
                    <span>#2</span>
                  </div>
                  <div className="single__name d-flex align-items-center">
                    <img
                      src="https://only1.app/_next/image?url=https%3A%2F%2Fs.only1.app%2F325ec1ad8a388bb83d08e41d73f5bfb6&w=3840&q=75"
                      width="25"
                    />
                    <div className="name__pair ps-1">
                      <span>@cansy</span>
                      <span>-</span>
                      <span>10 minute</span>
                    </div>
                  </div>
                </div>

                <div className="single__De d-flex">
                  <div className="single__price">
                    <span>
                      <img src="https://raw.githubusercontent.com/hampusborgos/country-flags/main/png250px/br.png" width='30' />
                    </span>
                  </div>
                </div>
              </article>

              <article className="pairs__single d-flex justify-content-between mt-3">
                <div className="single__iz d-flex">
                  <div className="single__position">
                    <span>#3</span>
                  </div>
                  <div className="single__name d-flex align-items-center">
                    <img
                      src="https://only1.app/_next/image?url=https%3A%2F%2Fs.only1.app%2Ff8038712250844ff3d1d12e96030d1e0&w=3840&q=75"
                      width="25"
                    />
                    <div className="name__pair ps-1">
                      <span>@lara</span>
                      <span>-</span>
                      <span>1 hour</span>
                    </div>
                  </div>
                </div>

                <div className="single__De d-flex">
                  <div className="single__price">
                    <span>
                      <img src="https://raw.githubusercontent.com/hampusborgos/country-flags/main/png250px/de.png" width='30' />
                    </span>
                  </div>
                </div>
              </article>

              <article className="pairs__single d-flex justify-content-between mt-3">
                <div className="single__iz d-flex">
                  <div className="single__position">
                    <span>#4</span>
                  </div>
                  <div className="single__name d-flex align-items-center">
                    <img
                      src="https://only1.app/_next/image?url=https%3A%2F%2Fs.only1.app%2Ff5bb90ca90c343fc76da7a6ac5d79935&w=3840&q=75"
                      width="25"
                    />
                    <div className="name__pair ps-1">
                      <span>@sump</span>
                      <span>-</span>
                      <span>1 day</span>
                    </div>
                  </div>
                </div>

                <div className="single__De d-flex">
                  <div className="single__price">
                    <span>
                      <img src="https://raw.githubusercontent.com/hampusborgos/country-flags/main/png250px/it.png" width='30' />
                    </span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopPairs;
