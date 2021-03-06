import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from './search.js';
import Cards from './cards';
import Editing from './editing';
import {
  searchGiphs,
  selectGiph,
  save,
  edit,
  setWidth
} from '../../modules/counter';

const Home = props => (
  <div>
    <h1>Home</h1>

      <Cards {...props}/>;

    {/*  <div className="cellGiph">
        <iframe
          src={props.giph}
          width="480"
          height="460"
          frameBorder="0"
          className="giphy-embed"
          allowFullScreen
          style={{pointerEvents:'none'}}
          />
      </div>

      <div className="textBubble" contentEditable={props.editing}>
        {props.text}
      </div> */}

      <Editing {...props}/>





  </div>
);

const mapStateToProps = state => (
  {
  giphs: state.counter.giphs,
  giph: state.counter.giph,
  editing: state.counter.editing,
  text: state.counter.text,
  width: state.counter.width,
  cards: state.counter.cards
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchGiphs,
      selectGiph,
      save,
      edit,
      setWidth,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
