import useAuth from "./hooks/useAuth.tsx";
import RootRoutes from "./routes/RootRoutes/RootRoutes.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./styles/general.module.scss";



function App() {
    const isAuthenticated = useAuth();

    return (
        <div className={styles.appWrapper}>
            {isAuthenticated ? <RootRoutes /> : <LoginPage />}
        </div>
    )
}

export default App


