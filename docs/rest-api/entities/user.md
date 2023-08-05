# User Model at Multivida.blog

This document describes the attributes of the User and Profile Models used in the Multivida.blog application.

## User

| Attribute Name      | Type           | Description                           |
|---------------------|----------------|---------------------------------------|
| id                  | string         | Unique identifier (UUID)              |
| name                | string         | Name of the user                      |
| username            | string         | Username of the user                  |
| email               | string, null   | Email of the user                     |
| phone               | string, null   | Phone of the user                     |
| role                | string         | User role                             |
| isVerified          | string         | User's profile verified status        |
| isProfileLocked     | boolean        | User's profile locked status          |
| isCommentLocked     | boolean        | User's comments locked status         |
| isLikeLocked        | boolean        | User's likes locked status            |
| [profile](#profile) | object         | User Profile object                   |
| userAvatar          | string, null   | URL path for user's avatar            |
| userCover           | string, null   | URL path for user's cover image       |
| createdAt           | string, null   | User's account creation date          |

## Profile

| Attribute Name      | Type           | Description                           |
|---------------------|----------------|---------------------------------------|
| id                  | string         | Unique identifier (UUID)              |
| bio                 | string, null   | User's biography                      |
| url                 | string, null   | User's URL (if available)             |
| location            | string, null   | User's location                       |
| gender              | string, null   | User's gender                         |
| birthdate           | string, null   | User's birthdate                      |

In the User model, the profile attribute represents the user's associated profile. The Profile model contains additional information about the user, such as their biography, URL, location, gender, and birthdate etc.
