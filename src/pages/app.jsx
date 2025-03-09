import { Fragment } from "preact";
import { useEnforceAuth } from "../store/auth";
import { authClient } from "../../lib/auth_client";

export default () => {
  useEnforceAuth();

  return (
    <Fragment>
      <aside
        id="default-sidebar"
        class="fixed text-sm bg-zinc-50 border-r border-zinc-200 top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div class="h-full px-3 py-4 overflow-y-auto">
          <ul class="space-y-2 font-medium">
            <li>
              <a
                href="/app"
                class="flex items-center px-2 py-1 text-zinc-900 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-700 group"
              >
                <span class="ms-3">Dashboard</span>
              </a>
            </li>
            <li>
              <div
                onClick={async (e) => {
                  e.preventDefault();
                  await authClient.signOut();
                  window.location.href = "/login";
                }}
                class="flex hover:cursor-pointer items-center px-2 py-1 text-zinc-900 rounded-lg hover:bg-zinc-100 dark:hover:bg-gray-700 group"
              >
                <span class="flex-1 ms-3 whitespace-nowrap">Sign Out</span>
              </div>
            </li>
          </ul>
        </div>
      </aside>

      <div class="p-4 sm:ml-64"></div>
    </Fragment>
  );
};
