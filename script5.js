let root1, root2 ,a, b, c;

a = (prompt("Enter first number"));
b = (prompt("Enter second number"));
c = (prompt("Enter third number"));

let discriminant = (b*b - 4* a *c);

if (discriminant < 0) {
    root1 = (-b + Math.sqrt(discriminant)) / (2*a);
    root2 = (-b - Math.sqrt(discriminant)) / (2*a);

    alert(`the roots of quadratic equations are ${root1} and ${root2}`);
}
else if (discriminant == 0) {
    root1 = root2 = -b / (2 * a);

    alert(`the roots of quadratic equations are ${root1} and ${ root2}`);
}
else{
    let realPart = (-b / (2 * a)).toFixed(2);
    let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);

    alert(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`)
 
}