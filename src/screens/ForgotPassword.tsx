import { Label, Input, Button } from "@windmill/react-ui";

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex-1 max-w-md bg-white rounded-lg shadow-xl dark:bg-gray-800 p-8">
        <h1 className="text-xl font-semibold">Forgot password</h1>

        <p className="mt-4 text-sm">
          Send your email address and you'll receive a link within a few minutes
          which you can use to set a password.
        </p>

        <Label className="mt-4">
          <span>Email</span>

          {/* @ts-ignore */}
          <Input className="mt-1" name="email" />
        </Label>

        <Button className="mt-4 w-full">Send</Button>
      </div>
    </div>
  );
}
