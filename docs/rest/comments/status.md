# Update Comment Status

**Update Comment Status**: This endpoint allows you to update the anonymous status of a comment. Utilize the provided endpoint with the `PATCH` method to update specific Comment status.

## Anonymously status
### Resource URL

`https://api.multividas.com/rest/v1/comments/{comment:id}/anonymous-status`

### Resource Information

| Method                                | PATCH  |
|---------------------------------------|------|
| Response formats                      | JSON |
| Requires authentication?              | Yes   |

### Response [200]

```json
{
    "info": "Comment anonymous status updated",
    "code": 200,
    "meta": {}
}
```
