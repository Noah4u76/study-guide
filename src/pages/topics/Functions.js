import React from 'react';
import ScrollToTopLink from './ScrollToTopLink';
import Function from '../../images/Functions.png';
import onetoone from '../../images/one to one.png';
import notonetoone from '../../images/Not one to one.png';
import ontonotonetoone from '../../images/Onto not one to one.png';
import ontoonetoone from '../../images/onto and one to one.png';
import onetoonecorr from '../../images/one to one corr.png';

function Functions() {
  return (
<div className="container">
<h1>Functions : 2.3</h1>
<p className="description">Functions: A function f from A to B is an assignment of exactly one element of B to each element of A, we write f(a) = b is b is the unique element of B assigned by function f to the element a of A.</p>
<p className="description">Image:  If f is a function from A to B, we say that A is the domain of f and B is the codomian of f, if f(a) = b we say b is the image of a and a is the preimage of b.</p>
<p className="description">Range: f is the set of all images of elements of A. Also if f is a function from A to B, we say f maps A to B.</p>
<p className="description">Two Functions are equal when:</p>
<p className="description">Have the same domain</p>
<p className="description">Have the same codomain</p>
<p className="description">Have the same range of each element in their domain to the same element in the codomain</p>
<img src={Function} alt="Functions" className="example-image" />

<p>________________________________________________________</p>

<p className="description">Injunction (one to one): one to one function if and only if f(a) = f(b) implies that a = b for all a and b in the domain of f.</p>

<h4>Example:</h4>
      <ul className="examples">
        <li>{" (One to one) "}</li>
        <img src={onetoone} alt="one to one" className="example-image" />
        </ul>

<h4>Example:</h4>
      <ul className="examples">
        <li>{" NOT (One to one) "}</li>
        <img src={notonetoone} alt="not one to one" className="example-image" />
        </ul>

<p>________________________________________________________</p>

<p className="description">Onto Functions: A function f from A to B is called onto if and only if for every element b ε B there is an element a ε A with f(a) = b.</p>
<h4>Example:</h4>
      <ul className="examples">
        <li>{" (Onto but not one to one) "}</li>
        <img src={ontonotonetoone} alt="onto not one to one" className="example-image" />
        </ul>

<h4>Example:</h4>
      <ul className="examples">
        <li>{" (Onto but not one to one) "}</li>
        <img src={ontoonetoone} alt="onto and one to one" className="example-image" />
        </ul>

<p>________________________________________________________</p>

<p className="description">One to one correspondence:  is one to one and onto, f is a one to one correspondence, or a bijection if it is both one to one and onto.</p>
<h4>Example: Let f be a function from {"{a,b,c,d} and {1,2,3,4}"} with</h4>
      <ul className="examples">
        <li>f(a) = 1</li>
        <li>f(b) = 2</li>
        <li>f(c) = 3</li>
        <li>f(d) = 4</li>
        <img src={onetoonecorr} alt="one to one corr" className="example-image" />
        <li>One to one correspondence</li>
        </ul>

        <p>________________________________________________________</p>

<h4>Example: Determine whether each of the functions from Z to Z is one to one.</h4>
      <ul className="examples">
        <li>a.{") f(n) = n-1"}</li>
        <li>n1 - 1 = n2 - 1</li>
        <li>n1 = n2</li>
        <li>Therefore it is one to one</li>
        <li>Is it onto? Find the inverse.</li>
        <li>y = n-1</li>
        <li>y + 1 = n</li>
        <li>Therefore onto from Z to Z</li>
        <li> </li>
        <li>b.{") f(n) = n^2 + 1"}</li>
        <li>n1^2 +1 = n2^2 + 1</li>
        <li>n1^2 = n2^2</li>
        <li>+- n1 = +- n2</li>
        <li>Could be either positive or negative</li>
        <li>Not one to one</li>
        <li>Is it onto?</li>
        <li>No because there is not a f(n) value that would give us 6.</li>
        </ul>

        <h4>Example: Consider these functions from the set of students in a discrete math class. Under what conditions is the function one to one if it assigns to a student his or hers.</h4>
      <ul className="examples">
        <li>a.{") mobile phone number"}</li>
        <li>Yes one to one, due to each student having 1 phone number</li>
        <li>Yes onto, because each number is mappable to each student.</li>
        <li>b.{") Student ID number"}</li>
        <li>Yes one to one, each student will have their own ID number</li>
        <li>Yes onto, each student ID number is mappable to each student</li>
        <li>c.{") Final grade"}</li>
        <li>Not one to one, each student can have the same final grade</li>
        </ul>

        <p>________________________________________________________</p>

        <h4>Example: Composition of Functions:Z to Z let f(x) = 2x+3 and g(x) = 3x+2. What is the composition of fog(x) and gof(x)? </h4>
      <ul className="examples">
        <li>a.{") fog(x)"}</li>
        <li>f(g(x))</li>
        <li>f(3x+2)</li>
        <li>2(3x+2) + 3</li>
        <li>6x + 4 + 3</li>
        <li>= 6x + 7</li>
        <li>b.{") gof(x)"}</li>
        <li>g(f(x))</li>
        <li>g(2x+3)</li>
        <li>3(2x+3) + 2</li>
        <li>6x + 9 + 2</li>
        <li>= 6x + 11</li>

        <p>________________________________________________________</p>

        <div className="button-container">
      <ScrollToTopLink  to="/topics/Set-Operations">
          <button>Previous: 2.2</button>
        </ScrollToTopLink>
        <ScrollToTopLink  to="/topics/Sequences-and-Summations">
          <button>Next Section: 2.4</button>
        </ScrollToTopLink>
      </div>
        </ul>











</div>
  );
}

export default Functions;
