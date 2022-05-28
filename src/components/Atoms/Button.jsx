import Spinner from '../Spinner';
export const Button = ({ children, loading, className, ...props }) => {
  return (
    <button
      className={`p-2 bg-purple-light border border-primary hover:bg-purple-dark hover:transition w-full rounded-full text-white flex justify-center ${className}`}
      {...props}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};
