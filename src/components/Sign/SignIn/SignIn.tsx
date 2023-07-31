import { FC } from "react";
import { useForm } from "react-hook-form";
import { axiosWithoutAuth } from "axiosConfig";
import { useAppDispatch } from "hook";
import { addLocalStorage, fetchMe } from "store/userSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "../Sign.scss";

interface SignInProps {
  onCloseClick: () => void;
  onRegisterClick: () => void;
}
const SignIn: FC<SignInProps> = ({ onCloseClick, onRegisterClick }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<LogInFormType>({ mode: "onChange" });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitLogIn = async (values: LogInFormType) => {
    try {
      const response: any = await axiosWithoutAuth.post("/auth/", values);
      const data = response.data as Authorization;
      addLocalStorage(data);
      reset({ ...values });
      toast("Login is successful", {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/");
      onCloseClick();
      dispatch(fetchMe());
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        setError("username", {
          type: "custom",
          message: "Wrong username or password",
        });
        setError("password", {
          type: "custom",
          message: "Wrong username or password",
        });
      }
      console.log(error);
    }
  };

  return (
    <div className="sign__wrapper">
      <form onSubmit={handleSubmit(onSubmitLogIn)} className="sign__sign_in">
        <h1>login</h1>
        <label>
          username <br />{" "}
          <input
            type="text"
            {...register("username", {
              required: "Enter username",
              maxLength: { value: 150, message: "Max length is 150" },
            })}
          />
          <h6>{errors.username?.message}</h6>
        </label>
        <label>
          password <br />{" "}
          <input
            type="password"
            {...register("password", {
              required: "Enter password",
              maxLength: { value: 128, message: "Max length is 128" },
              minLength: { value: 8, message: "Min length is 8" },
            })}
          />
          <h6>{errors.password?.message}</h6>
        </label>
        <button type="submit" className="pointer">
          sign in
        </button>
        <p className="pointer" onClick={onRegisterClick}>
          Don't have an account?
        </p>
        <p className="sign__exit pointer" onClick={onCloseClick}>
          ✖
        </p>
      </form>
    </div>
  );
};

export default SignIn;
