---
title: "Weak* separation theorem and Goldstine's theorem"
pubDate: 2012-09-29
tags: ["functional analysis"]
---

Recall a version of separation theorem for a Banach space is the following.

**Theorem 1.** Let $X$ be a Banach space. Let $C$ be a nonempty open convex subset of $X$ and $x_0 \in X \backslash C$. Then there exists $\ell_0 \in X^*$ such that $\sup_{x \in C} \Re \ell_0(x) < \Re \ell_0(x_0)$.

There is a separation theorem in the weak* topology setting.

**Theorem 2.** Let $X$ be a Banach space. Let $C$ be a nonempty weak*-closed convex subset of $X^*$ and $\ell_0 \in X^* \backslash C$. Then there exists $x_0 \in X$ such that $\sup_{\ell \in C} \Re \ell(x_0) < \Re \ell_0(x_0)$.
_Proof:_ Since $X^* \backslash C$ is weak*-open, we can find $x_1, \ldots, x_n \in X$ and $\epsilon > 0$ such that $U = \{\ell \in X^* : |\ell(x_i)| < \epsilon, i = 1, \ldots, n\}$ satisfies $\ell_0 + U \subset X^* \backslash C$. This implies that $\ell_0$ does not lie in the convex open set $C + U$. By Theorem 1 there exists $\psi \in X^{**}$ such that $\Re \psi(\ell_0) > \sup_{\ell \in C + U} \Re \psi(\ell) \geq \sup_{\ell \in C} \Re \psi(\ell)$. We want to show that $\cap_{i = 1}^n \ker(x_i) \subseteq \ker(\psi)$, since then $\psi$ is a linear combination of $x_1, \ldots, x_n$, thus $x_0 = \psi \in X$ and we are done. Let $\ell \in X^*$ with $\ell(x_i)$ for all $1 \leq i \leq n$. Note that $t\ell \in U$ for all $t \in \mathbb{R}$. Fix any $c \in C$. Then $M := \sup_{f \in U} \psi(f) < \psi(\ell_0) - \psi(c)$ is finite. Now for all $t \in \mathbb{R}$, $\psi(t\ell) \leq M$, i.e. $\psi(\ell) \leq M/t$ for all $t > 0$ and $\psi(\ell) \geq M/t$ for all $t < 0$. Therefore $\psi(\ell) = 0$.

The following is an application of the weak* separation theorem. (Notation: $B_Y = \{y \in Y: \|y\| \leq 1\}$.)

**Theorem (Goldstine).** The weak* closure of $B_X$ in $X^{**}$ is $B_{X^{**}}$.
_Proof:_ First, $B_X \subseteq B_{X^{**}}$ and $B_{X^{**}}$ is weak*-compact by Alaoglu's Theorem. Hence the weak* closure $\tilde{B}$ of $B_X$ is a subset of $B_{X^{**}}$. Suppose the inclusion is proper and choose $w \in B_{X^{**}} \backslash \tilde{B}$. Apply Theorem 2 to find an $\ell \in X^*$ and $\epsilon > 0$ such that $\sup_{\psi \in \tilde{B}} \Re \psi(\ell_0) \leq \Re w(\ell_0) - \epsilon$. In particular, $\Re \ell_0(x) \leq \Re w(\ell_0) - \epsilon$ for all $x \in B_X$. This implies that $|\ell_0(x)| \leq \Re w(\ell_0) - \epsilon$ for all $x \in B_X$. Replace $w$ by some $e^{-i\theta}w$, we have $|\ell_0(x)| \leq |w(\ell_0)| - \epsilon$ for all $x \in B_X$. But then $\|\ell_0\| \leq |w(\ell_0)| - \epsilon \leq \|w\|\|\ell_0\| - \epsilon = \|\ell_0\| - \epsilon$. This is a contradiction.

Reference:
Fabian, Habala, Hajek,  Santalucia, Pelant, Zizler - Functional Analysis and Infinite Dimensional Geometry