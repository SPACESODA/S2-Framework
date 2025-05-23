---
icon: text-size
---

# Text

## Font Family

Setting up the site's font family under **Font Family** variables ensures consistent typography throughout the site and makes it easy to update the font family globally without having to change each element individually.



## Font Size

S2 applied **Fluid Type Scale** on some key tags and classes, including:

* <mark style="color:purple;">**`Body`**</mark>, **`text-base`**
* **`text-sm`**, **`text-xs`**, **`text-2xs`**, **`text-3xs`**
* **`text-lg`**, **`text-xl`**, **`text-2xl`**, **`text-3xl`**
* <mark style="color:purple;">**`Heading 1`**</mark> \~ <mark style="color:purple;">**`Heading 6`**</mark>
* **`h1`** \~ **`h6`**

{% hint style="info" %}
About Fluid Type Scale and fluid values, please refer to this section: [fluid-typography.md](../basic-concepts/fluid-typography.md "mention")
{% endhint %}

In S2, we also have these **variables** for font sizes under **Text** > **Font Size** in the Variables panel:

**`3xs`** ← **`2xs`** ← **`xs`** ← **`sm`** ← **`base`** → **`lg`** → **`xl`** → **`2xl`** → **`3xl`**&#x20;

Ideally, we would like to apply the fluid values to these variables. The code would look like this if we use custom CSS:

```css
/* fluid values */
:root {
  --_text---font-size--3xs: clamp(0.66rem, 0.036vi + 0.652rem, 0.681rem);
  --_text---font-size--2xs: clamp(0.732rem, 0.069vi + 0.717rem, 0.772rem);
  --_text---font-size--xs: clamp(0.813rem, 0.109vi + 0.788rem, 0.875rem);
  --_text---font-size--sm: clamp(0.901rem, 0.158vi + 0.866rem, 0.992rem);
  --_text---font-size--base: clamp(1rem, 0.217vi + 0.951rem, 1.125rem);
  --_text---font-size--lg: clamp(1.057rem, 0.42vi + 0.963rem, 1.299rem);
  --_text---font-size--xl: clamp(1.118rem, 0.664vi + 0.969rem, 1.5rem);
  --_text---font-size--2xl: clamp(1.183rem, 0.956vi + 0.967rem, 1.732rem);
  --_text---font-size--3xl: clamp(1.25rem, 1.304vi + 0.957rem, 2rem);
}
```

However, as Webflow does not allow applying custom values to variables [**yet**](https://x.com/leinwand/status/1898901668483485730), we have entered fixed values into the Variables panel that are equivalent to our default Fluid Typography across breakpoints.

This allows other classes and elements to use font sizes that closely follow the Fluid Type Scale. Besides, once Webflow releases support for custom variable values, upgrading will be effortless.

<figure><img src="../../.gitbook/assets/Screenshot 2025-03-12 14.54.30.png" alt=""><figcaption><p>Font Size variables: Absolute values equivalent to our default fluid type scale</p></figcaption></figure>



