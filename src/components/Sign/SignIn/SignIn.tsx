import { FC } from "react";
import "../Sign.scss";
import { useForm } from "react-hook-form";
import { axiosWithoutAuth } from "axiosConfig";
import { useAppDispatch } from "hook";
import { addLocalStorage, fetchMe } from "store/userSlice";

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

  const onSubmitLogIn = async (values: LogInFormType) => {
    try {
      const response: any = await axiosWithoutAuth.post("/auth/", values);
      console.log(response);
      const data = response.data as Authorization;
      addLocalStorage(data);
      reset({ ...values });
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
