import {useState, useEffect} from 'react';

const useFavorite = function(){
    const [favorites, setFavorites] = useState([{locationName: 'Fresno',gridPoint: ["TOP",31,80]}]);

    return {favorites, setFavorites};
};

export default useFavorite;
