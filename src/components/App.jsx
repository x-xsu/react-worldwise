import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { AuthProvider } from "../contexts/FakeAuthContext";
import { CitiesProvider } from "../contexts/CitiesContext";
import ProtectedRoute from "../pages/ProtectedRoute/ProtectedRoute";

import CityList from "./CityList/CityList";
import CountryList from "./CountryList/CountryList";
import City from "./City/City";
import Form from "./Form/Form";
import SpinnerFullPage from "./SpinnerFullPage/SpinnerFullPage";

const Homepage = lazy(() => import("../pages/Homepage/Homepage"));
const Product = lazy(() => import("../pages/Product/Product"));
const Pricing = lazy(() => import("../pages/Pricing/Pricing"));
const Login = lazy(() => import("../pages/Login/Login"));
const AppLayout = lazy(() => import("../pages/AppLayout/AppLayout"));
const NotFound = lazy(() => import("../pages/NotFound/NotFound"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="product" element={<Product />} />
              <Route path="pricing" element={<Pricing />} />
              <Route path="login" element={<Login />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
