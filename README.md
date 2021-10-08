# Machine Learning Playground

This project implements the concepts presented from the Stanford CS230 MOOC.  However, I have used other sources to clarify certian concepts.

## This project uses React and NodeJS


# Concepts

### Univariant Linear Regression with Gradient Descent

The guess of a straight line through the data is defined as the  hypothesis.

h(x) => thetaZero + thetaOne * x

or basically the definition of the slope of a line.

y = m * x + b

thetaZero == b which is the y intercept
thetaOne == m which is the slope of the line

### Q: How do we know if the hypothesis/line is accurate?
### A: The Cost Function in machine learning is used to determine how well the hypothesis performs for data set.

Where:
m == number or rows in our data matrix
    (not to be confused with m as the slope of the line)

The goal is to minimize the cost function of the line wrt our data set.

The cost function:
const cost = () => {
  let sum = 0;
 
  for (let i = 0; i < m; i++) {
    sum += Math.pow(hypothesis(x[i]) - y[i], 2);
  }
 
  return sum / (2 * m);
}


## Ordinary Leasts Squares Method

     sum ( (x(i) - avg(x))(y(i) - avg(y) )
m = ----------------------------------------
     sum (x(i) - avg(x))^2

and

b = avg(y) - avg(x) * m



