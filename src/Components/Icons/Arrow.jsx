const Arrow = ({ className, width = 6, height = 12, fill }) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 6 12"
    fill={fill ? fill : "none"}
    xmlns="http://www.w3.org/2000/svg">
    <path
      id="Vector"
      d="M5.93032 5.78796C5.97387 5.84293 6 5.91675 6 6C6 6.08325 5.97387 6.15707 5.93032 6.21204L1.34509 12H0.00124454L4.75446 6L0 0H1.34384L5.93032 5.78796Z"
      fill={fill ? fill : "#05141F"}
    />
  </svg>
);

export default Arrow;
