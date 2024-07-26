# Listing Conversation

**Listing Conversation**: This API endpoint allows you to retrieve a list of messages between the sender and a specific receiver.
Use the provided endpoint with the `GET` method to retrieve a list of conversation messages.

### Resource URL

`https://api.multividas.com/rest/v1/multichat/receiver/{receiver:id}/messages`

### Resource Information

| Method                                | GET  |
|---------------------------------------|------|
| Response formats                      | JSON |
| Requires authentication?              | Yes  |
| Rate Limiting                         | 30 per minute  |

## Response [200]

```json
{
  "data": [
    {
      "id": "01hered6ssgz8en3prvn5kx1jp",
      "sender": {},
      "receiver": {},
      "content": "Just Released MultiChat !",
      "readAt": "2001-07-07T05:10:19.000000Z",
      "createdAt": "2001-07-07T05:10:19.000000Z",
      "updatedAt": "2001-07-07T05:10:19.000000Z"
    },
    {
      ...
    }
  ],
  "code": 200,
  "meta": {}
}
```
