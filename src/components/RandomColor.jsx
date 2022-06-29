import ColorDemo from './ColorDemo.jsx';
import CreateColorPanel from './CreateColorPanel.jsx';
import { randomRGB, rgbToHex } from '../utils.js';
import { useState, Fragment } from 'react';

function RandomColor() {
  const [rancolor, setRancolor] = useState('rgb(0, 0, 0)');

  return (
    <Fragment>
      <ColorDemo generate={() => setRancolor(randomRGB())} rgb={rancolor} />
      <CreateColorPanel hex={rgbToHex(rancolor)} rgb={rancolor} />
    </Fragment>
  );
}

export default RandomColor;