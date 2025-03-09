import { fromNodeHeaders } from "better-auth/node";
import { auth } from "../../lib/auth";

/**
 * @param {import("adex/http").IncomingMessage} req
 * @param {import("adex/http").ServerResponse} res
 * @returns
 */
export default async function (req, res) {
  const session = await auth.api.signOut({
    headers: fromNodeHeaders(req.headers),
  });

  res.writeHead(303, {
    Location: "/login",
  });
  res.end();
}
