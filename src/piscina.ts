import { Piscina } from "piscina";
import { Webhook } from "./webhook";

export const webhookPool = new Piscina({ filename: Webhook.fileName });
