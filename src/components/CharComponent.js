import React from 'react';
const charComponent = (props) => {
 return ( 
  <div style={{display: 'inline-block', padding: '16px', textAlign: 'center', margin: '16px', border: '1px solid black'}}>
  <p>{props.letter}, {props.id}</p>
  <button onClick={() => props.deleteCharComponent(props.id)}>Delete</button>
  </div>
  );
}
 
export default charComponent;