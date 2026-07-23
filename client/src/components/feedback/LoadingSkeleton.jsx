/**
 * A generic loading skeleton to prevent layout shifts.
 * 
 * @param {Object} props
 * @param {string} props.className - Tailwind classes to define height, width, and shape (e.g. 'h-4 w-full rounded')
 */
const LoadingSkeleton = ({ className = 'h-full w-full' }) => {
  return (
    <div className={`bg-gray-200 animate-pulse ${className}`}></div>
  );
};

export default LoadingSkeleton;
