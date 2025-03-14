---
description: >-
  Utility classes are very useful but can sometimes be confusing. This guide
  explains our recommended practices.
icon: u
---

# Utility Classes

Utility classes are ready-made styled classes that can be quickly searched and applied. In the S2 Framework, they are prefixed with `u-` to make them easy to search and identify.

## Use Utility Classes Wisely

Utility classes can sometimes be confusing and even problematic due to some implicit behaviors of how Webflow handles class stacking, which may not be well-known to all users. Additionally, they can be difficult to describe and remember.

**We recommend following these rules:**

1.  **Applying Utility Classes**

    Utility classes can be applied directly to an element or added as combo classes for quick styling. Use utility classes either on their own or at the end. Avoid placing them in the middle.
2.  **Limit the number of Utility Classes**

    Avoid using more than two utility classes on a single element.
3.  **Modifying Utility Classes**

    When a utility class is used alone, it can be modified by combo classes.

    When a utility class modifies another class, you may stack one additional combo class on top. However, this additional combo class must be a direct combo class of that utility class.

**Good:**

* <mark style="color:blue;">`u-bg-primary`</mark> `cc-white-text`
* `blog-post` <mark style="color:blue;">`u-bg-primary`</mark>
* `blog-post` `cc-today` <mark style="color:blue;">`u-bg-primary`</mark>

**Still ok, but be careful not to overuse:**

* <mark style="color:blue;">`u-bg-primary`</mark> <mark style="color:blue;">`u-text-uppercase`</mark>
* `blog-post` <mark style="color:blue;">`u-bg-primary`</mark> <mark style="color:blue;">`u-text-uppercase`</mark>
* `blog-post` <mark style="color:blue;">`u-bg-primary`</mark> `cc-darker`

**Not recommended:**

* `blog-post` <mark style="color:blue;">`u-bg-primary`</mark> <mark style="color:blue;">`u-text-uppercase`</mark> <mark style="color:blue;">`u-font-bold`</mark>
* `blog-post` <mark style="color:blue;">`u-bg-primary`</mark> `cc-darker` <mark style="color:blue;">`u-font-bold`</mark>
* `blog-post` <mark style="color:blue;">`u-bg-primary`</mark> <mark style="color:blue;">`u-text-uppercase`</mark> `cc-bold`
* `blog-post` <mark style="color:blue;">`u-bg-primary`</mark> `cc-darker` `cc-first`&#x20;

> It is much better to create a **combo class** with a **descriptive name**, like `cc-featured`.
>
> Example: `blog-post` <mark style="color:blue;">`u-bg-primary`</mark> `cc-darker` `cc-first`&#x20;
>
> You should do this instead:  `blog-post` <mark style="color:blue;">`u-bg-primary`</mark> `cc-featured` \
> Or: `blog-post` `cc-featured` :100:

{% hint style="warning" %}
Modifying the "root" utility class will affect all instances where it's used. For example, updating the styles of <mark style="color:blue;">`u-bg-primary`</mark> utility class will also apply to `blog-post` <mark style="color:blue;">`u-bg-primary`</mark>.

However, modifying `blog-post` <mark style="color:blue;">`u-bg-primary`</mark> will add styles on top of the combo and will not affect the utility class itself.

So, while this is technically possible and some may even think it is powerful, _trust us_, it can cause confusion and make the site difficult to maintain over time.
{% endhint %}



#### Get your hands dirty!

To understand how Webflow handles combo classes and utility classes stacking, you should experience your own directly in the Webflow Designer. Go to the [Read-only preview](https://s2-framework.webflow.io/?_gl=1*1knufmz*_ga*MTEzMjA1NzgwNy4xNzM4MTQwODU2*_ga_PX2FCCPV82*MTczODg5MjgzMi40NS4xLjE3Mzg4OTI4MzcuNTUuMC4xNTc5Mjg2NzM5#preview) of the S2 Framework cloneable and try it out.



