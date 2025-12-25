- Create a repository (create a folder or git repo)
- initialize the repo (npm init)
- install express
- node_module, package.json, package-lock.json
- create a server
- listen to port 7777
- write request handler for /test, /home, /hello
- install nodemon and update scripts inside package.json
- what are dependencies
- what is the use of -g while npm install
- difference b/w caret and tilde (^ vs ~)

- .gitignore
- push code on github
- play with routes and route extension ex. /hello , /, /hello/2, /xyz
- order of the routes matter a lot (very important)
- install postman app and make a workspace/collection > test api call
- write logic to handle get, post, patch, delete api calls and test them on postman
- explore routing and use of ?, +, (), * in the routes
- use of regex in routes /a/, /.*fly$/ , ex. app.get(/a/, (req, res) => ....
- Reading the query params in the routes ex. /user?id=123&userId=1001
- Reading the dynamic routes ex. /user/1001
- app.use allows all types of request , but app.get, app.post allow only one request,

- app.use('/user', routeHandler) // routeHandler = routeHandlerFunction
- multiple route handlers play with the code,
- use next()
- next function and errors along with res.send()
- app.use('/route', rH1, rH2, rH3 , rH4, rH5)
- app.use('/route', [rH1, rH2, rH3 , rH4, rH5])
- app.use('/route', rH1, rH2, [rH3 , rH4], rH5)
- use multiple routes with app.use, app.get, post, delete
- what is middeware ? when, why we use it ? why actually need it ?
- how express js basically handles requests behind the scenes
- difference between app.use and app.all
- write a dummy auth middleware for admin
- write a dummy auth middleware for all user routes, except /user/login
- always write api in try catch
- error handleing using app.use("/",(error, req, res, next) => {})
- log sentry , other service - login service , monetry service

- create a free cluster on mongodb official webisite (on google, Go to mongodb atlas)
- mongodb atlas, get a cluster url = mongodb+srv://arjun:arjun@devtinder.lpxntat.mongodb.net/
- install mongoose and write a database code with port listerner,
- download the mongodb compass tool and add cluster url and connect,
- connect your application to the cluster then database also,
- call the connectDB function and connect to database before starting application on 3000 ,

- create a userSchema & user model (create a new instance of the user model) // database - collection - document
- create POST /signup API to add data to the database
- Push some documents using API
- Error handling using try catch
- in database what is _id & --v , (_id is unic id of the document, --v is version on the document)

- what is difference between json and javascript object ?
- add the express.json() middleware
- what is express.json() ? // answer = request send in json format and server is not able to read that json data ...
- app.use(express.json()); , app.use(() => {}) ex. it is work for all the routes
- make your signup api dynamic to receive data from the end user

- User.findOne with duplicate email ids, which object returned ?
- API - get user by email id,
- API - get user by id,
- API - Feed API - get all the users from the database
- Create a delete user api
- difference between post, put and patch api ?
- API - Update API - update a user
- use findIdAndUpdate method & explore options in method
- explore the mongoose ducumentation for the models methods
- Update the user with email id, ex. use updateOne method,
- What is $set, $inc, $push, $pull, $unset methods ?

- Explore schema type options from the documentation
- add requierd, minLength, maxLength, and lowercase, min.... 
- add default
- Note - default only work when we add new data , with existing data not work.
- Note - with default if we send request photoUrl: "", so default is not work, it add in database as empty string,
- create a custom validate function for gender
- Improve DB schema , Put all the appropiate validations on each field in the schema
- Add timestamps to the userSchema
- Add API level validation on patch request & signup post api
- Add API validation for each field
- validate email id using npm i validator
- explore validator library for other fields

- Validate data in Patch Update api.
- restrict request data like "xyz": 1233, "extra_field": 200, (extra field not store in database but it shows success with extra field)
- Validate data in signup api using api level validation
- Install bcrypt package
- Create password hash using bcrypt.hash & save the user hash password
- Create login API
- Compare passwords and throw errors if email or password is invalid

- Login use (user, password) ---> 
	 server create jwt token ----> 
		in login api response, send token back to the user ----> 
			Next all api , user send token to the server with api ---->
				server validate the token ----> if token valid then give response otherwise invalid token

- add a static token in login api and send staic token to the user back, (res.cookie)
- create a GET Profile API , get a static token in profile api, (req.cookie)
- npm i cookie-parser
- In login api , create a jwt token and send it to user in cookies (install jsonwebtoken)
- read the cookie inside your profile API and find the logged in user,
- What is token/jsonwebtoken ? 
 (token has some secret information embaded into it. it is devided into three things,1-header,2-payload,3-signature )
 - make a userAuth middleware
- add the userAuth middileware in profile api,
- create a new send connection request API and add userAuth middleware,
- set a expiry of jwt token now {expiresIn: 0} and cookies to 1 hour { expires: new Date(Date.now() + 1 * 3600000)}
- create mongoose schema methods, getJwt, comparePassword

- Explore tinder API's in terminal console
- Create a list all API you can think of in dev Tinder
- Group multiple routes under repective routers
- Read documentation for express.Router
- Create routes folder for managing auth, profile, request routers
- Create authRouter, profileRouter, requestRouter
- Import these routers in app.js
- Create POST /logout API
- Create PATCH /profile/edit
- Create PATCH /profile/password API => forget password API
- Make you validate all data in every post, patch

- Create a connection request schema
- Send connection Request API
- Proper validation of data
- Think about all corner cases , Always think about corner cases,
- Schema.pre("save") function,
- Read more about logical querys ,https://www.mongodb.com/docs/manual/reference/mql/query-predicates/logical/
- Read this article about compond index ,https://www.mongodb.com/docs/manual/core/indexes/index-types/index-compound/
- Read more about indexs in mongodb
- Why do we need index in DB ?
- What is the advantages and disavantages of creating index ?

- Write a review reqeust POST Api with proper validation and corner cases.
- Thought proccess of POST API is different and Thought proccess of GET API is different

<!-- reference to the UserModal -->

## connectRequestRouter
- POST /request/send/interested/:id
- POST /request/send/ignore/:id
- POST /request/review/accept/:id
- POST /request/review/reject/:id

## userRouter
- GET /user/request/received
- GET /user/matchedConnection
- GET /user/feed

Q: Difference between populate array vs chained populate?
Answer: Array populate ek hi call me multiple relations populate karta hai, cleaner code ke liye.
Chained populate zyada flexible hota hai, deep or conditional populate ke liye use hota hai.
Shorthand populate sirf simple cases ke liye hota hai.

Best for chaining populate
let user = await UserModal.find({})
.populate({ path: "fromUserId", select: "firstName" })
.populate({ 
		path: "toUserId", 
		select: "firstName" 
		populate: { path: 'supplier_id', select: 'name' }
	})

###### ###### ###### ###### ###### ###### ###### ###### ###### ###### ###### ###### ###### ###### ###### ######

# Dev Tinder

## authRouter
- POST /signup
- POST /login
- POST /logout

## profileRouter
- GET    /profile/view
- PATCH  /profile/edit
- PATCH  /profile/password

## connectRequestRouter
- POST /request/send/interested/:endUser
- POST /request/send/ignore/:endUser
- POST /request/review/accept/:endUser
- POST /request/review/reject/:endUser

## userRouter
- GET /user/request/received
- GET /user/matchedConnection
- GET /user/feed

Ignore, Interested, Accept, Reject

###### ###### ###### ###### ###### ###### ###### ###### ###### ###### ###### ###### ###### ###### ###### ######