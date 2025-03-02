---
icon: i-cursor
description: >-
  Since styling in Webflow relies heavily on class names, adopting consistent
  and well-thought-out class naming strategies will help you build faster and
  maintain your site more efficiently over time.
---

# Class Naming

The naming strategies suggested in the S2 Framework are optimized for Webflow and incorporate the best parts from Tailwind CSS and MAST, and they are mostly the same as the Client-First convention.

{% hint style="warning" %}
**Class naming** is an important topic. The strategies of S2 have been carefully researched and tested on large and small projects.
{% endhint %}



## Goals

Our class naming goals are to make class names easy to read and understand, easy to search, and require less memorization. We aim for clarity so that anyone can understand them.

Use clean naming and structure, and avoid over-preparing for scalability. Webflow is very flexible and can scale easily.



## 01. Lowercase

Class names should be ALL lowercase to ensure consistency and readability.



## 02. Dash or Underscore

The use of `-` (dash or hyphen) and `_` (underscore) is guided by these rules.

* Use **dashes** to separate words, just like in normal English.
* Use **underscores** for **different contexts** or **child elements**.

For example, an element with a `blog-card` class can have a child element styled by a `blog-card_image` class. Here are more examples to familiarize yourself with the concept:

| Dash examples       | Underscore examples     |
| ------------------- | ----------------------- |
| `u-`                | `main-nav_dropdown`     |
| `cc-`               | `slider_control-button` |
| `main-header`       | `job-item_info`         |
| `job-title`         | `job-item_info-icon`    |
| `long-button-arrow` | `footer_social-link`    |
| `cc-card-special`   | `modal_window-close`    |
| `cc-last-row`       | `product_list-item`     |
| `cc-not-sticky`     | `gallery_info-wrapper`  |
| `author-title-xl`   | `sidebar_nav-item`      |



## 03. Combo Classes

Use `cc-` for ALL combo classes.

S2 does not use **is-**, and does not use **has-**, **with-**, **without-**, **no-**, **not-**, **non-**, or any other prefixes of such kind for combo classes.

If you need to convey meanings such as **is**, **has**, **with**, etc., name the combo classes as `cc-is-`, `cc-has-`, `cc-with-`.

{% hint style="info" %}
We understand that using `is-` can sometimes be unavoidable when importing parts from elsewhere or when bringing in components with JavaScript. _In such cases, it is ok._
{% endhint %}



## 04. Word Order

For base CSS classes, the order should resemble **normal English word order**. Descriptive adjectives usually come before the noun in most cases. For example:

`main-nav`

`featured-author-icon`

The adjective or descriptive term is usually placed **after** the main keyword for combo classes and utility classes. That makes them more identifiable and organized.

`item-block` `cc-task`

`item-block` `cc-task-xs`

`item-block` `cc-task-expired`

Values or counting descriptions are usually written **at the last**. For example:

`text-wrapper` `cc-max-40rem`



## 05. Abbreviations

Always use complete words other than the below abbreviations.

* [Glossary](class-naming.md#glossary)
* [Margin & Padding Shorthands](class-naming.md#margin-and-padding)
* [Style Variants](class-naming.md#id-06.-style-variants) (Breakpoints, Size variants, Color variants)

### Glossary

|                |              |               |          |
| -------------- | ------------ | ------------- | -------- |
| navigation     | `nav`        | horizontal    | `h`      |
| background     | `bg`         | vertical      | `v`      |
| column(s)      | `cols` `col` | decoration    | `deco`   |
| call-to-action | `cta`        | configuration | `config` |
| information    | `info`       | subsidiary    | `sub`    |
| alternative    | `alt`        | language      | `lang`   |
| minium         | `min`        | reference(s)  | `ref`    |
| maximum        | `max`        | % (eg. 20%    | `20p`    |

### Margin & Padding

Here are the shorthands for **margin** and **padding**.

|                      |      |                       |      |
| -------------------- | ---- | --------------------- | ---- |
| margin-top           | `mt` | padding-top           | `pt` |
| margin-bottom        | `mb` | padding-bottom        | `pb` |
| margin-left          | `ml` | padding-left          | `pl` |
| margin-right         | `mr` | padding-right         | `pr` |
| margin-right & -left | `mx` | padding-right & -left | `px` |
| margin-top & -bottom | `my` | padding-top & -bottom | `py` |

{% hint style="info" %}
The letter notation aligns with Tailwind CSS’s convention for padding and margin utilities. For the value part, we recommend giving the actual value a unit or a description label.
{% endhint %}

Examples: `-mb-0`, `-mx-auto`, `-my-1rem`, `-mb-tall`, `-mb-messages`

When all sides have the same values, you can write them like these:\
`-m-0`, `-p-0`, `cc-1rem`, `cc-content-0`

Sometimes, when you think you do not need to distinguish between margin or padding, or when you want to leave some flexibility in the design, it is fine to use `-top`, `-bottom`, `-left`, `-right`, or their combinations, such as `-top-bottom-lg`.



## 06. Style Variants

Style Variants are different versions of the same class type.

{% hint style="info" %}
The term **Variants** in this context refers to a concept that is entirely different from [Variables](../variables/). Please do not confuse the two.
{% endhint %}

### Breakpoints

<table data-full-width="true"><thead><tr><th></th><th>Large 3</th><th>Large 2</th><th>Large 1</th><th>Desktop</th><th>Tablet</th><th>Mobile Landscape</th><th>Mobile Portrait</th></tr></thead><tbody><tr><td><strong>px</strong></td><td>> 1920px</td><td>> 1440px</td><td>> 1280px</td><td>–</td><td>&#x3C; 991px</td><td>&#x3C; 767px</td><td>&#x3C; 478px</td></tr><tr><td><strong>Class naming</strong></td><td><code>-2xl</code> <br><code>-at-2xl</code></td><td><code>-xl</code> <br><code>-at-xl</code></td><td><code>-lg</code> <br><code>-at-lg</code></td><td>– / <code>-base</code></td><td><code>-md</code> <br><code>-at-md</code></td><td><code>-sm</code> <br><code>-at-sm</code></td><td><code>-xs</code> <br><code>-at-xs</code></td></tr><tr><td><strong>For variables</strong></td><td>1920px</td><td>1440px</td><td>1280px</td><td>Base</td><td>Tablet</td><td>Landscape</td><td>Mobile</td></tr></tbody></table>

### Size Variants

When describing size variants of classes, use standard abbreviations for sizes.

`3xs` ← `2xs` ← `xs` ← `sm` ← `base` → `lg` → `xl` → `2xl` → `3xl`

This approach is similar to breakpoints (but usually there is no **md**). It aligns with the Tailwind CSS convention.

Do not use one-letter abbreviations like **s**, **m**, **l**.

Tips: **Avoid overusing adjectives** such as **large**, **larger**, **big**, **bigger**, **small**, **smaller**, **tall**, **huge**, **tiny**, and **mini** for sizes when naming classes if you can give them purposeful and descriptive names. Such words can be confusing and make it difficult to see the size hierarchies over time.

### Color Variants

It is more flexible when naming color variants. However, for better consistency, we suggest adopting the following.

From deep to light: **Deeper** ← **Deep** ← **BASE** → **Light** → **Lighter**

|                   | Deeper    | Deep    | BASE | Light    | Lighter     |
| ----------------- | --------- | ------- | ---- | -------- | ----------- |
| **Class naming**  | `-deeper` | `-deep` | –    | `-light` |  `-lighter` |
| **For variables** | Deeper    | Deep    | –    | Light    | Lighter     |

Sometimes, when it is not about deep or light:

|                   | Muted | Vibrant | Alternative |
| ----------------- | ----- | ------- | ----------- |
| **Class naming**  | `-mu` | `-vb`   | `-alt`      |
| **For variables** | Muted | Vibrant | Alt         |

Additionally, use standardized CSS terminology for color names across the project. For example, use `gray` instead of **grey**, and `color` instead of **colour**. More examples in the next part.



## 07. Remarks

To keep naming conventions consistent and more aligned with standard CSS, follow these:

* Use `width` and `height` but not just **w** or **h**.
* Use `image` rather than **img**.
* Use `richtext` rather than **rich-text**.
* Use `textarea` rather than **text-area**.
* Use `button` rather than **btn**.
* Use `wrapper` instead of **wrap** (if you mean "wrapper"). The reason for that is to avoid confusion with the `-wrap` and `-nowrap` properties.
* Use `base` instead of terms like **primary**, **regular**, etc.
* Use `gray` instead of **grey**.
* Use `color` instead of **colour**.
* Use the complete words when talking about `subtle` and `subscribe`. Use `sub` only if referring to "**subsidiary**".

{% hint style="info" %}
Unless you have many variants for the same thing, using **descriptive words** is always better than using **-1**, **-2**, **-3**, **-a**, **-b**, **-c**, etc. Descriptive names improve readability and clarity.
{% endhint %}



## 08. Stacking of Combo Classes

Creating style variants using combo classes is always a nice practice. For example, try to use `button` `cc-lg` instead of creating a new `button-lg` class.

It is fine to stack 3 classes, and the limit is 4. Do not stack 5 or more classes.

Consider creating a new combo class by combining its combo classes. Example:

❌  `button` `cc-pill` `cc-outline` `cc-has-icon` `cc-lg`

✅  `button` `cc-pill` `cc-outline-with-icon` `cc-lg`



