import "./Favorite.css";

function Favorite(props){
    const {favorites,setLocationName,setGridPoint} = props;

    const onClick = (index) => {
        setLocationName(favorites[index].locationName)
        setGridPoint(favorites[index].gridPoint);
    };
    
    return (
        <div className="favorite-container">
            <h2>Favorites</h2>
            <ul>
                {
                    favorites.map((favorite,index) => {
                        return <li onClick={ () => onClick(index)}>{favorite.locationName}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default Favorite;
