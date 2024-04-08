
---

# Restaurant Management System Backend

This backend project is designed to manage menus and personnel for a restaurant. It provides APIs to retrieve, create, update, and delete menu items and personnel information.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/Sahil1036/Hotel.git
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a `.env` file in the root directory and define the following variables:

```
PORT=<port_number>
DATABASE_URI=<database_connection_string>
```

## Usage

### Start the server

To start the server, run:

```bash
npm start
```

## API Endpoints

#### Personnel

- **GET /person**
  - Retrieves all personnel information.
- **POST /person**
  - Creates a new personnel entry. Requires a JSON payload with the following structure:
  ```json
  {
      "name": "John Doe",
      "age": 30,
      "work": "waiter",
      "mobile": 1234567890,
      "email": "john.doe@example.com",
      "address": "123 Main St, City",
      "salary": 2500
  }
  ```
- **DELETE /person/:id**
  - Deletes the personnel entry with the specified ID.

- **PUT /person/:id**
  - Updates the personnel entry with the specified ID. Requires a JSON payload with the fields to be updated.

- **GET /person/:work**
  - Retrieves all personal entry which has work.



#### Menu

- **GET /menu**
  - Retrieves all menu items.
- **POST /menu**
  - Creates a new menu item. Requires a JSON payload with the following structure:
  ```json
  {
      "name": "Menu Item Name",
      "price": 10.99,
      "taste": "Spicy",
      "is_drink": false,
      "ingredients": ["Ingredient1", "Ingredient2"],
      "num_sales": 0
  }
  ```
- **GET /menu/:taste**
  - Retrieves all menu items which has taste.


## Link to Project

[Restaurant Management System](https://hotel-zpds.onrender.com)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## This README provides a basic overview of this project, including installation instructions, usage details, API endpoints. Make sure to replace `<port_number>` and `<database_connection_string>` with your actual port number and database URI. Additionally, customize the endpoints and functionality based on your specific project requirements.

---
