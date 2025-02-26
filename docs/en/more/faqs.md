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

<details>

<summary>Components? S2 Components? What are they?</summary>

[Component](https://www.youtube.com/watch?v=1LtUdMH6iqk) is a powerful Webflow feature.

**S2 Components are not components**; at least, they are not components yet. We just name them this way.

While we also considered creating ready-made, [properties](https://help.webflow.com/hc/en-us/articles/33961219350547-Component-properties)-powered, [slot](https://university.webflow.com/lesson/slots)-powered layout components, **we decided it would be best for you to convert such components yourself**.

Besides, S2 is a framework by nature. This approach ensures it remains simple and flexible, allowing you to effortlessly remove anything unnecessary.

</details>

<details>

<summary>Is using the S2 framework compatible with other frameworks, especially Client-First?</summary>

Yes, there won't be any conflict when you add or copy and paste components, layouts, scripts and community stuff that use other practices or frameworks into a site built with S2.

In fact, the main difference is in class naming conventions. You can leave the names of such classes as they are, or rename them according to S2's conventions.

</details>

<details>

<summary>There are things I do not need for my website. Can I remove them?</summary>

Yes, absolutely.

While you can remove unnecessary stuff from the cloned S2 framework (and clean up the styles) at any time, we generally recommend that you do this after you have completed most of your site-building process. It is always handy to have them around. Keeping them in the styles guild has very, very minimal impact on your site's performance.

</details>



