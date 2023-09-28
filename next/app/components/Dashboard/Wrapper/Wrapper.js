import Sidebar from "./Sidebar";
import Content from "./Content";

import "../../../style/Dashboard/Wrapper/Wrapper.css";

const Wrapper = ({ children }) => { 
    return (
        <div className="dashboard">
            <Sidebar />
            <Content children={children} />
        </div>
    );
}

export default Wrapper