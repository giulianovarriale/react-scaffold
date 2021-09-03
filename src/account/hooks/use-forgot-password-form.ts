interface IHookArgs {
  onSuccess: () => void;
  onError: () => void;
}

interface IHookApi {
  setEmail: (value: string) => void;
  submit: () => void;
  isSubmitting: boolean;
  hasErrors: boolean;
  errors: null | IErrors;
}

interface IErrors {
  email?: string;
}

export default function useForgotPasswordForm({
  onSuccess,
  onError,
}: IHookArgs): IHookApi {
  return {
    setEmail(value: string) {},
    submit() {},
    isSubmitting: false,
    hasErrors: false,
    errors: null,
  };
}
