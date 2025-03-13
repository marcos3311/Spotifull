import { useSelector } from "react-redux";
import AuthorizeForm from "./AuthorizeForm";
import { selectIsAuth } from "../../Features/user/userSlice";

export default function Login() {
    const isAuth = useSelector(selectIsAuth);
    return (
      <div>
        <h1>Login</h1>
        {
          !isAuth ? 
          <AuthorizeForm /> :
          <h2>Already logged!</h2>
        }
      </div>
    );
}