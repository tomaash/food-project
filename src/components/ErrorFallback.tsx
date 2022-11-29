import type { FallbackProps } from "react-error-boundary";
import styled from "@emotion/styled";

export const ErrorFallback = ({ error }: FallbackProps) => {
  return (
    <Wrapper>
      <Alert>
        <div css={{ textAlign: "left" }}>
          <h2 css={{ color: "darkred" }}>Something went wrong:</h2>
          <br />
          <pre>
            <b>{error.message}</b>
          </pre>
          <br />
          <pre>{error.stack}</pre>
        </div>
      </Alert>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
  height: 100vh;
`;

const Alert = styled.div`
  margin-top: 2rem;
`;
