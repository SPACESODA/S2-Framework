---
description: Switching from Client-First to the S2 Framework
icon: code-compare
---

# From Client-First

Client-First is one of the most widely adopted frameworks in the Webflow community, and you might already be using it. So, you may have this struggle:

> **“Wait, isn’t everyone using Client-First? Why even consider switching?”**

**This is our own experience —**

> ### "We tried to embrace Client-First in our past projects. However, we observed that not only did our clients find it quite difficult to follow, but our designers also struggled to keep up with all the rules."



### Class Naming Convention

In Client-First, `is-` is used as a prefix for combo-class names, while utility classes has no prefix and they are not easily distinguishable.

In S2, we use `cc-` for combo-classes and `u-` for utility classes.

In Client-First, you may need to consider the "class folder" concept when naming classes. Some may also follow the long BEM naming method, resulting in overly lengthy names.

In S2, we want to keep it simple:

1. Use natural English in most cases.
2. Use `-` to separate words of the same context.
3. Use `_` to separate words of different contexts or child elements.

Refer to the [Class Naming](https://s2-framework.gitbook.io/docs/guide-and-documentation/naming-strategies/class-naming) section for more examples.

S2 also includes a few abbreviations to streamline naming.

### Mindset

S2 has no class folder concept.

* Important mindset when using S2: keep things neat and avoid overly nested structure.
* In S2, we focus on a flat, clean class structure where elements are named based on their actual function or purpose.

About utility classes, we suggest to use wisely. They can be difficult to track.

* Do not stack or sandwich utility classes.
* Do not modify a modifying utility class directly. Instead, create another combo class to modify the steak. For example, modifying `u-text-center` in `container` `u-text-center` is not recommended.
* If you do not have an exact match for a utility class in mind, create and name your own class instead.

### Compatibility

Finsweet offers a lot of excellent free and premium resources, and you may need to use some of them in your projects.

In the world of Webflow, there is no real incompatibility. S2 is designed to work seamlessly alongside resources base on other frameworks, utilities, and add-ons.



