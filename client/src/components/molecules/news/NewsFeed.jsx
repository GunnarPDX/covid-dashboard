import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import './NewsFeed.scss';

/*
const data = {
  news: [
    {
      id: 1,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      date: '14.05.2020',
      origin: 'RUS',
      link: 'https://versions.bulma.io/0.7.0/documentation/layout/section/'
    },
    {
      id: 2,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      date: '12.5.2020',
      origin: 'USA',
      link: 'https://www.google.com/'
    },
    {
      id: 3,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut',
      date: '01.8.2020',
      origin: 'SG',
      link: 'https://www.reddit.com/'
    }
  ]
};
*/

const NewsFeed = (props) => {
  const allNews = props.news.articles.map(article => {
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
