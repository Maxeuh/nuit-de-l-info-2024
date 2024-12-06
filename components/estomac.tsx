import ResponsiveBackground from './background';

const Estomac = () => {
  return (
    <div className="relative w-full h-screen">
      <ResponsiveBackground />
      <img
          src="/crabe.png"
          alt="canette"
          className='absolute bottom-[20%] right-[10%] h-32'
        />
        <img
          src="/crabe.png"
          alt="canette"
          className='absolute bottom-[20%] right-[20%] h-32'
        />
        <img
          src="/crabe.png"
          alt="canette"
          className='absolute bottom-[20%] right-[30%] h-32'
        />
        <img
          src="/dauphin.png"
          alt="coca"
          className='absolute bottom-[10%] right-[70%] h-32'
        />
        <img
          src="/crabe_2.png"
          alt="coca"
          className='absolute bottom-[30%] right-[75%] h-32'
        />
        <img
          src="/requin.png"
          alt="jerican"
          className='absolute bottom-[40%] right-[30%]'
        />
        <img
          src="/crabe_3.png"
          alt="jerican"
          className='absolute bottom-[35%] right-[30%] h-32'
        />
    </div>
  );
};

export default Estomac;

