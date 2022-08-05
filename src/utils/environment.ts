import { ENV } from 'constants/environment'

export const isDevelopmentMode = () => window._env_.NODE_ENV === ENV.DEV
