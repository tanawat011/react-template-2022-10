import { ENV } from 'constants/envMode'

export const isDevelopmentMode = () => window._env_.NODE_ENV === ENV.DEV
