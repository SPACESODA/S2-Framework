---
icon: dolphin
description: >-
  Fluid Typography (or Fluid Responsive) is an idea that font size changes
  fluidly with the screen's width, not just changes at breakpoints.
---

# Fluid Typography

In the [S2 Framework](https://s2-framework.webflow.io/s2/styles?utm_source=gitbook\&utm_medium=docs\&utm_campaign=s2), we adopted the modern concepts of **Fluid Typography** and **Type Scale**.

The fluid behavior can be achieved nicely using `clamp()` in the font-size property, allowing text to scale dynamically based on the viewport size. By adopting a type scale ratio, we can ensure smooth, consistent typography that maintains visual harmony across different screen sizes without guesswork.

To take advantage of both, we can use the open-source tool [Fluid Type Scale](https://www.fluid-type-scale.com) to generate all the `clamp()` values we need effortlessly.

{% hint style="info" %}
If you think the default font size in the S2 Cloneable is fine, you can skip this chapter.
{% endhint %}



## Concept

Once you understand the concept, you can use the tool to adjust the values to fit your design needs easily. This diagram explains the basic concept of [an Example of a 2-step Fluid Type Scale](https://www.fluid-type-scale.com/calculate?minFontSize=32\&minWidth=360\&minRatio=1.25\&maxFontSize=64\&maxWidth=1280\&maxRatio=1.5\&steps=base%2C+lg\&baseStep=base\&prefix=_text---hero-title-\&useContainerWidth=false\&includeFallbacks=false\&useRems=true\&remValue=16\&decimals=3\&previewFont=Playwrite+NZ\&previewText=Almost+before+we+knew+it%2C+we+had+left+the+ground\&previewWidth=1280).

<figure><img src="../../.gitbook/assets/social-fluid-type-scale-explainer@2x.png" alt="The Concept of Fluid Type Scale" width="563"><figcaption><p>The Concept of Fluid Type Scale</p></figcaption></figure>

```
// CSS generated in this demo example
--_text---hero-title--base: clamp(2.5rem, 6.087vi + 1.13rem, 6rem);
--_text---hero-title--lg: clamp(3.125rem, 10.217vi + 0.826rem, 9rem);
```

Here is another example — a simple [Single-step Configuration](https://www.fluid-type-scale.com/calculate?minFontSize=32\&minWidth=360\&minRatio=1\&maxFontSize=64\&maxWidth=1280\&maxRatio=2\&steps=base\&baseStep=base\&prefix=_text---hero-title-\&useContainerWidth=false\&includeFallbacks=false\&useRems=true\&remValue=16\&decimals=3\&previewFont=Marmelad\&previewText=Almost+before+we+knew+it%2C+we+had+left+the+ground\&previewWidth=1280).

It will be helpful if you want to set up fluid typography for a particular class.

{% hint style="info" %}
**How to update `clamp()` values according to my design needs?**

You can start by opening one of our configurations.

In most cases, all you have to change are the "Base font sizes" in the Fluid Type Scale tool and you will get a new set of `clamp()` values. Choose your font and use the preview tool to verify your settings.
{% endhint %}



## Text

Below are the default configurations in the S2 Framework.

<mark style="color:purple;">**`Body`**</mark>, **`text-base`**, **`text-lg`**, **`text-xl`**, **`text-2xl`**, **`text-3xl`**

<mark style="color:blue;">✦</mark> [See our Configuration →](https://www.fluid-type-scale.com/calculate?minFontSize=16\&minWidth=360\&minRatio=1.057475\&maxFontSize=18\&maxWidth=1280\&maxRatio=1.15475\&steps=base%2Clg%2Cxl%2C2xl%2C3xl\&baseStep=base\&prefix=_text---font-size-\&useContainerWidth=false\&includeFallbacks=true\&useRems=true\&remValue=16\&decimals=3\&previewFont=Inter\&previewText=Almost+before+we+knew+it%2C+we+had+left+the+ground\&previewWidth=1280)

In the cloneable, the base font size, which is the font size that applies to <mark style="color:purple;">`Body`</mark> via the Webflow Designer, is set according to the below in the tool.

Key configs to look at:

|              |                                      |
| ------------ | ------------------------------------ |
| 16px         | Desired min of base size is 1rem     |
| 18px         | Desired max if base size is 1.125rem |
| Max of --xl  | 1.5rem                               |
| Max of --3xl | 2rem                                 |
| Min of --3xl | 1.25rem                              |

Here's what we get for the font-size value:

```
--_text---font-size--base: clamp(1rem, 0.217vi + 0.951rem, 1.125rem);
--_text---font-size--lg: clamp(1.057rem, 0.42vi + 0.963rem, 1.299rem);
--_text---font-size--xl: clamp(1.118rem, 0.664vi + 0.969rem, 1.5rem);
--_text---font-size--2xl: clamp(1.183rem, 0.956vi + 0.967rem, 1.732rem);
--_text---font-size--3xl: clamp(1.25rem, 1.304vi + 0.957rem, 2rem);
```

**`text-sm`**, **`text-xs`**, **`text-2xs`**, **`text-3xs`**

<mark style="color:blue;">✦</mark> [See our Configuration →](https://www.fluid-type-scale.com/calculate?minFontSize=13\&minWidth=360\&minRatio=1.1095\&maxFontSize=14\&maxWidth=1280\&maxRatio=1.13375\&steps=3xs%2C2xs%2Cxs%2Csm%2Cbase\&baseStep=xs\&prefix=_text---font-size-\&useContainerWidth=false\&includeFallbacks=true\&useRems=true\&remValue=16\&decimals=3\&previewFont=Inter\&previewText=Almost+before+we+knew+it%2C+we+had+left+the+ground\&previewWidth=1280)

The process is similar, the min and max values of the base font size should be constant.

Key configs to look at:

|                  |                               |
| ---------------- | ----------------------------- |
| Use --xs as base | Easier to set up a scale down |
| Max of --xs      | 0.875rem (14px)               |
| Min of --3xs     | Within a reasonable size      |

```
--_text---font-size--3xs: clamp(0.66rem, 0.036vi + 0.652rem, 0.681rem);
--_text---font-size--2xs: clamp(0.732rem, 0.069vi + 0.717rem, 0.772rem);
--_text---font-size--xs: clamp(0.813rem, 0.109vi + 0.788rem, 0.875rem);
--_text---font-size--sm: clamp(0.901rem, 0.158vi + 0.866rem, 0.992rem);
--_text---font-size--base: clamp(1rem, 0.217vi + 0.951rem, 1.125rem);
```

<mark style="color:blue;">✦</mark> [Alternative configuration: Scale down more on smaller screens →](https://www.fluid-type-scale.com/calculate?minFontSize=12.5\&minWidth=360\&minRatio=1.13125\&maxFontSize=14\&maxWidth=1280\&maxRatio=1.13375\&steps=3xs%2C2xs%2Cxs%2Csm%2Cbase\&baseStep=xs\&prefix=_text---font-size-\&useContainerWidth=false\&includeFallbacks=true\&useRems=true\&remValue=16\&decimals=3\&previewFont=Inter\&previewText=Almost+before+we+knew+it%2C+we+had+left+the+ground\&previewWidth=1280)

<mark style="color:blue;">✦</mark> [Alternative configuration: Scale down even more →](https://www.fluid-type-scale.com/calculate?minFontSize=12\&minWidth=360\&minRatio=1.1545\&maxFontSize=13\&maxWidth=1280\&maxRatio=1.1765\&steps=3xs%2C2xs%2Cxs%2Csm%2Cbase\&baseStep=xs\&prefix=_text---font-size-\&useContainerWidth=false\&includeFallbacks=true\&useRems=true\&remValue=16\&decimals=3\&previewFont=Inter\&previewText=Almost+before+we+knew+it%2C+we+had+left+the+ground\&previewWidth=1280)



## Headings

<mark style="color:purple;">**`Heading 1`**</mark> to <mark style="color:purple;">**`Heading 6`**</mark>, **`h1`** to **`h6`**

<mark style="color:blue;">✦</mark> [See our Configuration →](https://www.fluid-type-scale.com/calculate?minFontSize=16\&minWidth=360\&minRatio=1.24577245\&maxFontSize=18\&maxWidth=1280\&maxRatio=1.347625\&steps=h6%2Ch5%2Ch4%2Ch3%2Ch2%2Ch1\&baseStep=h6\&prefix=_text---heading-\&useContainerWidth=false\&includeFallbacks=true\&useRems=true\&remValue=16\&decimals=3\&previewFont=Inter\&previewText=Almost+before+we+knew+it%2C+we+had+left+the+ground\&previewWidth=1280)

Similarly, we can use the [Fluid Type Scale](https://www.fluid-type-scale.com) tool to get the fluid values effortlessly for headings.

Configurations to get the `clamp()` value for `h1` to `h6`

{% hint style="warning" %}
`h6` is the baseline step, and it is the same as the root font size.
{% endhint %}

Key configs to look at:

|             |      |
| ----------- | ---- |
| Max of --h1 | 5rem |
| Min of --h1 | 3rem |

```
--_text---heading--h6: clamp(1rem, 0.217vi + 0.951rem, 1.125rem);
--_text---heading--h5: clamp(1.246rem, 0.47vi + 1.14rem, 1.516rem);
--_text---heading--h4: clamp(1.552rem, 0.854vi + 1.36rem, 2.043rem);
--_text---heading--h3: clamp(1.933rem, 1.426vi + 1.613rem, 2.753rem);
--_text---heading--h2: clamp(2.409rem, 2.264vi + 1.899rem, 3.71rem);
--_text---heading--h1: clamp(3rem, 3.478vi + 2.218rem, 5rem);
```

The above `clamp()` values have been applied to the tags <mark style="color:purple;">`Heading 1`</mark> to <mark style="color:purple;">`Heading 6`</mark>, and also to classes `h1` to `h6`.

**`h7`**, **`h8`**

Sometimes you simply need smaller headings, so, there are `h7` and `h8`. They are arbitrary classes invented to style smaller headings.

<mark style="color:blue;">✦</mark> [See our Configuration →](https://www.fluid-type-scale.com/calculate?minFontSize=13\&minWidth=360\&minRatio=1.125\&maxFontSize=14\&maxWidth=1280\&maxRatio=1.1595\&steps=h8%2Ch7\&baseStep=h7\&prefix=_text---heading-\&useContainerWidth=false\&includeFallbacks=true\&useRems=true\&remValue=16\&decimals=3\&previewFont=Inter\&previewText=Almost+before+we+knew+it%2C+we+had+left+the+ground\&previewWidth=1280)

```
--_text---heading--h8: clamp(0.722rem, 0.056vi + 0.71rem, 0.755rem);
--_text---heading--h7: clamp(0.813rem, 0.109vi + 0.788rem, 0.875rem);
```

In the configuration, we get our desired max sizes 0.875rem and 0.755rem; and the min sizes are also within reasonable value.



## Superscript & Subscript

<mark style="color:purple;">**`sup`**</mark>, <mark style="color:purple;">**`sub`**</mark>

S2 also adopted fluid font styles on `sup` and `sub` elements.

We prepare a **Fluid Sup / Sub CSS Generator** for the S2 Framework. It is modified from the tool created by [Lorenz Woehr](https://css-tricks.com/fluid-superscripts-and-subscripts/).&#x20;

<mark style="color:blue;">✦</mark> [Fluid Sup / Sub CSS Generator →](https://codepen.io/realanthonyc/pen/emOXEMz)

On the S2 Framework, the CSS styles are applied seamlessly to the Webflow Designer at the tag level. They look perfect!



## Optional Setups

The following setups require custom CSS and are not yet included in the framework’s cloneable. Adding them to your site is optional.

### For very small screens

You can add this to your custom CSS to scale fonts down for devices smaller than the iPhone SE (319px or below). The `clamp()` value is based on [this configuration](https://www.fluid-type-scale.com/calculate?minFontSize=14\&minWidth=240\&minRatio=1\&maxFontSize=16\&maxWidth=319\&maxRatio=2\&steps=body\&baseStep=body\&prefix=s2\&useContainerWidth=false\&includeFallbacks=false\&useRems=true\&remValue=16\&decimals=3\&previewFont=Marmelad\&previewText=Almost+before+we+knew+it%2C+we+had+left+the+ground\&previewWidth=319).

{% code overflow="wrap" %}
```css
@media screen and (max-width:319px) { body { font-size: clamp(0.875rem, 2.532vi + 0.495rem, 1rem); } }
```
{% endcode %}

### Custom Values for Variables

The variables below in the custom CSS already exist in the variables panel. The `clamp()` values give the variables the power of fluid behavior according to the default font size values in the S2 cloneable.

However, since Webflow does not yet allow adding custom values to variables; if you want to apply such variables to the font-size values of other classes, you can place this custom code in the `custom` of the <mark style="color:green;">**Global Code**</mark> component.

```css
/* custom values for variables */
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





**Extended reading:**

{% embed url="https://css-tricks.com/snippets/css/fluid-typography/" %}

{% embed url="https://css-tricks.com/simplified-fluid-typography/" %}

{% embed url="https://css-tricks.com/fluid-superscripts-and-subscripts/" %}



