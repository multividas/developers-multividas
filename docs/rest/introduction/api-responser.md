# API Response Handling

Use [API-Responser](https://github.com/multividas/api-responser) composer package to facilitates the process of structuring and generating API responses

## Success Response

Successful response containing the requested data and an appropriate status code.

```json
{
    "data": [
        // ...
    ],
    "code": 200,
    "meta": {}
}
```

## Info response

Info response provides informative messages about the response, with metadata details and an appropriate status code.

```json
{
    "info": "Resource Not Found",
    "code": 404,
    "meta": {}
}
```

