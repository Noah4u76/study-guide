import React from 'react';
import ScrollToTopLink from './ScrollToTopLink';
import UnionVenn from '../../images/Union Venn.png';
import InterVenn from '../../images/Intersection Venn.png';
import DifferenceVenn from '../../images/Difference Venn.png';


function SetOperations() {
  return (
<div className="container">
<h1>Set Operations : 2.2</h1>
<p className="description">Union of Sets: A U B, is the set that contains those elements that are either in A or B, or both.</p>

<h4>Example:</h4>
      <ul className="examples">
        <li>{" A U B = { x | x ε A ∨ x ε B } "}</li>
        <img src={UnionVenn} alt="Union" className="example-image" />
        </ul>
        <p>________________________________________________________</p>

<p className="description">Intersection of Sets: Denoted by A ∩ B is the set conataining elements in both A and B.</p>

<h4>Example:</h4>
      <ul className="examples">
        <li>{" A ∩ B = {x | x ε A ∧ x ε B } "}</li>
        <img src={InterVenn} alt="Intersection" className="example-image" />
        </ul>
        <p>________________________________________________________</p>

<h4 className="description">Inclusion Exclusion Priciple:</h4>

<h4>Example:</h4>
      <ul className="examples">
        <li>{" |A U B | = |A| + |B| - |A ∧ B| } "}</li>
        <li>{" Cardinality of A plus the cardinality of B, but subtract the duplicates. "}</li>
        </ul>
        <p>________________________________________________________</p>

        <p className="description">Difference of Sets: Denoted by A-B is a set containing elements that are in A, but not in B. Also called the compliment of B respect to A.</p>

<h4>Example:</h4>
      <ul className="examples">
        <li>{" A-B = { x | x ε A ∧ x -ε B } "}</li>
        <img src={DifferenceVenn} alt="Difference" className="example-image" />
        </ul>
        <p>________________________________________________________</p>

        <h4>Example: The difference of {"{1,3,5} and {1,2,3}"} is the set {"{5}"}</h4>
      <ul className="examples">
        <li>{"{1,3,5} - {1,2,3} = {5}"}</li>
        </ul>

        <h4>Example: Show that if A and B are sets with A C B, then A U B = B.</h4>
      <ul className="examples">
        <li>{" {x | x ε A ∨ x ε B } "}</li>
        <li>{"{x | x ε B } : By simplification"}</li>
        <li>True</li>
        </ul>

        <h4>Example: A ∩ B = A </h4>
      <ul className="examples">
        <li>{" A ∩ B ε A "}</li>
        <li>{"{x | x ε A ∧ x ε B } "}</li>
        <li>True</li>
        </ul>

        <h4>Example: Prove the second associative law from Table 1 by showing if A, B, and C are sets, then A ∧ (B ∧ C) = ( A ∧ B) ∧ C.</h4>
      <ul className="examples">
        <li>{"A ∧ (B ∧ C)"}</li>
        <li>{"{x|x ε A ∧ (x ε B ∧ x ε C) } : Given"}</li>
        <li>{" {x|x ε A ∧ x ε B ∧ x ε C) } : Associative"}</li>
        <li>{" {x|(x ε A ∧ x ε B) ∧ x ε C) } : Associative "}</li>
        <li>{" = ( A ∧ B) ∧ C"}</li>
        <li>{" Prove other side."}</li>
        <li>{"( A ∧ B) ∧ C"}</li>
        <li>{"{x|(x ε A ∧ x ε B) ∧ x ε C) } : Given"}</li>
        <li>{"{x|x ε A ∧ x ε B ∧ x ε C } : Associative"}</li>
        <li>{"{x|x ε A ∧ x ε (B ∧ x ε C) } : Associative"}</li>
        <li>{"Therefore the sets are equal to one another."}</li>
        </ul>

        <p>________________________________________________________</p>

        <div className="button-container">
      <ScrollToTopLink  to="/topics/Sets">
          <button>Previous: 2.1</button>
        </ScrollToTopLink>
        <ScrollToTopLink  to="/topics/Functions">
          <button>Next Section: 2.3</button>
        </ScrollToTopLink>
      </div>
</div>
  );
}

export default SetOperations;