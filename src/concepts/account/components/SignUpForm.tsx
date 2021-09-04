import React from "react";

import { Button, Label, Input } from "@windmill/react-ui";

import { useHistory } from "react-router";

import useSignUpForm from "../hooks/use-sign-up-form";
import useNotification from "../../notification/hooks/use-notification";

export default function SignUpForm() {
  const history = useHistory();
  const notify = useNotification();
  const form = useSignUpForm({ onSuccess, onError });

  function onSuccess() {
    notify.success("Your account has been created :)");
  }

  function onError() {
    notify.error("Something wrong happened :/");
  }

  function onClickLogin(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    history.push("/login");
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.submit();
      }}
    >
      <h1 className="text-xl font-semibold">Sign up</h1>

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

      <Label className="mt-4">
        <span>Confirm password</span>

        {/* @ts-ignore */}
        <Input
          className="mt-1"
          name="password-confirmation"
          type="password"
          onChange={({ target }) => form.setPasswordConfirmation(target.value)}
        />

        {form.errors?.passwordConfirmation && (
          <span className="text-red-700 mt-1 block">
            {form.errors.passwordConfirmation}
          </span>
        )}
      </Label>

      <Button className="mt-4 w-full">Create account</Button>

      <hr className="my-8" />

      <Button
        tag="a"
        layout="link"
        className="text-purple-600"
        onClick={onClickLogin}
      >
        Already have an account?
      </Button>
    </form>
  );
}
