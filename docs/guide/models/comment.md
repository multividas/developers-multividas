Comment model at MultiVida.blog

| Attribute Name    | Type           | Description                                 |
|-------------------|----------------|---------------------------------------------|
| id                | string         | Identifier (UUID)                           |
| userId           | string         | User identifier (UUID)                      |
| repliesEnabled   | boolean        | Whether replies are enabled for the comment |
| content           | string         | Comment content                             |
| commentableType  | string         | Polymorphic type of the commentable entity |
| commentableId    | string         | Polymorphic ID of the commentable entity   |
| createdAt        | string, null   | Comment created date                        |
| updatedAt        | string, null   | Comment updated date                        |
| deletedAt        | string, null   | Comment deleted date                        |
