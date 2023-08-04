# Query Filters

Query filters are the parameters used to navigate the API resources, paginate, filter, sort, etc.
Use [API-Responser](https://github.com/multivida/api-responser) composer package to simplify the process of building APIs and filtering queries.


## Search

The q parameter can be used to search for something under a listing in a resource. Ex:

```
/users/{username}/threads?q=lorem ipsum
```


## Pagination

To paginate the returned data, utilize the `page` parameter:

Example: Retrieve data from the user's threads with page number 1:

```
/users/{username}/threads?page=1
```

The API provides pagination data in each resource listing, allowing you to traverse pages easily.

In the Link header, you will find first, `prev`, `next`, and `last` links. These links aid in navigating through different pages of the data.

```json
{
    "current_page": 1,
    "data": [
        // ...
    ],
    "first_page_url": "https://api.multivida.blog/users/{username}/threads?page=1",
    "from": 1,
    "last_page": 2,
    "last_page_url": "https://api.multivida.blog/users/{username}/threads?page=2",
    "links": [
        {
            "url": null,
            "label": "&laquo; Previous",
            "active": false
        },
        {
            "url": "https://api.multivida.blog/users/{username}/threads?page=1",
            "label": "1",
            "active": true
        },
        // ..
    ],
    "next_page_url": "https://api.multivida.blog/users/{username}/threads?page=2",
    "path": "https://api.multivida.blog/users/{username}/threads",
    "per_page": 10,
    "prev_page_url": null,
    "to": 10,
    "total": 13
}
```


## Limiting Results

To limit the number of rows in your response and expedite your requests, utilize the `per_page` parameter:

By default, the API returns 10 items.

Example: To retrieve 15 items per page from a user's threads, use the following endpoint:

```
/users/{username}/threads?page=1&per_page=15
```


## Sorting

To get the best results, you can sort it using the available fields for the selected resources:

```
/users/{username}/threads?_sort=id&_order=asc
```

Add `_sort` and `_order` (ascending order by default)

```
/users/{username}/threads?_sort=created_at&_order=asc
```

By default, you get latest created data:

```
/users/{username}/threads?_sort=created_at&_order=desc
```


## Filters

Filters are a powerful way to narrow search results, we update this feature frequently to include more fields.

Suppose we want a list of threads whose comments are disabled

```
/users/{username}/threads?filters[0][field]=isCommentEnabled&filters[0][value]=false
```

You can also use multiple filters in one query.

```
/users/{username}/threads?filters[0][field]=isCommentEnabled&filters[0][value]=false&filters[1][field]=isPinned&filters[1][value]=true
```

The above request will bring threads whose comments are disabled and include pinned threads too.

