Lets discuss how programaatically we can generaate a magic square of size n, consider following matrix for an example

<!-- Magic Squsre of 3 -->
 2  7  6
 9  5  1
 4  3  8
sum in all each row and each collumn  = 3*(3^2 + 1)/2  = 15

for order of 5,7 and so on it has to go by that rule
5*(5^2 + 1)/2  = 65, and 7*(7^2 + 1)/2  = 175,and so forth

in any magicSquare, first number is stored at position(n/2, n-1)
let  this position be (i,j), next 3 number is is stored at position (i-1,j+1), where we can consider each row and collumn as circular array, as in they wrap around

Three conditions to hold
<> position of next number is calculated by decrementing row number of previous number by 1, and incrementing collumn number by 1, at any time i calculated position becomes -1 it will wrap around to n-1, similarly if calculated collumn position becomes n, it will wrap around to 0
<> if magic square already contains a number at calculated position, calculated collumn position will be decremented by 2 and calculated row position will be incremented by 1
<> if calculated row position is -1 and calculated columnm position is n, thn new position would be at (0, n-2)