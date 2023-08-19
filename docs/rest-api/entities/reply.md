# Reply Model at multividas.com

This document describes the attributes of the Reply model used in the multividas.com application.

| Attribute Name  | Type        | Description                                 |
|-----------------|-------------|---------------------------------------------|
| id              | string      | Identifier (UUID)                           |
| user            | object      | [User Object](/rest-api/entities/user#user) associated with the reply |
| content         | string      | Reply content                               |
| replieableType  | string      | Polymorphic type of the replyable entity    |
| replieableId    | string      | Polymorphic ID of the replyable entity      |
| createdAt       | string, null| Reply created date                          |
| updatedAt       | string, null| Reply updated date                          |
| deletedAt       | string, null| Reply deleted date                          |
