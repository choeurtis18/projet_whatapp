import {useState, createContext} from "react";
import React from "react";

export const userContext = React.createContext();

export default function UserProvider(props) {
    const [loggedUser, setLoggedUser] = useState({"id": "", "password": ""});

    return (
        <userContext.Provider value={[loggedUser, setLoggedUser]}>
            {props.children}
        </userContext.Provider>
    )
}

export const useUserContext = () => React.useContext(userContext)
