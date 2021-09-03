import { Label, Input, Button } from "@windmill/react-ui";
import useForgotPasswordForm from "../hooks/use-forgot-password-form";
import useNotification from "../../notification/hooks/use-notification";

export function ForgotPasswordForm() {
  const notify = useNotification();
  const form = useForgotPasswordForm({ onSuccess, onError });

  function onSuccess() {
    notify.success("A request for a new password has been sent :)");
  }

  function onError() {
    notify.error("Ooops, something wrong happend :/");
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        form.submit();
      }}
    >
      <h1 className="text-xl font-semibold">Forgot password</h1>

      <p className="mt-4 text-sm">
        Send your email address and you'll receive a link within a few minutes
        which you can use to set a password.
      </p>

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

      <Button
        type="submit"
        className="mt-4 w-full"
        disabled={form.isSubmitting || form.hasErrors}
      >
        Send
      </Button>
    </form>
  );
}
