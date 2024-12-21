import { useState } from "react";
import StartChat from "./components/StartChat/StartChat.tsx";
import styles from "./styles/general.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  const [activeUsers, setActiveUsers] = useState(['Alex', 'Donald', 'Tom', 'Jane']);

    return (
    <div className={styles.appWrapper}>
      <h1 className={styles.article}>Online</h1>
        <ul>
        {activeUsers.map((placement, idx) => (
            <li key = {idx}>
                <StartChat placement={placement} userName={placement} />
            </li>
        ))}
        </ul>
    </div>
  )
}

export default App


