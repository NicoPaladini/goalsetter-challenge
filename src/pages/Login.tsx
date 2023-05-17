import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import FormInput from "../components/FormInput";
import incorrectPassword from "../images/incorrectPassword.png";
import { LOGIN_FORM_FIELD } from "../constants/formNames";
import {
  validateEmail,
  validatePhoneNumberOrEmail,
} from "../helpers/validateEmail";
import useLogin from "../hooks/useLogin";
import Spinner from "../icons/Spinner";
import isEmptyObject from "../helpers/isEmptyObject";

interface FormData {
  user: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { isLoading, success, error, doLogin } = useLogin();
  const {
    handleSubmit,
    watch,
    setError,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const userInput = watch(LOGIN_FORM_FIELD.USER);
  const passwordInput = watch(LOGIN_FORM_FIELD.PASSWORD);
  const disabledSubmit =
    !passwordInput || !userInput || isLoading || !isEmptyObject(errors);

  const validateLoginForm = () => {
    setError(LOGIN_FORM_FIELD.USER, {
      type: "email check",
      message: "Enter a valid Email Address or Phone Number",
    });
  };

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    if (
      !validatePhoneNumberOrEmail(formData.user) &&
      !validateEmail(formData.user)
    ) {
      validateLoginForm();
    }
    if (isEmptyObject(errors)) {
      doLogin(formData.user, formData.password);
    }
  };

  useEffect(() => {
    if (!isLoading && success) {
      // Redirect once login call is successful
      navigate("/login/success");
    }
  }, [success, isLoading, navigate]);

  return (
    <div className="w-full max-w-md">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-10 bg-white shadow-2xl rounded-3xl p-10"
      >
        <div className="pb-4">
          <label className="text-gray-600 block text-2xl font-extrabold">
            Log in
          </label>
        </div>
        {error && !isLoading && (
          <div className="bg-goalsetter-gray-200 rounded-xl p-3">
            <div className="flex items-center">
              <img
                src={incorrectPassword}
                className="w-5 h-5"
                alt="wrong-password"
              />
              <div>
                <p className="text-white text-sm px-3">{error}</p>
                <p className="text-white text-base px-3 underline">
                  Forgot Password?
                </p>
              </div>
            </div>
          </div>
        )}
        <FormInput<FormData>
          control={control}
          type="text"
          name={LOGIN_FORM_FIELD.USER}
          label="Email Address or Phone Number"
          placeholder="Enter an email address or phone number"
          errors={errors}
        />
        <FormInput<FormData>
          control={control}
          type="password"
          name={LOGIN_FORM_FIELD.PASSWORD}
          label="Password"
          placeholder="Enter your password"
          errors={errors}
        />
        <div className="py-6">
          <Link
            className="text-goalsetter-purple-100 text-base underline"
            to=""
          >
            Forgot Password?
          </Link>
        </div>
        <button
          type="submit"
          disabled={disabledSubmit}
          className={`${
            disabledSubmit
              ? "bg-goalsetter-gray-100"
              : " bg-goalsetter-yellow-100"
          } w-full py-3 mb-5 ${
            disabledSubmit ? " text-gray-500" : "text-white"
          } uppercase font-bold rounded-lg hover:cursor-pointer`}
        >
          {isLoading ? <Spinner /> : "Continue"}
        </button>
      </form>
    </div>
  );
};

export default Login;
