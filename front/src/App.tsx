import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles/general.module.scss";
import RootRoutes from "./routes/RootRoutes/RootRoutes.tsx";
//import LoginPage from "./pages/LoginPage/LoginPage.tsx";



function App() {


    return (
        <div className={styles.appWrapper}>
          {/*<LoginPage />*/}

          <RootRoutes />
          {/*<div className={styles.chatWrapper}>*/}

          {/*</div>*/}
        </div>
    )
}

export default App


