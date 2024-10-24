// import clsx from "clsx";
// import css from "./App.module.css";
import One from "../One/One";
import props from "../../propslist.json";

export default function App() {
  return (
    <>
      <One props={props} />

      <hr />

      <One props={props} />

      <hr />

      <One props={props} />
    </>
  );
}
