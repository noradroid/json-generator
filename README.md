# JSON Generator

Generate JSON data by passing in field name and type.

Curl request:

```bash
curl --location 'https://json-generator-gilt.vercel.app/generate' \
--header 'Content-Type: application/json' \
--data '{
    "size": 5,
    "fields": [
        {
            "type": "id",
            "name": "id"
        },
        {
            "type": "amount",
            "name": "amountDefault"
        },
        {
            "type": "amount",
            "name": "amountOther"
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
            "type": "date",
            "name": "date"
        }
    ]
}'
```
