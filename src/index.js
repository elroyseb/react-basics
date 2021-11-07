// @ts-check

import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './StateAndLifeCycle';
import ToggleButton from './HandlingEvents';
import CountryForm from './Forms';

function Page(){
  return(
    <div>
      <Clock />
      <ToggleButton/>
      <CountryForm/>
    </div>  
  );
}
ReactDOM.render(
  <Page />,
  document.getElementById('root')
);