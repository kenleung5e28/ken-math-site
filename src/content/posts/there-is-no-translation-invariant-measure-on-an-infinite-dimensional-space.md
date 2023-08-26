---
title: There is no translation-invariant measure on an infinite-dimensional space
pubDate: 2012-10-11
tags: ["functional analysis"]
---

One difficulty in carrying out analysis on an infinite-dimensional normed vector space, e.g. $L^p(\mathbb{R})$, is that there is no analogue of Lebesgue measure on such a space. This comes from the observation that an open ball in an infinite-dimensional normed vector space contains infinitely many disjoint open balls of the same radius. We first give a formal statement of our goal.

**Theorem.** Let $X$ be an infinite-dimensional normed vector space. Then there is no translational-invariant Borel measure $\mu$ on $X$ such that $\mu(U) > 0$ for every nonempty open set $U$ and $\mu(U_0) < \infty$ for some open set $U_0$.

To prove the theorem, we recall Riesz's Lemma.

**Lemma (Riesz).** Let $X$ be a normed vector space and $Y$ be a proper closed subspace. For every $\epsilon > 0$, there exists $x \in X$ such that $\|x\| = 1$ and $\mathrm{dist}(x, Y) = \inf\{\|x - y\|: y \in Y\} \geq 1 - \epsilon$.

_Proof of Theorem:_ Suppose $\mu$ is a translation-invariant Borel measure on $X$ with $\mu(U) > 0$ for every nonempty open $U \subseteq X$. Fix a nonempty open set $U$ in $X$. Then there exists $r > 0$ and $x_0 \in X$ such that $W = r(U + x_0)$ contains $B = \{x \in X: \|x\| < 2 \}$. Using Riesz's Lemma and induction, we can find a sequence $\{x_n\}$ of unit vectors in $X$ such that $\mathrm{dist}(x_{n + 1}, \mathrm{span}\{x_1, \ldots, x_n\}) \geq 1/2$ for all $n \geq 1$. Hence $\{x_n\} \subseteq B$ and $\|x_n - x_m\| \geq 1/2$ whenever $n \neq m$. Take $B_n = \{x \in X: \|x - x_n\| < 1/2 \}$, then $\{B_n\}$ is a disjoint collection of open balls contained in $B$ of radius half. Now let $U_n = \frac{1}{r}B_n - x_0$, then $\{U_n\}$ is a disjoint collection of open balls contained in $U$ of the same radius. It follows that \[ \mu(U) \geq \mu(\bigcup_{n = 1}^\infty U_n) = \sum_{n = 1}^\infty \mu(U_n) = \sum_{n = 1}^\infty \mu(U_1) \] by translation-invariance of $\mu$. But $\mu(U_1) > 0$, forcing $\mu(U) = \infty$.

Reference:
Fabian, Habala, Hajek, Montesinos, Zizler - Banach Space Theory: The Basis for Linear and Nonlinear Analysis