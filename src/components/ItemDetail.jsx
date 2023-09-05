import PropTypes from "prop-types";

const ItemDetail = ({item}) =>{
    if(isLoading){
        return <h2>Loading...</h2>
    }
    if(!item){
        return null
    };

    return(
    <div>
        <h1>{item.name} </h1>
        <p>${item.price} </p>
        <p>{item.category} </p>
    </div>
    );

}; 

ItemDetail.PropTypes={
    item: PropTypes.object.isRequired,
    isLoading: PropTypes.bool,
};
export default ItemDetail;