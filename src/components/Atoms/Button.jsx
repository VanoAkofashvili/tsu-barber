import Spinner from '../Spinner';
export const Button = ({ children, loading, ...props }) => {
  return (
    <button
      className="p-2 bg-purple-light border border-primary hover:bg-purple-dark hover:transition w-full rounded-full text-white flex justify-center"
      {...props}
    >
      {loading ? <Spinner /> : children}
    </button>
  );
};
