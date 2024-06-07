# 1. Initialize a project with npm
  npm init -y

# 2. Install express
  npm i express

# 3. Setting up the parser
  app.use(express.json());
  app.use(express.urlencoded{extended:true}); // used to fetch the data from the server

# 4. Setting up the EJS
  npm i ejs

# 5. Setting up the EJS for view engine
  app.set('view engine','ejs'); // it is used to render the frontend information in the backend