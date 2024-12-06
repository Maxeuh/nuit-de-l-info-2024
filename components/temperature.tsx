import ResponsiveBackground from './background';

const Temperature = () => {
  return (
    <div className="relative w-full h-screen">
      <ResponsiveBackground />
      <img
          src="/bulles.png"
          alt="canette"
          className='absolute bottom-[20%] right-[20%] h-32'
        />
        <img
          src="/bulles.png"
          alt="coca"
          className='absolute bottom-[10%] right-[70%] h-32'
        />
        <img
          src="/bulles.png"
          alt="coca"
          className='absolute bottom-[70%] right-[50%] h-32'
        />
        <img
          src="/chaud.png"
          alt="jerican"
          className='absolute bottom-[50%] right-[50%] h-32'
        />
    </div>
  );
};

export default Temperature;

