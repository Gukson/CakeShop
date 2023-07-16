import Works from "../components/layout/works";
import About from "../components/layout/about";
import Logo from "../components/layout/logo";
import Footer from "../components/navigation/footer";
const Home = () => {
  return (
    <div>
      <Logo />
      <Works />
      <About />
      <Footer/>
    </div>
  );
};

export default Home;
