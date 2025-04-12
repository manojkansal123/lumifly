
import React from 'react';

interface LumiflyLogoProps {
  className?: string;
}

const LumiflyLogo: React.FC<LumiflyLogoProps> = ({ className = "h-8 w-8" }) => {
  return (
    <div className={className}>
      <img src="/lovable-uploads/ae7f2ff1-ab94-499b-9724-33e555b4de0b.png" alt="Lumifly Energies Logo" className="w-full h-full" />
    </div>
  );
};

export default LumiflyLogo;
