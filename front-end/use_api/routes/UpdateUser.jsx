import { useLocation, useSearchParams } from "react-router-dom";

function UpdateUser() {
    const location = useLocation();
    const params = new useSearchParams(location.search);
    const user = JSON.parse(params.get("data"))

    return (
        <div className="main">
            <h1><a href="/">Update</a></h1>
            <div className="update">
                {user}
            </div>
        </div>
    );
};

export default UpdateUser;