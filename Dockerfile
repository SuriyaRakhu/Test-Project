FROM node:boron

# Create app directory
WORKDIR /Users/nikhilrs/Desktop/PFG/trunk

# Install app dependencies
RUN npm install

# Bundle app source
COPY . /Users/nikhilrs/Desktop/PFG/trunk

EXPOSE 3000

CMD [ "npm", "run", "build.dll" ]
CMD [ "npm", "start" ]
