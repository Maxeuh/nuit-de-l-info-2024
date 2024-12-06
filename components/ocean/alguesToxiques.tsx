import ResponsiveBackground from './background';

export const AlguesToxiques = () => {
  return (
    <div className="relative w-full h-screen">
      <ResponsiveBackground />
      <img
          src="/algue1.png"
          alt="canette"
          className='absolute bottom-[20%] right-[10%] h-32'
        />
        <img
          src="/algue2.png"
          alt="coca"
          className='absolute bottom-[10%] right-[60%] h-32'
        />
        <img
          src="/algue1.png"
          alt="coca"
          className='absolute bottom-[30%] right-[50%] h-32'
        />
        <img
          src="/algue2.png"
          alt="jerican"
          className='absolute bottom-[45%] right-[20%] h-32'
        />
        <img
          src="/algue1.png"
          alt="jerican"
          className='absolute bottom-[50%] right-[30%] h-32'
        />
    </div>
  );
};

export default AlguesToxiques;

