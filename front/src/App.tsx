import styles from "./styles/general.module.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import InputForm from "./components/InputForm/InputForm.tsx";
function App() {

  return (
    <div className={styles.appWrapper}>
      <h1 className={styles.article}>Hello World!</h1>
      <InputForm />
    </div>
  )
}

export default App