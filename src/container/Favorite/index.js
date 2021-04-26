function Favorite(props){
    const {favorites,setLocationName,setGridPoint} = props;

    const onClick = (index) => {
        setLocationName(favorites[index].locationName)
        setGridPoint(favorites[index].gridPoint);
    };
    
    return (
        <div style={{marginTop: 50}}>
            {
                favorites.map((favorite,index) => {
                    return <li onClick={ () => onClick(index)}>{favorite.locationName}</li>
                })
            }
        </div>
    );
}

export default Favorite;
