import { DefaultSession, DefaultUser, DefaultJWT } from "next-auth";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string;
        } & DefaultSession["user"];
    }

    interface User extends DefaultUser {
        id: string;
    }

    interface JWT extends DefaultJWT {
        sub: string;
    }
}
