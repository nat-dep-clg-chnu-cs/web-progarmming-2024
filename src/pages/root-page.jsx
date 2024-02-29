
import {NavLink, Outlet} from "react-router-dom";
import Card from "../shared/Card.jsx";

const RootPage = () => {
    return (
        <div>
            <Card>
                <NavLink to={'/app'} activeclassname={'active'}>
                    App
                </NavLink>
                <NavLink to={'/about'} activeclassname={'active'}>
                    Про додаток
                </NavLink>
                <NavLink to={'/params'} activeclassname={'active'}>
                    Демо параметрів
                </NavLink>
            </Card>

            <Outlet />

        </div>
    );
};

export default RootPage;
