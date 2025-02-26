---
icon: message-question
---

# FAQs

<details>

<summary>What is S2 a theme, a template, a style guide, or a UI kit?</summary>

**S2 is a framework. It is not a theme or template.**

The S2 framework is a complete system for building scalable, maintainable, and professional-grade websites. It provides a standardized approach to naming and organizing CSS classes and other elements.

During your design, you should modify the S2 Framework cloneable and make it the style guide of your site.

You can use the S2 cloneable as a starting point for your project. Since we avoid over-styling, the layouts remain simple and adaptable, leaving you complete creative freedom. Feel free to modify anything as you build.

**The S2 Framework is not a UI kit** — but it includes well-formatted and structured basic UI elements that you can further style to fit your needs. Additionally, S2 provides a small collection of well-designed base layouts and components to help you build faster and more efficiently.

</details>

<details>

<summary>I am using an older version of S2, how to update?</summary>

Once you start a project with one version of the S2 Framework, you should continue to use that version for a project.

The reason is that it can be very difficult to upgrade, and it is also unnecessary. Also, custom codes may have already been modified. It is perfectly fine to continue using the version you are starting with.

</details>

<details>

<summary>Is there any conflict between the S2 Framework and Client-First conventions?</summary>

There are differences, but there is no conflict between the S2 and the Client-First conventions.

For example, S2 uses prefixes like `cc-` and `u-`, and use a few abbreviations, but it causes no conflicts. You can easily update style names when you bring something that follows the Client-First conventions into an S2 project.

The differences between both approaches are more about what works well and what works even better.

</details>

<details>

<summary>What is S2 Attributes?</summary>

S2 Attributes is a concise, ready-to-use collection of attributes designed to streamline your development process.

Inspired by Tailwind CSS's utility-first approach, S2 Attributes offers a similar concept — but uses attributes instead of classes — to keep your HTML clean and organized.

S2 Attributes is designed to keep your project classes clean and organized. It also gives you flexibility and helps you build faster. Using it is completely optional.

</details>

<details>

<summary>Does S2 Attributes cause any performance issues?</summary>

No. The set of custom codes is on each page and is very small in size. It has minimal effect on your site compared with other aspects.

</details>

<details>

<summary>How to find which elements a variable is applied to?</summary>

Unfortunately, you cannot check this directly in the Webflow Designer panel. However, you can find where variables are applied by following these steps:

First, go to the source code of any page. Find and visit the current stylesheet (the .css file). Then, you can search for the variable names, such as `var(--colors--primary)`.

</details>

<details>

<summary>What if my project is not going to have light and dark colors.</summary>

No problem. You can remove them all easily.

1. Remove the Dark mode variable mode
2. Remove the related UI elements and JavaScript

&#x20;However, you can also leave the existing setup for future potential.

</details>



