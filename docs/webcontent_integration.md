# WebContent Integration Guide

This guide explains how to integrate with the WebContent API in this project. It covers the available endpoints, expected payloads, responses, and code flow.

## Overview

- Base path: `/webcontents`
- Purpose: Manage website content entries. Currently the `WebContent` model contains a single field: `video_url`.
- Tech stack: Express routes -> Controllers -> Services -> Repositories -> Sequelize Model

Relevant files:
- Routes: `routes/webContentRoute.js`, mounted in `routes/index.js` at `/webcontents`
- Controller: `controllers/WebContent/index.js`
- Service: `services/WebContent/index.js`
- Repository: `repositories/WebContent/index.js`
- Model: `models/webcontent.js`

## Data Model

`models/webcontent.js` defines:

```js
WebContent.init({
  video_url: DataTypes.STRING
}, {
  sequelize,
  modelName: 'WebContent',
});
```

Minimal required field for creation/update:
- `video_url`: string

## Endpoints

All endpoints are mounted under `/webcontents` (see `routes/index.js`). The route definitions are in `routes/webContentRoute.js`.

- POST `/webcontents`
  - Description: Create a new web content record.
  - Body JSON:
    ```json
    {
      "video_url": "https://example.com/video.mp4"
    }
    ```
  - Responses:
    - 201 Created, body: the created record JSON (spread from Sequelize instance).

- GET `/webcontents`
  - Description: Get all web content records.
  - Responses:
    - 200 OK, body:
      ```json
      {
        "records": [
          { "id": 1, "video_url": "...", "createdAt": "...", "updatedAt": "..." }
        ]
      }
      ```

- GET `/webcontents/:id`
  - Description: Get a single record by its ID.
  - Responses:
    - 200 OK, body:
      ```json
      {
        "record": { "id": 1, "video_url": "...", "createdAt": "...", "updatedAt": "..." }
      }
      ```

- PUT `/webcontents/:id`
  - Description: Update an existing record.
  - Body JSON (partial or full):
    ```json
    { "video_url": "https://new-url" }
    ```
  - Responses:
    - 200 OK, body:
      ```json
      {
        "record": [affectedCount]
      }
      ```
      Note: Sequelize `update` returns an array `[affectedCount]` by default. If you need the updated row, enable `returning: true` on the repository method or perform a follow-up `GET`.

## Flow Reference

The request flow for this feature is:

1. Route handler in `routes/webContentRoute.js` wires HTTP verbs to controller methods.
2. Controller in `controllers/WebContent/index.js` creates a `WebContentService` instance and calls `create`, `getAll`, `getById`, or `update`.
3. Service in `services/WebContent/index.js` performs basic checks and delegates to the repository.
4. Repository in `repositories/WebContent/index.js` interacts with Sequelize `models.WebContent` and performs validation via `helpers/Validations/ModelValidation` before writes.

## cURL Examples

- Create
  ```bash
  curl -X POST \
    -H "Content-Type: application/json" \
    -d '{"video_url":"https://example.com/video.mp4"}' \
    http://localhost:PORT/webcontents
  ```

- List
  ```bash
  curl http://localhost:PORT/webcontents
  ```

- Get by ID
  ```bash
  curl http://localhost:PORT/webcontents/1
  ```

- Update
  ```bash
  curl -X PUT \
    -H "Content-Type: application/json" \
    -d '{"video_url":"https://example.com/new.mp4"}' \
    http://localhost:PORT/webcontents/1
  ```

Replace `PORT` with the port your server runs on (see `settings/server.js` or your environment configuration).

## Notes and Best Practices

- Validation: Repository uses `ModelValidation` to ensure request body keys match the model. Avoid sending extra fields.
- Error handling: Global middleware in `middlewares/errorHandler.js` may capture thrown errors—ensure it’s applied in your app setup.
- Updates: If you need the updated entity back in one request, adjust repository `update` to use `{ returning: true }` and return the updated row.
- Authentication/authorization: No auth middleware is applied on these routes by default. If required, add middleware in `routes/webContentRoute.js`.
