import Cards from "./Card";
import Register from "./Register";
import HeaderLogado from "./HeaderLogado";
import "bootstrap/dist/css/bootstrap.min.css";

function Logado() {
    return (
        <div className="App">
            <HeaderLogado />
            <Register />
            <Cards />
        </div>
    );
}
export default Logado;
