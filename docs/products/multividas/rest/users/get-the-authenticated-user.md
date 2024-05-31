# Get Authenticated User

## Greeting

Endpoint: `https://api.multividas.com/rest/v1/user/greeting` 

Method: `GET`


```json
{
    "greeting": "Welcome back Soulaimane Yahya" // [!code focus]
}
```


## Get the authenticated user

**Get Authenticated User**: To retrieve information about the authenticated user (current user), use this endpoint with the `GET` method.

### Resource URL

`https://api.multividas.com/rest/v1/user`

### Resource Information

| Method                                | GET  |
|---------------------------------------|------|
| Response formats                      | JSON |
| Requires authentication?              | Yes  |

### Response [200]

```json
{
    "data": {
        "id": "01hered6ssgz8en3prvn5kx1jp",
        "name": "Soulaimane Yahya",
        "username": "soulaimaneyh",
        "email": "contact@soulaimaneyahya.com",
        "phone": "+212767676767",
        "profile": {
            "id": "01hered6ssgz8en3prvn5kx1jp",
            "bio": "Founder and CEO at Multividas",
            "links": [
                "https://soulaimaneyahya.com"
            ],
            "location": "Tétouan",
            "lang": "en",
            "gender": "male",
            "birthdate": "2001-07-07",
            "followersCount": 100,
        },
        "userStatus": "endorsed",
        "isVerified": true,
        "followingCount": 100,
        "threadsCount": 0,
        "accountPrivacy": {
            "isEmailPrivate": false,
            "isPhonePrivate": false
        },
        "lockedPrivacy": {
            "isProfileLocked": false,
            "isCommentsLocked": true,
            "isLikesLocked": true,
            "isRethreadsLocked": false
        },
        "pushNotifications": {
            "isLikesPaused": false,
            "isCommentsPaused": false,
            "isCommentLikesPaused": false
        },
        "turnOffPrivacy": {
            "isCommentsOff": false,
            "isLikesOff": false,
            "isRethreadsOff": false
        },
        "userAvatar": "https://static-assets.multividas.com/storage/factory/users/soulaimaneyh/1.jpg",
        "userCover": "https://static-assets.multividas.com/storage/factory/covers/1.jpg",
        "createdAt": "2001-07-07T05:10:19.000000Z"
    },
    "code": 200,
    "meta": {
        "token": "01|01hered6ssgz8en3prvn5kx1jp",
        "token_type": "bearer"
    }
}
```

## Get Authenticated User's Profile

**Get Authenticated User's Profile**: If you need to fetch the profile of the authenticated user, you can do so by accessing this endpoint with the `GET` method.

### Resource URL

`https://api.multividas.com/rest/v1/user/profile`

### Response [200]

```json
{
    "data": {
        "id": "01hered6ssgz8en3prvn5kx1jp",
        "bio": "Founder and CEO at Multividas",
        "links": [
            "https://soulaimaneyahya.com"
        ],
        "location": "Tétouan",
        "lang": "en",
        "gender": "male",
        "birthdate": "2001-07-07",
    },
    "code": 200,
    "meta": {}
}
```

### Response [401]

Unauthenticated user or invalid **`Bearer Token`**

```json
{
    "info": "Unauthenticated",
    "code": 401,
    "meta": {}
}
```
