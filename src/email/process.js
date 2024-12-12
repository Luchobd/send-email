process.loadEnvFile();
export const {
  PORT = 3000,
  API_KEY_RESEND,
  FROM_EMAIL,
  TO_EMAIL,
} = process.env;
