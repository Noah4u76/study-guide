import React from 'react';
import { Link } from 'react-router-dom';

function PropEquiv() {
  return (
<div className="container">
<h1>Propositional Equivalences: 1.3</h1>
      <p className="description"> Taughtology: Always true, no matter the truth values</p>
      <p className="description">Contradiction: Always false</p>
      <p className="description">Contingency: Neither a tautology or a contradiction. Not always true, not always false. Sometimes true, sometimes false</p>
      <h4>Table Example:</h4>
      <table className="example-table">
        <thead>
          <tr>
            <th>p</th>
            <th>q</th>
            <th>p ∨ ¬p</th>
            <th>p ∧ ¬p</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TRUE</td>
            <td>FALSE</td>
            <td>TRUE</td>
            <td>FALSE</td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>TRUE</td>
            <td>TRUE</td>
            <td>FALSE</td>
          </tr>
        </tbody>
      </table>
      <p className="description"> This table shows both a Taughtology and Contingency</p>
      <p>________________________________________________________</p>

      <p className="description"> Logically equivalent: p and q are logically equivalent</p>
      <h4>Example:</h4>
      <ul className="examples">
        <li>¬(p ∧ q) ≡ ¬p  ∨ ¬q</li>
      </ul>
      <p>________________________________________________________</p>

      <p className="description"> Laws of Equivalency:</p>
      <h4>Associative Law: (p ∨ q) ∨ r  ≡ p ∨ (q ∨ r)</h4>
      <table className="example-table">
        <thead>
          <tr>
            <th>p</th>
            <th>q</th>
            <th>r</th>
            <th>p ∨ q</th>
            <th>(p ∨ q) ∨ r</th>
            <th>q ∨ r</th>
            <th>p  ∨ (q ∨ r)</th>
          </tr>
        </thead>
      </table>
      <p>________________________________________________________</p>

      <h4>Distributive Law: p ∨ (q ∧ r) ≡ (p ∨ q) ∧  (p ∨ r)</h4>
      <table className="example-table">
        <thead>
          <tr>
            <th>p</th>
            <th>q</th>
            <th>r</th>
            <th>q ∧ r</th>
            <th>(p ∨ q) ∨ r</th>
            <th>p ∨ q</th>
            <th>p  ∨  r</th>
            <th>(p ∨ q) ∧  (p ∨ r)</th>
          </tr>
        </thead>
      </table>
      <p>________________________________________________________</p>

      <p className="description"> 	DeMorgans law allows for you to distribute the negation through the conditional and change the logical operators “AND” and “OR”.</p>
      <h4>DeMorgans Law:¬(p ∨ (¬p ∧ q) ≡ ¬p ∧ ¬q</h4>
      <table className="example-table">
        <thead>
          <tr>
            <th>p</th>
            <th>q</th>
            <th>¬p</th>
            <th>¬p ∧ q</th>
            <th>¬q</th>
            <th>p ∨ ¬q</th>
            <th>¬p ∧ ¬q</th>
            <th>¬p ∨ q</th>
            <th>p ∨ q</th>
          </tr>
        </thead>
      </table>
      <p>________________________________________________________</p>

      <h4>Table Example: p ↔ q  ≡ (p ∧ q) ∨ (¬p ∧ ¬q)</h4>
      <table className="example-table">
        <thead>
          <tr>
            <th>p</th>
            <th>q</th>
            <th>¬p</th>
            <th>¬q</th>
            <th>p ∧ q</th>
            <th>¬p ∧ ¬q</th>
            <th>(p ∧ q) ∨ (¬p ∧ ¬q)</th>
            <th>p ↔ q</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TRUE</td>
            <td>TRUE</td>
            <td>FALSE</td>
            <td>FALSE</td>
            <td>TRUE</td>
            <td>FALSE</td>
            <td>TRUE</td>
            <td>TRUE</td>
          </tr>
          <tr>
            <td>TRUE</td>
            <td>FALSE</td>
            <td>FALSE</td>
            <td>TRUE</td>
            <td>FALSE</td>
            <td>FALSE</td>
            <td>FALSE</td>
            <td>FALSE</td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>TRUE</td>
            <td>TRUE</td>
            <td>FALSE</td>
            <td>FALSE</td>
            <td>FALSE</td>
            <td>FALSE</td>
            <td>FALSE</td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>FALSE</td>
            <td>TRUE</td>
            <td>TRUE</td>
            <td>FALSE</td>
            <td>TRUE</td>
            <td>TRUE</td>
            <td>TRUE</td>
          </tr>
        </tbody>
      </table>
      <p className="description">These are logically equivalent.</p>

      <p>________________________________________________________</p>

      <h4>Table Example: Show if [¬p ∧ (p ∨ q)]→ q is a tautology.</h4>
      <table className="example-table">
        <thead>
          <tr>
            <th>p</th>
            <th>q</th>
            <th>¬p</th>
            <th>p ∨ q</th>
            <th>¬p ∧ (p ∨ q)</th>
            <th>[¬p ∧ (p ∨ q)]→ q</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TRUE</td>
            <td>TRUE</td>
            <td>FALSE</td>
            <td>TRUE</td>
            <td>FALSE</td>
            <td>TRUE</td>
          </tr>
          <tr>
            <td>TRUE</td>
            <td>FALSE</td>
            <td>FALSE</td>
            <td>TRUE</td>
            <td>FALSE</td>
            <td>TRUE</td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>TRUE</td>
            <td>TRUE</td>
            <td>TRUE</td>
            <td>TRUE</td>
            <td>TRUE</td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>FALE</td>
            <td>TRUE</td>
            <td>FALSE</td>
            <td>FALSE</td>
            <td>TRUE</td>
          </tr>
        </tbody>
      </table>
      <p className="description">[¬p ∧ (p ∨ q)]→ q is a tautology.</p>
      <p>________________________________________________________</p>




      <div className="button-container">
        <Link to="/topics/App-Of-Prop-Logic">
          <button className="button">Previous: 1.2</button>
        </Link>
        <Link to="/topics/Predicates-and-Quantifiers">
          <button className="button">Next Section: 1.4</button>
        </Link>
      </div>
</div>
  );
}

export default PropEquiv;