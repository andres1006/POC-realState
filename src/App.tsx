import type { WithAuthenticatorProps } from "@aws-amplify/ui-react";
import { withAuthenticator } from "@aws-amplify/ui-react";
import Layout from "./Components/Layout";

export function App({ signOut, user }: WithAuthenticatorProps) {
  return (
    <>
      <Layout />
      <h1>Hello {user?.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(App);
