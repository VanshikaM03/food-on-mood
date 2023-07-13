import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Meals />
      </main>
      <script
        src="//code.tidio.co/4jffgtjik1wc6evdhqba0kyzqplxr5jc.js"
        async
      ></script>
    </Fragment>
  );
}

export default App;
