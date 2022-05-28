import { useField } from 'formik';

export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col mb-6 relative">
      <label htmlFor={props.id || props.name} className="text-base">
        {label}
      </label>
      <input
        className="p-2 border border-gray-200 placeholder:text-sm placeholder:italic"
        {...field}
        {...props}
      />
      <div
        className={`text-red-500 text-xs absolute top-full ${
          meta.touched && meta.error ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {meta.error}
      </div>
    </div>
  );
};
