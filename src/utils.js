export const createTime = () => new Date().getTime();

const randomPositiveInteger = (max) => {
  return Math.floor(Math.random() * (max + 1));
}

export const randomRGB = () => `rgb(${randomPositiveInteger(255)}, ${randomPositiveInteger(255)}, ${randomPositiveInteger(255)})`;

// RGB 转 HEX 代码参考
// https://stackoverflow.com/questions/15689845/rgb-to-hex-conversion
const componentToHex = (c) => {
  let hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

export const rgbToHex = (rgb) => {
  let rEndIndex = rgb.indexOf(',') - 1;
  let rStartIndex = rgb.indexOf('(') + 1;
  let gEndIndex = rgb.lastIndexOf(',') - 1;
  let gStartIndex = rgb.indexOf(',') + 2;
  let bEndIndex = rgb.lastIndexOf(')') - 1;
  let bStartIndex = rgb.lastIndexOf(',') + 2;

  let r = Number(rgb.slice(rStartIndex, rEndIndex + 1));
  let g = Number(rgb.slice(gStartIndex, gEndIndex + 1));
  let b = Number(rgb.slice(bStartIndex, bEndIndex + 1));

  let hex = '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
  return hex;
}

export const writeClipBoard = (text) => navigator.clipboard.writeText(text);