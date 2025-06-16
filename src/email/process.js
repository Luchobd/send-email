const dotenv = await import("dotenv");
dotenv.config();

export function getEnvVars() {
  return {
    PORT: process.env.PORT || 3000,
    API_KEY_RESEND: process.env.API_KEY_RESEND,
    FROM_EMAIL: process.env.FROM_EMAIL,
    TO_EMAIL: process.env.TO_EMAIL,
  };
}
