FROM node:boron

# Create app directory
WORKDIR /Users/nikhilrs/Desktop/PFG/trunk

# Bundle app source
COPY . /Users/nikhilrs/Desktop/PFG/trunk

# Install app dependencies
RUN npm install

EXPOSE 3000

RUN npm run build:dll
CMD [ "npm", "start" ]
