import { useState } from 'react';
import './index.module.css';

const TipCalculator = () => {
  const [bill, setBill] = useState(50);
  const [tipPercentage, setTipPercentage] = useState(18);
  const [people, setPeople] = useState(1);

  const totalTip = (bill * tipPercentage) / 100;
  const topPerPerson = totalTip / people;

  return (
    <div>
      <label htmlFor="bill">Bill</label>
      <input
        id="bill"
        type="number"
        value={bill}
        min="0"
        onChange={(e) => {
          setBill(parseInt(e.target.value));
        }}
      />
      <label htmlFor="tipPercentage">Tip Percentage</label>
      <input
        id="tipPercentage"
        type="number"
        value={tipPercentage}
        min="0"
        onChange={(e) => {
          setTipPercentage(parseInt(e.target.value));
        }}
      />
      <label htmlFor="numOfPeople">Number of People</label>
      <input
        id="numOfPeople"
        type="number"
        value={people}
        min="1"
        onChange={(e) => {
          setPeople(parseInt(e.target.value));
        }}
      />
      <p>
        Total Tip: {Number.isNaN(totalTip) ? '-' : `$${totalTip.toFixed(2)}`}
      </p>
      <p>
        Tip Per Person:{' '}
        {Number.isNaN(topPerPerson) ? '-' : `$${topPerPerson.toFixed(2)}`}
      </p>
    </div>
  );
};

export default TipCalculator;
