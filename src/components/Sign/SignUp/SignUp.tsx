import { FC } from "react";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "hook";
import { createAnonymousUser, createUser } from "store/userSlice";
import { axiosWithAuth } from "axiosConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Sign.scss";
import { SignUpFormType } from "types/form";
import { AvailableResult } from "types/available";

interface SignUpProps {
  onLoginClick: () => void;
  onCloseClick: () => void;
}
const SignUp: FC<SignUpProps> = ({ onCloseClick, onLoginClick }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<SignUpFormType>({ mode: "onSubmit" });
  axiosWithAuth;
  const onRegister = async (values: SignUpFormType) => {
    try {
      if (!localStorage.getItem("refreshToken")) {
        dispatch(createAnonymousUser());
      }
      const emailAvailable = await checkAvailability(values.email, "email");
      const usernameAvailable = await checkAvailability(
        values.username,
        "username"
      );

      if (Object.keys(errors).length !== 0) {
        return;
      }

      if (!emailAvailable) {
        setError("email", {
          type: "custom",
          message: "This email is not available",
        });
        return;
      }

      if (!usernameAvailable) {
        setError("username", {
          type: "custom",
          message: "This username is not available",
        });
        return;
      }
      if (values.new_password !== values.new_password_again) {
        setError("new_password_again", {
          type: "custom",
          message: "Passwords do not match",
        });
        return;
      }
      dispatch(createUser(values));
      reset({ ...values });
      toast("Registration is successful", {
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
    } catch (error) {
      console.log(error);
    }
  };

  const checkAvailability = async (
    value: string,
    property: "email" | "username"
  ) => {
    try {
      const response: any = await axiosWithAuth.get(
        `/users/${property}/available/`,
        { params: { [property]: value } }
      );
      return response.data.available as AvailableResult;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign__wrapper">
      <form onSubmit={handleSubmit(onRegister)} className="sign__sign_up">
        <h1>register</h1>
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
          email <br />{" "}
          <input
            type="text"
            {...register("email", {
              required: "Enter email",
              maxLength: { value: 254, message: "Max length is 254" },
              pattern: {
                value:
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: "Invalid email address",
              },
            })}
          />
          <h6>{errors.email?.message}</h6>
        </label>
        <label>
          password <br />{" "}
          <input
            type="password"
            {...register("new_password", {
              required: "Enter password",
              maxLength: { value: 128, message: "Max length is 128" },
              minLength: { value: 8, message: "Min length is 8" },
            })}
          />
          <h6>{errors.new_password?.message}</h6>
        </label>
        <label>
          password again <br />{" "}
          <input
            type="password"
            {...register("new_password_again", {
              required: "Enter password again",
              maxLength: { value: 128, message: "Max length is 128" },
              minLength: { value: 8, message: "Min length is 8" },
            })}
          />
          <h6>{errors.new_password_again?.message}</h6>
        </label>
        <button type="submit" className="pointer">
          sign up
        </button>
        <p className="pointer" onClick={onLoginClick}>
          Already have an account?
        </p>
        <p className="sign__exit pointer" onClick={onCloseClick}>
          ✖
        </p>
      </form>
    </div>
  );
};

export default SignUp;
