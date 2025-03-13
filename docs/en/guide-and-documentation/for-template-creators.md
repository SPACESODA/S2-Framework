---
icon: shapes
---

# For Template Creators

Are you a template creator? Since Webflow _does not_ allow custom code to be embedded in templates, we prepared a streamlined one-page version of the S2 Framework — **S2 Framework for Templates**.

It is essentially a one-page Style Guide that fully complies with Webflow’s marketplace submission requirements, making your template creation process faster, more organized, scalable, and easy to maintain for anyone!

**Follow these steps:**

1. Go to **Site settings**, then **Custom code**, and remove all the code from the global **Head code** and **Footer code**. Remember to click "Save".
2. Open Designer, make the **"Home"** page your homepage, and remove `DELETE-ME` from the page.
3. Delete all pages, _except_:
   * the new blank homepage
   * the **"One-page Style Guide"** page
   * the **"Licenses"** page (keep it if you find it useful)
   * the **"Password"** and **"404"** pages
4. Remove the <mark style="color:green;">**Global Code**</mark> component on the **"Password"** and **"404"** pages.
5. Go to the **"One-page Style Guide"** page and remove the <mark style="color:green;">**S2: Clone Now CTA**</mark> component. The <mark style="color:green;">**Grid Guide**</mark> component also consists of custom code, but you may keep it as a tool and remove it later.
6. _Optional_: Remove **Dark mode** from the **Colors** variable collection.
7. Clean up all unused **Components**.
8. Clean up all unused interactions.
9. Clean up all unused styles.

:tada: Congratulations! You are now ready to start building.

{% hint style="info" %}
_**Note about the "Form" demos:**_ Since there is no custom code to remove the **select** fields' default dropdown arrows after the above cleanup, you may need to apply some styling and adjust the spacing to improve their appearance.
{% endhint %}



