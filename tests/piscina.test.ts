import { webhookPool } from "../src/piscina";

describe("Testing piscina with typescript", () => {
    it("Should be able to create piscina object using typescript without problems", async () => {
        await webhookPool
            .run("random arg")
            .then((result) => expect(result).toBeUndefined())
            .catch((err) => expect(err).toBeUndefined());
    });
});
