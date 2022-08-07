interface Window {
  _env_: NodeJS.ProcessEnv & {
    SKIP_PREFLIGHT_CHECK: string
    GENERATE_SOURCEMAP: string
    REACT_APP_API_URL: string
    REACT_APP_KEYCLOAK_URL: string
    REACT_APP_KEYCLOAK_REALM: string
    REACT_APP_KEYCLOAK_CLIENT_ID: string
    REACT_APP_KEYCLOAK_REDIRECT_URL: string
    REACT_APP_SENTRY_DSN: string
    REACT_APP_SENTRY_RELEASE: string
    REACT_APP_TRACES_SAMPLE_RATE: string
  }
}
