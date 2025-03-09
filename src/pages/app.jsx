import { useEnforceAuth } from "../store/auth";

export default () => {
  useEnforceAuth();

  return (
    <div class="max-w-4xl mx-auto flex flex-col justify-center items-center min-h-[100vh] gap-3">
      <h1 class="font-semibold">Adex</h1>
      <div>App</div>
    </div>
  );
};
