# Get User

## Get a user

**Get User**: This endpoint allows you to retrieve information about a specific user based on their username.
Use the provided endpoint with the `GET` method to access user details.

### Resource URL

`https://api.multividas.com/rest/v1/users/{user:username}` 

### Resource Information

| Method                                | GET  |
|---------------------------------------|------|
| Response formats                      | JSON |
| Requires authentication?              | No   |

### Response [200]

```json
{
  "data": {
    "id": "01hered6ssgz8en3prvn5kx1jp",
    "name": "Soulaimane Yahya",
    "username": "soulaimaneyh",
    "email": "contact@soulaimaneyahya.com",
    "phone": "+212767676767",
    "profile": {
      "id": "01hered6ssgz8en3prvn5kx1jp",
      "bio": "Founder and CEO at Multividas",
      "links": [
        "https://soulaimaneyahya.com"
      ],
      "country": "ma",
      "location": "Tétouan",
      "lang": "en",
      "gender": "male",
      "birthdate": "2001-07-07",
    },
    "userAvatar": "https://static-assets.multividas.com/storage/factory/users/soulaimaneyh/1.jpg",
    "userCover": "https://static-assets.multividas.com/storage/factory/covers/1.jpg",
    "createdAt": "2001-07-07T05:10:19.000000Z"
  },
  "code": 200,
  "meta": {}
}
```

## Get User's Profile

**Get User's Profile**: If you need to obtain a user's profile, you can do so by accessing this endpoint with the `GET` method. Replace `{user:username}` with the desired user's username.

### Resource URL

`https://api.multividas.com/rest/v1/users/{user:username}/profile` 

### Response [200]

```json
{
  "data": {
    "id": "01hered6ssgz8en3prvn5kx1jp",
    "bio": "Founder and CEO at Multividas",
    "links": [
      "https://soulaimaneyahya.com"
    ],
    "country": "ma",
    "location": "Tétouan",
    "lang": "en",
    "gender": "male",
    "birthdate": "2001-07-07",
  },
  "code": 200,
  "meta": {}
}
```

Certain fields (gender, date of birth, etc.) may be hidden (null) depending on the user's privacy settings.
