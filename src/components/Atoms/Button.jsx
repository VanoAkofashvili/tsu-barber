import Spinner from '../Spinner';
export const Button = ({ children, loading, ...props }) => {
  return <button {...props}>{loading ? <Spinner /> : children}</button>;
};
