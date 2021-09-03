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
  return {
    setEmail(value: string) {},
    setPassword(value: string) {},
    submit() {},
    isSubmitting: false,
    hasErrors: false,
    errors: null,
  };
}
