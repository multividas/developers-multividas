# Query Filters

Use [Query-Filters](https://github.com/multivida/query-filters) composer package to simplify the process of filtering and sorting queries.


## Limiting Results

To limit the number of rows in your response and expedite your requests, utilize the `per_page` parameter:

By default, the API returns 10 items.

Example: To retrieve 15 items per page from a user's threads, use the following endpoint:

```
/users/{username}/threads?page=1&per_page=15
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
    "data": [
        // ...
    ],
    "meta": {
        "pagination": {
            "total": 12,
            "count": 10,
            "per_page": 10,
            "current_page": 1,
            "total_pages": 2,
            "links": {
                "next": "https://api.multivida.blog/rest-api/v1/users/mark/threads?page=2"
            }
        }
    }
}
```


## Sorting

To get the best results, you can sort it using the available fields for the selected resources:

```
/users/{username}/threads?_sort=id&_order=asc
```

Add `_sort` and `_order` params, By default, you'll get latest created data in ascending order:

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

