import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <NavLink to="/" activeClassName={classes.active}>
                    <img src="https://www.imgawards.com/wp-content/uploads/2015/06/imga_logos_3_red.png" alt="logo" />
                </NavLink>
                </div>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <NavLink to="/quotes" activeClassName={classes.active}>
                            All Quotes
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="new-quote" activeClassName={classes.active}>
                            Add a Quote
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
};

export default MainNavigation;