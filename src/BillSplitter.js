import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState, useEffect } from "react";
import styles from "./BillSplitter.module.scss";

const BillSplitter = () => {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(0);
  const [person, setPerson] = useState(0);

  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const BillHandler = (e) => {
    setBill(e.target.value);
  };

  const TipHandler = (e) => {
    if (bill > 0) {
      setTip(e.target.value);
    }
  };

  const CustomTipHandler = (e) => {
    if (bill > 0) {
      const tipvalue = e.target.value / 100;
      setTip(tipvalue);
    }
  };

  const PersonHandler = (e) => {
    setPerson(e.target.value);
  };

  const RessetButton = () => {
    setBill("");
    setTip(0);
    setPerson(0);
    setTipAmount(0.0);
    setTotal(0.0);
  };

  useEffect(() => {
    if (person > 0 && bill > 0 && tip > 0) {
      setTipAmount((bill * tip) / person);
      setTotal((parseInt(bill) + tipAmount * person) / person);
    }
  });

  return (
    <div className={styles.billsplitter}>
      <div className={styles.billsplitter__leftSide}>
        <div className={styles.billsplitter__leftSide__bill}>
          <p>Bill</p>
          <input type="number" placeholder="0" onChange={BillHandler}></input>
        </div>
        <div className={styles.billsplitter__leftSide__tip}>
          <div className={styles.billsplitter__leftSide__tip_title}>
            <p>Select Tip %</p>
          </div>

          <div className={styles.billsplitter__leftSide__tip_buttons}>
            <button value={0.05} onClick={TipHandler}>
              5%
            </button>
            <button value={0.1} onClick={TipHandler}>
              10%
            </button>
            <button value={0.15} onClick={TipHandler}>
              15%
            </button>
            <button value={0.25} onClick={TipHandler}>
              25%
            </button>
            <button value={0.5} onClick={TipHandler}>
              50%
            </button>
            <input
              placeholder="Custom"
              type="text"
              onChange={CustomTipHandler}
            ></input>
          </div>
        </div>
        <div className={styles.billsplitter__leftSide__people}>
          <p>Number of People</p>
          <input type="number" placeholder="0" onChange={PersonHandler}></input>
        </div>
      </div>
      <div className={styles.billsplitter__rightSide}>
        <div className={styles.billsplitter__rightSide__values}>
          <div className={styles.billsplitter__rightSide__values__tipAmount}>
            <div
              className={styles.billsplitter__rightSide__values__tipAmount_text}
            >
              <p>Tip Amount</p>
              <span>/ person</span>
            </div>
            <div
              className={
                styles.billsplitter__rightSide__values__tipAmount_value
              }
            >
              <h1>${tipAmount === 0 ? "0.00" : tipAmount}</h1>
            </div>
          </div>

          <div className={styles.billsplitter__rightSide__values__total}>
            <div className={styles.billsplitter__rightSide__values__total_text}>
              <p>Total</p>
              <span>/ person</span>
            </div>
            <div
              className={styles.billsplitter__rightSide__values__total_value}
            >
              <h1>${total === 0 ? "0.00" : total}</h1>
            </div>
          </div>
        </div>
        <div className={styles.billsplitter__rightSide__button}>
          <button onClick={RessetButton}>RESET</button>
        </div>
      </div>
    </div>
  );
};

export default BillSplitter;
