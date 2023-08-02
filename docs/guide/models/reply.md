Reply model at MultiVida.blog

| Attribute Name   | Type           | Description                           |
|------------------|----------------|---------------------------------------|
| id               | string         | Identifier (UUID)                     |
| userId          | string         | User identifier (UUID)                |
| content          | string         | Reply content                         |
| replieableType  | string         | Polymorphic type of the replyable entity |
| replieableId    | string         | Polymorphic ID of the replyable entity   |
| createdAt       | string, null   | Reply created date                    |
| updatedAt       | string, null   | Reply updated date                    |
| deletedAt       | string, null   | Reply deleted date                    |
