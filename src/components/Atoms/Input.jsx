import { useField } from 'formik';

export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(props);
  return (
    <div className="flex flex-col mb-6 relative">
      <label
        htmlFor={props.id || props.name}
        className={`text-sm mb-1 ${
          props.required ? "after:content-['*']" : null
        } `}
      >
        {label}
      </label>
      <input
        className="p-2 text-sm rounded-full border border-gray-200 placeholder:text-sm placeholder:italic outline-none"
        {...field}
        {...props}
      />
      <div
        className={`text-negative text-xs absolute top-full ${
          meta.touched && meta.error ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {meta.error}
      </div>
    </div>
  );
};
