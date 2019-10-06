import React from 'react';
import {connect} from 'react-redux';
import ArticlesList from './../ArticlesList';

const mapStateToProps = state => ({
  articles: state.articles
});

const MainView = props => {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <a className="nav-link active">Global Feed</a>
          </li>
        </ul>
      </div>

      <ArticlesList articles={props.articles} />
    </div>
  );
}

export default connect(mapStateToProps, () => ({}))(MainView);
