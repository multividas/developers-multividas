# User Model at Multividas.com

This document describes the attributes of the User and Profile Models used in Multividas.com application.

## User Attributes

| Attribute Name      | Type           | Description                           |
|---------------------|----------------|---------------------------------------|
| id                  | string         | Unique identifier (ULID)
| name                | string         | Name of the user
| username            | string         | Username of the user
| email               | string, null   | Email of the user
| phone               | string, null   | Phone of the user
| profile             | object         | User [Profile](#profile) object
| userAvatar          | string, null   | URL path for user's avatar
| userCover           | string, null   | URL path for user's cover image
| createdAt           | string, null   | User's account creation date

## Profile Attributes

| Attribute Name      | Type           | Description                           |
|---------------------|----------------|---------------------------------------|
| id                  | string         | Unique identifier (ULID)
| bio                 | string, null   | User's biography
| links               | Object, []     | User's Links (if available)
| location            | string, null   | User's location
| lang                | string, null   | User's prefernce language
| gender              | string, null   | User's gender
| birthdate           | string, null   | User's birthdate

In the User model, the profile attribute represents the user's associated profile. The Profile model contains additional information about the user, such as their biography, links, location, gender, and birthdate etc.
role
