import React from 'react';

import Search from './search.js';

export default function Editing(props) {
//  console.log(props)
  const isEditing = props.editing;
  if (isEditing)
  {
    return (
      <div>
        <button onClick={()=>props.save(props.editingCard, props.editingText)}>Save</button>
        <br/>
          <label>
            Giph Text:
            <input type="text" value={props.editingText} onChange={props.handleChange} />
          </label>
      {/*  <Search searchGiphs={props.searchGiphs} /> */}
        {props.giphs.map((g, i) => {
      //    console.log(g);
          return (
            <div className="giphContainer" onClick={() => props.selectGiph(g, props.identifyer)}>
              <iframe
                key={i}
                src={g.embed_url}
                width="40"
                height="30"
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
  return <button onClick={()=>props.edit(props.editingCard)}>{props.butName}</button>;
}
