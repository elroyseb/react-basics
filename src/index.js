import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './StateAndLifeCycle';

function Page(){
  return(
    <div>
      <Clock />
    </div>    
  );
}
ReactDOM.render(
  <Page />,
  document.getElementById('root')
);