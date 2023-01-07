import express from "express";
import cors from "cors";
import supertokens from "supertokens-node";
import { verifySession } from "supertokens-node/recipe/session/framework/express";
import { middleware, errorHandler, SessionRequest } from "supertokens-node/framework/express";
import { SuperTokensConfig } from "./config";
import dotenv from 'dotenv';

dotenv.config({path:"../.env"});
const SUPERTOKENS_WEBSITE_DOMAIN = process.env.SUPERTOKENS_WEBSITE_DOMAIN as string;
const PORT = process.env.PORT || 3001;

// console.log(`SUPERTOKENS_WEBSITE_DOMAIN : ${SUPERTOKENS_WEBSITE_DOMAIN}`);
// console.log(`PORT : ${PORT}`);

supertokens.init(SuperTokensConfig);

const app = express();

app.use(
    cors({
        origin: SUPERTOKENS_WEBSITE_DOMAIN,
        allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
        methods: ["GET", "PUT", "POST", "DELETE"],
        credentials: true,
    })
);

// This exposes all the APIs from SuperTokens to the client.
app.use(middleware());

// An example API that requires session verification
app.get("/sessioninfo", verifySession(), async (req: SessionRequest, res) => {
    let session = req.session;
    res.send({
        sessionHandle: session!.getHandle(),
        userId: session!.getUserId(),
        accessTokenPayload: session!.getAccessTokenPayload(),
    });
});

// In case of session related errors, this error handler
// returns 401 to the client.
app.use(errorHandler());

app.listen(PORT, () => console.log(`API Server listening on port ${PORT}`));
