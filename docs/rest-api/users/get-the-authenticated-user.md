::: info
If the authenticated user is authenticated with a **`personal access token`** with the `user` scope, then the response lists public and private profile information.
:::

## Greeting

Endpoint: `https://api.multividas.com/rest-api/v1/user/greeting` 

Method: `GET`


```json
{
    "greeting": "Welcome back Soulaimane Yahya" // [!code focus]
}
```


## Get Authenticated User

**Get Authenticated User**: To retrieve information about the authenticated user (current user), use this endpoint with the `GET` method.

### Resource URL

`https://api.multividas.com/rest-api/v1/user`

### Resource Information

| Method                                | GET  |
|---------------------------------------|------|
| Response formats                      | JSON |
| Requires authentication?              | Yes  |
| Rate limited?                         | Yes  |
| Requests per minute                   | 50   |


### Response [200]

```json
{
    "data": {
        "id": "99cf995b-99e9-4d6d-8ef1-84966014acf3",
        "name": "Soulaimane Yahya",
        "username": "soulaimaneyh",
        "email": "contact@soulaimaneyahya.com",
        "phone": "+212767673189",
        "userStatus": "endorsed",
        "isProfileLocked": false,
        "isCommentLocked": false,
        "isLikeLocked": false,
        "userAvatar": "https://multividas.com/storage/factory/users/soulaimaneyh/1.jpg",
        "userCover": "https://multividas.com/storage/factory/covers/1.jpg",
        "createdAt": "2023-04-23T16:47:09.000000Z",
        "updatedAt": "2023-04-23T16:47:09.000000Z",
        "links": [
            {
                "rel": "self",
                "href": "https://api.multividas.com/rest-api/v1/user"
            },
            {
                "rel": "user.profile",
                "href": "https://api.multividas.com/rest-api/v1/user/profile"
            }
        ]
    }
}
```

## Get Authenticated User's Profile

**Get Authenticated User's Profile**: If you need to fetch the profile of the authenticated user, you can do so by accessing this endpoint with the `GET` method.

### Resource URL

`https://api.multividas.com/rest-api/v1/user/profile`

### Response [200]

```json
{
    "data": {
        "id": "99cf995b-a030-4ba4-b233-466111517715",
        "bio": "Founder and CEO at Multividas",
        "url": "https://soulaimaneyahya.com",
        "location": "Tétouan",
        "gender": "male",
        "birthdate": "2001-07-07"
    }
}
```
