# Comment Model at Multividas.com

This document describes the attributes of the Comment model used in Multividas.com application.

| Attribute Name   | Type        | Description                                 |
|------------------|-------------|---------------------------------------------|
| id               | string      | Identifier (ULID)
| content          | string      | Comment content
| commentableType  | string      | Polymorphic type of the commentable entity
| commentableId    | string      | Polymorphic ID of the commentable entity
| isAnonymously    | boolean     | Comment anonymous status
| user             | object      | [User Object](/products/multividas/rest/entities/user#user) associated with the comment
| tags             | object      | [Tag Object](/products/multividas/rest/entities/tag#tag) associated with the comment
| createdAt        | string, null| Comment created date
| updatedAt        | string, null| Comment updated date
