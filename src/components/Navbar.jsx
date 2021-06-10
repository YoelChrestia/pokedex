import React from 'react';

import {useContext} from 'react';
import FavoriteContext from '../contexts/favoriteContext';

const Navbar = () => {
    const {favoritePokemons} = useContext(FavoriteContext);

    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"

    return(
        <nav>
            <div />
            <div>
            <img src={imgUrl} alt="pokeapi-logo"
            className="navbar-img"
            >
            </img>
            </div>
            <div>💖 {favoritePokemons.length}</div>
        </nav>
    )
}

export default Navbar;