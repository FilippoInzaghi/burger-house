 import React from 'react'; 
 
 export default (props) => {
 const {name, age} = props;
 return (
  <>
  <p>Imię: <span>{name}</span></p>
  <p>Wiek: <span>{age}</span></p>
  </>
   );
}
