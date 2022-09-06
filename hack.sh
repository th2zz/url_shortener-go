# docker login
# build image and push to docker hub
docker build -t  omelet034/url_shortener-go:api ./api && docker push omelet034/url_shortener-go:api

docker build -t  omelet034/url_shortener-go:client ./db && docker push omelet034/url_shortener-go:client

docker build -t  omelet034/url_shortener-go:db ./client && docker push omelet034/url_shortener-go:db

# for automated pipeline, need to tag image with version