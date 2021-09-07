import { useState } from "react";
import { useMutation } from "react-query";
import useAuth from "../../auth/hooks/use-auth";

import login from "../services/login";

interface IHookArgs {
  onSuccess: () => void;
  onError: () => void;
}

interface IHookApi {
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  submit: () => void;
  isSubmitting: boolean;
  hasErrors: boolean;
  errors: null | IErrors;
}

interface IErrors {
  email?: string;
  password?: string;
}

export default function useLoginForm({
  onSuccess,
  onError,
}: IHookArgs): IHookApi {
  const { saveToken } = useAuth();
  const [email, setEmailField] = useState("");
  const [password, setPasswordField] = useState("");

  const { mutate } = useMutation(login, {
    onSuccess: (data) => {
      saveToken(data.token);
      onSuccess();
    },
  });

  return {
    isSubmitting: false,
    hasErrors: false,
    errors: null,

    setEmail(value: string) {
      setEmailField(value);
    },

    setPassword(value: string) {
      setPasswordField(value);
    },

    async submit() {
      mutate({ email, password });
    },
  };
}
