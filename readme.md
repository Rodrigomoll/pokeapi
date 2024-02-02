PokeAPI Test Suite

This test suite validates the response from the PokeAPI's berry endpoint.
Installation

git clone https://github.com/Rodrigomoll/pokeapi.git

Navigate to the project directory:

cd Pokeapi

Install dependencies:

    npm install

Running the Test

To run the test suite, execute the following command:

npx mocha ./tests/pokeapi.js

This command will send a GET request to the PokeAPI's berry endpoint, validate the response schema, and log the response data.
Test Description

The test suite consists of a single test:

    GET API REQUEST Test: This test sends a GET request to the PokeAPI's berry endpoint (https://pokeapi.co/api/v2/berry/). It validates that the response status is 200, the response body is not empty, and the response body conforms to a predefined JSON schema. The JSON schema defines the expected structure of the response, including properties like count, next, previous, and results. After validating the response, the test logs the response schema for reference.

Dependencies

    Axios: For making HTTP requests to the PokeAPI.
    Chai: Assertion library for writing expressive tests.
    Ajv: JSON schema validator for validating the structure of the response data.
