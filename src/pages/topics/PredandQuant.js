import React from 'react';
import ScrollToTopLink from './ScrollToTopLink';

function PredandQuant() {
  return (
<div className="container">
<h1>Predicates and Quantifiers: 1.4</h1>
<p className="description"> Predicate Logic: Property of a subject. Statement x {'>'} 3 the predicate is {'>'} 3 and the subject is the variable x.</p>
<h4>Example: What is the truth value of P(2) and P(4)</h4>
<ul className="examples">
        <li>P(2) = x {'>'} 3</li>
        <li>2 {'>'} 3 (FALSE)</li>
        <li>P(4) = x {'>'} 3</li>
        <li>4 {'>'} 3 (TRUE)</li>
      </ul>
      <p>________________________________________________________</p>

      <p className="description"> Quantifiers: Propositional functions being applied to large sets.</p>
      <p className="description"> Universal Quantifiers(∧): All input values must result in a true output. ∀xP(x).</p>
      <h4>Example: All dogs have flees</h4>
      <ul className="examples">
        <li>∀xP(x)</li>
        <li>¬∀xP(x)</li>
        <li>∃x¬P(x)</li>
        <li>There exists a dog that doesn't have flees.</li>
      </ul>

      <p>________________________________________________________</p>

      <p className="description"> Existential Quantifiers(∨): Must be true for at least one value from the domain.∃xP(x).</p>
      <h4>Example: There is a horse that can add</h4>
      <ul className="examples">
        <li>∃xP(x)</li>
        <li>¬∃xP(x)</li>
        <li>∀x¬P(x)</li>
        <li>No horses can add.</li>
      </ul>
      <p>________________________________________________________</p>

      
<div className="button-container">
<ScrollToTopLink to="/topics/Prop-Equivalences">
    <button>Previous: 1.3</button>
  </ScrollToTopLink >
  <ScrollToTopLink to="/topics/Nested-Quantifiers">
    <button>Next Section: 1.5</button>
  </ScrollToTopLink >
</div>
</div>
  );
}
export default PredandQuant;