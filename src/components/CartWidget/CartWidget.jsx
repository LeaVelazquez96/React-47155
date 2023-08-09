const CartWidget = ()=>{
    return <div>
        <button type="button" className="btn btn-outline position-relative">
            <i className="bi bi-cart4"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            3+<span class="visually-hidden">unread messages</span>
            </span>
        </button>
        </div>  
};


export default CartWidget;