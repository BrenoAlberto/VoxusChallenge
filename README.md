# Voxus Date Challenge

Voxus Challenge I - Lógica

## Running Services

in case the command `docker compose` doesn't work, you can try `docker-compose` instead.

### Running the App

```bash
docker compose up app
```

The API should start at `http://localhost:3000`.

### Running the Tests

```bash
docker compose up test
```

### Running the Performance Tests

```bash
docker compose up performance
```

## API Usage

### Get Day Number in Year

- **URL**: `/get-day-number-in-year`
- **Method**: `GET`
- **URL Params**: `date=[string]`
- **Success Response**: `{"dayNumber": number}`
- **Error Response**: `{"error": "Invalid date format"}`

### Example

**Request**:

```bash
curl "http://localhost:3000/get-day-number-in-year?date=2019-02-10"

```

**Response**:

```json
{
  "dayNumber": 41
}
```
