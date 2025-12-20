---
icon: brackets-square
---

# S2 Attributes

**S2 Attributes — easy-to-use and powerful attributes to help you work faster.**

**S2 Attributes is a lightweight library of pre-defined attributes.** The concept is similar to utility classes in Tailwind CSS but tailored for Webflow in the form of **attributes**.

Take `[opacity="1"]` as an example, when applying this attribute to an element on the Designer panel, `opacity` is the attribute name and `1` is the attribute value.

### Learning S2 Attributes

The best way to understand attributes is to read the CSS, visit: \
[https://github.com/SPACESODA/S2-Framework/blob/main/webflow/css/s2-attributes.css](../../../webflow/css/s2-attributes.css)

{% hint style="info" %}
**Attributes can exist without a value.** However, in some cases, **custom elements** and elements within them require attributes to have a value. We can type in something like `true` in the value and it should work fine.
{% endhint %}

{% hint style="danger" %}
**Do not modify S2 Attributes!**

**We strongly recommend that you do not add new attributes to S2 Attributes or rename existing ones.** If S2 Attributes do not perfectly match your desired style, we suggest using combo classes or utility classes instead.
{% endhint %}

### When to use S2 Attributes?

Use attributes that you understand and easily remember.

Not sure whether to use Classes, Attributes, or Utility Classes? Follow this approach to make the best styling decisions:

{% stepper %}
{% step %}
### Classes from the framework

Use existing **Element Classes** and **Combo Classes** from the S2 Framework.
{% endstep %}

{% step %}
### Your classes

Create and use your **classes**.
{% endstep %}

{% step %}
### S2 Attributes (optional)

Use **S2 Attributes** that you understand and can easily remember.
{% endstep %}

{% step %}
### Utility classes

The framework's **Utility Classes**
{% endstep %}
{% endstepper %}



