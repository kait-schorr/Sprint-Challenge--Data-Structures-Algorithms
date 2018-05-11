Add your answers to the Algorithms exercises here.

Exercise I.
a) O(n^3)
b) O(logn)
c) O(32*sqrt(n))
d) O(nlogn)
e) O(7*n(n-1)^2)
f) O(n)
g) O(n)

II.
a)

<!-- arr.sort
return arr -->

b) for(let i = 0; i<n;i++>){
if(eggsBroken > 0) return i
}

III.
a) O(n^2) because the pivot is at one end of the sort, so the recursive call happens on an n-1 dataset.
b) the complexity would always be O(nlogn) if the pivot were in the middle, because all of the subproblems would be balanced so the problem would be successively divided by 2.
