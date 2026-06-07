/* LISTING 3- 15: Using React.Fragment’s short syntax */

import { Fragment } from "react";

function MyComponent() {
  return (
    <>
      <h1>The heading</h1>
      <h2>The subheading</h2>
    </>
  );
}

export default MyComponent;