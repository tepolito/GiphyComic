import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from './search.js';
import {
  /*increment,
  incrementAsync,
  decrement,
  decrementAsync,*/
  searchGiphs,
  selectGiph,
  save,
  edit
} from '../../modules/counter';

function Editing(props) {
//  console.log(props)
  const isEditing = props.editing;
  if (isEditing)
  {
    return (
      <div>
      <button onClick={props.save}>Save</button>
      <Search searchGiphs={props.searchGiphs} />

      {props.giphs.map(g => {
        console.log(g);
        return (
          <div className="giphContainer" onClick={() => props.selectGiph(g.embed_url)}>
            <iframe
              src={g.embed_url}
              width="180"
              height="160"
              frameBorder="0"
              class="giphy-embed"
              allowFullScreen
              style={{pointerEvents:'none'}}
            />
        </div>
        );
      })};
    </div>
  )
  }
  return <button onClick={props.edit}>Edit</button>;
}

const Home = props => (
  <div>
    <h1>Home</h1>
  {/*  <p>Count: {props.count}</p>



    <p>
      <button onClick={props.increment} disabled={props.isIncrementing}>
        Increment
      </button>
      <button onClick={props.incrementAsync} disabled={props.isIncrementing}>
        Increment Async
      </button>
    </p>

    <p>
      <button onClick={props.decrement} disabled={props.isDecrementing}>
        Decrement
      </button>
      <button onClick={props.decrementAsync} disabled={props.isDecrementing}>
        Decrement Async
      </button>

      <input type="text" placeholder="search" />

      <button
        onClick={() => {
          props.searchGiphs('rick and morty');
        }}>
        search giphs
      </button>

      <p>
        <button onClick={() => props.changePage()}>
          Go to about page via redux
        </button>
      </p> */}

      {props.giph}
      <iframe
        src={props.giph}
        width="480"
        height="460"
        frameBorder="0"
        className="giphy-embed"
        allowFullScreen
        style={{pointerEvents:'none'}}
        />

      <div className="textBubble" contentEditable={props.editing}>
        {props.text}
      </div>
      <Editing {...props}/>





  </div>
);

const mapStateToProps = state => ({
/*  count: state.counter.count,
  isIncrementing: state.counter.isIncrementing,
  isDecrementing: state.counter.isDecrementing,*/
  giphs: state.counter.giphs,
  giph: state.counter.giph,
  editing: state.counter.editing,
  text: state.counter.text
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      /*increment,
      incrementAsync,
      decrement,
      decrementAsync,*/
      searchGiphs,
      selectGiph,
      save,
      edit,
      changePage: () => push('/about-us')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
