const StarIcon = ({ className }) => (
  <svg
    width="30"
    height="29"
    viewBox="0 0 30 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M14.0489 1.67705C14.3483 0.755738 15.6517 0.75574 15.9511 1.67705L18.6484 9.97847C18.7822 10.3905 19.1662 10.6695 19.5994 10.6695H28.328C29.2968 10.6695 29.6995 11.9091 28.9158 12.4785L21.8542 17.609C21.5037 17.8637 21.3571 18.315 21.4909 18.7271L24.1882 27.0285C24.4876 27.9498 23.4331 28.7159 22.6494 28.1465L15.5878 23.016C15.2373 22.7613 14.7627 22.7613 14.4122 23.016L7.3506 28.1465C6.56689 28.7159 5.51241 27.9498 5.81176 27.0285L8.50906 18.7271C8.64293 18.315 8.49627 17.8637 8.14579 17.609L1.08417 12.4785C0.300457 11.9091 0.703234 10.6695 1.67196 10.6695H10.4006C10.8338 10.6695 11.2178 10.3905 11.3516 9.97847L14.0489 1.67705Z"
      fill="currentColor"
    />
  </svg>
);

const StarRating = ({ rating, maxRating = 5 }) => {
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    if (i <= Math.floor(rating)) {
      stars.push(<StarIcon key={i} className="w-8 h-8 text-yellow-500" />);
    } else if (i === Math.ceil(rating)) {
      const partialStarPercentage = (rating % 1) * 100;
      stars.push(
        <div key={i} className="relative inline-block w-8 h-8">
          <div
            className="absolute top-0 left-0 h-full overflow-hidden"
            style={{ width: `${partialStarPercentage}%` }}
          >
            <StarIcon className="w-8 h-8 text-yellow-500" />
          </div>
          <StarIcon className="w-8 h-8 text-mn-grey-0" />
        </div>
      );
    } else {
      stars.push(<StarIcon key={i} className="w-8 h-8 text-mn-grey-0" />);
    }
  }

  return <div className="inline-flex space-x-1">{stars}</div>;
};

export default StarRating;
