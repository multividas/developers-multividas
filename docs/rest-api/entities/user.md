# User Model at Multivida.blog

This document describes the attributes of the User and Profile Models used in the Multivida.blog application.

## User

| Attribute Name      | Type           | Description                           |
|---------------------|----------------|---------------------------------------|
| id                  | string         | Unique identifier (UUID)              |
| name                | string         | Name of the user                      |
| username            | string         | Username of the user                  |
| isVerified          | boolean        | User's profile verified status        |
| isProfileLocked     | boolean        | User's profile locked status          |
| [profile](#profile) | object         | User Profile object                   |
| userAvatar          | string         | URL path for user's avatar            |
| userCover           | string         | URL path for user's cover image       |
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
