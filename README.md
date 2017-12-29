## ReactSPA
### Documentation
---
#### Requirements
- Node
- npm

#### Stack
- Node
- Webpack
- ES6 (Babel)
- React
- React Router
- Redux / React Router Redux / Redux Form
- PostCSS + Sass
- Material UI

#### Initialization
```bash
npm i && npm run dev
```

### API Endpoints

#### Letters of credit
| Method | Path                                          | Description                                                            |
|--------|-----------------------------------------------|------------------------------------------------------------------------|
| GET    | /letters_of_credit                            | List all letters of credit                                             |
| GET    | /letters_of_credit/`:id`                      | Display a specific letter of credit                                    |
| GET    | /letters_of_credit?value=`:value`             | List all letters of credit ordered by the nearest value                |
| GET    | /letters_of_credit?installment=`:installment` | List all letters of credit ordered by the nearest installment          |
| GET    | /letters_of_credit?limit=`:limit`             | List all letters of credit with amount limited by the limit            |
| GET    | /letters_of_credit?term=`:term`               | List all letters of credit filtered by the name that contains the term |

##### Response
```json
{
    "id": 3,
    "name": "Carta de credito 3",
    "full_value": 35000,
    "regular_installment_value": 500,
    "flex_installment_value": 350,
    "duration": 30,
    "administration_fee": 0.00001,
    "reserve_fee": 0.2,
    "insurance_fee": 0.00001,
    "percentage_of_vehicle": 1,
    "catalog_info": {
        "vehicle_automaker_slug": "chevrolet",
        "vehicle_automodel_id": 2752,
        "vehicles_referenceds": {
            "top": [
              379063,
              379055,
              379482
            ],
            "others": [
              379715,
              379740,
              379231,
              379095
            ],
        }
    },
    "vehicle": "CHEVROLET Prisma Prisma 1.4"
}
```
The vehicles_referenceds ids is necessary to get catalog info at https://catalogo.webmotors.com.br/api/version/specification/`:id` endpoint.

#### Testimonials
| Method | Path                       | Description                                                       |
|--------|----------------------------|-------------------------------------------------------------------|
| GET    | /testimonials              | List all testimonials                                             |
| GET    | /testimonials?term=`:term` | List all testimonials filtered by the name that contains the term |

##### Response
```json
[
    {
        "name": "Ayrton Senna",
        "picture": "//storage.api.com/pictures/1.jpg",
        "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in diam diam."
    },
    {
        "name": "Nelson Piquet",
        "picture": "//storage.api.com/pictures/2.jpg",
        "message": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in diam diam."
    }
]
```

#### Banners
| Method | Path                     | Description                           |
|--------|--------------------------|---------------------------------------|
| GET    | /banners                 | List all banners                      |
| GET    | /banners?page=`:page`    | List all banners filtered by the page |

##### Response
```json
[
    {
        "page": "home",
        "title": "This is a banner",
        "image": "//storage.api.com/banners/1.jpg"
    },
    {
        "page": "home",
        "name": "This is another banner",
        "image": "//storage.api.com/banners/2.jpg"
    }
]
```

#### Leads
<table>
  <tr>
    <th>Method</th>
    <th>Path</th>
    <th colspan=2>Parameters</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>POST</td>
    <td>/leads</td>
    <td>
      <code>name</code><br />
      <code>email</code><br />
      <code>telephone</code><br />
      <code>cpf | cnpj</code><br />
      <code>choice_of_plan</code><br />
      <code>letter_of_credit_id</code>
    </td>
    <td>
      <code>String</code><br />
      <code>String</code><br />
      <code>String</code><br />
      <code>String</code><br />
      <code>regular | flex</code><br />
      <code>Integer</code>
    </td>
    <td>Create a new lead</td>
  </tr>
</table>

##### Response
**Success:**  
Expect a response with code `201` and no body

**Failure:**
```json
{
    "error": "A validação falhou: Nome não pode ficar em branco"
}
```

#### Config Pages
| Method | Path                                     | Description                                                   |
|--------|------------------------------------------|---------------------------------------------------------------|
| GET    | /config_pages                            | List all page configurations                                  |
| GET    | /config_pages?limit=`:limit`             | List all page configurations with amount limited by the limit |
| GET    | /config_pages?page=`:page`               | List all page configurations filtered by the page             |
| GET    | /config_pages?config_type=`:config_type` | List all page configurations filtered by the type             |

##### Response
```json
[
    {
        "id": 2,
        "page": "home",
        "config_type": "highlighted_vehicles",
        "references_id": [
          1
        ]
    },
    {
        "id": 4,
        "page": "home",
        "config_type": "highlighted_letter_of_credits",
        "references_id": [
          4
        ]
    }
]
```

#### Vehicles
| Method | Path                   | Description                                                   |
|--------|------------------------|---------------------------------------------------------------|
| GET    | /vehicles              | List all vehicles                                             |
| GET    | /vehicles?term=`:term` | List all vehicles filtered by the name that contains the term |

##### Response
```json
[
    {
        "id": 5,
        "automaker": "FIAT",
        "model": "PUNTO",
        "name": "FIAT PUNTO 123",
        "automaker_slug": "fiat",
        "automodel_id": 2165,
        "description": "123"
    }
]
```

#### Automakers
| Method | Path        | Description         |
|--------|-------------|---------------------|
| GET    | /automakers | List all automakers |

##### Response
```json
[
    {
        "nome": "ASTON MARTIN",
        "id": 239,
        "slug": "aston-martin"
    },
    {
        "nome": "AUDI",
        "id": 8,
        "slug": "audi"
    }
]
```

#### Automodels
| Method | Path                                              | Description                                      |
|--------|---------------------------------------------------|--------------------------------------------------|
| GET    | /automodels?automaker=`:automaker`                | List all automodels filtered by the automaker    |
| GET    | /automodels?automaker=`:automaker`&limit=`:limit` | List automodels with amount limited by the limit |

##### Response
```json
[
    {
        "nome": "ARGO",
        "id": 3628,
        "slug": "argo"
    },
    {
        "nome": "BRAVO",
        "id": 3193,
        "slug": "bravo"
    }
]
```
