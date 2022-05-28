import './index.css';
const Spinner = ({ className, size = 'small' }) => {
  return (
    <div
      className={`
        ${className}
        ${size === 'small' ? 'w-5' : size === 'large' ? 'w-10' : 'w-10'}
    `}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        height="16"
        width="16"
        className="fill-current w-full h-full"
      >
        <g className="nc-icon-wrapper" stroke="none">
          <g className="nc-loop-dots-4-16-icon-f">
            <circle cx="3" cy="8" r="2"></circle>
            <circle cx="8" cy="8" r="2" data-color="color-2"></circle>
            <circle cx="13" cy="8" r="2"></circle>
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Spinner;
