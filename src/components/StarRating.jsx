import Star from './Star.jsx';

function StarRating({ selectedStars = 0, rate = f => f }) {
  return (
    <div className='star-rating'>
      {[...Array(5)].map((item, index) => (
        <Star
          key={index}
          selected={selectedStars > index}
          onSelect={() => rate(index + 1)} />
      ))}
    </div>
  );
}

export default StarRating;