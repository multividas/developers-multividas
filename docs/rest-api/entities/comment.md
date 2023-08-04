# Comment Model at MultiVida.blog

This document describes the attributes of the Comment model used in the MultiVida.blog application.

| Attribute Name   | Type        | Description                                 |
|------------------|-------------|---------------------------------------------|
| id               | string      | Identifier (UUID)                           |
| user             | object      | [User Object](/rest-api/entities/user#user) associated with the comment |
| isReplyEnabled   | boolean     | Whether replies are enabled for the comment |
| content          | string      | Comment content                             |
| commentableType  | string      | Polymorphic type of the commentable entity  |
| commentableId    | string      | Polymorphic ID of the commentable entity    |
| createdAt        | string, null| Comment created date                        |
| updatedAt        | string, null| Comment updated date                        |
| deletedAt        | string, null| Comment deleted date                        |
