import {useEffect, useState} from "react";
import StartChat from "./components/StartChat/StartChat.tsx";
import fetchActiveUsers from "./api/fetchActiveUsers.ts";
import User from "./interfaces/User.ts";
import Loader from "./components/Loader/Loader.tsx";
import styles from "./styles/general.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [activeUsers, setActiveUsers] = useState<User[]>([]);

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
    <div className={styles.appWrapper}>
      <h1 className={styles.article}>Online</h1>
      {
        activeUsers.length === 0
            ? <Loader/>
            : <ul>
              {activeUsers.map((placement) => (
                  <li key={placement.id}>
                    <StartChat placement={placement} userName={placement}/>
                  </li>
              ))}
            </ul>
      }

    </div>
    )
}

export default App


