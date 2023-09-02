---
title: A proof of Cayley-Hamilton Theorem using Zariski topology
pubDate: 2012-12-18
tags: ["algebra", "linear algebra"]
---

The notation $\mathbb{A}^n$ is used to denote the space $\mathbb{C}^n$ with the Zariski topology.

We note the following basic properties of the Zariski topology.

**Proposition 1.** Nonempty open subsets of $\mathbb{A}^n$ is dense.

**Proposition 2.** Polynomial maps from $\mathbb{A}^n$ to $\mathbb{A}^m$ is continuous.

We proceed to prove the Cayley-Hamilton Theorem. Identify $M_n(\mathbb{C})$ with $\mathbb{A}^{n^2}$. For any matrix $A$, let $p_A(\lambda)$ denotes its characteristic polynomial. The Cayley-Hamilton Theorem is the statement that the map $\Psi: \mathbb{A}^{n^2} \rightarrow \mathbb{A}^{n^2}$, $\Psi(A) = p_A(A)$ vanishes identically. Let $D$ be the subset of $\mathbb{A}^{n^2}$ of matrices with distinct eigenvalues.

**Lemma 3.** $D$ is nonempty and open.

_Proof:_ Clearly $D$ is not empty. The complement of $D$ is the collection of n x n matrices with repeated eigenvalues. But a matrix has repeated eigenvalues if and only if the discriminant of its characteristic polynomial vanishes. Hence $D$ is closed.

It follows from Proposition 1 and Lemma 3 that $D$ is dense in $\mathbb{A}^{n^2}$. Note that $\Psi$ is a polynomial map, so it is continuous by Proposition 2. Hence it suffices to show that $\Psi$ vanishes on $D$. Let $A \in D$. As $A$ is diagonalizable, there exists an invertible matrix $P$ such that $P^{-1}AP$ is diagonal. Note that $p_A(A) = p_{P^{-1}AP}(P^{-1}AP)$. So we may assume $A$ itself is diagonal. If $A = \mathrm{diag}(\lambda_1, \ldots, \lambda_n)$, then $p_A(\lambda) = \prod_{i = 1}^n (\lambda - \lambda_i)$, thus it is clear that $p_A(A) = 0$.