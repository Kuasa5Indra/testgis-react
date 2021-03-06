import ActiveLink from "../ActiveLink";

const Sidebar = () => {
    return (
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-heading">Menu</li>

                <ActiveLink to="/dashboard">
                    <i className="ri ri-map-2-fill"></i>
                    <span>Maps</span>
                </ActiveLink>

                <ActiveLink to="/locations">
                    <i className="ri ri-map-pin-2-fill"></i>
                    <span>Locations</span>
                </ActiveLink>

            </ul>

        </aside>
    );
}

export default Sidebar;