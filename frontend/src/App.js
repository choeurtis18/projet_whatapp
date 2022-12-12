import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NeedAuth from "./Auth/NeedAuth";
import UserList from "./Component/UserList";
import ChatRoom from "./Component/ChatRoom";
import Login from "./Auth/Login";
import UserProvider from "./Context/UserContext";

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={
                        <NeedAuth>
                            <UserList/>
                        </NeedAuth>
                    }/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/chat/:topic' element={
                        <NeedAuth>
                            <ChatRoom/>
                        </NeedAuth>
                    }/>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
