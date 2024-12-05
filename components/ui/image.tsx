import Image from 'next/image';

export default function MonComposant() {
  return (
    <div className="flex flex-lig items-center justify-center">
      
      <Image
        src="/images/corps humain.jpg" // Chemin de l'image
        alt="Description de l'image"
        width={500} // Largeur de l'image
        height={300} // Hauteur de l'image
        

      />
      <Image
        src="/images/ocean-mieux.jpg" // Chemin de l'image
        alt="Description de l'image"
        width={2000} // Largeur de l'image
        height={300} // Hauteur de l'image
       
        
      />
    </div>
  );
}