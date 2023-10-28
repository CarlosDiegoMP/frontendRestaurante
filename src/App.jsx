import "./App.css";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
import CambiarPassword from "./components/cambiarPassword/cambiarPassword";
import CrearUsuario from "./components/CrearUsuario";
import RegistrarUsuario from "./components/RegistrarUsuario/RegistrarUsuario";
import { Routes, Route } from "react-router-dom";
import ProtectorDeRutas from "./services/ProtectorDeRutas";
import Dashboard from "./components/Dashboard/Dashboard";
import Inicio from "./Views/Inicio/Inicio";
import Usuario from "./Views/Usuario/Usuario";
import PaymentType from "./components/PaymentType/PaymentType";
import Productos from "./Views/Productos/Productos";

import ManageProfile from "./components/ManageProfile/ManageProfile";
import TarjetaDeProductoDePedido from "./components/TarjetaDeProductoDePedido/TarjetaDeProductoDePedido";
import polloEnteroAlaBrasa from "/PolloEnteroALaBrasa.jpeg";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<FormularioLogin />} />
        <Route
          element={
            <ProtectorDeRutas permisos={localStorage.getItem("token")} />
          }
        >
          <Route
            path="/"
            element={
              <Dashboard>
                <Inicio />
              </Dashboard>
            }
          />
          <Route>
            <Route
              path="/usuario"
              element={
                <Dashboard>
                  <Usuario />
                </Dashboard>
              }
            />
            <Route
              path="/registro"
              element={
                <Dashboard>
                  <RegistrarUsuario />
                </Dashboard>
              }
            />
          </Route>

          <Route>
            <Route
              path="/productos"
              element={
                <Dashboard>
                  <Productos />
                </Dashboard>
              }
            />
          </Route>
          <Route
            path="/cambiarContraseña"
            element={
              <Dashboard>
                <CambiarPassword />
              </Dashboard>
            }
          />
        </Route>

        <Route path="*" element={<div>ruta no encontrada</div>} />
        <Route path="/tipodepago/registro" element={<PaymentType />} />
        <Route path="/rutaDeGestionDePerfil" element={<ManageProfile />} />
        <Route
          path="/rutaDeTarjetaDeProducto"
          element={
            <div>
              <TarjetaDeProductoDePedido
                imgDelProducto={polloEnteroAlaBrasa}
                tituloDelProducto="Pollo Entero A La Brasa"
                precioDelProducto="75.00"
              />
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
