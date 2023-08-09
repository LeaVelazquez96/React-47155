import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            <a className="navbar-brand">Tienda Libreria Valle</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a href="#" className="nav-link active">Resmas</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link active">Toners</a>
                </li>
                <li className="nav-item">
                    <a href="#" className="nav-link active">Cartuchos</a>
                </li>
            </ul>
            <CartWidget/>
            </div>
        </nav>

        
    )
}

export default Navbar; 