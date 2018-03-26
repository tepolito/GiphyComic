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
  selectCard,
  handleChange
} from '../../modules/counter';

const Home = props => (
  <div>
    <h1>Home</h1> {props.giph} id {props.id}

      <Search searchGiphs={props.searchGiphs} />
{props.editingCard}
      <Editing {...props} butName={ (props.editingCard === null) ? 'New Cell' : 'edit' }/>

      <Cards {...props}/>;



  </div>
);

const mapStateToProps = state => (
  {
  giphs: state.counter.giphs,
  giph: state.counter.giph,
  editing: state.counter.editing,
  text: state.counter.text,
  cards: state.counter.cards,
  id: state.counter.id,
  editingCard: state.counter.editingCard,
  editingText: state.counter.editingText
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchGiphs,
      selectGiph,
      save,
      edit,
      selectCard,
      handleChange,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
