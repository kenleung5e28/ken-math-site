---
title: Additive subgroups of the reals and irrational rotation
pubDate: 2012-05-04
tags: ["algebra", "real analysis"]
---

We present a useful characterization of the additive subgroups of $\mathbb{R}$.

**Theorem.** Let $G$ be a subgroup of $(\mathbb{R}, +)$. Then precisely one of the following holds:
(i) $G = d\mathbb{Z}$ for some $d \in \mathbb{R}$;
(ii) $G$ is dense in $\mathbb{R}$.

_Proof:_ If $G = \{0\}$, then $G = 0\mathbb{Z}$. Assume $G$ is nontrivial. Let \[ d = \inf\{g: 0 < g \in G\}.\] Note that $d \geq 0$ since for every nonzero $y \in G$, $ky \in G$ and $ky > 0$ for some $k \in \mathbb{Z}$.
Case 1: $d > 0$. We claim that $d \in G$. If not, then for every $\epsilon > 0$ there exists $g \in G$ with $g \in (d, d + \epsilon)$. It follows that for every $\epsilon > 0$ there are $g, h \in G$ such that $0 < g - h < \epsilon$, thus there exists $x \in G$ with $0 < x < \epsilon$ (let $x = g - h$). This contradicts to $d > 0$. We also have $d = \min\{|g|: 0 \neq g \in G\}$. Now fix any $0< g \in G$ and consider $S = \{g - nd: n = 0, 1, 2, \ldots\}$. The set $S$ is discrete, we can find $n \geq 0$ such that $g - nd \geq 0$ and $g - (n + 1)d < 0$. Since $g - nd, g - (n +1)d \in G$, $g - (n + 1)d \leq -d$, so $g - nd \leq 0$ and $g = nd$. Therefore $G = d\mathbb{Z}$.
Case 2: $d = 0$. Arguing as in the beginning of case 1, we find that 0 is a cluster point of $G \cap \mathbb{R}_+$. Let $(a, b)$ be any nonempty bounded open interval of $\mathbb{R}$. Take $\epsilon = b - a$ and pick some $g \in G \cap (0, \epsilon)$. For sufficiently large $n$, $ng \geq a$, and we take the smallest such $n$. Then $ng - g < a$, i.e. $ng \in (a - g, a]$, thus $ng + g \in (a, a + g] \subseteq (a, b)$. Therefore $G \cap (a, b) \neq \emptyset$. It follows that $G$ is dense in $\mathbb{R}$.

The above result can be used to prove the density of the orbit of an irrational rotation in the unit circle.

**Corollary.** (i) For an irrational $t$, $\mathbb{Z} + t\mathbb{Z}$ is dense in $\mathbb{R}$.
(ii) For an irrational $t$, $\{e^{2\pi int}: n \in \mathbb{Z}\}$ is dense in the unit circle.

_Proof:_ (i) Note that $\mathbb{Z} + t\mathbb{Z}$ is a subgroup of $(\mathbb{R}, +)$. If $\mathbb{Z} + t\mathbb{Z} = a\mathbb{Z}$ for some $a \in \mathbb{R}$, then $1 = an$ for some $n \in \mathbb{Z}$, so $a \in \mathbb{Q}$. But $t = am$ for some $m \in \mathbb{Z}$, so $t \in \mathbb{Q}$, contradiction. By Theorem, $\mathbb{Z} + t\mathbb{Z}$ must be dense in $\mathbb{R}$.
(ii)  Let $e^{2\pi i x}$ be a point on the unit circle. By (i), there exist sequences $m_k, n_k$ of integers such that $|m_k + n_k t - x| \rightarrow 0$. Then $|e^{2 \pi i n_k t} - e^{2 \pi i x}| = |e^{2\pi i x}||e^{2 \pi i (n_k t - x)} - 1| = |e^{2\pi i (m_k + n_k t - x)} - 1| = O(|m_k + n_k t - x|) \rightarrow 0$. Hence $\{e^{2\pi int}\}_{n \in \mathbb{Z}}$ is dense in the unit circle.