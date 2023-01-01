import ThirdPartyEmailPassword, { Google, Github, Apple } from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";

export const SuperTokensConfig = {
    languageTranslations: { 
        translations: { 
            pt_BR: {
                EMAIL_PASSWORD_SIGN_IN_HEADER_TITLE: "Conectar",
                EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_START: "Não é inscrito ainda?",
                EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_SIGN_UP_LINK: "Inscreva-se",
                EMAIL_PASSWORD_SIGN_IN_HEADER_SUBTITLE_END: "!",                
                THIRD_PARTY_PROVIDER_DEFAULT_BTN_START : "Prossiga com o",
                THIRD_PARTY_PROVIDER_DEFAULT_BTN_END : ".",
                THIRD_PARTY_EMAIL_PASSWORD_SIGN_IN_AND_UP_DIVIDER_OR : "ou",
                EMAIL_PASSWORD_EMAIL_LABEL : "E-mail",
                EMAIL_PASSWORD_EMAIL_PLACEHOLDER : "Informa seu e-mail",
                EMAIL_PASSWORD_PASSWORD_LABEL : "Senha",
                EMAIL_PASSWORD_PASSWORD_PLACEHOLDER : "crie sua senha",
                EMAIL_PASSWORD_SIGN_IN_SUBMIT_BTN : "Entrar",
                EMAIL_PASSWORD_SIGN_IN_FOOTER_FORGOT_PW_LINK : "Esqueceu a sua senha?",
                BRANDING_POWERED_BY_END : " ❤️ ",
                BRANDING_POWERED_BY_START: "Criado por",
                MY_CUSTOM_LABEL: "Age",
                EMAIL_PASSWORD_SIGN_UP_SUBMIT_BTN : "Inscrever",
                EMAIL_PASSWORD_SIGN_UP_HEADER_TITLE: "Inscrever-se",
                EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_START: "Já tem uma conta?",
                EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_SIGN_IN_LINK: "Entrar",
                EMAIL_PASSWORD_SIGN_UP_HEADER_SUBTITLE_END : "",
            },
          },
        defaultLanguage: "pt_BR", 
    },      
    appInfo: {
        appName: "SuperTokens Demo App",
        apiDomain: "http://localhost:3001",
        websiteDomain: "http://localhost:3000",
    },
    // recipeList contains all the modules that you want to
    // use from SuperTokens. See the full list here: https://supertokens.com/docs/guides
    recipeList: [
        ThirdPartyEmailPassword.init({
            signInAndUpFeature: {
                providers: [Github.init(), Google.init(), Apple.init()],
            },
        }),
        Session.init(),
    ],
};
