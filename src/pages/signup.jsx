import { useEffect, useState } from "preact/hooks";
import { authClient } from "../../lib/auth_client";

export default () => {
  const onSubmit = async (e) => {
    try {
      e.preventDefault();
      const form = new FormData(e.target.closest("form"));
      const result = await authClient.signUp.email({
        name: form.get("name"),
        email: form.get("email"),
        password: form.get("password"),
      });
      if (!result.data.user.id) {
        alert("Signup failed");
      }
      window.location.href = "/app";
    } catch (err) {}
  };

  return (
    <div class="max-w-4xl mx-auto flex flex-col justify-center items-center min-h-[100vh] gap-3">
      <h1 class="font-semibold">Adex</h1>
      <div>
        <form onSubmit={onSubmit}>
          <input name="name" type="text" placeholder="Name" required />
          <input name="email" type="text" placeholder="Email" required />
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <button onClick={onSubmit}>Signup</button>
        </form>
      </div>
    </div>
  );
};
