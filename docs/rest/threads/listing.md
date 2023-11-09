# Listing User Threads

**Listing User Threads**: This endpoint allows you to retrieve threads list about a specific user.
Use the provided endpoint with the `GET` method to list user's threads.

### Resource URL

`https://api.multividas.com/rest/v1/users/{user:username}/threads?page=1&per_page=10`

### Resource Information

| Method                                | GET  |
|---------------------------------------|------|
| Response formats                      | JSON |
| Requires authentication?              | No   |

### Query Parameters

| Name        | Type    | Description                                     |
|-------------|---------|-------------------------------------------------|
| page        | integer | Page number   |
| per_page    | integer | Page Limit    |

**Unauthenticated users:** First page with 10 public threads only.

**Authenticated users:** All threads, pagination, sorted by latest, pinned first, display public threads, and get private threads if you are the owner.

## Response [200]

```json
{
    "data": [
        {
            "id": "01hered6ssgz8en3prvn5kx1jp",
            "content": "Hello World !",
            "isPublic": true,
            "isPinned": false,
            "isAnonymously": true,
            "isCommentsEnabled": false,
            "likesCount": 10,
            "commentsCount": 2,
            "rethreadsCount": 0,
            "files": null,
            "tags": [
                "multividas"
            ],
            "user": null,
            "createdAt": "2023-10-27T11:00:12.000000Z",
            "updatedAt": "2023-10-29T19:40:01.000000Z"
        },
        // ...
    ],
    "code": 200,
    "meta": {
        "pagination": {
            "total": 12,
            "count": 10,
            "per_page": 10,
            "current_page": 1,
            "total_pages": 2,
            "links": {
                "next": "https://api.multividas.com/rest/v1/users/mark/threads?page=2"
            }
        }
    }
}
```
