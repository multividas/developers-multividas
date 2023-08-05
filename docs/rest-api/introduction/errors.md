# Errors

Every error includes a code, the HTTP status code, a short detail, and an additional meta can be used to help the Multivida support team investigate in your error quickly.

## Error Types

| HTTP Status | Description                                     | 
| ----------- | ----------------------------------------------- |
| 401         | **Unauthenticated** - Authentication is required for this action.    |
| 403         | **Access Denied** - You are not authorized to perform this action. |
| 404         | **Resource Not Found** - The requested resource could not be found or has been deleted.     |
| 405         | **Method Not Allowed** - The specified method for the request is invalid. This error occurs when the endpoint does not support the current request type. |
| 409         | **Conflict** - This resource cannot be removed permanently as it is associated with other resources.     |
| 422         | **Unprocessable Entity** - The request could not be processed due to validation errors. For example, there might be missing required fields or invalid field types. |
| 500         | **Internal Server Error** - A generic error occurred on the server while processing the request. Please try again later.  |

## Not found
```json
{
    "info": "Resource Not Found",
    "code": 404
}
```

## Internal error
```json
{
    "info": "Internal Server Error"
    "code": 500,
}
```
