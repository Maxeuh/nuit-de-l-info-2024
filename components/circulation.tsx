import ResponsiveBackground from './background';

const Circulation = () => {
  return (
    <div className="relative w-full h-screen">
      <ResponsiveBackground />
        <img
          src="/courrant-chaud.png"
          alt="canette"
          className='absolute bottom-[40%] right-[45%] h-32'
        />
        <img
          src="/courrant-froid.png"
          alt="canette"
          className='absolute bottom-[20%] right-[45%] h-32'
        />
    </div>
  );
};

export default Circulation;

