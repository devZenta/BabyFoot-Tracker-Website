'use client';

import { signIn } from "next-auth/react";

export function LoginForm() {
    return (
        <button onClick={() => signIn("discord", { redirectTo: "/"})}>Login with Discord</button>
    );
}