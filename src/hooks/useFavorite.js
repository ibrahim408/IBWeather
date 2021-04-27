import {useState, useEffect} from 'react';
import useLocalStorage from "./useLocalStorage";

const useFavorite = function(){
    const [storedFavorites, setStoredFavorites] = useLocalStorage('favorites',JSON.stringify([]) );
    const [favorites, setFavorites] = useState(JSON.parse(storedFavorites));

    useEffect(() => {
        if (favorites.length !== 0){
            setStoredFavorites(JSON.stringify(favorites))
        }
    },[favorites])
    
    return {favorites, setFavorites};
};

export default useFavorite;
