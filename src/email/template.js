// Template function
export const emailTemplate = ({ name, email, message }) => {
  return {
    subject: `${name} gets in touch ${email}`,
    html: `
          <html>
            <head>
              <style>
                @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

                * {
                  box-sizing: border-box;
                  margin: 0;
                  padding: 0;
                  font-family: "Roboto", sans-serif;
                }

                div {
                  margin-bottom: 20px;
                }

                .container {
                  padding: 20px;
                  width: 100%;
                  height: 100vh;
                  font-family: "Roboto", sans-serif;
                }

                .title {
                  font-size: 24px;
                  font-weight: bold;
                  color: #222
                }

                .title__name {
                  font-size: 20px;
                  font-weight: bold;
                  color: #222
                }

                .text__email {
                  font-size: 18px;
                  font-weight: bold;
                  color: #222
                }

                .text__message {
                  font-size: 16px;
                  font-weight: normal;
                  color: #222
                }
              </style>
            </head>

            <body>
              <main class="container">
                <div class="title">
                  <h2>Contact information from portfolio form</h2>
                </div>
                <div>
                  <h3 class="title__name">Name: ${name}</h3>
                </div>
                <div>
                  <h3 class="text__email">Email: ${email}</h3>
                </div>
                <div>
                  <p class="text__message"><strong>Message:</strong> ${message}</p>
                </div>
              </main>
            </body>
          </html>
        `,
  };
};
