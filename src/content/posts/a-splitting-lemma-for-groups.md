---
title: A splitting lemma for groups
pubDate: 2012-12-19
tags: ["algebra"]
---

We recall the definition of the semidirect product of two groups. Suppose $N$ and $H$ are two groups and $H$ acts on $N$ by $\vphi$, i.e. we have a homomorphism $\func{\vphi}{H}{\mathrm{Aut}(N)}$, $h \mapsto \vphi_h$. The semidirect product $N \rtimes_\vphi H$ is defined by endowing the set $N \times H$ the multiplication \[ (n_1, h_1) \cdot (n_2, h_2) = (n_1 \vphi_{h_1}(n_2), h_1 h_2). \] Identifying $N$ with $N \times \{1\}$ and $H$ with $\{1\} \times H$, $N$ and $H$ are subgroups of $N \rtimes_\vphi H$ with $N$ normal.

**Theorem (Splitting Lemma).** Let $G$ be a group, $H$ be a subgroup of $G$ and $N$ be a normal subgroup of $G$. Then $G$ is isomorphic to a semidirect product $N \rtimes_\vphi H$ if and only if
(i) there exist a short exact sequence $1 \rightarrow N \overset{\iota}\rightarrow G \overset{\pi}{\rightarrow} H \rightarrow 1$ and
(ii) a homomophism $\func{\alpha}{H}{G}$ such that $\pi \circ \alpha = \mathrm{id}_H$.
_Proof:_ $(\Leftarrow)$ Suppose $G = N \rtimes_\vphi H$. To prove (i) let $\iota$ be the inclusion map of $N$ into $G$, which is a injective homomorphism. Define $\func{\pi}{G}{H}$ by $\pi((n, h)) = h$. Clearly $\pi$ is a surjective homomorphism and its kernel is $N \times \{1\} \cong N$. For (ii), define $\func{\alpha}{H}{G}$ by $\alpha(h) = (1, h)$. Then $\alpha$ is a homomorphism with $\pi(\alpha(h)) = \pi((1, h)) = h$ for all $h \in H$.
$(\Rightarrow)$ Define a homomorphism $\func{\vphi}{H}{\mathrm{Aut}(N)}$ by $\vphi_h(n) = \iota^{-1}(\alpha(h)\iota(n)\alpha(h)^{-1})$, note that since $N \lhd G$ we have $gng^{-1} \in N$ whenever $g \in G$ and $n \in N$, so $\vphi$ is well-defined. We claim that $G \cong N \rtimes_\vphi H$. Define $\func{\Psi}{N \rtimes_\vphi H}{G}$ by $\Psi((n, h)) = \iota(n)\alpha(h)$. It is a homomorphism since \[ \begin{align*}\Psi((n_1, h_1)\cdot(n_2, h_2)) &= \iota(n_1)\alpha(h_1)\iota(n_2)\alpha(h_1)^{-1}\alpha(h_1 h_2) \\
&=  \iota(n_1)\alpha(h_1)\iota(n_2)\alpha(h_2) \\
&= \Psi((n_1, h_1))\Psi((n_2, h_2)). \end{align*} \] Now define $\func{\Phi}{G}{N \rtimes_\vphi H}$ by $\Phi(g) = (\iota^{-1}(g (\alpha \circ \pi)(g^{-1})), \pi(g))$. It is well-defined since \[ \pi(g(\alpha \circ \pi)(g^{-1})) = \pi(g)(\pi \circ \alpha)(\pi(g)^{-1}) = \pi(g)\pi(g)^{-1} = 1 \] and thus $g(\alpha \circ \pi)(g^{-1}) \in \ker(\pi) = \mathrm{im}(\iota)$. It is a homomorphism as
\[ \begin{align*} \Phi(g_1)\Phi(g_2) &= (\iota^{-1}(g_1 (\alpha \circ \pi)(g_1^{-1})), \pi(g_1)) \cdot  (\iota^{-1}(g_2 (\alpha \circ \pi)(g_2^{-1})), \pi(g_2)) \\
&= (\iota^{-1}(g_1 (\alpha \circ \pi)(g_1^{-1})) \vphi_{\pi(g_1)}(\iota^{-1}(g_2 (\alpha \circ \pi)(g_2^{-1}))), \pi(g_1)\pi(g_2)) \\
&= (\iota^{-1}(g_1 (\alpha \circ \pi)(g_1^{-1})) \iota^{-1}(\alpha(\pi(g_1))g_2(\alpha \circ \pi)(g_2^{-1})\alpha(\pi(g_1))^{-1}), \pi(g_1 g_2)) \\
&= (\iota^{-1}(g_1 g_2 (\alpha \circ \pi)(g_2^{-1} g_1^{-1})), \pi(g_1 g_2)) \\
&= \Phi(g_1 g_2).
\end{align*}\] Now \[ \begin{align*}\Phi \circ \Psi(n, h) &= \Phi(\iota(n)\alpha(h)) = \Phi(\iota(n))\Phi(\alpha(h)) \\
&= (\iota^{-1}(\iota(n)(\alpha \circ \pi \circ \iota)(n^{-1})), (\pi \circ \iota)(n)) \cdot (\iota^{-1}(\alpha(h)(\alpha \circ \pi \circ \alpha)(h^{-1})), (\pi \circ \alpha)(h)) \\
&= (n, 1) \cdot (1, h) = (n, h)
\end{align*} \] and \[ \begin{align*} \Psi \circ \Phi(g) &= \Psi((\iota^{-1}(g (\alpha \circ \pi)(g^{-1})), \pi(g))) \\
&= \iota(\iota^{-1}(g (\alpha \circ \pi)(g^{-1})))\alpha(\pi(g)) = g.
\end{align*} \] Hence $\Phi$ and $\Psi$ are inverse to each other and thus are isomorphisms.