import './CreateColorPanel.css';
import EditColor from './EditColor.jsx';
import { useColors } from '../hooks/useColors.jsx';
import { writeClipBoard } from '../utils.js';

function CreateColorPanel({ hex, rgb }) {
  const { dispatch } = useColors();

  return (
    <div className="create-color-panel">
      <p>
        RGB:
        <code>{rgb}</code>
        <i className='bi bi-clipboard' onClick={() => writeClipBoard(rgb)} title='复制'></i>
      </p>
      <p>
        HEX:
        <code>{hex}</code>
        <i className='bi bi-clipboard' onClick={() => writeClipBoard(hex)} title='复制'></i>
      </p>
      <EditColor
        hex={hex}
        initName=''
        initDescription=''
        initRating={0}
        submit={dispatch}
        submitType='add'
      />
    </div>
  );
}

export default CreateColorPanel;