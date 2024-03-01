import React from 'react';
import './menu.css';

const Menu = ({ handleMenuClick }) => {
    const menuSource = [
        {
            menuName: 'Confitería y Pan Tradicional',
            id: '1-ZpCpHzFJ8xvasNq3i6rukQ5q3phjR8&usp=sharing'
        },
        {
            menuName: 'Confitería y café',
            id: '1155F-SEfM3XjFAHpPWIoYRBYfQJqIKo&usp=sharing'
        },
        {
            menuName:'Patisserie y Boulangerie',
            id:'18B22fA8xoS2MobjtFbGS7dkJqwD4C7o&usp=sharing'
        },
        {
            menuName:'Chocolatería y pastelería ',
            id:'1afFZw1qH__jYzXNrzTnTzCQayfqrIZA&usp=sharing'
        },
    ];

    const handleClick = (id) => {
        handleMenuClick(id);
    };

    return (
        <div className="menu">
            <div className="menu-items">
                {menuSource.map((category, index) => (
                    <div key={index} className="menu-category">
                        <div className="category-name">
                            <button
                                className="menu-item-button"
                                onClick={() => {
                                    handleClick(category.id);
                                }}
                            >
                                {category.menuName}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;