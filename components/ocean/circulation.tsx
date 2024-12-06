import ResponsiveBackground from './background';


export const Circulation = () => {
  return (
    <div className="relative w-full h-screen">
      <ResponsiveBackground />
      <div>
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
    </div>
    
  );
};

export default Circulation;

