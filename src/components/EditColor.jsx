import './EditColor.css';
import { useMemo } from 'react';
import StarRating from './StarRating.jsx';
import useInput from '../hooks/useInput.jsx';
import { v4 } from 'uuid';

function EditColor({ hex, initName, initDescription, initRating, submit = f => f, submitType }) {
  const [name, resetName] = useInput(initName);
  const [description, resetDescription] = useInput(initDescription);
  const [rating, resetRating] = useInput(initRating);

  const onReset = () => {
    resetName();
    resetDescription();
    resetRating();
  };

  const onSubmit = event => {
    event.preventDefault();
    let patch = {
      name: name.value,
      description: description.value,
      rating: rating.value
    }
    submit({ type: submitType, payload: { hex, patch } });
  };

  const inputId = useMemo(() => v4(), []);

  return (
    <form className='edit-color' onReset={onReset} onSubmit={onSubmit}>
      <label htmlFor={`color-name-${inputId}`}>颜色名称：</label>
      <input
        id={`color-name-${inputId}`}
        type='text'
        placeholder='不超过20个字符'
        required
        maxLength='20'
        {...name}
      />
      <br />
      <label htmlFor={`color-description-${inputId}`}>描述：</label>
      <br />
      <textarea
        id={`color-description-${inputId}`}
        cols='70'
        rows='6'
        {...description}
      >
      </textarea>
      <div>
        评分：
        <StarRating
          selectedStars={rating.value}
          rate={newRating => rating.onChange(newRating)}
        />
      </div>
      <button type='reset'>重置</button>
      <button type='submit'>提交</button>
    </form>
  );
}

export default EditColor;