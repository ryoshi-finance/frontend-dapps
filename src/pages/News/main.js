import React, { useEffect, useState } from "react";
import { AiOutlineHome, AiOutlineWallet } from "react-icons/ai";

function News() {
  const [news, setNews] = React.useState([]);
  const [view, setView] = React.useState([]);

  var defaultNews = {};

  // API Exclusive for domain ryoshi.finance
  useEffect(() => {
    fetch("https://x.ryoshi.finance/news")
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, []);

  function viewNews(id) {
    setView(news[id]);
    return function () {};
  }

  if (news.length) {
    console.log("news", news);
    defaultNews.title = news[0].title;
    defaultNews.content = news[0].content;
    defaultNews.link = news[0].link;
  }

  return (
    <>
      <main className="main">
        <div className="container">
          <section className="page__news">
            <aside className="page__news--menu">
              <a href="#" className="menu__Items--x">
                <AiOutlineHome />
              </a>

              <a href="#" className="menu__Items--xx">
                <AiOutlineWallet />
              </a>
            </aside>

            <section className="page__news--top">
              <header className="news__top--header">
                <h2>Top Publications</h2>
              </header>
              <div className="news__top--list">
                <article className="is__news">
                  <figure>
                    <img
                      src="https://www.criptonoticias.com/wp-content/uploads/2023/03/clases-bitcoin-paraguay-mineria-1140x815.jpg.webp"
                      width="250"
                    />
                  </figure>
                  <div>
                    <h3>Title News Description</h3>
                  </div>
                </article>

                <article className="is__news">
                  <figure>
                    <img
                      src="https://www.criptonoticias.com/wp-content/uploads/2023/03/clases-bitcoin-paraguay-mineria-1140x815.jpg.webp"
                      width="250"
                    />
                  </figure>
                  <div>
                    <h3>Title News Description</h3>
                  </div>
                </article>

                <article className="is__news">
                  <figure>
                    <img
                      src="https://www.criptonoticias.com/wp-content/uploads/2023/03/clases-bitcoin-paraguay-mineria-1140x815.jpg.webp"
                      width="250"
                    />
                  </figure>
                  <div>
                    <h3>Title News Description</h3>
                  </div>
                </article>
              </div>
            </section>

            <section className="board page__news--list">
              <div className="page__news--filter"></div>

              <div className="board-cols-news">
                <div className="board-block news-ryoshi">
                  <div className="col-title">
                    <span className="icon"></span> LAST <strong>NEWS</strong>
                    <img className="line" src="images/line.svg" />
                  </div>
                  <section className="full-view-news">
                    <div className="title-view-news">
                      <h2>
                        {Object.keys(view).length
                          ? view.title
                          : defaultNews.title}
                      </h2>
                    </div>
                    <div
                      className="description-view-news"
                      dangerouslySetInnerHTML={{
                        __html: Object.keys(view).length
                          ? view.content
                          : defaultNews.content,
                      }}
                    ></div>
                    <div className="visit-view-news">
                      <a
                        href={
                          Object.keys(view).length
                            ? view.link
                            : defaultNews.link
                        }
                        className="link-visit"
                        target="_blank"
                      >
                        See the full news
                      </a>
                    </div>
                  </section>
                </div>
              </div>
            </section>
          </section>

          <section className="page__news__lists mt-5 mb-5">
            <div className="col-content">
              <div class="line-list-news">
                {news.map((e, i, a) => (
                  <>
                    <a
                      class="item-news"
                      href="#"
                      onClick={viewNews.bind(this, i)}
                    >
                      <span class="content-position">
                        <b>{i + 1}</b>{" "}
                      </span>
                      <span class="content-details">{e.title}</span>
                    </a>
                  </>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default News;
