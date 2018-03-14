import React from 'react';

import Editing from './editing';

//import './card.css';

export default function Cards(props) {
  console.log(props);

    return (
      <div>
      {props.cards.map((g, i) => {
        console.log(g);
        return (
          <div key={i}>
            <p>{g.text}</p>
            <div className="giphContainer">
              <iframe
                src={g.giph}
                width="180"
                height="160"
                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                style={{pointerEvents:'none'}}
              />
            </div>
            <Editing {...props}/>
        </div>
        );
      })};
      </div>
    );
};
