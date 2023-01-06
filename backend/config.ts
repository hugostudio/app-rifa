import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword";
import Session from "supertokens-node/recipe/session";
import { TypeInput } from "supertokens-node/types";
import Dashboard from "supertokens-node/recipe/dashboard";
import { SMTPService } from "supertokens-node/recipe/emailpassword/emaildelivery";
import dotenv from 'dotenv';

dotenv.config({path:"../.env"});
const SUPERTOKENS_CONNECTION_URI = process.env.SUPERTOKENS_CONNECTION_URI as string;
const SUPERTOKENS_APP_NAME = process.env.SUPERTOKENS_APP_NAME as string;
const SUPERTOKENS_API_DOMAIN = process.env.SUPERTOKENS_API_DOMAIN as string;

const SUPERTOKENS_WEBSITE_DOMAIN = process.env.SUPERTOKENS_WEBSITE_DOMAIN as string;
const SUPERTOKENS_APIKEY = process.env.SUPERTOKENS_APIKEY as string;

const EMAIL_HOST = process.env.EMAIL_HOST as string;
const EMAIL_USER_NAME = process.env.EMAIL_USER_NAME as string;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD as string;
const EMAIL_SEND_PORT = process.env.EMAIL_SEND_PORT as string;
const EMAIL_FROM_NAME = process.env.EMAIL_FROM_NAME as string;
const EMAIL_FROM_EMAIL = process.env.EMAIL_FROM_EMAIL as string;

let smtpSettings = {
    host: EMAIL_HOST,
    authUsername: EMAIL_USER_NAME, // this is optional. In case not given, from.email will be used
    password: EMAIL_PASSWORD,
    port: Number(EMAIL_SEND_PORT),
    from: {
        name: EMAIL_FROM_NAME,
        email: EMAIL_FROM_EMAIL,
    },
    secure: true
}

export const SuperTokensConfig: TypeInput = {
    supertokens: {
        // this is the location of the SuperTokens core.
        //connectionURI: "https://localhost:3567",
        connectionURI: SUPERTOKENS_CONNECTION_URI,
    },
    appInfo: {
        appName: SUPERTOKENS_APP_NAME,
        apiDomain: SUPERTOKENS_API_DOMAIN,
        websiteDomain: SUPERTOKENS_WEBSITE_DOMAIN,
    },
    // recipeList contains all the modules that you want to
    // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
    recipeList: [
        ThirdPartyEmailPassword.init({
            providers: [
                // We have provided you with development keys which you can use for testing.
                // IMPORTANT: Please replace them with your own OAuth keys for production use.
                ThirdPartyEmailPassword.Google({
                    clientId: "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
                    clientSecret: "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",
                }),
                ThirdPartyEmailPassword.Github({
                    clientSecret: "e97051221f4b6426e8fe8d51486396703012f5bd",
                    clientId: "467101b197249757c71f",
                }),
                ThirdPartyEmailPassword.Apple({
                    clientId: "4398792-io.supertokens.example.service",
                    clientSecret: {
                        keyId: "7M48Y4RYDL",
                        privateKey:
                            "-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgu8gXs+XYkqXD6Ala9Sf/iJXzhbwcoG5dMh1OonpdJUmgCgYIKoZIzj0DAQehRANCAASfrvlFbFCYqn3I2zeknYXLwtH30JuOKestDbSfZYxZNMqhF/OzdZFTV0zc5u5s3eN+oCWbnvl0hM+9IW0UlkdA\n-----END PRIVATE KEY-----",
                        teamId: "YWQCXGJRJL",
                    },
                }),
            ],
            emailDelivery: {
                service: new SMTPService({smtpSettings})
            },
        }),
        Session.init(),
        Dashboard.init({
            apiKey: SUPERTOKENS_APIKEY,
        }),
    ],
};
