---
description: >-
  This is a streamlined one-page version of the S2 Framework without custom
  code. You can customize it to make it your Style Guide.
icon: shapes
---

# One-page Style Guide

{% hint style="info" %}
Are you a template creator? Since Webflow _**does not**_**&#x20;allow custom code** to be embedded in templates, this one-page version is perfect for you. It is essentially a **one-page Style Guide** that fully complies with Webflow’s marketplace submission [requirements](https://webflow.com/templates/submission-guidelines), making your template creation process faster, more organized, scalable, and easy to maintain for anyone.
{% endhint %}



**Follow these steps:**

1. Go to **Site settings**, then **Custom code**, and remove all the code from the global **Head code** and **Footer code**. Remember to click "Save".
2. Open Designer, make the **"Home"** page your homepage, and remove the `DELETE-ME` element from the page.
3. Delete all pages, _**except**_:
   * Your new blank **Homepage**
   * The **"One-page Style Guide"** page
   * The **"Licenses"** page (required by Webflow if you are creating a template)
   * The **"Password"** and **"404"** pages
4. Remove the <mark style="color:green;">**Global Code**</mark> component from the **"Password"**, **"404"**, and **"Search Results"** pages.
5. Remove the **"New Page Template"** page, unlink the instance on the page, and then remove the <mark style="color:green;">**Global Code**</mark> component.
6. Go to the **"One-page Style Guide"** page and remove the `DELETE-ME` element from the page. (The <mark style="color:green;">**Grid Guide**</mark> component also consists of custom code, but you may keep it as a tool and remove it later.)
7. Remove the whole **Dark mode** column from the **Colors** variable collection.
8. Clean up all unused **Components** in the following order:
   * The **Page Template** component
   * The **Icon: Wrapped** component
   * The **Icon** component
   * Other unused components 0 instances
9. Clean up all unused interactions.
10. Clean up all unused styles.



:tada: Congratulations! You are now ready to start building.



