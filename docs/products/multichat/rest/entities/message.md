# Message Model at MultiChat

This document describes the attributes of the Message model used in MultiChat application.

## Message Attributes

| Attribute Name                | Type         | Description                              |
|-------------------------------|--------------|------------------------------------------|
| `id`                          | string       | Unique identifier (ULID)                 |
| `sender`                      | string       | [Sender](/products/multividas/rest/entities/user#user) of the message                |
| `receiver`                    | string       | [Receiver](/products/multividas/rest/entities/user#user) of the message              |
| `content`                     | string       | The content of the message               |
| `isStarred`                   | boolean      | Indicates if the message is starred      |
| `starredAt`                   | string, null | Timestamp when the message was starred   |
| `readAt`                      | string, null | Timestamp when the message was read      |
| `createdAt`                   | string, null | Message created date                     |
| `updatedAt`                   | string, null | Message updated date                     |

::: info
The `sender` of the message is the authenticated user.
:::
