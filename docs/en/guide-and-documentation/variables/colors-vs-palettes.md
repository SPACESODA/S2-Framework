---
icon: swatchbook
---

# Colors vs Palettes

Instead of applying colors from palettes to classes each time, we suggest using **Colors** variables whenever possible. The names of **Colors** usually specify their roles or purposes, and the names of **Palettes** describe the colors.



## Colors 🖌

The variable groups below are the core color options for your project:

* Colors
* Colors: Extended
* Colors: Special

The Colors variables have **Base mode** (the Base mode is "Light" mode by default) and **Dark mode** setup. By using **Colors**, you can easily update the entire color scheme of your site anytime.,&#x20;

You can modify, add, or rename the extended colors to align with your brand.

{% hint style="info" %}
You can remove the **Dark mode** from **Colors** completely if your website does not have light and dark modes.
{% endhint %}



## Palettes :art:

Palettes are groups or sets of colors that are essentially tint variations.

The Primary, Secondary, Accent, and Neutral colors follow an 11-step tint setup (50-500-950 scale).

**Palettes** variables can be selected by **Colors** variables. This method provides flexibility to update colors by choosing from palette variables without disrupting the site's overall style.

**Colors** variables reference **Palettes** variables, giving you the flexibility to update colors by selecting from palettes easily without disrupting the site's overall style.

**S2's Palettes** (the "**Lightness Minimum**" of our default colors is set to **15**)**:**\
[https://www.tints.dev/?neutral=7E7E7E\&primary=0145AB\&secondary=00B499\&accent=F3BB09](https://www.tints.dev/?neutral=7E7E7E\&primary=0145AB\&secondary=00B499\&accent=F3BB09)

{% hint style="danger" %}
Please keep the name **"Neutral"** and all **Neutral colors' variable names** unchanged.
{% endhint %}



