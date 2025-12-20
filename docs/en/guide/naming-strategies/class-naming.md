---
description: >-
  Consistent and well-thought-out class naming strategies or conventions will
  help you build faster and maintain your site more efficiently over time.
icon: i-cursor
---

# Class Naming

In Webflow, naming a class also means naming the elements. The class naming strategy suggested by S2 has been carefully researched and tested in practice on large and small projects. It blends the best ideas from Tailwind CSS, MAST, and client-first, then simplified and optimized for Webflow.

{% hint style="warning" %}
**Class naming** is an important topic. Please read through the entire page.
{% endhint %}

## Goals

Our class naming goals are to make class names easy to **read** and **understand**, easy to **search**, and require **less memorization**. We aim for clarity so that **anyone can understand** them.

Webflow is very flexible and allows you to scale easily. Keep your class names clean and your structure simple — don't over-engineer it.

## 01. Lowercase

Class names should be ALL lowercase to ensure consistency and readability.

## 02. Dash or Underscore

The use of `-` (dash / hyphen) and `_` (underscore) is guided by these rules:

* Use **dashes** to separate words, just like in normal English.
* Use **underscores** for **different contexts** or **child elements**.

For example:

* You may name a class `cta-section_overlay-bg`.
* An element with a `blog-card` class can have a child element with `blog-card_image` class.

Here are more examples to help you get familiar with this approach:

| Examples of using Dash: | Examples of using Underscore: |
| ----------------------- | ----------------------------- |
| `u-`                    | `main-nav_dropdown`           |
| `is-`                   | `slider_control-button`       |
| `main-header`           | `job-item_info`               |
| `job-title`             | `job-item_info-icon`          |
| `long-button-arrow`     | `footer_social-link`          |
| `is-last-row`           | `product_list-item`           |
| `author-title-xl`       | `sidebar_nav-item`            |

## 03. Combo and Utility Classes

Use `is-` for ALL combo classes.

S2 does not use **has-**, **with-**, **without-**, **no-**, **not-**, **non-**, or any other prefixes of such kind for combo classes. If you need to convey meanings such as **has**, **with**, etc., name the combo classes as `is-has-`, `is-with-`.

In S2, we use `is-` for combo classes.

Use `u-` for utility classes.

## 04. Word Order

For base CSS classes, the order should resemble **normal English word order**. For example:

`main-nav`

`featured-author-icon`

The descriptive term is usually placed **after** the main keyword for combo classes and utility classes. That makes them more identifiable and organized.

`item-block` `is-task`

`item-block` `is-task-xs`

`item-block` `is-task-expired`

Values or counting descriptions are usually written **last**. For example:

`text-wrapper` `is-max-40rem`

## 05. Abbreviations

Always use complete words other than the following abbreviations:

* [Glossary](class-naming.md#glossary)
* [Margin & Padding Shorthands](class-naming.md#margin-and-padding)
* [Style Variants](class-naming.md#id-06.-style-variants) (such as Breakpoints, Size variants, Color variants)

### Glossary

:pushpin: **Abbreviation (Group 1):**

|                |              |               |          |
| -------------- | ------------ | ------------- | -------- |
| navigation     | `nav`        | horizontal    | `h`      |
| background     | `bg`         | vertical      | `v`      |
| column(s)      | `cols` `col` | decoration    | `deco`   |
| call-to-action | `cta`        | configuration | `config` |
| information    | `info`       | subsidiary    | `sub`    |
| alternative    | `alt`        | language      | `lang`   |
| minium         | `min`        | reference(s)  | `ref`    |
| maximum        | `max`        | % (e.g. 20%)  | `20p`    |

### Margin & Padding

:pushpin: **Abbreviation (Group 2):**

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
The above letter notation aligns with Tailwind CSS’s convention for padding and margin utilities. For the value part, we recommend labeling the actual value as a unit or a description.
{% endhint %}

Examples: `-mb-0`, `-mx-auto`, `-my-1rem`, `-mb-tall`, `-mb-messages`

When all sides have the same values, you can write them like these:\
`-m-0`, `-p-0`, `is-1rem`, `is-content-0`

Sometimes, when you think you do not need to distinguish between margin or padding, or when you want to leave some flexibility in the design, it is fine to use `-top`, `-bottom`, `-left`, `-right`, or their combinations, such as `-top-bottom-lg`.

## 06. Style Variants

:pushpin: **Abbreviation (Group 3):**

### i. Breakpoints

<table data-full-width="true"><thead><tr><th></th><th>Large 3</th><th>Large 2</th><th>Large 1</th><th>Desktop</th><th>Tablet</th><th>Mobile Landscape</th><th>Mobile Portrait</th></tr></thead><tbody><tr><td><strong>px</strong></td><td>> 1920px</td><td>> 1440px</td><td>> 1280px</td><td>–</td><td>&#x3C; 991px</td><td>&#x3C; 767px</td><td>&#x3C; 478px</td></tr><tr><td><strong>Class naming</strong></td><td><code>-2xl</code><br><code>-at-2xl</code></td><td><code>-xl</code><br><code>-at-xl</code></td><td><code>-lg</code><br><code>-at-lg</code></td><td>– / <code>-base</code></td><td><code>-md</code><br><code>-at-md</code></td><td><code>-sm</code><br><code>-at-sm</code></td><td><code>-xs</code><br><code>-at-xs</code></td></tr><tr><td><strong>For variables</strong></td><td>1920px</td><td>1440px</td><td>1280px</td><td>Base</td><td>Tablet</td><td>Landscape</td><td>Mobile</td></tr></tbody></table>

### ii. Size Variants

When describing size variants of classes, use standard abbreviations for sizes (and typography).

**`3xs`** ← **`2xs`** ← **`xs`** ← **`sm`** ← **`base`** → **`lg`** → **`xl`** → **`2xl`** → **`3xl`**

This approach is similar to breakpoints (but there is no **md**). It aligns with the Tailwind CSS convention. Avoid using one-letter abbreviations like **s**, **m**, **l**.

{% hint style="info" %}
**Avoid overusing adjectives** such as **large**, **larger**, **big**, **bigger**, **small**, **smaller**, **tall**, **huge**, **tiny**, and **mini** for sizes when naming classes if you can give them purposeful and descriptive names. Such words can be confusing and make it difficult to see the size hierarchies over time.
{% endhint %}

### iii. Color Variants

It is more flexible when naming color variants. However, for better consistency, we suggest adopting the following. From deep to light:

**Deeper** ← **Deep** ← **BASE** → **Light** → **Lighter**

|                   | Deeper    | Deep    | BASE | Light    | Lighter    |
| ----------------- | --------- | ------- | ---- | -------- | ---------- |
| **Class naming**  | `-deeper` | `-deep` | –    | `-light` | `-lighter` |
| **For variables** | Deeper    | Deep    | –    | Light    | Lighter    |

Sometimes, when it is not about deep or light:

|                   | Muted | Vibrant | Alternative |
| ----------------- | ----- | ------- | ----------- |
| **Class naming**  | `-mu` | `-vb`   | `-alt`      |
| **For variables** | Muted | Vibrant | Alt         |

## 07. Additional Notes

To keep naming conventions consistent and more aligned with standard CSS, follow these guidelines:

* Use **`width`** and **`height`** but not just **w** or **h**.
* Use **`button`** instead of **btn**.
* Use **`image`** instead of **img**.
* Use **`richtext`** instead of **rich-text**.
* Use **`textarea`** instead of **text-area**.
* Use **`wrapper`** instead of **wrap** when the meaning or purpose is "wrapper". This is to avoid confusion with the **`-wrap`** and **`-nowrap`** properties.
* Use **`-wrapper`** instead of **\_wrapper** as it is part of the context of the word, and such classes are usually parent classes.
* Use **`sub`** only when referring to the meaning of "**subsidiary**". Use complete words when talking about **`subtle`** and **`subscribe`**.
* Use CSS terminology for color names throughout the project. For example, use **`gray`** instead of **grey**, and **`color`** instead of **colour**.
* Unless you have many variants that are hard to create a name for them, using **descriptive words** is always better than using **-1**, **-2**, **-3**, **-a**, **-b**, **-c**, etc. Descriptive names improve readability and clarity.

## 08. Stacking of Combo Classes

Creating style variants using combo classes is always a nice practice. For example, try to use `button` `is-lg` instead of creating a new `button-lg` class.

It is okay to stack 3 classes, and the limit is 4. **Do not stack 5 or more classes.**

Consider creating a new combo class by combining its combo classes. Example:

❌ `button` `is-pill` `is-outline` `is-has-icon` `is-lg`

✅ `button` `is-pill` `is-outline-with-icon` `is-lg`

{% hint style="success" %}
**Exception — Stacking classes for Column Layouts**

For example, 4 cols on Desktop (base); 6 on Tablet; 3 on Landscape; and 2 on Mobile, you will need:

`col` `is-span-4` `is-span-6-md` `is-span-3-sm` `is-span-2-xs`
{% endhint %}



