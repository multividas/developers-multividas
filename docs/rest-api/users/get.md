# API Endpoints for Users

This API documentation outlines various endpoints related to users on the multivida.blog platform. Below are the available endpoints along with their respective methods:

## Get Authenticated User

**Get Authenticated User**: To retrieve information about the authenticated user (current user), use this endpoint with the `GET` method.

Endpoint: `https://api.multivida.blog/user` 

Method: `GET`

### Response

[200]

```json
{
    "data": {
        "id": "99cf995b-fc89-4b1c-8a32-6e308b1bb396",
        "name": "Mark Johnson",
        "username": "mark",
        "role": "user",
        "isVerified": "enabled",
        "isProfileLocked": true,
        "userAvatar": "https://multivida.blog/storage/factory/users/mark/1.jpg"
    }
}
```

## Get Authenticated User's Profile

**Get Authenticated User's Profile**: If you need to fetch the profile of the authenticated user, you can do so by accessing this endpoint with the `GET` method.

Endpoint: `https://api.multivida.blog/user/profile` 

Method: `GET`

### Response

[200]

```json
{
    "data": {
        "id": "99cf995b-fe2b-45e5-9b8f-7cdff9301792",
        "bio": "Lorem ipsum dolor sit amet.",
        "url": null,
        "location": "New York City",
        "gender": "male",
        "birthdate": "2000-01-01"
    }
}
```

## Get User

**Get User**: This endpoint allows you to retrieve information about a specific user based on their username. Use the provided endpoint with the `GET` method to access user details.

Endpoint: `https://api.multivida.blog/users/{user:username}` 

Method: `GET`

### Response

[200]

```json
{
    "data": {
        "id": "99cf995b-99e9-4d6d-8ef1-84966014acf3",
        "name": "Soulaimane Yahya",
        "username": "soulaimaneyh",
        "email": null,
        "phone": null,
        "role": "admin",
        "isVerified": "verified",
        "isProfileLocked": false,
        "lockedComments": false,
        "lockedLikes": false,
        "userAvatar": "https://multivida.blog/storage/factory/users/soulaimaneyh/1.jpg",
        "userCover": "https://multivida.blog/storage/factory/covers/1.jpg",
        "createdAt": "2023-04-23T16:47:09.000000Z"
    }
}
```

## Get User's Profile

**Get User's Profile**: If you need to obtain a user's profile, you can do so by accessing this endpoint with the `GET` method. Replace `{user:username}` with the desired user's username.

Endpoint: `https://api.multivida.blog/users/{user:username}/profile` 

Method: `GET`

### Response

[200]

```json
{
    "data": {
        "id": "99cf995b-a030-4ba4-b233-466111517715",
        "bio": "Founder and CEO at Multivida",
        "url": "https://soulaimaneyahya.com",
        "location": "Tétouan",
        "gender": "male",
        "birthdate": "2001-07-07"
    }
}
```

Feel free to use these endpoints to interact with user-related data on the multivida.blog platform.
