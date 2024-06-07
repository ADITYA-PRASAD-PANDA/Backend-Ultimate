// Handling the backend process of the forms and making sure that data coming from any frontend library , templating engines, framework we will handle at the backend process 

// install cookie parser - npm i cookie-parser
// reference-https://www.npmjs.com/package/cookie-parser

// cookies use hota hai mainly  authentication purposes ke liye yani ki login aur logout purpose ke liye aur ye server pai jata hai blob(binary data)(data+json+hexadecimal)format which we unable to read. To be able to understand we have to write this
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session use hota hai to maintain a particular time period from login to logout
