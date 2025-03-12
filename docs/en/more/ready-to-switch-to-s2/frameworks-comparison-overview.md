---
icon: face-thinking
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Frameworks Comparison Overview

You may have this struggle:

> **“Wait, isn’t everyone using Client-First? Why even consider switching?”**

Client-First is one of the most widely adopted frameworks in the Webflow community, and you might already be using it. But there’s always room for improvement, right?

This page breaks down the key differences and similarities between S2, Client-First, MAST, and the Saddle Framework — helping you decide if switching makes sense for you.



**A brief description of these frameworks:**

<details>

<summary>About <mark style="color:purple;"><strong>Client-First</strong></mark></summary>

Client-First is an excellent guideline or framework developed by Finsweet, one of the earliest designed for Webflow design and development. \
It provides a set of guidelines and strategies focused on class naming and structure, inspired by Bootstrap and methodologies like BEM (Block, Element, Modifier), but tailored for Webflow’s visual and modular nature.\
Client-First is an excellent and comprehensive set of strategies. It is one of the best frameworks available. It inspires best practices in web development and promotes a systematic approach to building responsive and accessible sites. The [Semantic HTML tags](https://finsweet.com/client-first/docs/semantic-html-tags) and [Accessibility](https://finsweet.com/client-first/docs/accessibility) sections in the Client-First documentation are particularly noteworthy. We highly recommend reading these sections.

</details>

<details>

<summary>About <mark style="color:orange;"><strong>MAST</strong></mark></summary>

Mast is a lightweight, developer-first CSS framework for Webflow. It uses tried and true front-end development methodologies from inside and outside of the Webflow community.

</details>

<details>

<summary>About <mark style="color:blue;"><strong>the Saddle Framework</strong></mark></summary>

The Saddle Framework is a Developer-First, Client-Focused Webflow framework. The objective was to maximize reusability and utility, enabling any editor to enhance functionality effortlessly by incorporating a component or attribute to a page or element.

</details>



**Our experience —**

> ### "We tried to embrace Client-First in our past projects. However, we observed that not only did our clients find it quite difficult to follow, but our designers also struggled to keep up with all the rules."



## 1. Mindsets & Structure

**S2 Framework**

S2 emphasizes a simple and easy-to-understand structure. There’s no need to over-prepare or create overly complex structures. Avoid unnecessary nesting and excessive div wrapping.

When building S2 Framework, we strictly follow our rules when building with S2. However, we encourage you to take advantage of the flexibility of Webflow when building your site.

<mark style="color:purple;">**Client-First**</mark>

It looks like Client-First does not usually call itself a framework but a "guideline". Client-First suggests stricter adherence to rules to ensure consistency across projects.

CF often results in deeply nested structures, partly due to the CSS “folder” concept they invented and partly as an early preparation for “flexibility.”

<mark style="color:red;">**MAST**</mark>

MAST shares a similar mindset with S2 — leveraging the power and flexibility of Webflow.

<mark style="color:blue;">**The Saddle Framework**</mark>

Not much was mentioned, but it should be close to MAST.



## 2. Learning Curve

**S2 Framework**

S2 is designed to be easy to start for anyone, and flexible for pros and developers. Our guidelines are brief and easy to understand.

By leveraging Webflow, we want anyone to be able to start using S2 effectively within a few hours of learning and hands-on exploration. For experienced users, you can dive deeper and use the framework fluently with custom code.

While [S2 Attributes](../../guide-and-documentation/s2-attributes.md) require some memorization, they are entirely optional. **Use only the ones you can easily remember and understand.** Since the S2 Attributes library is small, you can become proficient quickly.

<mark style="color:purple;">**Client-First**</mark>

Client-First generally requires more memorization, especially for utility classes, leading to frequent cross-referencing with the Style Guide. Combined with other guidelines, this results in a steeper learning curve based on our experience.

<mark style="color:orange;">**MAST**</mark>**&#x20;&&#x20;**<mark style="color:blue;">**The Saddle Framework**</mark>

Easy, but MAST seemingly has more utility classes.



## 3. Class Naming Convention

**S2 Framework**

S2 has a clear and simple class naming convention. We use `cc-` for combo classes and `u-` for utility classes. Additionally, we follow a straightforward strategy for when to use `-` and `_`.

Example: `hero-banner_inner-wrapper`\
1\. Use natural English in most cases.\
2\. Use `-` to separate words of the same context.\
3\. Use `_` to separate words of **different contexts** or **child elements**.\
It's that simple! See the [Class Naming](../../guide-and-documentation/naming-strategies/class-naming.md) section.

S2 also includes a small set of abbreviations.

<mark style="color:purple;">**Client-First**</mark>

Client-first uses `is-` for combo classes. While this is entirely fine, it can make filtering combo classes in searches slightly difficult as `is` is common in many class names. For utility classes, Client-First does not use a prefix, which can become very confusing over time.

The use of `-` and `_` in Client-First is somewhat ambiguous. Its "folder" concept has to rely on Finsweet’s Chrome extension for visualization.

Client-First also uses full words for everything, even for some frequently used terms, leading to longer class names. This result is also partly due to the folder concept, which adds extra design complexity and increases the burden on designers, making it harder to follow.

References:\
[https://finsweet.com/client-first/docs/classes-strategy-1](https://finsweet.com/client-first/docs/classes-strategy-1) \
[https://finsweet.com/client-first/docs/classes-strategy-2](https://finsweet.com/client-first/docs/classes-strategy-2)

<mark style="color:orange;">**MAST**</mark>**&#x20;&&#x20;**<mark style="color:blue;">**The Saddle Framework**</mark>

The class naming strategies of S2 evolved from them. So, we basically share the same philosophy. In S2, we define the use of `-` and `_` more clearly ([see here](../../guide-and-documentation/naming-strategies/class-naming.md#id-02.-dash-or-underscore)), and abbreviations in S2 are also a bit different.



## 4. Other Naming Conventions

All frameworks are generally similar for other naming conventions, such as variables, components, and interactions. The differences are not a significant concern.



## 5. Use of Utility Classes

**S2 Framework**

S2 suggests [using utility classes wisely](../../guide-and-documentation/basic-concepts/use-utility-classes-wisely.md) and encourages you to style by creating your own custom classes and leveraging [S2 Attributes](../../guide-and-documentation/s2-attributes.md).

S2 includes a set of well-designed utility classes. To guide styling decisions, S2 provides a simple hierarchy for making better styling choices:

Classes in Framework **→** Your Custom Classes **→** S2 Attributes (optional) **→** Utility Classes

<mark style="color:purple;">**Client-First**</mark>

Client-First advocates the power of utility classes. However, this can lead to issues such as:\
\- Potential confusion due to missing a `u-` prefix to distinguish utility classes.\
\- Stacking utility classes incorrectly.\
\- Root utility classes being unintentionally styled or removed.

For example, you don't need a utility class `position-absolute` to apply the style `position: absolute`. We avoid creating utility classes that are too simple that you should style directly.

<mark style="color:orange;">**MAST**</mark>**&#x20;&&#x20;**<mark style="color:blue;">**The Saddle Framework**</mark>

No specific guidelines are provided. The Saddle Framework has a much simpler set of utility classes.



