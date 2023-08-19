# Listing User Threads

**Listing User Threads**: This endpoint allows you to retrieve threads list about a specific user.
Use the provided endpoint with the `GET` method to list user's threads.

### Resource URL

`https://api.multividas.com/rest-api/v1/users/{user:username}/threads?page=1&per_page=10`

### Resource Information

| Method                                | GET  |
|---------------------------------------|------|
| Response formats                      | JSON |
| Rate limited?                         | Yes  |
| Requests per minute                   | 50   |

### Query Parameters

| Name        | Type    | Description                                     |
|-------------|---------|-------------------------------------------------|
| page        | integer | Page number   |
| per_page    | integer | Page Limit    |

**Unauthenticated users:** First page with 10 public threads only.

**Authenticated users:** All threads, pagination, sorted by latest, pinned first, display public threads, and get private threads if you are the owner.

### Response [200]

```json
{
    "current_page": 1,
    "data": [
        {   // [!code focus:32]
            "id": "99d366c9-2eb3-4469-8c4c-f88a8fa23ccc",
            "content": "Est rerum delectus et quia.",
            "isPinned": 1,
            "isPublic": 1,
            "isCommentEnabled": 1,
            "files": [{
                "src": "https://multividas.com/storage/factory/thumbnails/1.jpg",
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
                "userAvatar": "https://multividas.com/storage/factory/users/mark/1.jpg",
                "userCover": "https://multividas.com/storage/factory/covers/1.jpg",
                "createdAt": "2023-01-09T23:45:09.000000Z"
            },
            "createdAt": "2023-07-31T21:43:51.000000Z",
            "updatedAt": "2023-08-04T23:21:28.000000Z",
            "deletedAt": null
        },
        // ...
    ],
    "first_page_url": "https://api.multividas.com/rest-api/v1/users/mark/threads?page=1",
    "from": 1,
    "last_page": 1,
    "last_page_url": "https://api.multividas.com/rest-api/v1/users/mark/threads?page=1",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https://api.multividas.com/rest-api/v1/users/mark/threads?page=1",
            "label": "1",
            "active": true
        },
        {
            "url": null,
            "label": "Next &raquo;",
            "active": false
        }
    ],
    "next_page_url": null,
    "path": "https://api.multividas.com/rest-api/v1/users/mark/threads",
    "per_page": 10,
    "prev_page_url": null,
    "to": 9,
    "total": 9
}
```
