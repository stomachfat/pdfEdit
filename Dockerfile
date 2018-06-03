FROM risingstack/alpine:3.4-v6.7.0-4.0.0

MAINTAINER Jimmy Truong <thamestruong+pdfedit@gmail.com>

### See https://github.com/mfornasa/DockerYarn
### For how to run yarn with docker

WORKDIR /opt/app

# Run this CMD imageMagick
# docker pull v4tech/imagemagick
# see: https://github.com/vifortech/dockerfiles/blob/master/imagemagick/Dockerfile
RUN apk --update add imagemagick && \
    rm -rf /var/cache/apk/*

# Install yarn
RUN mkdir -p /opt
ADD latest.tar.gz /opt/
### turns out you need specific tar file
### inorder to run mv command
RUN mv /opt/dist /opt/yarn
ENV PATH "$PATH:/opt/yarn/bin"

ADD package.json yarn.lock /tmp/

# Copy cache contents (if any) from local machine
ADD .yarn-cache.tgz /

# Install packages
RUN cd /tmp && yarn
RUN mkdir -p /opt/app && cd /opt/app && ln -s /tmp/node_modules

# Copy the code
ADD . /opt/app

EXPOSE 8080

CMD [ "yarn", "devexpress" ]
