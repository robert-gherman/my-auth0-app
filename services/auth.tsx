// services/auth.ts
import Auth0 from "react-native-auth0";

const auth0 = new Auth0({
  domain: "YOUR_DOMAIN",
  clientId: "YOUR_CLIENT_ID",
});

export default auth0;
