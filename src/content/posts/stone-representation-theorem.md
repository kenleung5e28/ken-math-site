---
title: Stone Representation Theorem
pubDate: 31-01-2013
---

A _Boolean algebra_ is a set $B$ together with two binary operations $\vee, \wedge$, a unary operation $\neg$ and two distinctive elements $0, 1 \in B$, satisfying the following axioms.

(i) Associative laws:
$a \vee (b \vee c) = (a \vee b) \vee c, a \wedge (b \wedge c) = (a \wedge b) \wedge c.$
(ii) Commutative laws:
$a \vee b = b \vee a, a \wedge b = b \wedge a.$
(iii) Distributive laws:
$a \vee (b \wedge c) = (a \vee b) \wedge (a \vee c), a \wedge (b \vee c) = (a \wedge b) \vee (a \wedge c).$
(iv) Absorption laws:
$a \vee (a \wedge b) = a, a \wedge (a \vee b) = a.$
(v) Complementation laws:
$a \vee \neg a = 1, a \wedge \neg a = 0.$

One can impose a partial order on $B$ by declaring $a \leq b$ if and only if $a \vee b = b$.

A typical example of a Boolean algebra is the power set $\mathcal{P}(X)$ of a nonempty set $X$, with $\vee$ being union, $\wedge$ being intersection, $\neg$ begin complement, $0$ being the empty set, $1$ being $X$. More generally, a family of subsets of $X$ which is closed under union, intersection and complement and contains the empty set is also a Boolean algebra, called an _algebra of sets_.

A _homomorphism_ between Boolean algebras $A$ and $B$ is a map $f: A \rightarrow B$ such that $f(a \vee b) = f(a) \vee f(b), f(a \wedge b) = f(a) \wedge f(b), f(\neg a) = \neg f(a), f(0) = 0, f(1) = 1$.

A _filter_ on a Boolean algebra $B$ is a subset $F$ of $B$ such that
(i) $1 \in F, 0 \notin F$;
(ii) if $u, v \in F$, then $u \wedge v \in F$;
(iii) if $u \in F, v \in B$ and $u \leq v$, then $v \in F$.

An _ultrafilter_ $U$ on a Boolean algebra $B$ is a filter on $B$ such that either $a \in U$ or $\neg a \in U$ for every $a \in B$.

Assuming the Axiom of Choice, we have the following result.

**Theorem 1.** Every filter on a Boolean algebra $B$ can be extended to a ultrafilter.

**Stone Representation Theorem.** Every Boolean algebra is isomorphic to an algebra of sets.

Reference:
Jech - Set Theory
