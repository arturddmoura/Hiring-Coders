import Header from "./components/Header";
import Cards from "./components/Card";
import Register from "./components/Register";
import "bootstrap/dist/css/bootstrap.min.css";

//https://store.steampowered.com/api/appdetails?appids=550
function App() {
    return (
        <div className="App">
            <Header />
            <Register />
            <Cards />
        </div>
    );
}
export default App;
