# Project Name

> AirBNB item webpage clone, Information service section.

## Related Projects

  - https://github.com/HROneForAll/fec-photo-gallery-service
  - https://github.com/HROneForAll/fec-photo-gallery-proxy-server
  - https://github.com/HROneForAll/fec-service-info
  - https://github.com/HROneForAll/fec-proxy-info
  - https://github.com/HROneForAll/fec-service-reviews
  - https://github.com/HROneForAll/fec-proxy-reviews
  - https://github.com/HROneForAll/fec-proxy-suggestions
  - https://github.com/HROneForAll/fec-service-suggestions
  - https://github.com/HROneForAll/fec-proxy-availability
  - https://github.com/HROneForAll/fec-service-availability

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```
## CRUD Operations

Observations:
1. `Body` represents the data sent inside the body of the request object.
2. Even if the output is `none`, a message is sent back to the client in the `response` object, warning him of the success/failure of the operation.

### CREATE
* HTTP method: POST;
* Endpoint: `/rooms`;
* Parameters: none;
* Body: object (keys are amenities and values are booleans, indicating whether the room has the amenity)
* Output: none.

### READ (one room)
* HTTP method: GET;
* Endpoint: `/rooms/:roomId`
* Parameters: `roomId`
* Body: none
* Output: rooms amenity object (same structure as the object described above).

### UPDATE
* HTTP method: PATCH;
* Endpoint: `/rooms/:roomId`;
* Parameters: `roomId`;
* Body: array (of properties whose boolean value should be reversed);
* Output: none.

### DELETE
* HTTP method: DELETE;
* Endpoint: `/rooms/:roomId`;
* Parameters: `roomId`;
* Body: none;
* Output: none.
