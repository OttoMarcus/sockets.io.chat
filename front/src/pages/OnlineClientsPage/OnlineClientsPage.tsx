import {useEffect, useState} from "react";
import fetchActiveUsers from "../../api/fetchActiveUsers.ts";

import Loader from "../../components/Loader/Loader.tsx";
import StartChat from "../../components/StartChat/StartChat.tsx";

import styles from "OnlineClientsPage.module.scss";
import User from "../../interfaces/User.ts";




const OnlineClientsPage = () => {

    const [activeUsers, setActiveUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const list = await fetchActiveUsers();
                if (list && list.length > 0) {
                    setActiveUsers(list);
                }
            } catch (err) {
                console.error("Error fetching active users:", err);
            }
        };
        getUsers();
    }, []);


    return (
        <>
            <h1 className={styles.article}>Online</h1>
            {
                activeUsers.length === 0
                    ? <Loader/>
                    : <ul>
                        { activeUsers.map((user : User) => (
                            <li key={user.id}>
                                <StartChat userName = {user.name}/>
                            </li>
                        ))}
                    </ul>
            }
        </>
    )
}

export default OnlineClientsPage