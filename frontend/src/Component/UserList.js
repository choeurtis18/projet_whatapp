import {useEffect, useState} from "react";
import {useUserContext} from "../Context/UserContext";
import {NavLink} from "react-router-dom";

import useBuildTopicName from "../Hook/useBuildTopicName";
import useGetUserList from "../Hook/useGetUserList";

export default function UserList() {
    const [userList, setUserList] = useState([]);
    const buildTopicName = useBuildTopicName();

    const getUserList = useGetUserList();

    useEffect(() => {
        getUserList().then(data => {
            setUserList(data.users);
        });

        /*
        const url = new URL('http://localhost:9999/.well-known/mercure');
        url.searchParams.append('topic', 'https://example.com/my-private-topic');

        const eventSource = new EventSource(url, {withCredentials: true});
        eventSource.onmessage = handleMessage;

        return () => {
            eventSource.close()
        }
        */

    }, [])

    return (
        <div>
            <h1 className='m-5 text-center'>Ping a user</h1>
            {userList.map((user, index) => (
                <NavLink key={index} to={`/chat/${buildTopicName(user.id)}`}
                            className='text-black text-decoration-none w-100 d-block text-center 10'>
                    {user.username}
                </NavLink>

            ))}
        </div>
    )
}