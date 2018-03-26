import React from 'react';

import Editing from './editing';

//import './card.css';

export default function Cards(props) {
  console.log(props);



    return (
      <article class="comic">
      {props.cards.map((g, i) => {
        console.log(g);
          let num = (Math.floor(Math.random() * 6) + 1) * 100
        return (
          <div key={i} className='panel' style={{flexBasis: num}}>
          {g.id}

            <div className="container">
              <iframe
                src={g.giph}

                frameBorder="0"
                className="giphy-embed"
                allowFullScreen
                style={{pointerEvents:'none'}}
              />
            </div>

            <div className="text bottom-right" contentEditable={props.editing}>
              {g.text}
            </div>

            <Editing {...props} identifyer={i} butName='Edit'/>
        </div>
        );
      })};
    </article>
    );
};
