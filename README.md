
# Shaaroo-Blog-API

This is a blog application I'm developing to apply and practice express and mongodb.I implmented the authentication and the authrization purley with js code, in the next projects I will use JWT authentication so the apps become more secure and reliable. I hope you use it in your upcoming projects.For any issues please contact me. 



## Posts Reference

#### Get all posts

```http
  GET /api/v1/posts
```

 

#### Get single post

```http
  GET /api/v1/posts/${id}
```
#### Delete post

```http
  DELETE /api/v1/posts/${id}
```

#### Edit post

```http
  put /api/v1/posts/${id}
```

#### create post

```http
  POST /api/v1/posts/
```

 Body                      |
 :-------------------------------- |
  Title:Required
  Desc:Required,
  photo:(UNDER DEVELOPMENT)
  username:Required
  category:Optional


  ## Authentication Reference

#### SignUp

```http
  POST /api/v1/auth/register
```
Body                      |
 :-------------------------------- |
  UserName:Required
  Password:Required,
  Email:Required,
  ProfilePic:(UNDER DEVELOPMENT)

 

#### Login

```http
  POST /api/v1/auth/login
```
 

 Body                      |
 :-------------------------------- |
  UserName:Required
  Password:Required,



  

 

## Users Reference
### Edit Profile

```http
  PUT /api/v1/users/${id}
```
 

 What can user edit: Any of the data the user used in registration


  

#### Get Profile

```http
  GET /api/v1/users/${id}
```
#### Delete Profile

```http
  DELETE /api/v1/users/${id}
```

## Categories Reference
### Get Categories

```http
  GET /api/v1/categories/
```
 

  


  

#### Add Categories

```http
  POST /api/v1/categories/
```
 
   

   

 

