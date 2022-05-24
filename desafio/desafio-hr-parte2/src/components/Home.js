import Cards from "./Card";
import Register from "./Register";
import Header from "./Header";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
    return (
        <div className="App">
            <Header />
            <Register />
            <Cards />
        </div>
    );
}
export default Home;
