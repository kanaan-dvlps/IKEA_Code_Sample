## API Documentation

### Products API
- This part is responsible for development of the products, performing the named operations in this module:
  - Get a specific category of products
  - Get a single product
  - Add products
  - Update products
  - Delete products

- URLs:
- NOTE: The reason some of the options are duplicated is that in postman form-data we can edit arrays this way and send as many duplicated key-value pairs as we need to feel in the array, this can be done differently in frontend obviosly.

_URL_: `http://185.235.42.61:3030/api/v1/products`
_Method_: `POST`
_API Description_: Creates one product
_FORM DATA EXAMPLE_:
```
{
  productName:Piltan,
  productCategory:thoracic-lumbar-sacral,
  productVariant:rod,
  productQuantity:10,
  productInfo:Universal OCT,
  productSystem:Universal system for dorsal stabilization,
  productSystem:From the occiput to the upper thoracic spine,
  productAdvantages:Cervical system for all common placement techniques,
  productAdvantages:Safety for user and patient by cannulated screws and a navigation option,
  productInstrumentation:OC stabilization,
  productInstrumentation:Different variants of lateral mass screws,
  productCombination:Hybrid rod Ø 4.0 mm/6.0 mm,
  productCombination:Rod-rod-connector, parallel and axial,
  productMaterial:Titanium Alloy,
  productImageCategory:Cervical-Thoracic,
}
```

_URL_: `http://185.235.42.61:3030/api/v1/products/all/:variant`
_Method_: `GET`
_BODY_: `None`
_API Description_: Gets all products with the same variant

- Note The `variant` is the same as `productVariant` since the database will query the data with `productVariant` and `variant` must be the same.

_Response_:
```
{
    "code": 200,
    "type": "REQUEST_SUCCESSFULLY_APPROVED",
    "message": {
        "Products": [
            {
                "_id": "624ea7e8d932c0ee203c85bf",
                "productName": "Piltan",
                "productCategory": "thoracic-lumbar-sacral",
                "productVariant": "rod",
                "productQuantity": 10,
                "productInfo": "Universal OCT",
                "productSystem": [
                    "Universal system for dorsal stabilization",
                    "From the occiput to the upper thoracic spine"
                ],
                "productAdvantages": [
                    "Cervical system for all common placement techniques",
                    "Safety for user and patient by cannulated screws and a navigation option"
                ],
                "productInstrumentation": [
                    "OC stabilization",
                    "Different variants of lateral mass screws"
                ],
                "productCombination": [
                    "Hybrid rod Ø 4.0 mm/6.0 mm",
                    "Rod-rod-connector, parallel and axial"
                ],
                "productMaterial": "Titanium Alloy",
                "productImageEtag": "f146ce5c0cf52656301a2c36f1291c28",
                "productImageName": "wallpaperflare.com_wallpaper.jpg",
                "productImageCategory": "Cervical-Thoracic",
                "__v": 0
            },
            {
                "_id": "624de61ef7d0502e2304c55a",
                "productName": "Zilofang",
                "productCategory": "thoracic-lumbar-sacral",
                "productVariant": "rod",
                "productQuantity": 10,
                "productInfo": "Universal OCT",
                "productSystem": [
                    "Universal system for dorsal stabilization",
                    "From the occiput to the upper thoracic spine"
                ],
                "productAdvantages": [
                    "Cervical system for all common placement techniques",
                    "Safety for user and patient by cannulated screws and a navigation option"
                ],
                "productInstrumentation": [
                    "OC stabilization",
                    "Different variants of lateral mass screws"
                ],
                "productCombination": [
                    "Hybrid rod Ø 4.0 mm/6.0 mm",
                    "Rod-rod-connector, parallel and axial"
                ],
                "productMaterial": "Titanium Alloy",
                "productImageEtag": "f146ce5c0cf52656301a2c36f1291c28",
                "productImageName": "wallpaperflare.com_wallpaper.jpg",
                "productImageCategory": "Cervical-Thoracic",
                "__v": 0
            }
        ],
        "Category": []
    }
}
```

_URL_: `http://185.235.42.61:3030/api/v1/products/:id`
_Method_: `GET`
_BODY_: `None`

_API Description_: Gets one product

_Response_:
```
{
    "code": 200,
    "type": "REQUEST_SUCCESSFULLY_APPROVED",
    "message": {
        "_id": "624ea7e8d932c0ee203c85bf",
        "productName": "Piltan",
        "productCategory": "thoracic-lumbar-sacral",
        "productVariant": "rod",
        "productQuantity": 10,
        "productInfo": "Universal OCT",
        "productSystem": [
            "Universal system for dorsal stabilization",
            "From the occiput to the upper thoracic spine"
        ],
        "productAdvantages": [
            "Cervical system for all common placement techniques",
            "Safety for user and patient by cannulated screws and a navigation option"
        ],
        "productInstrumentation": [
            "OC stabilization",
            "Different variants of lateral mass screws"
        ],
        "productCombination": [
            "Hybrid rod Ø 4.0 mm/6.0 mm",
            "Rod-rod-connector, parallel and axial"
        ],
        "productMaterial": "Titanium Alloy",
        "productImageEtag": "f146ce5c0cf52656301a2c36f1291c28",
        "productImageName": "wallpaperflare.com_wallpaper.jpg",
        "productImageCategory": "Cervical-Thoracic",
        "__v": 0
    }
}
```

_URL_: `http://185.235.42.61:3030/api/v1/products/:id`
_Method_: `PUT`
_API Description_: Update one product, any field that is not filled will be the old value and not null
_FORM DATA EXAMPLE_:
```
{
  productName:Piltan,
  productCategory:thoracic-lumbar-sacral,
  productVariant:rod,
  productQuantity:10,
  productInfo:Universal OCT,
  productSystem:Universal system for dorsal stabilization,
  productSystem:From the occiput to the upper thoracic spine,
  productAdvantages:Cervical system for all common placement techniques,
  productAdvantages:Safety for user and patient by cannulated screws and a navigation option,
  productInstrumentation:OC stabilization,
  productInstrumentation:Different variants of lateral mass screws,
  productCombination:Hybrid rod Ø 4.0 mm/6.0 mm,
  productCombination:Rod-rod-connector, parallel and axial,
  productMaterial:Titanium Alloy,
  productImageCategory:Cervical-Thoracic,
}
```

_URL_: `http://185.235.42.61:3030/api/v1/products/:id`
_Method_: `DELETE`
_API Description_: Deletes one product








//-------------------------------------------------------------------

### TODO:
  - [] Cahnge the imports files from RodScrewSystem to CageSystem in all the relative files;
    - [X] Inbound Adapters
    - [] Inbound Ports
    - [] Domain Logic
    - [] Outbound Ports
    - [] Outbound Proxy
  - [] Create the relative API;
  - [] Repeat the same process for the rest of the three rmaining ptoducts (Bone Substitute, Vertebral, Maxillofacial);