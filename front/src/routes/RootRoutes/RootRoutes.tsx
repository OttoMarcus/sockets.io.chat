import {Route, Routes} from "react-router-dom";
import Header from "../../composition/Header/Header.tsx";
import Footer from "../../composition/Footer/Footer.tsx";
import MainPage from "../../pages/MainPage/MainPage.tsx";
import OnlineClientsPage from "../../pages/OnlineClientsPage/OnlineClientsPage.tsx";


const RootRoutes = () => {
    return (
        <>
            <Header />
              <main>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/chat" element={<OnlineClientsPage />} />
                </Routes>
              </main>
            <Footer />
        </>
    )
}

export default RootRoutes