import bg from '../../static/bg.png';
import barberBg from '../../static/bgBarber.png';

const AuthTemplate = ({ children, title }) => {
  return (
    <section className="w-full h-full bg-purple-bg flex justify-center items-center">
      <div className="m-40 bg-white border border-grey-10 rounded-md flex  h-2/3">
        <div className="flex-1 max-w-lg flex flex-col p-10 overflow-y-auto">
          <h1 className="font-semibold text-lg">{title}</h1>
          <p className="text-grey-50 text-sm my-2 border-b border-grey-10 pb-3">
            Find best barbers in the city
          </p>
          {children}
        </div>
        <div className="flex-1 flex items-center max-w-lg bg-purple-light">
          <img src={barberBg} className="opacity-50 mix-blend-lighten" />
        </div>
      </div>
    </section>
  );
};

export default AuthTemplate;
