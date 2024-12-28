import {useEffect, useState} from "react";
import fetchActiveUsers from "../../api/fetchActiveUsers.ts";
import ListGroup from 'react-bootstrap/ListGroup';
import Loader from "../../components/Loader/Loader.tsx";
import StartChat from "../../components/StartChat/StartChat.tsx";
import cn from "classnames";
import styles from "./OnlineClientsPage.module.scss";
import User from "../../interfaces/User.ts";
import UserCardLine from "../../components/UserCardLine/UserCardLine.tsx";




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
                    :  <ListGroup as="ul" className={styles.itemsGroup}>
                          { activeUsers.map((user : User) => (
                              <ListGroup.Item key={user.id} as="li" className={cn(styles.item, "d-flex justify-content-between align-items-center")} >
                                  <UserCardLine name={user.name} avatar={user.avatar}/>
                                  <StartChat />
                              </ListGroup.Item>
                                // <li key={user.id}>
                                //     <StartChat userName = {user.name}/>
                                // </li>
                          ))}
                       </ListGroup>
            }
        </>
    )
}

export default OnlineClientsPage


//Page where located active users. You can start a chat with them here