import {Route, Routes} from "react-router-dom";
import Header from "../../composition/Header/Header.tsx";
import Footer from "../../composition/Footer/Footer.tsx";
import MainPage from "../../pages/MainPage/MainPage.tsx";


const RootRoutes = () => {
    return (
        <>
            <Header />
              <main>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                </Routes>
              </main>
            <Footer />
        </>
    )
}

export default RootRoutes