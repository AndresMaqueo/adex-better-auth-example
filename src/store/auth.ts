import { signal, useSignalEffect } from "@preact/signals";
import { authClient } from "../../lib/auth_client";

type AuthState = {
  loggedIn?: boolean;
  loading: boolean;
};

export const authState = signal<AuthState>({ loading: true });

export async function sync() {
  const { data, error } = await authClient.getSession();
  if (data?.user.id) {
    authState.value = { loading: false, loggedIn: true };
    return;
  }
  authState.value = { loading: false, loggedIn: false };
}

export function useEnforceAuth() {
  useSignalEffect(() => {
    if (authState.value.loading) {
      sync();
      return;
    }
    if (!authState.value.loggedIn) {
      window.location.href = "/";
    }
  });
}

/**
 * This hook will redirect the user to the app page if he is already logged in
 * Note: Use with care, easy to cause a redirect loop
 */
export function useEnforceUnAuthenticated() {
  useSignalEffect(() => {
    if (authState.value.loading) {
      sync();
      return;
    }
    if (authState.value.loggedIn) {
      window.location.href = "/app";
    }
  });
}
