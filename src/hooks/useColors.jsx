import { createContext, useContext, useReducer } from 'react';
import colorList from '../color-list.json';
import { createTime } from '../utils.js';

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

const addColor = (colors, hex, patch) => {
  for (let i = 0; i < colors.length; i++) {
    if (colors[i].hex === hex) {
      alert('颜色列表中已经存在该颜色。');
      return colors;
    }
  }
  return [...colors, { hex, ...patch, time: createTime() }];
};

const patchColor = (colors, hex, patch) => {
  return colors.map(color => (
    color.hex === hex ? { ...color, ...patch } : color
  ));
};

const removeColor = (colors, hex) => {
  return colors.filter(color => color.hex !== hex);
};

function reducer(colors, action) {
  switch (action.type) {
    case 'add':
      return addColor(colors, action.payload.hex, action.payload.patch);
    case 'patch':
      return patchColor(colors, action.payload.hex, action.payload.patch);
    case 'remove':
      return removeColor(colors, action.payload.hex);
    case 'reverse':
      return [...colors].reverse();
    case 'byName':
      return [...colors].sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    case 'byRating':
      return [...colors].sort((a, b) => b.rating - a.rating);
    case 'byTime':
    default:
      return [...colors].sort((a, b) => (Number(a.time) - Number(b.time)));
  }
}

function ColorProvider({ children }) {
  const [colors, dispatch] = useReducer(reducer, colorList);

  return (
    <ColorContext.Provider value={
      { colors, dispatch }
    }>
      {children}
    </ColorContext.Provider>
  );
}

export default ColorProvider;