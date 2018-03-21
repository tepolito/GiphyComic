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
  edit
} from '../../modules/counter';

const Home = props => (
  <div>
    <h1>Home</h1> {props.giph} id {props.id}

      <Search searchGiphs={props.searchGiphs} />

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

      <Editing {...props} butName='New Cell'/>

  </div>
);

const mapStateToProps = state => (
  {
  giphs: state.counter.giphs,
  giph: state.counter.giph,
  editing: state.counter.editing,
  text: state.counter.text,
  cards: state.counter.cards,
  id: state.counter.id
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchGiphs,
      selectGiph,
      save,
      edit,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
