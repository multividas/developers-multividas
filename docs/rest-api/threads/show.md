## Show Thread

**Show Thread**: This endpoint allows you to retrieve threads list about a specific user.
Use the provided endpoint with the `GET` method to list user's threads.

### Resource URL

`https://api.multivida.blog/rest-api/v1/threads/{thread:id}`

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
        "id": "99d366c9-2eb3-4469-8c4c-f88a8fa23ccc",
        "content": "Est rerum delectus et quia.",
        "isPinned": 1,
        "isPublic": 1,
        "isCommentEnabled": 1,
        "files": [{
            "src": "https://multivida.blog/storage/factory/thumbnails/1.jpg",
            "mimetype": "image/jpg"
        }],
        "tags": [
            "datascience"
        ],
        "user": {
            "id": "99d366c5-755a-4e79-9ff4-03a453cd3cd0",
            "name": "Mark Johnson",
            "username": "mark",
            "email": "mark@johnson.com",
            "phone": "740-543-1151",
            "role": "user",
            "userStatus": "enabled",
            "isProfileLocked": true,
            "isCommentLocked": true,
            "isLikeLocked": true,
            "userAvatar": "https://multivida.blog/storage/factory/users/mark/1.jpg",
            "userCover": "https://multivida.blog/storage/factory/covers/1.jpg",
            "createdAt": "2023-01-09T23:45:09.000000Z"
        },
        "createdAt": "2023-07-31T21:43:51.000000Z",
        "updatedAt": "2023-08-04T23:21:28.000000Z",
        "deletedAt": null
    }
}
```
