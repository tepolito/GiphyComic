import React from 'react';

import Search from './search.js';

export default function Editing(props) {
//  console.log(props)
  const isEditing = props.editing;
  if (isEditing)
  {
    return (
      <div>
        <button onClick={props.save}>Save</button>
        <Search searchGiphs={props.searchGiphs} />
        {props.giph}
        {props.giphs.map((g, i) => {
          console.log(g);
          return (
            <div className="giphContainer" onClick={() => props.selectGiph(g.embed_url)}>
              <iframe
                key={i}
                src={g.embed_url}
                width="180"
                height="160"
                frameBorder="0"
                className="giphy-embed"
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
