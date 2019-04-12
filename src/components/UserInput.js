import React from 'react'; 
 
export default (props) => {
return (
 <input style={{fontSize: '32px', textAlign: 'center'}}onChange={props.changeChildName} value={props.personsName}/>
  );
}
