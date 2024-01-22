# Thread Model at Multividas.com

This document describes the attributes of the Thread model used in the multividas.com application.

## Thread Attributes

| Attribute Name    | Type         | Description                            |
|-------------------|--------------|----------------------------------------|
| id                | string       | Unique identifier (ULID)
| isPublic          | boolean      | Thread status (public or private)
| isPinned          | boolean      | Thread pin status
| content           | string       | Thread content
| isAnonymously     | boolean      | Thread anonymous status
| isCommentsEnabled | boolean      | Comment status for the thread
| files             | array, null  | [File Array of Objects](#file) associated with the thread
| tags              | array        | [Tag Array](/rest/entities/tag#tag) associated with the thread
| user              | object       | [User Object](/rest/entities/user#user) associated with the thread
| createdAt         | string, null | Thread created date
| updatedAt         | string, null | Thread updated date

## File Attributes

| Attribute Name   | Type         | Description                            |
|------------------|--------------|----------------------------------------|
| id              | string       | Unique identifier (ULID)
| src              | string       | File src
| mimetype         | string       | File mimetype

Accepted MIME types: image/jpeg, image/png, image/gif, video/mp4
