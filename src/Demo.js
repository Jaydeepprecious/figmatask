import React from 'react';
import Logo from './Logo';

const Demo = () => {
  const logos = [
    { src: 'Gold Std logo.png', alt: 'Logo 1' },
    { src: 'Bilan.png', alt: 'Logo 2' },
    { src: 'CDP Logo.png', alt: 'Logo 3' },
    { src: 'Greenhouse logo.png', alt: 'Logo 4' },
    { src: 'pcaf Logo.png', alt: 'Logo 5' },
    { src: 'SBTI Logo.png', alt: 'Logo 6' },
  ];

  return (
    
    <div className="logos-container" style={{marginTop:"200px"}}>
     <p style={{position:"absolute",
     width:"120px",height:"24px",left:"190px", top:"219px",color:"white",fontFamily:'Montserrat',fontStyle:"normal",fontWeight:"600",fontSize:"20px",lineHeight:"120%"}}>Certified by</p>
       <div
        className="logos-wrapper"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          paddingLeft:"190px",
          paddingRight:"90px",
          justifyContent: 'center',
          alignItems: 'center',
          gap: '48px',
        }}
      >
        {logos.map((logo, index) => (
          <Logo
            key={index}
            src={logo.src}
            alt={logo.alt}
            style={{
              height: '150px',
              flex: '1 0 25%',
              maxWidth: '200px',
              margin: '10px',
            }}
          />
        ))}
      </div>
    </div>
    
  );
};

export default Demo;