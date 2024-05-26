import React from 'react';
import { Link } from 'react-router-dom';
import './CardStyle.css';

function PropLogic() {
  return (
    <div className="container">

      <h1>Propositional Logic: 1.1</h1>
      <p className="description">
        Propositional Logic: Is a declarative sentence that is either true or false but cannot be both.
      </p>

      <h4>Example:</h4>
      <ul className="examples">
        <li>Let p = 1+1 = 2 (TRUE)</li>
        <li>Let q = 2x2 = 10 (FALSE)</li>
        <li>Let r = It is 90 degrees Fahrenheit right now. (FALSE)</li>
        <li>Let s = What time is it? (NEITHER FALSE OR TRUE)</li>
        <li>Let t = x + y = z (NEITHER FALSE OR TRUE)</li>
      </ul>
<p>________________________________________________________</p>
      <p className="description">
        Negation: Let p be a proposition. The negation of p, denoted by ¬p or p̅, is the statement with the opposite truth value of p.
      </p>
      
      <h4>Example:</h4>
      <ul className="examples">
        <li>Let p̅ = 1+1 ≠ 2 (FALSE)</li>
        <li>Let q̅ = 2x2 ≠ 10 (TRUE)</li>
        <li>Let r̅ = It is not 90 degrees Fahrenheit right now. (TRUE)</li>
      </ul>
      <p>________________________________________________________</p>
      <p className="description">
      Truth Tables: A table that allows us to examine all possible truth value combinations between propositions.
      </p>
      <h4>Table Example:</h4>
      <table className="example-table">
        <thead>
          <tr>
            <th>p</th>
            <th>q</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TRUE</td>
            <td>TRUE</td>
          </tr>
          <tr>
            <td>TRUE</td>
            <td>FALSE</td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>TRUE</td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>FALSE</td>
          </tr>
        </tbody>
      </table>
      <p>________________________________________________________</p>
      <h4 className="description">
      Connecting Propositions Using Logical Operators:</h4>
      <p className="description">
      Conjunction (∧) “AND”: If p and q are propositions then the conjunction AND (∧) p∧q is true when p and q are both true, otherwise it is false.</p>
      <h4>Table Example for AND:</h4>
      <table className="example-table">
        <thead>
          <tr>
            <th>p</th>
            <th>q</th>
            <th>p ∧ q</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TRUE</td>
            <td>TRUE</td>
            <td>TRUE</td>
          </tr>
          <tr>
            <td>TRUE</td>
            <td>FALSE</td>
            <td>FALSE</td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>TRUE</td>
            <td>FALSE</td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>FALSE</td>
            <td>FALSE</td>
          </tr>
        </tbody>
      </table>
      <p>________________________________________________________</p>
      <p className="description">
      Disjunction (∨) “OR”: The disjunction of propositions p and q, denoted by p ∨ q is true when either p or q is true and false only when both p and q are false.</p>
      <h4>Table Example for OR:</h4>
      <table className="example-table">
        <thead>
          <tr>
            <th>p</th>
            <th>q</th>
            <th>p ∨ q</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TRUE</td>
            <td>TRUE</td>
            <td>TRUE</td>
          </tr>
          <tr>
            <td>TRUE</td>
            <td>FALSE</td>
            <td>TRUE</td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>TRUE</td>
            <td>TRUE</td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>FALSE</td>
            <td>FALSE</td>
          </tr>
        </tbody>
      </table>
      <p>________________________________________________________</p>
      <p className="description">
      Exclusive “XOR” (⊕): The exclusive OR of p and q, denoted p ⊕ q is XOR the proposition that is true when exactly one of p or q is true, otherwise false.
      </p>
      <h4>Table Example for XOR :</h4>
      <table className="example-table">
        <thead>
          <tr>
            <th>p</th>
            <th>q</th>
            <th>p ⊕ q</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TRUE</td>
            <td>TRUE</td>
            <td>FALSE</td>
          </tr>
          <tr>
            <td>TRUE</td>
            <td>FALSE</td>
            <td>TRUE</td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>TRUE</td>
            <td>TRUE</td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>FALSE</td>
            <td>FALSE</td>
          </tr>
        </tbody>
      </table>
      <p>________________________________________________________</p>
      <p className="description">
      Conditional (→): The conditional statement p → q is the proposition “if p, then q”. The conditional p → q is false when p is true and q is false, otherwise true
      </p>
      <h4>Table Example for "if p, then q" :</h4>
      <table className="example-table">
        <thead>
          <tr>
            <th>p</th>
            <th>q</th>
            <th>p → q</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TRUE</td>
            <td>TRUE</td>
            <td>TRUE</td>
          </tr>
          <tr>
            <td>TRUE</td>
            <td>FALSE</td>
            <td>FALSE</td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>TRUE</td>
            <td>TRUE</td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>FALSE</td>
            <td>TRUE</td>
          </tr>
        </tbody>
      </table>
      <p>________________________________________________________</p>
      <p className="description">
      Biconditional (↔): Biconditional statement p ↔ q is the proposition “p if and only if q”. The biconditional statement p ↔ q is true when p and q have the same truth value, otherwise false.
      </p>
      <h4>Table Example for "p if and only if q" :</h4>
      <table className="example-table">
        <thead>
          <tr>
            <th>p</th>
            <th>q</th>
            <th>p ↔ q</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>TRUE</td>
            <td>TRUE</td>
            <td>TRUE</td>
          </tr>
          <tr>
            <td>TRUE</td>
            <td>FALSE</td>
            <td>FALSE</td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>TRUE</td>
            <td>False</td>
          </tr>
          <tr>
            <td>FALSE</td>
            <td>FALSE</td>
            <td>TRUE</td>
          </tr>
        </tbody>
      </table>
      <p>________________________________________________________</p>
      
      <div className="button-container">
      <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/topics/App-Of-Prop-Logic">
          <button>Next Section: 1.2</button>
        </Link>
      </div>
    </div>
  );
}

export default PropLogic;
