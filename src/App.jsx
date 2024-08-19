import { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import ContactsPage from "./pages/ContactsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { getMeThunk } from "./redux/auth/operations";
import { PrivateRoute } from "./Routes/PrivateRoute";
import { PublucRoute } from "./Routes/PublicRoute";
import { selectIsRefreshed } from "./redux/auth/selectors";
import Loader from "./components/Loader/Loader";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshed);
  useEffect(() => {
    dispatch(getMeThunk());
  }, [dispatch]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Route>
          <Route
            path="login"
            element={
              <PublucRoute>
                <LoginPage />
              </PublucRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublucRoute>
                <RegisterPage />
              </PublucRoute>
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
