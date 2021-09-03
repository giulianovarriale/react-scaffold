import { Button, Label, Input } from "@windmill/react-ui";
import React from "react";
import { useHistory } from "react-router";

export default function SignUp() {
  const history = useHistory();

  function onClickLogin(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    history.push("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex-1 max-w-md bg-white rounded-lg shadow-xl dark:bg-gray-800 p-8">
        <h1 className="text-xl font-semibold">Sign up</h1>

        <Label className="mt-4">
          <span>Email</span>

          {/* @ts-ignore */}
          <Input className="mt-1" name="email" />
        </Label>

        <Label className="mt-4">
          <span>Password</span>

          {/* @ts-ignore */}
          <Input className="mt-1" name="password" type="password" />
        </Label>

        <Label className="mt-4">
          <span>Confirm password</span>

          {/* @ts-ignore */}
          <Input
            className="mt-1"
            name="password-confirmation"
            type="password"
          />
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
      </div>
    </div>
  );
}
