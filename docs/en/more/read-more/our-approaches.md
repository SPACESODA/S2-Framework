---
icon: star-christmas
---

# Our Approaches

**The S2 Framework** was originally based on the [Saddle Framework](https://saddle-framework.webflow.io/), which explains some similarities between the two. As S2 evolves, it also references [Tailwind CSS](https://tailwindcss.com/) in different ways. In fact, the Saddle Framework is also inspired by Tailwind CSS, Client-First, [MAST](https://mast-framework.webflow.io/), and others.



{% hint style="warning" %}
**The following can be boring** :see\_no\_evil:

**Continue reading if you are interested...**
{% endhint %}



## Concepts

### Influence of Tailwind CSS

Tailwind CSS is an excellent CSS framework. It influenced how we name classes and attributes, making them more streamlined and flexible.

Tailwind’s core philosophy is [utility-first classes](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/). However, the way that utility classes stack is not practical in Webflow. Extensive use of utility classes and deep stacking are generally [discouraged](../../guide-and-documentation/basic-concepts/utility-classes.md) in Webflow. Besides, Webflow also generates specific styles for each combo class.

{% hint style="info" %}
Just to be clear, we don’t see Webflow as the place that can fully utilize utility classes, let alone stack the classes. In S2, we’ve got **S2 Attributes**, which work similarly but in the form of utility attributes. **S2 Attributes are a set of pre-styled&#x20;**_**attributes**_**, not classes.**
{% endhint %}

### About S2 Attributes

Attributes in S2 provide a convenient way to apply styles. S2 Attributes are carefully crafted and standardized. They are like utility attributes or **tokens**.

This feature is particularly useful for adding simple styles to elements without having to create new classes or combo classes, keeping your site lightweight and manageable.

We will dive deeper and may further simplify our attributes in the future.

### Considerations and Approaches

Before we dive in, let’s get familiar with some _terminology_. For an extended take, check out [this blog by Tailwind’s creator](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/).

Structurally:

* **Content-agnostic classes:** e.g. `card`, which are less content-specific
* **Content-specific classes:** e.g. `post-intro-info` and `author-bio`.

About CSS classes design:

* **Utility-first approach** (extended reading: [a blog by Tailwind's creator](https://adamwathan.me/css-utility-classes-and-separation-of-concerns/))
* **Component-first approach**

S2 strikes a balance between the above approaches.

When building S2, we tend to be more **Content-agnostic**. However, we encourage you to create purposeful **Content-specific** classes when designing your project.

As a framework, we are certainly more **Utility-first**. However, in your projects, you have the freedom to take a **Component-first** approach when styling specific parts of your site and enjoy the flexibility of Webflow.

Other considerations:

*   **Searchability and Flexibility**&#x20;

    In S2, classes are specifically designed to be clear and easily searchable, yet flexible enough to encourage reusability. Designed to be straightforward and user-friendly, S2 reduces the need for extensive memorization, making it accessible to users of all skill levels.
*   **Minimal Styling**

    Other excellent UI frameworks like [Bootstrap](https://getbootstrap.com/) and [Bulma](https://bulma.io/) adopt a content-agnostic plus component-first approach. However, they possess strong style opinions, which S2 aims to avoid. S2 borrows some variable naming conventions from Bootstrap.



## S2 as a Framework

**S2 is a framework designed to make it easy for anyone to build websites using best practices.**

We want to empower everyone to build faster, better, and smarter.

Regarding components and the recently introduced component slots feature, we avoid creating excessive pre-built components that are difficult to edit or remove. Instead, we encourage users to turn useful elements into components themselves.

As a result, S2 is a combination of:

* **Naming conventions**
* **Fine-tuned basic elements** + **Content-agnostic classes & combo classes**
* **Utility classes** (S2 maintains only the most useful ones)
* **Attributes**

S2 also includes a few essential UI and basic layout components that serve as starter templates and usage examples, helping you work even faster! These templates are separate from the core framework and can be easily removed.

### Reduce complexity

The S2 Framework is designed to reduce complexity. We aim to make it accessible to anyone with basic HTML and CSS skills.

By leveraging Webflow, we want anyone to be able to start using S2 effectively within a few hours of learning and hands-on exploration.

For experienced users, you can dive deeper and use the framework with custom code more smoothly throughout your project.

We avoid over-styling and do not impose a strong style or design, allowing for greater flexibility. Many Bootstrap-based projects often end up looking similar with traces of obvious visual patterns due to strong visual patterns. We strive to prevent this.

### What do we try to _avoid_ when building S2?

* Long class names
* Excessive stacking of classes
* Deeply nested HTML structures
* Custom code in property and attribute values
* Over-styling of elements
* Strong style directives
* Utility classes that are difficult to understand or hard to remember
* Utility classes that are too simple that you should style directly
* Anything that requires extensive memorization
* Parts that are difficult to remove



## Webflow is flexible and powerful

Webflow is a robust platform known for its flexibility and ease of use.

S2 does not enforce rigid and complex rules. As the framework developer, we prioritize structural simplicity and perfect class naming. However, for you, the focus should be on creating perfect web pages.

We encourage everyone to be creative without restrictions. Let nothing slow you down.



## Usage beyond Webflow

Although S2 is optimized for Webflow, it is essentially simple CSS combined with nice base styles from Webflow. For those who are already familiar with S2, it is also perfect for creating custom websites and applications. Just clone, export, and you're ready to go.



