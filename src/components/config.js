const CLIENT_ID = process.env.CLIENT_ID || '0oa5rlybmyccB51Jd5d7';
const ISSUER = process.env.ISSUER || 'https://login.techcompanygroup.com/oauth2/aus5stnhbfmUET6TL5d7';
const OKTA_TESTING_DISABLEHTTPSCHECK = process.env.OKTA_TESTING_DISABLEHTTPSCHECK || false;
debugger;
const REDIRECT_URI = `${window.location.origin}/login/callback`;


// eslint-disable-next-line
export default {
  oidc: {
    clientId: CLIENT_ID,
    issuer: ISSUER,
    redirectUri: REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
   // pkce: true,
    disableHttpsCheck: OKTA_TESTING_DISABLEHTTPSCHECK,
  },
  resourceServer: {
    messagesUrl: 'http://localhost:8000/api/messages',
  },
};