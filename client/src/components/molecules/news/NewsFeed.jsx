import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './NewsFeed.scss';

const NewsFeed = (props) => {
  const allNews = props.news.data.articles.map(article => {
    return (
      <React.Fragment>
        <div className={'article-container'}>
          <h3 className={'news-title'}>{article.title}</h3>
          <div className={'description-container'}>
            <p className={'has-text-left'}> {article.description}</p>
          </div>
          <nav className={'level'}>
            <div className={'level-left'}>
              <div className={'level-item'}>
                <h3>
                  {article.author} {/* | {article.publishedAt} */}
                </h3>
              </div>
            </div>
            <div className={'level-right'}>
              <div className={'level-item'}>
                <h3 className={'has-text-info'}>
                  <a href={article.url} target="_blank"> LEARN MORE ></a>
                </h3>
              </div>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className={'tile-container'}>
      <h1 className={''}>Global News</h1>
      <SimpleBar style={{ maxHeight: 350 }}>
        <section className={'section'}>
          <div className={'container'}>
            <h2> {allNews}</h2>
          </div>
        </section>
      </SimpleBar>
    </div>
  );
};

export default NewsFeed;
