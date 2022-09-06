FROM golang:alpine as builder

RUN mkdir /build

ADD . /build/

WORKDIR /build
# proxy
RUN go env -w GO111MODULE=on
RUN go env -w GOPROXY=https://goproxy.cn,direct
RUN go build -o main .

#stage 2

FROM alpine

RUN adduser -S -D -H -h /app appuser

USER appuser

COPY . /app

COPY --from=builder /build/main /app/

WORKDIR /app

EXPOSE  8080

CMD ["./main"]