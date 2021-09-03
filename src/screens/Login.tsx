import { Label, Input, Button } from "@windmill/react-ui";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex-1 max-w-md bg-white rounded-lg shadow-xl dark:bg-gray-800 p-8">
        <h1 className="text-xl font-semibold">Login</h1>

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

        <Button className="mt-4 w-full">Log in</Button>

        <hr className="my-8" />

        <ul>
          <li>
            <Button tag="a" href="#" layout="link" className="text-purple-600">
              Forgot your password?
            </Button>
          </li>
          <li>
            <Button tag="a" href="#" layout="link" className="text-purple-600">
              Create account
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
