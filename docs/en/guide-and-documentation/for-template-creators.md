---
icon: shapes
---

# For Template Creators

Are you a template creator? Since Webflow _does not_ allow custom code to be embedded in templates, we prepared a streamlined one-page version of the S2 Framework — **S2 Framework for Templates**.

**S2 for Templates is part of the S2 Framework cloneable.** It is essentially a one-page Style Guide that fully complies with Webflow’s marketplace submission requirements, making your template creation process faster, more organized, scalable, and easy to maintain for anyone!

**Follow these steps:**

1. Go to **Site settings**, then **Custom code**, and remove all the code from the global **Head code** and **Footer code**. Remember to click "Save".
2. Open Designer, make the **"Home"** page your homepage, and remove `DELETE-ME` from the page.
3. Delete all pages, except:
   * the new blank homepage
   * the **"S2 for Templates"** page
   * the **"Password"** and **"404"** pages
4. Remove the <mark style="color:green;">**Global Code**</mark> component on the **"Password"** and **"404"** pages.
5. Go to the **"S2 for Templates"** page and remove the <mark style="color:green;">**Clone Now CTA**</mark> component. \
   There is also a component called <mark style="color:green;">**Grid Guide**</mark>, which also consists of custom code. You can remove it now or keep it as a tool and remove it later.
6. **Optional:** Go to the Variables panel, and remove **Dark mode** from the **Colors** collection.
7. Remove all **Components** that show 0 instances.
8. Clean up all unused interactions.
9. Clean up all unused styles.

:tada: Congratulations! You now have a copy of **S2 for Templates** — customize it to your style guide!

{% hint style="info" %}
_**Note about the Form demos:**_ Since there is no custom code to remove the **select** fields' default dropdown arrows after the above cleanup, you may need to apply custom styling and adjust the spacing to improve their appearance.
{% endhint %}



