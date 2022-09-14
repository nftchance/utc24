import DashboardSidebar from "./Sidebar/DashboardSidebar";
import DashboardContent from "./Content/DashboardContent";

import "./Dashboard.css"

const Dashboard = () => { 
    return (
        <div className="dashboard">
            <DashboardSidebar />
            <DashboardContent />
        </div>
    );
}

export default Dashboard