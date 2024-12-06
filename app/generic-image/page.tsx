import React, { FC } from 'react';

interface OverlayImageProps {
  src: string;
  position: string; // Position de l'image (ex: 'top-0 left-0', 'center', etc.)
  description: string;
  height?: string;
  width?: string;
}

const OverlayImage: FC<OverlayImageProps> = ({
  src,
  position = 'center',
  description,
  height = '100%',
  width = '100%',
}) => {
  return (
    <div className="relative" style={{ height, width }}>
      
      {/* Overlay Image */}
      <div
        className={`absolute inset-0 ${position} flex justify-center items-center group z-1`}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height,
          width,
        }}
      >
        {/* Description, visible au survol */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white p-4">
          {description}
        </div>
      </div>
    </div>
  );
};

export default OverlayImage;
