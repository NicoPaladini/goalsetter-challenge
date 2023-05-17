import { useState } from "react";
import login from "../server/api";

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function doLogin(user: string, pass: string) {
    setIsLoading(true);
    try {
      const response = await login(user, pass);
      if (response) {
        setSuccess(true);
      }
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(error);
      setError(message);
      setIsLoading(false);
    }
    setIsLoading(false);
  }

  return { isLoading, success, error, doLogin };
};

export default useLogin;
