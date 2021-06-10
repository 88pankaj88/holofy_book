FROM ubuntu
RUN apt update && apt install vim curl git -y
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash
ENV NVM_DIR=/root/.nvm
ENV NODE_VERSION=12.19.0
RUN . $NVM_DIR/nvm.sh && nvm install $NODE_VERSION
ENV PATH="/root/.nvm/versions/node/v${NODE_VERSION}/bin/:${PATH}"
WORKDIR /usr/src/app
COPY . .
RUN npm install --unsafe-perm && npm install pm2 -g && pm2 install pm2-logrotate && pm2 set pm2-logrotate:max_size 200M && pm2 set pm2-logrotate:retain 999 && pm2 set pm2-logrotate:dateFormat "YYYY-MM-DD_HH-mm-ss"  && pm2 set pm2-logrotate:workerInterval 1800
CMD pm2-runtime app.js -i max -n holofy_book --output "/usr/src/app/logs/holofy_book.log" --error "/usr/src/app/logs/holofy_book_error.log"