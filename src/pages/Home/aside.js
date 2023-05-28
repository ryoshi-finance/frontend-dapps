import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FiMaximize2 } from "react-icons/fi";

function Aside() {
  const [key, setKey] = useState("buy");

  return (
    <>
      <aside className="aside__main">
        <div className="aside__main--header d-flex align-items-center justify-content-between">
          <h2>P2P TRADING</h2>
          <div className="expand">
            <a href="#">
              Expand <FiMaximize2 />
            </a>
          </div>
        </div>

        <section className="aside__main--list">
            <div className='filter'>
                <form className='filter__form'>
                    <select>
                        <option>USDT</option>
                    </select>
                </form>
            </div>
          <Tabs
            id="controlled-tab-example"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            className="mb-3"
          >
            <Tab eventKey="sell" title="Sell"></Tab>

            <Tab eventKey="buy" title="Buy">
              <article className="list__trade d-flex justify-content-between align-items-center">
                <div className="list__trade--left">
                  <div className="name">@ryoshi</div>
                  <div className="price">3.78 JPY</div>
                </div>

                <div className="list__trade--right">
                  <a href="#">Buy USDT</a>
                </div>
              </article>

              <article className="list__trade d-flex justify-content-between align-items-center">
                <div className="list__trade--left">
                  <div className="name">@luxdefi</div>
                  <div className="price">3.78 JPY</div>
                </div>

                <div className="list__trade--right">
                  <a href="#">Buy USDT</a>
                </div>
              </article>

              <article className="list__trade d-flex justify-content-between align-items-center">
                <div className="list__trade--left">
                  <div className="name">@vip_tradejp</div>
                  <div className="price">3.78 JPY</div>
                </div>

                <div className="list__trade--right">
                  <a href="#">Buy USDT</a>
                </div>
              </article>

              <article className="list__trade d-flex justify-content-between align-items-center">
                <div className="list__trade--left">
                  <div className="name">@minvt</div>
                  <div className="price">3.78 JPY</div>
                </div>

                <div className="list__trade--right">
                  <a href="#">Buy USDT</a>
                </div>
              </article>

              <article className="list__trade d-flex justify-content-between align-items-center">
                <div className="list__trade--left">
                  <div className="name">@sort360</div>
                  <div className="price">3.78 JPY</div>
                </div>

                <div className="list__trade--right">
                  <a href="#">Buy USDT</a>
                </div>
              </article>

              <article className="list__trade d-flex justify-content-between align-items-center">
                <div className="list__trade--left">
                  <div className="name">@zal1</div>
                  <div className="price">3.78 JPY</div>
                </div>

                <div className="list__trade--right">
                  <a href="#">Buy USDT</a>
                </div>
              </article>

              <article className="list__trade d-flex justify-content-between align-items-center">
                <div className="list__trade--left">
                  <div className="name">@saroshi</div>
                  <div className="price">3.78 JPY</div>
                </div>

                <div className="list__trade--right">
                  <a href="#">Buy USDT</a>
                </div>
              </article>
            </Tab>
          </Tabs>
        </section>
      </aside>
    </>
  );
}

export default Aside;
