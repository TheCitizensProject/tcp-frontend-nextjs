import { cookies } from "next/headers";
import { generateServerClientUsingCookies } from "@aws-amplify/adapter-nextjs/api";

import config from "@/amplifyconfiguration.json";

const amplifyServerClient = generateServerClientUsingCookies({
  config,
  cookies,
});

export default amplifyServerClient;
