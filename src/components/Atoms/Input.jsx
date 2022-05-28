import { useField } from 'formik';

export const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col">
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="p-2 border border-gray-200" {...field} {...props} />
      <div
        className={`error ${
          meta.touched && meta.error ? 'visible' : 'invisible'
        }`}
      >
        {meta.error}
      </div>
    </div>
  );
};
