---
title: A criterion for writing a functional as a linear combination
pubDate: 2012-10-07
tags: ["functional analysis", "linear algebra"]
---

Let $X$ be a vector space over $\mathbb{F}$ with dual space $X'$ and fix $\phi_1, \ldots, \phi_n \in X'$. We have a useful criterion for when a linear functional $f \in X'$ lies in the span of $\phi_1, \ldots, \phi_n$.

**Theorem 1.** Let $f \in X'$. Then $f \in \mathrm{span}\{\phi_1, \ldots, \phi_n\}$ if and only if $\cap_{i = 1}^n \ker(\phi_i) \subseteq \ker(f)$.

To prove this, we first establish a general result on when a linear map can factor through another linear map.

**Theorem 2.** Suppose we are given linear maps $T: X \rightarrow Y$ and $S: X \rightarrow Z$. Then there exists a linear map $R: Z \rightarrow Y$ such that $T = R \circ S$ if and only if $\ker(S) \subseteq \ker(T)$.
Proof: (=>) Clear. (<=) Suppose $\ker(S) \subseteq \ker(T)$. Define $R': \mathrm{im}(S) \rightarrow Y$ by $R'(S(x)) = T(x)$. If $S(x) = S(y)$, then $x - y \in \ker(S)$, so $x - y \in \ker(T)$, i.e. $T(x) = T(y)$. Hence $R'$ is well-defined. It is easy to check that $R'$ is linear. Now let $P$ be the projection of $Z$ onto $\mathrm{im}(S)$ and take $R = R' \circ P$. Then for all $x \in X$, $R \circ S(x) = R'(P(S(x))) = R'(S(x)) = T(x)$. 

_Proof of Theorem 1:_ (=>) Clear. (<=) Take $T: X \rightarrow \mathbb{F}$ and $S: X \rightarrow \mathbb{F}^n$ defined by $T(x) = f(x)$ and $S(x) = (\phi_1(x), \ldots, \phi_n(x))$. Then $\ker(S) = \cap_{i = 1}^n \ker(\phi_i) \subseteq \ker(f) = \ker(T)$. By Theorem 2 there exists $R: \mathbb{F}^n \rightarrow \mathbb{F}$ such that $T = R \circ S$ or $f(x) = R(\phi_1(x), \ldots, \phi_n(x))$ for all $x \in X$. Writing $R(y_1, \cdots, y_n) = c_1 y_1 + \cdots + c_n y_n$, we see that $f = c_1 \phi_1 + \cdots + c_n \phi_n$.

Reference:
Holmes - Geometric Functional Analysis and its Applications