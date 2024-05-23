# Create Thread

### Resource URL

`https://api.multividas.com/rest/v1/threads`

### Resource Information

| Method                                | POST  |
|---------------------------------------|-------|
| Response formats                      | JSON  |
| Requires authentication?              | YES   |

## Parameters

| Param Name    | Param Type   | Description                                      | Required |
|---------------|--------------|--------------------------------------------------|----------|
| content       | String       | The main content of the thread                   | Yes      |
| files         | Object, null | Attachments/files associated with the thread. If null, content is required. | No       |
| status        | Object       | Values indicating the status of the thread, including public visibility, comments, and anonymous status. [Status](#status-details) | Yes      |
| schedule_at   | Object       | Values specifying the schedule details for the thread, including the date and time (if applicable). [Schedule](#schedule-details) | Yes      |

#### Status Details

| Field                | Type   | Description                                      | Required |
|----------------------|--------|--------------------------------------------------|----------|
| isPublic             | String | Indicates if the thread is public or private     | Yes      |
| isCommentsEnabled    | String | Indicates whether comments are enabled or not    | Yes      |
| isAnonymously        | String | Indicates if the thread is anonymous or not      | Yes      |

#### Schedule Details

| Field          | Type   | Description                                               | Required |
|----------------|--------|-----------------------------------------------------------|----------|
| selectedDate   | String, null    | The selected date for scheduling the thread      | No       |
| selectedTime   | String, null    | The selected time for scheduling the thread      | No       |

::: info
Anonoymous Threads are always unpinned !
:::

## Request Body (JSON)

```json
{
  "content": "Hello World !",
  "files": null,
  "status": {
    "isPublic": "true",
    "isCommentsEnabled": "true",
    "isAnonymously": "false"
  },
  "schedule_at": {
    "selectedDate": null,
    "selectedTime": null
  }
}
```

::: info
The status and schedule_at fields are required in the request body. If files is null, the content field is required.
:::

## Response [422]

```json
{
    "info": "The given data was invalid.",
    "code": 422,
    "meta": {
        "fields": {
            "content": [
                "The content field is required when files is empty."
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
    "code": 201,
    "meta": {}
}
```
