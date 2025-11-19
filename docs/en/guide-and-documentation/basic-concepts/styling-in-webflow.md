---
icon: brackets-curly
---

# Styling in Webflow

## Basic Concepts

Understanding the basic concepts below is essential for building and customizing your Webflow projects.

<table data-column-title-hidden data-view="cards"><thead><tr><th>Concepts</th><th>Description</th><th data-type="content-ref"></th></tr></thead><tbody><tr><td><strong>Classes of HTML Tags and Webflow Elements</strong></td><td><p>HTML tags are the basic building blocks.</p><p>Webflow elements are pre-built elements in Webflow, such as Containers, Grids, and Buttons.</p></td><td></td></tr><tr><td><strong>Element Classes</strong></td><td>Custom Element Classes (or base classes) allow you to create unique styles for specific elements.</td><td></td></tr><tr><td><strong>Combo Classes</strong></td><td>Combo classes are modifier classes and variations of existing classes. They allowing you to tweak styles for specific instances without creating new element classes. They all start with <code>is-</code>.</td><td></td></tr><tr><td><strong>Attributes</strong></td><td><a href="https://university.webflow.com/lesson/custom-attributes">Attributes</a> are not "classes" but we can use CSS to apply styles like a preset. <strong>S2 Attributes</strong> help you work faster by allowing you to easily apply additional styles and functionality to elements without creating new classes.</td><td></td></tr><tr><td><strong>Utility Classes</strong></td><td>Utility classes are predefined classes that can apply specific styles or functionality. They help streamline your design process. They all start with <code>u-</code>.</td><td></td></tr></tbody></table>

## When to use S2 Attributes?

* When you want to apply styles or functions to an element in a **single location** or for a **one-time purpose**.
* When you want to avoid creating a new combo class that would be rarely reused.
* When existing combo classes on an element are already complex and potentially confusing.

Focus on your creativity and enjoy Webflow's flexibility. Use attributes that you remember and fully understand. No pressure!

Learn about **S2 Attributes** in this section:

{% content-ref url="../s2-attributes.md" %}
[s2-attributes.md](../s2-attributes.md)
{% endcontent-ref %}

## Guide to Styling

Not sure whether to use Classes, Attributes, or Utility Classes? Follow this priority-based approach to make the best styling decisions:

**Priority 1:**\
Use existing **Element Classes** and **Combo Classes** from the S2 Framework.

**Priority 2:**\
Create and use your **classes**.

**Priority 3:**\
Use **S2 Attributes** that you understand and can easily remember. Use of these attributes is optional.

**Priority 4:**\
Use the framework's **Utility Classes**.

## Should I create new Attributes?

Attributes are powerful tools. **However, attributes cannot be searched directly in any Webflow panels. When you want to rename something, there is no way to update all instances quickly.**

**Attributes can never satisfy all styling needs.** Setting up too many attributes that are not carefully planned can also lead to huge confusion easily. We are not here to reinvent CSS or build a CSS utility framework like Tailwind.

Therefore, we recommend following the **above** guide and sticking with the framework's official version of **S2 Attributes**.

If you really want to create new custom attributes, place them in the `css_custom` code embedded inside the <mark style="color:green;">**Global Code**</mark> component. Avoid creating too many custom attributes.

**Extended reading:**

[naming-custom-attributes.md](../naming-strategies/naming-custom-attributes.md "mention")



