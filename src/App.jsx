import { Route, Routes } from "react-router-dom";
import Header from "./components/Core/Header";
import Footer from "./components/Core/Footer";
import VideoModal from "./components/Modals/VideoModal";
import Home from "./components/Home";
import Barber from "./components/Barber";
import BarberDetails from "./components/BarberDetails";
import About from "./components/About";
import Price from "./components/Price";
import Service from "./components/Service";
import Login from "./components/Login";
import Register from "./components/Register";
import Gallery from "./components/Gallery";
import CreateBarber from "./components/CreateBarber";
import EditBarber from "./components/EditBarber";
import DeleteBarber from "./components/DeleteBarber";
import Logout from "./components/Logout";
import Profile from "./components/Profile";
import { AuthProvider } from "./contexts/authContext";


function App() {

    return (
        <AuthProvider>
            <>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/prices" element={<Price />} />
                    <Route path="/team" element={<Barber />} />
                    <Route path="/barber/:id" element={<BarberDetails />} />
                    <Route path="/service" element={<Service />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/create" element={<CreateBarber />} />
                    <Route path="/edit/:id" element={<EditBarber />} />
                    <Route path="/delete/:id" element={<DeleteBarber />} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
                <VideoModal/>
                <Footer/>
            </>
        </AuthProvider>
    );
}

export default App;