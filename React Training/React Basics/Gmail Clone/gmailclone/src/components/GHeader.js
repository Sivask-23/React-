import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './GHeader.css'

const GHeader = () => {
  return (
    <div className='outerDiv'>
      <div className='innerDiv'>
        <div className='menuDiv'>
          <div className='iconDiv'>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className='comp'>
            <div className='logoDiv1'></div>
            <div className='texDiv'>Gmail</div>
          </div>
        </div>

        {/* search bar */}
        <div className='searchBar'>
          <input type="text" placeholder='Search mail' className='sear'/>
        </div>
      </div>
    </div>
  );
};

export default GHeader;
