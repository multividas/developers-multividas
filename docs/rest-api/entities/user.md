# User Model at multividas.com

This document describes the attributes of the User and Profile Models used in the multividas.com application.

## User Attributes

| Attribute Name      | Type           | Description                           |
|---------------------|----------------|---------------------------------------|
| id                  | string         | Unique identifier (UUID)              |
| name                | string         | Name of the user                      |
| username            | string         | Username of the user                  |
| email               | string, null   | Email of the user                     |
| phone               | string, null   | Phone of the user                     |
| userStatus          | string         | User's profile status                 |
| isProfileLocked     | boolean        | User's profile locked status          |
| isCommentLocked     | boolean        | User's comments locked status         |
| isLikeLocked        | boolean        | User's likes locked status            |
| profile             | object         | User [Profile](#profile) object       |
| userAvatar          | string, null   | URL path for user's avatar            |
| userCover           | string, null   | URL path for user's cover image       |
| createdAt           | string, null   | User's account creation date          |

## Profile Attributes

| Attribute Name      | Type           | Description                           |
|---------------------|----------------|---------------------------------------|
| id                  | string         | Unique identifier (UUID)              |
| bio                 | string, null   | User's biography                      |
| links               | Object, null   | User's Links (if available)           |
| location            | string, null   | User's location                       |
| gender              | string, null   | User's gender                         |
| birthdate           | string, null   | User's birthdate                      |

In the User model, the profile attribute represents the user's associated profile. The Profile model contains additional information about the user, such as their biography, URL, location, gender, and birthdate etc.
