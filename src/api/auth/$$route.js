import { toNodeHandler } from "better-auth/node";
import { auth } from "../../../lib/auth";

export default toNodeHandler(auth);
