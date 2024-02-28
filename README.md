# JSON Generator

Generate JSON data by passing in a schema.

Curl request:

```bash
curl --location 'http://localhost:3000/generate' \
--header 'Content-Type: application/json' \
--data '{
    "type": "[]",
    "size": 3,
    "elementSchema": {
        "type": "{}",
        "propertySchemas": [
            {
                "type": "date",
                "name": "date"
            },
            {
                "type": "[]",
                "name": "expenses",
                "size": "3",
                "elementSchema": {
                    "type": "{}",
                    "propertySchemas": [
                        {
                            "type": "id",
                            "name": "id"
                        },
                        {
                            "type": "name",
                            "name": "name"
                        },
                        {
                            "type": "description",
                            "name": "description"
                        },
                        {
                            "type": "amount",
                            "name": "amountDefault"
                        },
                        {
                            "type": "amount",
                            "name": "amountOther"
                        }
                    ]
                }
            }
        ]
    }
}'
```
