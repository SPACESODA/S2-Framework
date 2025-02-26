---
icon: brackets-square
---

# Naming Custom Attributes

{% hint style="info" %}
You can skip this page if you are not planning to create new custom attributes.
{% endhint %}

{% hint style="info" %}
Place custom attributes in the `custom` code embed inside the <mark style="color:green;">**Global Code**</mark> component.
{% endhint %}

Creating custom attributes is a more advanced topic. Below is a set of naming guidelines for creating custom attributes, which we also follow:

* Use hyphens, but no underscores, and ensure attribute names are at least two letters long.
* Ensure attribute names are unique, as you cannot apply the same attribute name multiple times, even if they have different values.
* Follow the wording used by standard CSS or Webflow's UI to make it easy for anyone to recall and understand.
* Simplify only when the original CSS is too complicated or frequently misspelled.
* Be aware that Webflow does not allow some attribute names.
* Set up attributes with the same attribute name but with different values only when they are likely not to be used together.
* An attribute can contain multiple styles. Name the attribute according to its primary purpose.
* Spare value `true` when designing an attribute. The reason is that you can put a value `true` when a blank value doesn't work on the canvas in some cases, such as on custom elements.\
  Inputting `text-uppercase="true"` applies the same styles as `text-uppercase`.



