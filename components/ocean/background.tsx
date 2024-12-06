export default function ResponsiveBackground() {
    return (
      <div className="absolute inset-0 bg-cover bg-center z-0">
        <div className="absolute inset-0 bg-no-repeat bg-cover bg-center sm:hidden" style={
            { backgroundImage: "url('/bg-small.png')",
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
             } }>
        </div>

        <div className="hidden sm:block absolute inset-0 bg-no-repeat bg-cover bg-center" style={
            { backgroundImage: "url('/bg-big.png')",
                backgroundSize: 'cover',
                backgroundAttachment: 'fixed',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
             }}>
        </div>
      </div>
    );
  }
  