import ResponsiveBackground from './background';

export const Poumons = () => {
  return (
    <div className="relative w-full h-screen">
      <ResponsiveBackground />
      <img
          src="/coquillage.png"
          alt="canette"
          className='absolute bottom-[20%] right-[10%] h-32'
        />
        <img
          src="/corail.png"
          alt="coca"
          className='absolute bottom-[10%] right-[70%] h-32'
        />
        <img
          src="/corail1.png"
          alt="coca"
          className='absolute bottom-[30%] right-[50%] h-32'
        />
        <img
          src="/phyto.png"
          alt="jerican"
          className='absolute bottom-[50%] right-[40%] h-32'
        />
        <img
          src="/phyto.png"
          alt="jerican"
          className='absolute bottom-[50%] right-[30%] h-32'
        />
    </div>
  );
};

export default Poumons;

