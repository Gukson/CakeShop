import Works from "../components/layout/works";
import About from "../components/layout/about";
import Logo from "../components/layout/logo";
import Footer from "../components/navigation/footer";
import Cakes from "../components/layout/cakes";
const Home = () => {
  return (
    <div>
      <Cakes/>
      <Logo />
      <Works />
      <About />
      <Footer/>
    </div>
  );
};

export default Home;
