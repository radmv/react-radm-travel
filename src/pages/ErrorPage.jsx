import { useRouteError } from "react-router-dom";
import { CenteredFlex, Fullscreen } from "../components";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Fullscreen>
      <CenteredFlex>
        <div id="error-page">
          <CenteredFlex direction="flex-col gap-4">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
              <i>{error.statusText || error.message}</i>
            </p>
          </CenteredFlex>
        </div>
      </CenteredFlex>
    </Fullscreen>
  );
};

export default ErrorPage;
