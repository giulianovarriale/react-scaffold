import wretch from "wretch";

interface ILoginArgs {
  email: string;
  password: string;
}

export default function login({ email, password }: ILoginArgs) {
  return wretch().url("/api/login").post({ email, password }).json();
}
