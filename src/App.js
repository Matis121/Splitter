import React from "react";
import styles from "./app.module.scss";
import BillSplitter from "./BillSplitter";

const App = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__title}>
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <BillSplitter></BillSplitter>
    </div>
  );
};

export default App;
