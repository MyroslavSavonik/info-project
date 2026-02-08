import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/education">Education</NavLink>
            <NavLink to="/skills">Skills</NavLink>
        </nav>
    );
}
