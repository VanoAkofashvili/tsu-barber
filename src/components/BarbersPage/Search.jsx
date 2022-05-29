import { useBarbers } from '../../contexts/Barbers.context';

const Search = () => {
  const { search } = useBarbers();
  return (
    <div className="w-full bg-gray-200">
      <input
        type={'text'}
        placeholder="Search barber"
        className="w-full bg-gray-200 outline-none p-3 placeholder:text-sm"
        onChange={({ target }) => search(target.value)}
      />
    </div>
  );
};

export default Search;
