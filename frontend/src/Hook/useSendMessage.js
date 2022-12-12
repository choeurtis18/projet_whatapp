import {useUserContext} from "../Context/UserContext";

export default function useSendMessage() {
    const [loggedUser, setLoggedUser] = useUserContext();
    const credentials = btoa(`${loggedUser.username}:${loggedUser.password}`);

    return function (topic, content) {
        return fetch(`http://localhost:1234/set-message/${topic}`, {
            method: 'POST',
            credentials: 'include',
            mode: 'cors',
            headers: {
                'Authorization': `Basic ${credentials}`
            },
            body: JSON.stringify({
              content: content
           })
        })
            .then(res => res.json())
    }
}