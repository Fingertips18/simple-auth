import { ProfileInformation } from "./_components/profile-information";
import { ProfileActivity } from "./_components/profile-activity";
import { SignOutButton } from "./_components/sign-out-button";
import { useAuthStore } from "../../stores/auth-store";
import { Title } from "./_components/title";

const RootPage = () => {
  const { user, loading, success, error, signOut } = useAuthStore();

  return (
    <section className="h-full z-50 relative lg:p-6 space-y-4 backdrop-blur-lg rounded-lg bg-primary bg-opacity-20 drop-shadow-2xl">
      <Title />
      <ProfileInformation username={user.username} email={user.email} />
      <ProfileActivity
        lastSignedIn={user.lastSignedIn}
        createdAt={user.createdAt}
      />
      <SignOutButton
        loading={loading}
        success={success}
        error={error}
        signOut={signOut}
      />
    </section>
  );
};

export default RootPage;
