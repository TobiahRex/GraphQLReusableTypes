# _Tobiah Rex' GraphQL Re-usable Types Library_
  * Started:
    - 13 May 2017.
  * Updated:
    - 14 May 2017.

# Description:
Library of Reusable GraphQL Schema Types.


## Mutations
Mutation types: Uses INPUT GraphQL syntax.

  1. _Product_    
    - _enum_ : General Enumeration type for products - this case is **nicotine_strengths**.
    - _images_ : Describes an array of images.  Each image is an object with several props.
    - _inventoryDates_ : Describes important dates about the products inventory.
    - _routeTag_ : Describes the route that will be used as the products client side route.
    - _stockQtys_ : Describes the available quantities of a product.
    - _vendor_ : Describes the Products manufacturer.
  2. _User_
    - _authenticationInfo_ : Describes the users auth info. e.g. **Last Login**.
    - _contactInfo_ : Describes an object with users contact information.
    - _permissions_ : Describes the users permissions.
    - _userStory_ : Describes the users back story/bio.

## Query
Query types: Uses OUTPUT GraphQL syntax.

  1. _Product_    
    - _images_ : Describes an array of images.  Each image is an object with several props.
    - _inventoryDates_ : Describes important dates about the products inventory.
    - _enum_ : General Enumeration type for products - this case is **nicotine_strengths**.
    - _rootType_ : Root of the ProductType.  All other fields should be placed within this type.
    - _sizes_ : Describes the enumerable sizes for the product.
    - _stockQtys_ : Describes the available quantities of a product.
  2. _User_
    - _authenticationInfo_ : Describes the users auth info. e.g. **Last Login**.
    - _contactInfo_ : Describes an object with users contact information.
    - _permissions_ : Describes the users permissions.
    - _rootType_ : Root of the UserType.  All other fields should be placed within this type.
    - _userStory_ : Describes the users back story/bio.

<!-- ## Utilities Description:
Utility files with setup, configuration, and special use case templates.
  * package.lint.json
    - Contains script syntax for running eslint-watch scripts for CLI linting messages.
    - _CountryConstants.js_ is an array of all the countries in the world to be used with a drop down menu of some sort.
    - _StatesConstants.js_ is an array of all the US states to be used with a drop down menu of some sort.

## Extra:
Library of Reducers commonly re-used.
  * API reducer using [_Redux Sauce_](https://github.com/skellock/reduxsauce).
  * AUTH reducer - see README in Reducers/ for more info.

  <img src="http://i.imgur.com/HWXeDSS.png" />

## Features:
Airbnb Style Guide implemented.

## Helper Libraries:
* [Material UI](http://www.material-ui.com/#/components/raised-button)
* [Reselectors](https://github.com/reactjs/reselect#installation)

## Influences:
from: [Medium - Reselectors](https://medium.com/@esamatti/react-js-pure-render-performance-anti-pattern-fb88c101332f#.z954pl30z) -->
<!-- ## Updates: -->
