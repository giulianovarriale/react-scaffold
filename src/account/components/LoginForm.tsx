import React from "react";
import { useHistory } from "react-router";
import { Label, Input, Button } from "@windmill/react-ui";

import useLoginForm from "../hooks/use-login-form";
import useNotification from "../../notification/hooks/use-notification";

export default function LoginForm() {
  const history = useHistory();
  const form = useLoginForm({ onSuccess, onError });
  const notify = useNotification();

  function onSuccess() {
    notify.success("You are logged in :)");
  }

  function onError() {
    notify.error("Something went wrong :/");
  }

  function goTo(path: string) {
    return (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      history.push(path);
    };
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.submit();
      }}
    >
      <h1 className="text-xl font-semibold">Login</h1>

      <Label className="mt-4">
        <span>Email</span>

        {/* @ts-ignore */}
        <Input
          className="mt-1"
          name="email"
          onChange={({ target }) => form.setEmail(target.value)}
        />

        {form.errors?.email && (
          <span className="text-red-700 mt-1 block">{form.errors.email}</span>
        )}
      </Label>

      <Label className="mt-4">
        <span>Password</span>

        {/* @ts-ignore */}
        <Input
          className="mt-1"
          name="password"
          type="password"
          onChange={({ target }) => form.setPassword(target.value)}
        />

        {form.errors?.password && (
          <span className="text-red-700 mt-1 block">
            {form.errors.password}
          </span>
        )}
      </Label>

      <Button className="mt-4 w-full">Log in</Button>

      <hr className="my-8" />

      <ul>
        <li>
          <Button
            tag="a"
            onClick={goTo("/forgot-password")}
            layout="link"
            className="text-purple-600"
          >
            Forgot your password?
          </Button>
        </li>
        <li>
          <Button
            tag="a"
            onClick={goTo("/sign-up")}
            layout="link"
            className="text-purple-600"
          >
            Create account
          </Button>
        </li>
      </ul>
    </form>
  );
}
