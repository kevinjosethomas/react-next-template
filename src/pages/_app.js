import "../assets/styles/main.css";
import "tailwindcss/tailwind.css";
import DefaultLayout from "../layouts/DefaultLayout";

function App({ Component, pageProps }) {
  return (
    <>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}

export default App;
