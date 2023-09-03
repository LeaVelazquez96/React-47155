import PropTypes from "prop-types";

const ItemDetail = ({item}) =>{
    if(!item) return null;

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
};
export default ItemDetail;