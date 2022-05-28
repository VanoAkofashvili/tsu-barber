import { Input } from '../Atoms';

const Search = () => {
  return (
    <div className="w-full bg-gray-200">
      <input
        type={'text'}
        placeholder="Search barber"
        className="w-full bg-gray-200 outline-none p-3 placeholder:text-sm "
      />
    </div>
  );
};

export default Search;
