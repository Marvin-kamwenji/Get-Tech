import ChangeLanguageNav from "../components/ChangeLanguageNav";
import Nav from "../components/Nav";
import SearchNav from "../components/SearchNav";

function HomePage() {
return(
    <>
      <h2>Hello, this is homepage</h2>
      <ChangeLanguageNav />
      <SearchNav />
      <Nav />  
    </>

);
}

export default HomePage;