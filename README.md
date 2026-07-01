# WenOptiAPI

Shared demo API for Optimizely demo sites, hosted on Netlify Functions.

## Endpoints

### `GET /.netlify/functions/locations`

Returns location data for a given demo site.

**Parameters:**
| Param | Required | Description |
|---|---|---|
| `site` | Yes | Demo site key (`chartwell`) |
| `province` | No | Province filter for Chartwell (`ontario`) — defaults to `ontario` |
| `city` | No | Filter by city name |
| `care` | No | Filter by care type (e.g. `Memory Care`) |

**Examples:**
```
# All Ontario locations
/.netlify/functions/locations?site=chartwell

# Filter by city
/.netlify/functions/locations?site=chartwell&city=Toronto

# Filter by care type
/.netlify/functions/locations?site=chartwell&care=Memory+Care
```

**Response:**
```json
{
  "site": "chartwell",
  "total": 71,
  "locations": [
    {
      "id": 1,
      "name": "Chartwell Harwood",
      "city": "Ajax",
      "address": "240 Old Harwood Avenue, Ajax, ON L1T 0N2",
      "phone": "289-608-8364",
      "careTypes": ["Independent Living", "Assisted Living", "Memory Care"]
    }
  ]
}
```

## Adding new sites

1. Add a JSON data file under `data/`
2. Add a handler branch in the relevant function (or create a new function)
3. Update this README
