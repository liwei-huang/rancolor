import './ColorDemo.css';

function ColorDemo({ generate = f => f, rgb }) {
  return (
    <div className='color-demo' style={{ '--rgb': rgb }}>
      <div></div>
      <b>示例文本</b>
      <button type='button' onClick={generate}>随机颜色</button>
    </div>
  );
}

export default ColorDemo;