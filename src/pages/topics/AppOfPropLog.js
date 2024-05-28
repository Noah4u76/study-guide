import React from 'react';
import inverterImage from '../../images/Negation Circuit.png';
import ANDImage from '../../images/AND Circuit.png';
import ORImage from '../../images/OR Circuit.png';
import EXCircuit from '../../images/Circuit Ex.png';
import ScrollToTopLink from './ScrollToTopLink';

function AppOfPropLogic() {
  return (
    <div className="container">
      <h1>Applications Of Propositional Logic: 1.2</h1>
      <p className="description">
        Applications of Propositional Logic: Translating English sentences into propositions with logical connectives.
      </p>

      <h4>Example:</h4>
      <ul className="examples">
        <li>You can ride the bus only if you have a pass or you are not visible</li>
        <li>Let p = You can ride the bus</li>
        <li>Let q = you have a pass</li>
        <li>Let r = you are not visible</li>
        <li>(p → (q ∨ ¬r).</li>
      </ul>
      <p>_______________________________________________________</p>

      <p className="description">
        Logic circuits: “Receives input signals p1, p2,...,pn, each a bit [either 0 (off) or 1 (on)], and produces output signals s1, s2,..., sn, each a bit”.
      </p>

      <h4>Example: Invertor/Negation Circuit</h4>
      <div className="image-container">
        <img src={inverterImage} alt="Inverter/Negation Example" className="example-image" />
      </div>
      <p>_______________________________________________________</p>
      <h4>Example: "AND" Circuit</h4>
      <div className="image-container">
        <img src={ANDImage} alt="AND" className="example-image" />
      </div>
      <p>_______________________________________________________</p>
      <h4>Example: "OR" Circuit</h4>
      <div className="image-container">
        <img src={ORImage} alt="OR" className="example-image" />
      </div>
      <p>_______________________________________________________</p>
      <h4>Example: logical circuit for (¬p ∧ q) ∨ (p ∧ ¬q):</h4>
      <div className="image-container">
        <img src={EXCircuit} alt="OR" className="example-image" />
      </div>
      <p>_______________________________________________________</p>
      <h4>Example:</h4>
      <ul className="examples">
        <li>Let p = VVC has lake water in it, and let q= VVC lake has fish in it. Find: ¬(p ∧ q).</li>
        <li>It is not the case that VVC Lake has water in it and fish in it.</li>
      </ul>
      <p>________________________________________________________</p>
      <div className="button-container">
        <ScrollToTopLink  to="/topics/prop-logic">
          <button className="button">Previous: 1.1</button>
        </ScrollToTopLink>
        <ScrollToTopLink  to="/topics/Prop-Equivalences">
          <button className="button">Next Section: 1.3</button>
        </ScrollToTopLink>
      </div>
    </div>
  );
}

export default AppOfPropLogic;
