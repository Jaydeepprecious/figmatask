import React from 'react';
import Logo from './Logo';

const Demo = () => {
  const logos = [
    { src: 'Gold Standard Logo.png', alt: 'Logo 1' },
    { src: 'BC Bilan.png', alt: 'Logo 2' },
    { src: 'cdp 1.png', alt: 'Logo 3' },
    { src: 'Greenhouse.png', alt: 'Logo 4' },
    { src: 'pcaf 1.png', alt: 'Logo 5' },
    { src: 'sbti_logo 1.png', alt: 'Logo 6' },
  ];

  return (
    <>
      <div className="logos-container" style={{ marginTop: '200px' }}>
        <p
          className="certified-text"
          style={{
            position: 'fixed',
            width: '120px',
            height: '24px',
            left: '90px',
            top: '229px',
            color: 'white',
            fontFamily: 'Montserrat',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '120%',
          }}
        >
          Certified by
        </p>
        <div
          className="logos-wrapper"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            paddingLeft: '70px',
            paddingRight: '40px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '48px',
          }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '96px',
                width: '170px',
                border: '1px solid #ccc',
                backgroundColor: '#34373A',
                borderRadius: '16px',
                margin: '10px',
              }}
            >
              <Logo
                src={logo.src}
                alt={logo.alt}
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 568px) {
          .certified-text {
            display: fixedf;
          }
        }
      `}</style>
    </>
  );
};

export default Demo;
