import ResponsiveBackground from './background';

export const Pollution = () => {
  return (
    <div className="relative w-full h-screen">
      <ResponsiveBackground />
      <img
          src="/canette.png"
          alt="canette"
          className='absolute bottom-[20%] right-[20%] h-32'
        />
        <img
          src="/coca.png"
          alt="coca"
          className='absolute bottom-[10%] right-[70%] h-32'
        />
        <img
          src="/jerican.png"
          alt="jerican"
          className='absolute bottom-[50%] right-[50%] h-32'
        />
    </div>
  );
};

export default Pollution;

