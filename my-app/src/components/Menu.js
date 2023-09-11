import React from 'react';
import recipes from '../recipes';

const Menu = () => {
    return (
        <div className='menu-container'>
            <div className='section'>
                <h2>This week specials!</h2>
                <button className='button'>Order Menu</button>
            </div>
            <div className='card'>
                {recipes.map(recipe => <div key={recipe.id} className='menu-item'>
                    <img src={recipe.image} alt='' />
                    <div className='card-section'>
                        <div className='card-top'>
                            <h3>{recipe.title}</h3>
                            <p className='price'>${recipe.price}</p>
                        </div>
                        <p>{recipe.description}</p>
                        <button className='order-btn'>Order Now</button>
                    </div>
                </div>)
            }
            </div>
        </div>
    );
};

export default Menu;