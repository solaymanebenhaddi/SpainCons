import { useEffect } from "react";
import About from "../Components/about/About";
import Header from "../Components/header/header";
import Navbar from "../Components/navbar/Navbar";
import AOS from "aos"
import "aos/dist/aos.css";
import Feautures from "../Components/features/Feautures";
import Services from "../Components/services/Services";
import Footer from "../Components/footer/Footer";
import ImpoExpo from "../Components/ImportExpo/ImpoExpo";
import Residancy from "../Components/residancy/Residancy";




const Home = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
  return (
    <div class="container-xxl bg-white p-0">
     <Navbar/>
     <Header/>
     <main id="main">
     <About/>
     <Feautures/>
     <Services/>
     <ImpoExpo/>
     <Residancy/>
     </main>
     <Footer/>
     </div>
    
  );
};

export default Home;
