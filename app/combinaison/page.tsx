import OverlayImage from '../generic-image/page';
import ResponsiveBackground from '../background/page';

const MyPage = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background */}
      <ResponsiveBackground />

      {/* Overlay Image */}
      <OverlayImage 
        src="/Pieuvre.png"
        position="top-1/2 left-1/2"
        description="Une pieuvre"
      />
    </div>
  );
};

export default MyPage;

