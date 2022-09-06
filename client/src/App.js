import "./App.css";
import TitleBar from "./components/TitleBar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, Zoom } from "react-toastify";
import ShortenForm from "./components/ShortenForm";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
    return (
        <>
            <Header text={"Portal URL"}/>
            <ToastContainer
                position="top-center"
                transition={Zoom}
                className="toast-position"
            />
            <ShortenForm />
            <Footer />
        </>
    );
}

export default App;
