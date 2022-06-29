import './Color.css';
import { useRef } from 'react';
import StarRating from './StarRating.jsx';
import { useColors } from '../hooks/useColors.jsx';
import EditColor from './EditColor.jsx';
import { writeClipBoard } from '../utils.js';

function Color({ hex, name, description, rating }) {
  const { dispatch } = useColors();

  let dialogRef = useRef();
  const showDialog = () => dialogRef.current.show();
  const closeDialog = () => dialogRef.current.close();

  return (
    <div className='color-item'>
      <div className='color-block' style={{ backgroundColor: hex }}></div>
      <div className='color-info'>
        <h2>{name}</h2>
        <p>{hex}</p>
        <div className='color-description'>{description}</div>

        <StarRating selectedStars={rating} />

        <i className='bi bi-pencil' onClick={showDialog} title='编辑'></i>
        <i className='bi bi-trash' onClick={() => dispatch({ type: 'remove', payload: { hex: hex } })} title='删除'></i>
        <i className='bi bi-clipboard' onClick={() => writeClipBoard(hex)} title='复制'></i>

        <dialog ref={dialogRef}>
          <h3>编辑颜色 {name}</h3>
          <i className='bi bi-x-square' onClick={closeDialog} title='关闭'></i>
          <EditColor
            hex={hex}
            initName={name}
            initDescription={description}
            initRating={rating}
            submit={dispatch}
            submitType='patch'
          />
        </dialog>
      </div>
    </div >
  );
}

export default Color;