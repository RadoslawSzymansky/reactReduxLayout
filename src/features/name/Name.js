import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux'
import { nameToCustom, nameToPioter, nameToRadek, selectName,  fectchNameAsync} from './nameSlice';

export const Name = () => {

  const dispatch = useDispatch();
  const name = useSelector(selectName);

  const [customName, setCustomName] = useState('')
  
  return (
    <div>
      <button onClick={() => {dispatch(nameToRadek())}}>Radek</button>
      <button onClick={() => {dispatch(nameToPioter())}}>Pioter</button>
      <button onClick={() => {dispatch(fectchNameAsync())}}>Async</button>
      <input 
        type="text" 
        placeholder="Custom name" 
        value={customName}
        onChange={e => setCustomName(e.target.value)}
      />
      <button onClick={() => dispatch(nameToCustom(customName))}>Change to custom!</button>
      <br></br>
      {name}
    </div>
  );
}
