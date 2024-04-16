import React from 'react';

const Footer = () => {
  return (
    <footer className='gobeze-footer-bg text-white py-8'>
      <div className='flex  md:flex-row items-center justify-center px-4'>
        <div className='mb-4 md:mb-0 flex flex-col justify-center items-center'>
          <p className='text-sm font-light'>Copyright © 2017-2024.</p>
          <p className='text-xs font-extralight text-center'>
            "Gobeze Learning" and the Gobeze Learning logo are trademarks of
            Gobeze Consult PLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
