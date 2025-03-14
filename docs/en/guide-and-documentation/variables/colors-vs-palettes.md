---
icon: swatchbook
---

# Colors vs Palettes

Instead of applying colors on palettes directly to element styles, we suggest using **Colors** variables whenever possible. The names of **Colors** specify their uses or purposes, and the names of **Palettes** describe the colors.



## Colors

**Colors**, and **Colors - Special**, variable groups inside the variable collection **Theme** are the primary color options for your project. By using **Colors**, you can easily update the entire color scheme of your site anytime.

{% hint style="info" %}
You can completely remove the **Dark mode** from **Colors** if your website does not have light and dark modes.
{% endhint %}

{% hint style="danger" %}
Renaming and removing the default **Colors** variables will not break your site, but you will probably need to re-apply the colors to some styles because such variables will become "**unlinked**". You will have to fix them manually.
{% endhint %}



## Palettes :art:

Variable groups, such as **Primary**, **Secondary**, **Accent**, and **Neutral**, inside the **Palettes** variable collection are predefined sets of colors picked for the website.

**Palettes** variables can be selected by **Colors** variables. This method provides flexibility to update colors by choosing from palette variables without disrupting the site's overall style.

**S2's Palettes** (the "**Lightness Minimum**" of our default colors are set to **15**)**:**

[https://www.tints.dev/?neutral=7E7E7E\&primary=0145AB\&secondary=00B499\&accent=F3BB09](https://www.tints.dev/?neutral=7E7E7E\&primary=0145AB\&secondary=00B499\&accent=F3BB09)

{% hint style="danger" %}
Please leave the name **"Neutral"** and all Neutral colors' **variable names** unchanged.
{% endhint %}



