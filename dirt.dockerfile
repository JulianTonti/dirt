FROM node:latest
RUN git clone https://github.com/tobinbradley/dirt-simple-postgis-http-api.git dirt \
&& cd dirt && npm install
