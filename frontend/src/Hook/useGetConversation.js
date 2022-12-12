import {useUserContext} from "../Context/UserContext";

export default function useGetConversation() {
    const [loggedUser, setLoggedUser] = useUserContext();
    const credentials = btoa(`${loggedUser.username}:${loggedUser.password}`);

    return function (topic) {
        return fetch(`http://localhost:1234/chat/${topic}`, {
            method: 'GET',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Authorization': `Basic ${credentials}`
            }
        })
            .then(res => res.json())
    }
}