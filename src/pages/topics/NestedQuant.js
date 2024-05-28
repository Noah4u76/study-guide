import React from 'react';
import ScrollToTopLink from './ScrollToTopLink';

function NestedQuant() {
  return (
<div className="container">
<h1>Nested Quantifiers: 1.5</h1>
<p className="description">Nested Quantifiers</p>
<h4>Example: ∀x∃y(x + y = 0)</h4>
<ul className="examples">
        <li>True. Where a domain is all real #’s for all values of x there exists a value y such that x + y = 0</li>
      </ul>
      <h4>Example: ∃x∀y(x + y = 0)</h4>
<ul className="examples">
        <li>False. Order of nesting.</li>
      </ul>
      <p>________________________________________________________</p>

      <p className="description">Negating Nested Quantifiers: Previously used DeMorgans for quantifiers to negate single quantifiers.</p>
<h4>Example: ∀x∃y (P(x) ∧ Q(x))</h4>
<ul className="examples">
        <li>¬∀x∃y (P(x) ∧ Q(x)) : Distribute the negation</li>
        <li>∃x¬∃y(P(x) ∧ Q(x))  : Distribute the negation</li>
        <li>∃x∀y¬(P(x) ∧ Q(x))  : Distribute the negation</li>
        <li>∃x∀y(¬P(x) ∨ ¬Q(x)) : Does not negate the value of domain.</li>
      </ul>
      <table className="example-table">
        <thead>
          <tr>
            <th>Quantifier Table</th>
            <th>When True</th>
            <th>When False</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>∀x∀yP(x,y)</td>
            <td>
              <li>is true for every pair x,y.</li>
              <li>EX: (x+y)0 = 0 Dom:All int</li>
            </td>
            <td>
              <li>There is a pair x,y for which P(x,y) is false</li>
              <li>EX: 0/x = 2 dom: int {'>'} 4</li>
            </td>
          </tr>
          <tr>
            <td>∀x∃yP(x,y)</td>
            <td>              
              <li>For every x there is a y where p(x,y) is true.</li>
              <li>EX: x+y=0 dom: All int</li>
              </td>
            <td>              
              <li>There is an x such that P(x,y) is false for every y.</li>
              <li>EX: x+y=0 dom: All pos int</li>
            </td>
          </tr>
          <tr>
            <td>∃x∀yP(x,y)</td>
            <td>
              <li>There is an x for which P(x,y) is true for every y.</li>
              <li>EX: xy=0 dom: All int</li>
              </td>
            <td>
              <li>For every x there is a y for which P(x,y) is false.</li>
              <li>EX: xy=0 dom:1,2,3</li>
              </td>
          </tr>
          <tr>
            <td>∃x∃yP(x,y)</td>
            <td>
              <li>There is a pair x,y for which P(x,y) is true.</li>
              <li>EX: x=y dom:-2,-1,0,1,2</li>
              </td>
            <td>
              <li>P(x,y) is false for every pair x,y.</li>
              <li>EX: x=y domX:1,2 domY:3,4</li>
              </td>
          </tr>
        </tbody>
      </table>
      <p>________________________________________________________</p>
      <h4>Example:Let Q(x,y) be x+y = x-y. What are the truth values? The domain of x is all integers, the domain of y is all integers.</h4>
      <ul className="examples">
        <li>a.{')'} Q(1,1)</li>
        <li>x+y=x-y</li>
        <li>1+1=1-1</li>
        <li>2=0</li>
        <li>FALSE</li>
        </ul>
        <ul className="examples">
        <li>b.{')'} Q(2,0)</li>
        <li>x+y=x-y</li>
        <li>2+0=2-0</li>
        <li>2=2</li>
        <li>TRUE</li>
        </ul>
        <ul className="examples">
        <li>c.{')'} ∀yQ(1,y)</li>
        <li>1+y=1-y</li>
        <li>1+3=1-3</li>
        <li>4=-2</li>
        <li>FALSE</li>
        </ul>
        <ul className="examples">
        <li>d.{')'} ∃xQ(x,2)</li>
        <li>x+2=x-2</li>
        <li>x=-2+x-2</li>
        <li>x=-x</li>
        <li>FALSE</li>
        </ul>
        <h4>Example: ∀y∃x∃z(P(x,z) ∧ Q(y))</h4>
        <ul className="examples">
        <li>¬∀y∃x∃z(P(x,z) ∧ Q(y))</li>
        <li>∃y¬∃x∃z(P(x,z) ∧ Q(y))</li>
        <li>∃y∀x¬∃z(P(x,z) ∧ Q(y))</li>
        <li>∃y∀x∀z¬(P(x,z) ∧ Q(y))</li>
        <li>∃y∀x∀z(¬P(x,z) ∨ ¬Q(y))</li>
        </ul>
        <p>________________________________________________________</p>

      <div className="button-container">
<ScrollToTopLink to="/topics/Predicates-and-Quantifiers">
    <button>Previous: 1.4</button>
  </ScrollToTopLink >
  <ScrollToTopLink to="/topics/Rules-of-Inference">
    <button>Next Section: 1.6</button>
  </ScrollToTopLink >
</div>
</div>
  );
}

export default NestedQuant;