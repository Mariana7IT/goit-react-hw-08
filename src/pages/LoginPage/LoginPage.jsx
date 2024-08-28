import { Field, Form, Formik } from "formik";
import css from "./LoginPage.module.css";
import { logIn } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { useEffect } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogin = useSelector(selectIsLoggedIn);
  useEffect(() => {
    if (isLogin) {
      navigate("/contacts");
    }
  }, [isLogin, navigate]);

  return (
    <>
      <div className={css.div}>
        <h2 className={css.title}>LOGIN</h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            dispatch(logIn(values));
          }}
        >
          <Form className={css.form}>
            <label htmlFor="email" className={css.label}>
              Email
              <Field
                name="email"
                type="email"
                placeholder="Please enter your email"
                className={css.input}
              />
            </label>

            <label htmlFor="password" className={css.label}>
              Password
              <Field
                name="password"
                type="password"
                placeholder="Please enter your password"
                className={css.input}
              />
            </label>
            <button className={css.btn} type="submit">
              Log In
            </button>
            <Link className={css.link} to="/register">
              {" "}
              Do not have an account? Register here
            </Link>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default LoginPage;
