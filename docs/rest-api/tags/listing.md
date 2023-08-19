## Listing User Tags

Retrieves a user's tags on multividas. `GET` request with username returns topics that a specific user is talking about.

### Resource URL

`https://api.multividas.com/rest-api/v1/users/{user:username}/tags` 

### Response [200]

```json
{
    "data": [
        "php",
        "laravel"
    ]
}
```

## Listing Thread Tags

Retrieves a thread's tags on multividas. `GET` request returns tags related to a specific thread.

### Resource URL

`https://api.multividas.com/rest-api/v1/threads/{thread:id}/tags` 

### Response [200]

```json
{
    "data": [
        "technews"
    ]
}
```
