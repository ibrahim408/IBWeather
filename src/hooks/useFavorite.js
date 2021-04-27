import {useState, useEffect} from 'react';

const useFavorite = function(){
    //{locationName: 'Fresno',gridPoint: ["TOP",31,80]}
    const [favorites, setFavorites] = useState([]);

    return {favorites, setFavorites};
};

export default useFavorite;
