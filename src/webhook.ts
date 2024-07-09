import axios, { AxiosInstance } from "axios";
import path from "path";

export class Webhook {
    public static fileName = path.resolve(__filename);
    public axios: AxiosInstance;

    constructor() {
        this.axios = axios.create();
    }

    public async doSomething() {}
}

export default async (arg: string) => {
    console.log(`arg received: ${arg}`);
    const webhook = new Webhook();
    await webhook.doSomething();
};
