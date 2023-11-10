import type { MaybeSession, TypedSupabaseClient } from '~/routes/__supabase';

export default function Login({
  supabase,
  session,
}: {
  supabase: TypedSupabaseClient;
  session: MaybeSession;
}) {
  const handleLogin = async () => {
    const { data, error } = await supabase.auth.signInWithOtp({
      email: 'example@email.com',
      options: {
        // set this to false if you do not want the user to be automatically signed up
        shouldCreateUser: false,
        emailRedirectTo: 'https://example.com/welcome',
      },
    });
  };

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) {
      console.log(error);
    }
  };

  return session ? (
    <button onClick={handleLogout}>Logout</button>
  ) : (
    <>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}
