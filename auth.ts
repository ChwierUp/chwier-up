import GitHub from "next-auth/providers/github";
import NextAuth from "next-auth";
import { SupabaseAdapter } from "@auth/supabase-adapter";

export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [GitHub],
  debug: true,
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    secret: process.env.NEXT_PUBLIC_SUPABASE_SERVICE_ROLE_KEY!,
  }),
});
