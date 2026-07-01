# WenOptiAPI

Shared demo API for Optimizely demo sites, hosted on Netlify Functions. Each client gets its own function and data file.

## Endpoints

---

### `GET /.netlify/functions/chartwell-locations`

Returns Chartwell retirement residence locations.

**Parameters:**
| Param | Required | Description |
|---|---|---|
| `province` | No | Province key (`ontario`) — defaults to `ontario` |
| `city` | No | Filter by city name |
| `care` | No | Filter by care type (e.g. `Memory Care`) |

**Examples:**
```
# All Ontario locations
/.netlify/functions/chartwell-locations

# Filter by city
/.netlify/functions/chartwell-locations?city=Toronto

# Filter by care type
/.netlify/functions/chartwell-locations?care=Memory+Care
```

---

### `GET /.netlify/functions/builders-locations`

Returns Builders FirstSource locations.

**Parameters:**
| Param | Required | Description |
|---|---|---|
| `zip` | No | Filter by exact ZIP code |
| `facilityType` | No | Filter by facility type (e.g. `Lumber`) |

**Examples:**
```
# All locations
/.netlify/functions/builders-locations

# Filter by ZIP
/.netlify/functions/builders-locations?zip=86401

# Filter by facility type
/.netlify/functions/builders-locations?facilityType=Lumber
```

---

## Adding a new client

1. Add a data file under `data/` (e.g. `data/newclient-locations.json`)
2. Create a new function under `netlify/functions/` (e.g. `netlify/functions/newclient-locations.js`)
3. Update this README
