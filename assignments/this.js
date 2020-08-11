/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this will point to the window/global object. Not to be used.
* 2. The "natural" way to bind this. this will point to the object that invokes it.
* 3. A kind of explicit binding, this will point to whatever object is created by the constructor.
* 4. .apply .call .bind can help you ensure that this points to the object you intend it to.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);

// Principle 2

const implicitBinding = {
	explanation: 'The "natural" way to bind this. this will point to the object that invokes it.',
	explain: function () {
		console.log(this.explanation);
	}
}
implicitBinding.explain();

// Principle 3

function NewBinding(explanation) {
	this.explanation = explanation;
}
NewBinding.prototype.explain = function() {
	console.log(this.explanation);
};

const newExplanation = "A kind of explicit binding, this will point to whatever object is created by the constructor."

const newBound = new NewBinding(newExplanation);
newBound.explain();

// Principle 4

function ExplicitBinding(explanation) {
	NewBinding.call(this, explanation);
}
ExplicitBinding.prototype = Object.create(NewBinding.prototype);
const explicitExplanation = ".apply .call .bind can help you ensure that this points to the object you intend it to."
const callBound = new ExplicitBinding(explicitExplanation);
callBound.explain();