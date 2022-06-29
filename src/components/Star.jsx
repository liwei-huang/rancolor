import './Star.css';

function Star({ selected = false, onSelect = f => f }) {
  return (
    <i
      className='bi bi-star-fill rating-star'
      style={{ color: selected ? '#ed2650' : '#eee' }}
      onClick={onSelect}
      title='五角星'
    >
    </i>
  );
}

export default Star;