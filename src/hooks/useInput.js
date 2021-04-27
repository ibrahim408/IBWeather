import {useState} from 'react';
import { isZipCode } from "../helper/utility";

function useInput(setFavorites,setZipCode,gridPoint,favorites,locationName) {
    const [searchInput,setSearchInput] = useState('');
    const [tab,setTab] = useState('hourly');

    const onChange = (event) => {
        setSearchInput(event.target.value)
    }
    const onSubmit = () => {
        if (isZipCode(searchInput)){
            setZipCode([searchInput,searchInput]);
        }
    };
    
    const onSave = () => {
        if (gridPoint[0] && gridPoint[1] && gridPoint[2]){
            if (!favorites.some(favorite => favorite.locationName === locationName)){
                setFavorites(favorites.concat({locationName,gridPoint}))
            };
        } else {
            console.log('no data save sir');
        }
    };

    const onClickTab = (tb) => {
        setTab(tb);
    };  
    return {
        searchInput,
        tab,
        setSearchInput,
        setTab,
        onChange,
        onSubmit,
        onSave,
        onClickTab
    }
}

export default useInput;