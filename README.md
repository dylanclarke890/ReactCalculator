# React Calculator
Simple calculator using React, built using both class and function components.

There are three folders within app/components - shared, classComponents and functionalComponents.

The components within classComponents and functionalComponents are essentially the same, except classComponents have been built using classes, this.state and setState() to control the flow of data, and functionalComponents have been built using functions and React hooks. 

The underlying logic for calculating is slightly different for both as well. 

Class components only need part of the state returning as the changes are merged into the current state array.

Functional components replace the current state array with new values if specified, and null values if not.