docker build -t gennadyyonov/hello-okta-spa .
docker run --env-file .env.development -p 3000:3000 gennadyyonov/hello-okta-spa