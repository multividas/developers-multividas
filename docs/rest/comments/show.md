# Show Comment

**Show Comment**: This endpoint allows you to retrieve comments list about a specific user.
Use the provided endpoint with the `GET` method to list user's comments.

### Resource URL

`https://api.multividas.com/rest/v1/comments/{comment:id}`

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
        "content": "Nice !",
        "isAnonymously": true,
        "likesCount": 0,
        "user": null,
        "tags": [],
        "createdAt": "2023-11-09T16:08:03.000000Z",
    },
    "code": 200,
    "meta": {}
}
```

::: info
When it's anonymous, the user field is set to null.
:::
