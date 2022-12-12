import {useUserContext} from "../Context/UserContext";

export default function useGetCurrentUserId() {
    const [loggedUser, setLoggedUser] = useUserContext();
    
    return loggedUser.id;
}