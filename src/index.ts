import { webhookPool } from "./piscina";

webhookPool
    .run("random arg")
    .then(() => console.log("success"))
    .catch(() => console.log("error"));
