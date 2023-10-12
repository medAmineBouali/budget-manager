import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useSearchParams, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import AuthForm from "../componants/Auth/AuthForm";
import { userActions } from "../componants/Auth/AuthState";
import { dataActions } from "../Data/DataSlice";
import { fireStore } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const AuthPage = () => {
  const Dispatch = useDispatch();
  const [errorMessage, setError] = useState(null);
  const [searchParam,setSearchParams] = useSearchParams();
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const navigate = useNavigate();

  const isLogin = searchParam.get("mode") === "login";

  const handleSubmit = async (
    event,
    email,
    password,
    passwordMatch,
    userName
  ) => {
    event.preventDefault();

    if (isLogin) {
      try {
        const userCredentials = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        console.log(userCredentials);
        if (userCredentials) {
          Dispatch(userActions.setUser(userCredentials.user));
          console.log("rerouting");
          navigate("/Home");
          setTimeout(() => {
            navigate(`/${userCredentials.user.displayName}/budget_manager`);
          }, 3500);
          if (auth.currentUser) {
            const userDocRef = doc(fireStore, "users", auth.currentUser.uid);
            const userDocSnap = await getDoc(userDocRef);

            if (userDocSnap.exists()) {
              const userData = userDocSnap.data();
              Dispatch(dataActions.initializeData({ ...userData }));
            }
          }
        }
      } catch (error) {
        setError(error.message);
        console.log(error.message);
      }

      // console.log(auth.currentUser.displayName);
    } else {
      if (passwordMatch !== password) {
        setError("Error: passwords don't match");
      } else {
        try {
          const userCredentials = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          await setDoc(doc(fireStore, "users", userCredentials.user.uid), {
            balance: 0,
            monthlyIncome: 0,
            expenses: [],
          });
          setSearchParams("mode", "login");
           // Update the browser's URL manually
           const newSearchParams = new URLSearchParams(window.location.search);
           newSearchParams.set("mode", "login");
           navigate(window.location.pathname + "?" + newSearchParams.toString());
          console.log(userCredentials);
        } catch (error) {
          setError(error.message);
          console.log(error.message);
        }
        try {
          const userCredentials = await updateProfile(auth.currentUser, {
            displayName: userName,
          });
          console.log(userCredentials);
        } catch (error) {
          setError(error.message);
          console.log(error.message);
        }
      }
    }
  };
  return (
    <>
      {!isLoggedIn && (
        <AuthForm
          onSubmit={handleSubmit}
          isLogin={isLogin}
          setError={setError}
          Message={errorMessage}
        />
      )}
      {/*TODO:account creation success message */}
    </>
    //TODO: replace the welcome text with proper welcome page
  );
};
export default AuthPage;
