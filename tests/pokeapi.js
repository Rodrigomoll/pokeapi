import axios from "axios";
import { expect } from "chai";
import Ajv from "ajv";

describe("GET API REQUEST Test", () => {
    it("should be able to see pokeapi lists", async () => {
        const res = await axios.get('https://pokeapi.co/api/v2/berry/');

        console.log(res.data);

        expect(res.status).to.equal(200);

        expect(res.data).to.not.be.empty;

        const schema = {
            "type": "object",
            "properties": {
                "count": {"type": "number"},
                "next": {"type": "string"},
                "previous": {"type": ["string", "null"]},
                "results": {
                    "type": "array",
                    "items": {
                        "type": "object",
                        "properties": {
                            "name": {"type": "string"},
                            "url": {"type": "string"}
                        },
                        "required": ["name", "url"]
                    }
                }
            },
            "required": ["count", "next", "results"]
        };
        

        const ajv = new Ajv();
        const validate = ajv.compile(schema);
        const valid = validate(res.data);

        expect(valid).to.be.true;

        console.log("Response schema:");
        console.log(JSON.stringify(schema, null, 2));
    });
});
