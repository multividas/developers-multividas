# Error Handling

Every error includes a code, the HTTP status code, a short detail, and an additional meta can be used to help the Multividas support team investigate in your error quickly.

## Error Types

| HTTP Status | Description                                     | 
| ----------- | ----------------------------------------------- |
| 401         | **Unauthenticated** - Authentication is required for this action.    |
| 403         | **Access Denied** - You are not authorized to perform this action. |
| 404         | **Resource Not Found** - The requested resource could not be found or has been deleted.     |
| 405         | **Method Not Allowed** - The specified method for the request is invalid. This error occurs when the endpoint does not support the current request type. |
| 409         | **Conflict** - This resource cannot be removed permanently as it is associated with other resources.     |
| 422         | **The given data was invalid** - The request could not be processed due to validation errors. For example, there might be missing required fields or invalid field types. |
| 429         | **Too Many Attempts** - "Too Many Attempts" is an error message shown when a user exceeds the allowed number of requests tries, temporarily locking them out for security reasons.  |
| 500         | **Internal Server Error** - A generic error occurred on the server while processing the request. Please try again later.  |

## Error Responses

### Not found

This response indicates that the requested resource could not be found.
- **HTTP Status Code**: 404 Resource Not Found
- No additional metadata is provided.

```json
{
    "info": "Resource Not Found",
    "code": 404,
    "meta": []
}
```

### Internal error

This response signifies an internal server error.
- **HTTP Status Code**: 500 Internal Server Error
- No additional metadata is provided.

```json
{
    "info": "Internal Server Error",
    "code": 500,
    "meta": []
}
```

### Data Validation Issue

This response indicates that there are problems with the suitability of the provided input data for the requested task.

- **HTTP Status Code**: 422 Unprocessable Entity
- Detailed error information is provided for each problematic field.

```json
{
    "info": "The given data was invalid.",
    "code": 422,
    "meta": {
        "fields": {
            "email": [
                "The email field is required."
            ],
            "password": [
                "The password field is required."
            ],
            "password_confirmation": [
                "The password confirmation field is required."
            ]
        }
    }
}

```
