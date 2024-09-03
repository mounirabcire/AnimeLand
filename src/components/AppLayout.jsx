import { Outlet } from "react-router-dom";

function AppLayout() {
    return (
        <div className="grid--12">
            <Outlet />
        </div>
    );
}

export default AppLayout;
