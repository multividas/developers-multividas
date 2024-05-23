# Create Comment

### Resource URL

`https://api.multividas.com/rest/v1/threads/{thread:id}/comments`

### Resource Information

| Method                                | POST  |
|---------------------------------------|-------|
| Response formats                      | JSON  |
| Requires authentication?              | YES   |

## Parameters

| Param Name    | Param Type   | Description                                      | Required |
|---------------|--------------|--------------------------------------------------|----------|
| content       | String       | The main content of the comment                   | Yes      |
| status        | Object       | Values indicating the status of the comment, including anonymous status. [Status](#status-details) |      |

#### Status Details

| Field                | Type   | Description                                      | Required |
|----------------------|--------|--------------------------------------------------|----------|
| isAnonymously        | String | Indicates if the comment is anonymous or not      | Yes     |

## Request Body (JSON)

```json
{
  "content": "Nice !",
  "status": {
    "isAnonymously": true
  }
}
```

## Response [422]

```json
{
    "info": "The given data was invalid.",
    "code": 422,
    "meta": {
        "fields": {
            "content": [
                "Content field is required."
            ]
        }
    }
}
```

## Response [201 Created]

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
