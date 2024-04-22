import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CitiesProvider } from "../contexts/CitiesContext";

import Homepage from "../pages/Homepage/Homepage";
import Product from "../pages/Product/Product";
import Pricing from "../pages/Pricing/Pricing";
import Login from "../pages/Login/Login";
import AppLayout from "../pages/AppLayout/AppLayout";
import NotFound from "../pages/NotFound/NotFound";
import CityList from "./CityList/CityList";
import CountryList from "./CountryList/CountryList";
import City from "./City/City";
import Form from "./Form/Form";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
