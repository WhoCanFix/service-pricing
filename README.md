# WhoCanFix Developer interview activity

## API Notes

### POST /quotes

Accepts a JSON payload consisting of a make and fuelType.

```json
{
  "make":"ford",
  "fuelType":"petrol"
}
```

### GET /cars/:vrm

Gets vehicle details by a cars VRM (registration number)

```/cars/ab12afk```

## DB Structure

### Prices

| id | make | model  | fuelType | garageId | price |
|----|------|--------|----------|----------|-------|
| 1  | ford | fiesta | petrol   | 1        | 120   |
| 2  | ford | fiesta | diesel   | 1        | 130   |

### Cars

| id | vrm     | make | model    | fuelType |
|----|---------|------|----------|----------|
| 1  | ab12afk | ford | fiesta   | petrol   |
| 2  | ft20dfg | kia  | sportage | diesel   |

### Garages

| id | name            |
|----|-----------------|
| 1  | Andy's Autos    |
| 2  | Kieran's Wheels |