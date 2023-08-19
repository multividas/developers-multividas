## Get User

**Get User**: This endpoint allows you to retrieve information about a specific user based on their username.
Use the provided endpoint with the `GET` method to access user details.

### Resource URL

`https://api.multivida.blog/rest-api/v1/users/{user:username}` 

### Resource Information

| Method                                | GET  |
|---------------------------------------|------|
| Response formats                      | JSON |
| Requires authentication?              | No   |
| Rate limited?                         | Yes  |
| Requests per minute                   | 50   |

### Response [200]

```json
{
    "data": {
        "id": "99cf995b-fc89-4b1c-8a32-6e308b1bb396",
        "name": "Mark Johnson",
        "username": "mark",
        "userStatus": "enabled",
        "isProfileLocked": true,
        "isCommentLocked": true,
        "isLikeLocked": true,
        "userAvatar": "https://multivida.blog/storage/factory/users/mark/1.jpg",
        "userCover": "https://multivida.blog/storage/factory/covers/1.jpg",
        "createdAt": "2023-04-23T16:47:09.000000Z",
        "links": [
            {
                "rel": "self",
                "href": "https://api.multivida.blog/rest-api/v1/users/mark"
            },
            {
                "rel": "users.show.profile",
                "href": "https://api.multivida.blog/rest-api/v1/users/mark/profile"
            }
        ]
    }
}
```

## Get User's Profile

**Get User's Profile**: If you need to obtain a user's profile, you can do so by accessing this endpoint with the `GET` method. Replace `{user:username}` with the desired user's username.

### Resource URL

`https://api.multivida.blog/rest-api/v1/users/{user:username}/profile` 

### Response [200]

```json
{
    "data": {
        "id": "99cf995b-fe2b-45e5-9b8f-7cdff9301792",
        "bio": null,
        "url": null,
        "location": null,
        "gender": "male",
        "birthdate": "2000-01-01"
    }
}
```

Certain fields (gender, date of birth, etc.) may be hidden (null) depending on the user's privacy settings.
