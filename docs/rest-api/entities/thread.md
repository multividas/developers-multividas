# Thread Model at MultiVida.blog

This document describes the attributes of the Thread model used in the MultiVida.blog application.

## Thread Attributes

| Attribute Name   | Type         | Description                            |
|------------------|--------------|----------------------------------------|
| id               | string       | Unique identifier (UUID)               |
| files            | array, null  | [File Array of Objects](#file) associated with the thread |
| tags             | array        | [Tag Array](/rest-api/entities/tag#tag) associated with the thread |
| user             | object       | [User Object](/rest-api/entities/user#user) associated with the thread |
| content          | string       | Thread content                         |
| isPublic         | boolean      | Thread status (public or private)      |
| isPinned         | boolean      | Thread pin status                      |
| isCommentEnabled | boolean      | Comment status for the thread          |
| createdAt        | string, null | Thread created date                    |
| updatedAt        | string, null | Thread updated date                    |
| deletedAt        | string, null | Thread deleted date                    |

## File Attributes

| Attribute Name   | Type         | Description                            |
|------------------|--------------|----------------------------------------|
| src              | string       | File src                               |
| mimetype         | string       | File mimetype                          |

Accepted MIME types: image/jpeg, image/png, image/gif, video/mp4
