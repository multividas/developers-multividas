# Show Thread

**Show Thread**: This endpoint allows you to retrieve threads list about a specific user.
Use the provided endpoint with the `GET` method to list user's threads.

### Resource URL

`https://api.multividas.com/rest/v1/threads/{thread:id}`

### Resource Information

| Method                                | GET  |
|---------------------------------------|------|
| Response formats                      | JSON |
| Requires authentication?              | No   |

## Response [200]

```json
{
  "data": {
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
  "code": 200,
  "meta": {}
}
```

::: info
When it's anonymous, the user field is set to null.
:::


## Get Thread User

### Resource URL

`https://api.multividas.com/rest/v1/threads/{thread:id}/user`

## Get Thread Files

### Resource URL

`https://api.multividas.com/rest/v1/threads/{thread:id}/files`
