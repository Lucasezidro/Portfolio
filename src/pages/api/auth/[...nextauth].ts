import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth ({
    providers: [
        Providers.GitHub({
            clientId: "080f8e08c2a913e81102",
            clientSecret: "3d67497ebf427d74a38e0946d27d6261edf7f5aa",
            scope: "read:user"
        })
    ]
})