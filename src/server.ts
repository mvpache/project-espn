import app from './app';

const port = process.env.PORT || 3000;

const server = new app().Start(port)
  .then(_port => console.log(`Server running on port ${_port}`))
  .catch(error => {
    console.log(error);
    process.exit(1);
  });

export default server;

