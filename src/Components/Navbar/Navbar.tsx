import { Link, NavLink } from "react-router-dom";

export function Navbar () {
    return (
        <div className="nav-container">
        <header className="nav-header">
            <h1><Link to="/">Holly Knox</Link></h1>
            <nav className="nav">
                <NavLink className="nav-link" to="/">About</NavLink>
                <NavLink className="nav-link" to="/projects">Projects</NavLink>
                <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </nav>
        </header>
        </div>
    )
};