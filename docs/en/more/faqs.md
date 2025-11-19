---
icon: message-question
---

# FAQs

<details>

<summary>What is S2 — a theme, a template, a style guide, or a UI kit?</summary>

**S2 is a framework. It is not a theme or template.**

The S2 Framework is a complete system for building scalable, maintainable, and professional Webflow sites. It provides a standardized approach to naming and organizing CSS classes and other elements.

During your design process, you should modify the S2 Framework cloneable and use it as the style guide for your site.

You can use the S2 cloneable as a starting point for your project. Since we avoid over-styling, the layouts remain simple and adaptable, giving you complete creative freedom. Feel free to modify anything as you build.

**The S2 Framework is not a UI kit** — but, it does include some well-structured basic UI elements that you can further style to fit your needs. Additionally, S2 provides a small collection of well-structured base layouts and components, helping you build faster and more efficiently.

</details>

<details>

<summary>I am using an older version of S2, how to upgrade?</summary>

If you've started a project with a specific version of the S2 Framework, it’s best to continue using that version. Upgrading can be difficult and is often unnecessary, especially if you've already modified it.

So, it is perfectly fine to continue using the version you are starting with.

However, if you find something new in a new version of S2 that is not available in your current version, you can easily copy it from a freshly cloned copy.

</details>

<details>

<summary>Is there any conflict between the S2 Framework and Client-First conventions?</summary>

No. There is no conflict between the S2 and the Client-First conventions (or any other naming conventions). Since S2 Framework v3.0.0, we both use `is-` for combo classes.

There are differences, for example, S2 uses prefix `u-` for utility classes, and we also use a few abbreviations. But, it causes no conflicts. You can easily update style names when you bring something that follows the Client-First conventions into an S2 project.

The differences between the two approaches are more about what works well and what works even better.

</details>

<details>

<summary>What is "S2 Attributes"?</summary>

S2 Attributes is a concise, ready-to-use collection of attributes designed to streamline your development process.

Inspired by Tailwind CSS's utility-first approach, S2 Attributes offers a similar concept — but uses **attributes** instead of classes — to keep your HTML clean and organized.

S2 Attributes is designed to keep your project classes clean and organized. It also gives you flexibility and helps you build faster. Using it is completely optional.

</details>

<details>

<summary>Does S2 Attributes cause any performance issues?</summary>

No. The set of custom codes is on each page and is very small in size. It has a very minimal and insignificant impact on your site compared with other aspects.

</details>

<details>

<summary>What if my project is not going to have light and dark colors.</summary>

No problem. You can remove the feature easily:

1. Remove the Dark mode variables.
2. Remove the related scripts from the project's global head code.
3. Remove the related UI elements (optional).

</details>

<details>

<summary>My design or my default theme is dark. What should I do?</summary>

**Option 1:**

If you want to keep S2's default mode-switching feature, you can add an attribute `theme-default="dark"` to a page's <mark style="color:purple;">`Body`</mark> tag. Then, enable Webflow Designer to display pages in dark mode by one of the following methods:

* Change the "Colors" under "Variable mode" for the `body` class or the <mark style="color:purple;">`Body`</mark> tag to "**Dark mode**".
* Add the utility class `u-dark-mode` to the `body` class.

**Option 2:**

If your site is dark and you don't need mode-switching, you can manually update the Base mode colors under the "Colors" variables. Then, remove the pre-built Dark mode entirely.

</details>

<details>

<summary>Components? S2 Components? What are they?</summary>

[Component](https://www.youtube.com/watch?v=1LtUdMH6iqk) is a powerful Webflow feature.

**S2 Components are not components**; at least, they are not components yet. We just name them this way.

While we also considered creating ready-made [properties](https://help.webflow.com/hc/en-us/articles/33961219350547-Component-properties)- or [slot](https://university.webflow.com/lesson/slots)-powered layout components, **we decided it would be best for you to convert such components yourself**.

Besides, S2 is a framework by nature. This approach ensures it remains simple and flexible, allowing you to effortlessly remove anything unnecessary.

</details>

<details>

<summary>Is using the S2 framework compatible with resources that are using other frameworks, especially Client-First?</summary>

Yes, there won't be any conflict when you add or copy and paste components, layouts, scripts and community stuff that use other practices or frameworks into a site built with S2.

In fact, the main difference is in class naming conventions. You can leave the class names of such elements as they are, or rename them according to S2's conventions.

</details>

<details>

<summary>There are things I do not need for my website. Can I remove them?</summary>

Yes, absolutely.

While you can remove unnecessary stuff from the cloned S2 framework (and clean up styles and interactions unused) at any time, we generally recommend that you do this after you have completed most of your site-building process. It is always handy to have them around.

Besides, keeping them in the styles guild has very very minimal impact on your site's performance.

</details>

<details>

<summary>Is the S2 Framework compatiable with RTL?</summary>

Yes.

S2 Framework has been fully compatible with RTL language or layout since v2.4.5, except for some of the Filter UI elements.

To enable RTL, you can add the attribute `dir="rtl"` to the `body` element.

</details>



