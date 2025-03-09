import { authClient } from "../../lib/auth_client";
import { useEnforceUnAuthenticated } from "../store/auth";

export default () => {
  useEnforceUnAuthenticated();

  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const form = new FormData(e.target.closest("form"));
      const result = await authClient.signIn.email({
        email: form.get("email"),
        password: form.get("password"),
      });
      if (result.data.token) {
        window.location.href = "/app";
      }
    } catch (err) {}
  };

  return (
    <div class="max-w-4xl mx-auto flex flex-col justify-center items-center min-h-[100vh] gap-3">
      <h1 class="font-semibold">Adex</h1>
      <div>
        <form onSubmit={onSubmit}>
          <input name="email" type="text" placeholder="Email" />
          <input name="password" type="password" placeholder="Password" />
          <button onClick={onSubmit}>Login</button>
        </form>
      </div>
    </div>
  );
};
