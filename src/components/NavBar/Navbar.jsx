import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <h1>
                    <Link to="/">Libreria Valle</Link>
                </h1>
                <ul>
                    <li>
                        <NavLink to="/category/resmas"> Resmas </NavLink>
                    </li>
                    <li>
                    <NavLink to="/category/toners"> Toners </NavLink>
                    </li>
                    <li>
                    <NavLink to="/category/libreria"> Libreria </NavLink>
                    </li>
                </ul>
            </nav>
            <div>CartWidget</div>
        </div>
    )
}

export default Navbar; 