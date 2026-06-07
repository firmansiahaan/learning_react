/* LISTING 4- 2: Components can be imported into other components */

import WelcomeMessage from "./WelcomeMessage";

function WelcomeTitle() {
  return (
    <>
      <WelcomeMessage />
      
    </>
  );
}

export default WelcomeTitle;