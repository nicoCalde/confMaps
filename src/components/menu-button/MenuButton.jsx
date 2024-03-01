import React, { useState } from 'react';
import './menu-button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronUp, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import Menu from '../menu/Menu';

const MenuButton = ({ handleMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuSelection = (id, menuName) => {
    setSelectedMenuItem(menuName);
    handleMenuClick(id);
    toggleMenu();
  };

  return (
    <div className="button-container">
      <div className={`floating-button ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className='category'>{selectedMenuItem || 'Confiterías de BA'}</span>
        <span className="menu-icon">
          {isOpen ? 
            <FontAwesomeIcon icon={faCircleChevronDown} size='2xl' style={{ color: '#F19F10' }} /> : 
            <FontAwesomeIcon icon={faCircleChevronUp} size='2xl' style={{ color: '#F19F10' }} />}
        </span>
      </div>
      <div className="menu-container">
        {isOpen && <Menu handleMenuClick={handleMenuSelection} />}
      </div>
    </div>
  );
};

export default MenuButton;