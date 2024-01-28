Open `calculateTruths.js` side by side with this file and use
`calculateTruthTable(A, cb, B)` to calculate individual values. You will still
need to consider the `!` operator and the order of operations as you solve each
of these tables.

Compute the following truth tables:


```
A    B     !A || (A && B)
--------------------
0    0       true
0    1       true
1    0       false
1    1       true
```

```
A    B     B || !A
--------------------
0    0       true
0    1       true
1    0       false
1    1       true
```

```
A    B     !(A && !B)
--------------------
0    0       true
0    1       true
1    0       false
1    1       true
```

```
A    B     !(A || !B)
--------------------
0    0       false
0    1       true
1    0       false
1    1       false
```

```
A    B     A || !A
--------------------
0    0       true
0    1       true
1    0       true
1    1       true
```

```
A    B     B && !B
--------------------
0    0       false
0    1       false
1    0       false
1    1       false
```

```
A    B    C     A && B || !C
--------------------
0    0    0       true
0    0    1       false
0    1    0       true
0    1    1       false
1    0    0       true
1    0    1       false
1    1    0       true
1    1    1       true
```

```
A    B    C     !A || (B && C)
--------------------
0    0    0       true
0    0    1       true
0    1    0       true
0    1    1       true
1    0    0       false
1    0    1       false
1    1    0       false
1    1    1       true
```