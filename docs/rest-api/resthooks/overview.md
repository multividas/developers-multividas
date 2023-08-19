# REST Hooks

REST Hooks is a set of patterns treating webhooks as subscriptions, streamlining real-time REST API communication with applications.

The REST Hooks subscription are (created, updated or deleted) using a REST API.

The REST Hooks pattern is built upon four fundamental requirements:

- Establishment of a mechanism to store subscriptions.
- Implementation of a mechanism to modify subscriptions through the API.
- Compilation of a list of event types and their corresponding implementations.
- Deployment of a mechanism for sending hooks in response to events.
