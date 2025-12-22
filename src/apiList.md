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
- GET /user/feed
- GER /user/matchedConnection

Ignore, Interested, Accept, Reject