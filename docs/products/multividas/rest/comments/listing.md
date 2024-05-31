# Listing Comments

## Listing User Comments

Retrieves a user's comments on multividas. `GET` request with username returns topics that a specific user is talking about.

### Resource URL

`https://api.multividas.com/rest/v1/users/{user:username}/comments` 

### Response [200]

```json
{
    "data": [
        {
            "id": "01hered6ssgz8en3prvn5kx1jp",
            "content": "Nice !",
            "isAnonymously": false,
            "likesCount": 0,
            "tags": [],
            "createdAt": "2023-11-09T17:05:49.000000Z"
        },
        // ...
    ],
    "code": 200,
    "meta": {}
}
```

## Listing Thread Comments

Retrieves a thread's comments on multividas. `GET` request returns comments related to a specific thread.

### Resource URL

`https://api.multividas.com/rest/v1/threads/{thread:id}/comments` 

### Response [200]

```json
{
    "data": [
        {
            "id": "01hered6ssgz8en3prvn5kx1jp",
            "content": "Nice !",
            "isAnonymously": false,
            "likesCount": 0,
            "user": {
                "id": "01hered6ssgz8en3prvn5kx1jp",
                "name": "mark johnson",
                "username": "mark",
                "email": "mark@johnson.com",
                "phone": "+1 (628) 200-1868",
                "profile": {
                    "id": "01hej1pp57mvc76znegmxvnnfd",
                    "bio": "Lorem ipsum dolor sit amet.",
                    "links": null,
                    "location": "New York City",
                    "lang": "en",
                    "gender": "male",
                    "birthdate": "2000-01-01T17:52:45.000000Z",
                },
                "userAvatar": "https://static-assets.multividas.com/storage/factory/users/mark/1.jpg",
                "userCover": "https://static-assets.multividas.com/storage/factory/covers/1.jpg",
                "createdAt": "2023-10-16T00:44:49.000000Z",
            },
            "tags": [],
            "createdAt": "2023-11-09T17:05:49.000000Z"
        },
        // ...
    ],
    "code": 200,
    "meta": {}
}
```
