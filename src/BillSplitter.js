import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState, useEffect } from "react";
import styles from "./BillSplitter.module.scss";

const BillSplitter = () => {
  const [bill, setBill] = useState("");
  const [tip, setTip] = useState(0);
  const [person, setPerson] = useState("");

  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);

  const [resetButtonActive, setResetButtonActive] = useState(false);

  const BillHandler = (e) => {
    setBill(e.target.value);
  };

  const TipHandler = (e) => {
    setTip(e.target.value);
    console.log(e.target.getAttribute("name"));
  };

  const CustomTipHandler = (e) => {
    const tipvalue = e.target.value / 100;
    setTip(tipvalue);
  };

  const PersonHandler = (e) => {
    setPerson(e.target.value);
  };

  const RessetButton = () => {
    setBill("");
    setTip(0);
    setPerson("");
    setTipAmount(0.0);
    setTotal(0.0);

    if (resetButtonActive === true) {
      setResetButtonActive(false);
    }
  };

  useEffect(() => {
    if (person > 0 && bill > 0 && tip > 0) {
      setTipAmount((bill * tip) / person);
      setTotal((parseInt(bill) + tipAmount * person) / person);
    }
  });

  useEffect(() => {
    if (bill != 0 || person != 0 || tip != 0) {
      setResetButtonActive(true);
    } else {
      setResetButtonActive(false);
    }
  });

  return (
    <div className={styles.billsplitter}>
      <div className={styles.billsplitter__leftSide}>
        <div className={styles.billsplitter__leftSide__bill}>
          <div className={styles.title}>
            <p>Bill</p>
            {bill === "0" ? (
              <p className={styles.title_error}>Can't be zero</p>
            ) : (
              <p></p>
            )}
          </div>
          <input
            type="number"
            placeholder="0"
            value={bill}
            onChange={BillHandler}
            className={bill === "0" ? styles.inputError : styles.inputCorrect}
          ></input>
        </div>
        <div className={styles.billsplitter__leftSide__tip}>
          <div className={styles.billsplitter__leftSide__tip_title}>
            <p>Select Tip %</p>
          </div>

          <div className={styles.billsplitter__leftSide__tip_buttons}>
            <button
              value={0.05}
              onClick={TipHandler}
              className={
                tip === "0.05"
                  ? styles.billsplitter__leftSide__tip_buttons_button_active
                  : styles.billsplitter__leftSide__tip_buttons_button
              }
            >
              5%
            </button>
            <button
              value={0.1}
              onClick={TipHandler}
              className={
                tip === "0.1"
                  ? styles.billsplitter__leftSide__tip_buttons_button_active
                  : styles.billsplitter__leftSide__tip_buttons_button
              }
            >
              10%
            </button>
            <button
              value={0.15}
              onClick={TipHandler}
              className={
                tip === "0.15"
                  ? styles.billsplitter__leftSide__tip_buttons_button_active
                  : styles.billsplitter__leftSide__tip_buttons_button
              }
            >
              15%
            </button>
            <button
              value={0.25}
              onClick={TipHandler}
              className={
                tip === "0.25"
                  ? styles.billsplitter__leftSide__tip_buttons_button_active
                  : styles.billsplitter__leftSide__tip_buttons_button
              }
            >
              25%
            </button>
            <button
              value={0.5}
              onClick={TipHandler}
              className={
                tip === "0.5"
                  ? styles.billsplitter__leftSide__tip_buttons_button_active
                  : styles.billsplitter__leftSide__tip_buttons_button
              }
            >
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
          <div className={styles.title}>
            <p>Number of People</p>
            {person === "0" ? (
              <p className={styles.title_error}>Can't be zero</p>
            ) : (
              <p></p>
            )}
          </div>
          <input
            type="number"
            placeholder="0"
            value={person}
            onChange={PersonHandler}
            className={person === "0" ? styles.inputError : styles.inputCorrect}
          ></input>
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
              <h1>${tipAmount === 0 ? "0.00" : tipAmount.toFixed(2)}</h1>
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
              <h1>${total === 0 ? "0.00" : total.toFixed(2)}</h1>
            </div>
          </div>
        </div>
        <button
          onClick={RessetButton}
          className={
            resetButtonActive === true
              ? styles.billsplitter__rightSide__button_active
              : styles.billsplitter__rightSide__button_notActive
          }
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default BillSplitter;
