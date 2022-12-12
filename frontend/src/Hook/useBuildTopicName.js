import useGetTopicFromUsers from "./useGetTopicFromUsers";
import {useUserContext} from "../Context/UserContext";

export default function useBuildTopicName() {
    const [loggedUser, setLoggedUser] = useUserContext();
    const currentUserId = loggedUser.id;

    const getTopicFromUsers = useGetTopicFromUsers();

    return function (otherUserId) {
        return getTopicFromUsers(currentUserId, otherUserId);
    }
}