import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FiMaximize2 } from "react-icons/fi";

function Social() {
  return (
    <>
      <div className='main__feed'>
        <Tabs
            defaultActiveKey="feed"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="feed" title="Feed">
                
                <div className='feed__dashboard d-flex justify-content-between'>
                    <section className='feed__dashboard--trending'>
                        <div className='trending__header'>
                            <h3>Trending News</h3>
                        </div>
                        <div className='trending__menu'>
                            <article className='menu__List'>
                                <a href="#">#Explore</a>
                            </article>
                            <article className='menu__List'>
                                <a href="#">#Bitcoins</a>
                            </article>
                            <article className='menu__List'>
                                <a href="#">#Mark</a>
                            </article>
                            <article className='menu__List'>
                                <a href="#">#CeoRyo</a>
                            </article>
                            <article className='menu__List'>
                                <a href="#">#Binance</a>
                            </article>
                            <article className='menu__List'>
                                <a href="#">#Bitcoins</a>
                            </article>
                            <article className='menu__List'>
                                <a href="#">#MarkZ</a>
                            </article>
                            <article className='menu__List'>
                                <a href="#">#CeoRyo</a>
                            </article>
                            <article className='menu__List'>
                                <a href="#">#Coins</a>
                            </article>
                        </div>
                    </section>
                    <section className='feed__dashboard--timeline'>
                        <div className='timeline__header pb-4 d-flex justify-content-between align-items-center'>
                            <div className='timeline__header--iz'>
                                <h3>All news</h3>
                            </div>
                            <div className='timeline__select--de'>
                                <form>
                                    <select className='type__post'>
                                        <option>Text</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <article className='timeline__post'>
                            <div className='timeline__post--user d-flex'>
                                <div className='user__avatar'>
                                    <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png' width='50'/>
                                </div>
                                <div className='user__name'>
                                    <a href='#'>José E.</a> <a href='#'>@Joss32</a>
                                </div>
                            </div>
                            <div className='timeline__post--details'>
                                <p>
                                The <a href='#'>#Binance</a> NFT marketplace brings artists and creators together on the same platform. This is not investment advice. All trading activity carries <a href='#'>#risks</a>.
                                </p>
                            </div>
                        </article>
                        <article className='timeline__post'>
                            <div className='timeline__post--user d-flex'>
                                <div className='user__avatar'>
                                    <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png' width='50'/>
                                </div>
                                <div className='user__name'>
                                    <a href='#'>José E.</a> <a href='#'>@Joss32</a>
                                </div>
                            </div>
                            <div className='timeline__post--details'>
                                <p>
                                The <a href='#'>#Binance</a> NFT marketplace brings artists and creators together on the same platform. This is not investment advice. All trading activity carries <a href='#'>#risks</a>.
                                </p>
                            </div>
                        </article>
                        <article className='timeline__post'>
                            <div className='timeline__post--user d-flex'>
                                <div className='user__avatar'>
                                    <img src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png' width='50'/>
                                </div>
                                <div className='user__name'>
                                    <a href='#'>José E.</a> <a href='#'>@Joss32</a>
                                </div>
                            </div>
                            <div className='timeline__post--details'>
                                <p>
                                The <a href='#'>#Binance</a> NFT marketplace brings artists and creators together on the same platform. This is not investment advice. All trading activity carries <a href='#'>#risks</a>.
                                </p>
                            </div>
                        </article>
                        <div className='timeline__pub d-flex justify-content-between'>
                            <div className='time__pub--form'>
                                <form className='d-flex justify-content-between align-items-center'>
                                    <textarea className='form-control' placeholder='Talk about anything...'></textarea>
                                    <input type='submit' value='Post' />
                                </form>
                            </div>
                            <div className='time__pub--expand d-flex justify-content-center align-items-center'>
                                <a href='#'>Expand <FiMaximize2 /></a>
                            </div>
                        </div>
                    </section>
                </div>

            </Tab>
            <Tab eventKey="groups" title="Groups">
                <h2>Groups</h2>
            </Tab>

            <Tab eventKey="pools" title="Pools">
                <h2>Pools</h2>
            </Tab>

            <Tab eventKey="survey" title="Survey">
                <h2>Survey</h2>
            </Tab>
        
        </Tabs>
      </div>
    </>
  );
}

export default Social;
