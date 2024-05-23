# Update Thread Status

**Update Thread Status**: This endpoint allows you to modify the pinned, public or private status, enable or disable comments, and update the anonymous status of a thread. Utilize the provided endpoint with the `PATCH` method to update specific Thread status.

## Public Status
### Resource URL

`https://api.multividas.com/rest/v1/threads/{thread:id}/status`

### Resource Information

| Method                                | PATCH  |
|---------------------------------------|------|
| Response formats                      | JSON |
| Requires authentication?              | Yes   |

### Response [200]

```json
{
    "info": "Thread status updated",
    "code": 200,
    "meta": {}
}
```

## Pinned Status
### Resource URL

`https://api.multividas.com/rest/v1/threads/{thread:id}/pinned`

### Resource Information

| Method                                | PATCH  |
|---------------------------------------|------|
| Response formats                      | JSON |
| Requires authentication?              | Yes   |

### Response [200]

```json
{
    "info": "Thread pinned updated",
    "code": 200,
    "meta": {}
}
```

## Comments enabled
### Resource URL

`https://api.multividas.com/rest/v1/threads/{thread:id}/comments-enabled`

### Resource Information

| Method                                | PATCH  |
|---------------------------------------|------|
| Response formats                      | JSON |
| Requires authentication?              | Yes   |

### Response [200]

```json
{
    "info": "Thread comments enabled updated",
    "code": 200,
    "meta": {}
}
```

## Anonymously status
### Resource URL

`https://api.multividas.com/rest/v1/threads/{thread:id}/anonymous-status`

### Resource Information

| Method                                | PATCH  |
|---------------------------------------|------|
| Response formats                      | JSON |
| Requires authentication?              | Yes   |

### Response [200]

```json
{
    "info": "Thread anonymous status updated",
    "code": 200,
    "meta": {}
}
```
