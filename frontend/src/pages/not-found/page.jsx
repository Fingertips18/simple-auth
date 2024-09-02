import { useNavigate } from "react-router-dom";

import { AppRoutes } from "../../constants/routes";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <section className="space-y-2 bg-secondary bg-opacity-50 backdrop-blur-md drop-shadow-2xl rounded-lg p-6">
      <h3 className="text-lg font-semibold drop-shadow-foreground-glow">
        404 | Page not found
      </h3>

      <button
        className="w-full py-3 px-4 bg-accent font-bold rounded-lg shadow-lg hover:brightness-90
        focus:outline-none hover:drop-shadow-glow transition duration-200 active:scale-90 flex-center
        disabled:bg-accent/50 disabled:text-foreground/50 disabled:pointer-events-none"
        onClick={() => navigate(AppRoutes.root)}
      >
        Go to Home
      </button>
    </section>
  );
};

export default NotFoundPage;
