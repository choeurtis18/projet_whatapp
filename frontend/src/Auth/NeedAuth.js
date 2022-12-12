import {Navigate, useLocation} from "react-router-dom";
import {useUserContext} from "../Context/UserContext";

export default function NeedAuth(props) {
    let location = useLocation();
    const [loggedUser, setLoggedUser] = useUserContext();

    if (loggedUser) {
        return props.children;
    } else {
        return <Navigate to='/login' setLoggedUser={setLoggedUser} state={{from: location}}/>
    }
}