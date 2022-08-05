export const setupEnv = () => {
  window._env_ = {
    ...window._env_,
    ...process.env,
  }
}
