import { createAuth0 } from "@auth0/auth0-vue";

export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();

  const auth0 = createAuth0({
    domain: runtimeConfig.public.domain,
    clientId: runtimeConfig.public.clientId,
    cacheLocation: "localstorage",
    authorizationParams: {
      client_secret: runtimeConfig.public.clientSecret,
      audience: "https://stevewyntontje.eu.auth0.com/api/v2/",
      redirect_uri: window.location.origin,
    },
    useRefreshTokens: true,
  });

  nuxtApp.vueApp.use(auth0);
});
