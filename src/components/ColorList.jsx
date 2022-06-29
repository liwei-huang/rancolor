import './ColorList.css';
import { Fragment } from 'react';
import Color from './Color.jsx';
import { useColors } from '../hooks/useColors.jsx';
import useInput from '../hooks/useInput.jsx';

function ColorList() {
  const { colors, dispatch } = useColors();

  const sort = (method) => dispatch({ type: method });
  const [selectedSort] = useInput('byTime', sort);

  if (!colors.length) {
    return (
      <div className='empty-list'>
        <i className='bi bi-exclamation-square' title='提示'></i>
        <span>当前列表没有颜色。</span>
      </div>
    );
  };

  return (
    <Fragment>
      <div className='color-list-sort'>
        <h3>颜色列表</h3>
        <div>
          <i className='bi bi-arrow-left-right' onClick={() => dispatch({ type: 'reverse' })} title='翻转'></i>
          <label htmlFor='sortor'>排序：</label>
          <select name='colors' id='sortor' {...selectedSort}>
            <option value='byTime'>时间</option>
            <option value='byName'>名字</option>
            <option value='byRating'>评分</option>
          </select>
        </div>
      </div>
      {
        [...colors].reverse().map(color => (
          <Color key={color.hex} {...color} />
        ))
      }
    </Fragment>
  );
}

export default ColorList;