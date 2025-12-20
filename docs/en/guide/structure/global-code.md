---
icon: square-code
---

# Global Code

## The <mark style="color:green;">Global Code</mark> Component

The custom code in the <mark style="color:green;">**Global Code**</mark> **component** allows styles to be applied not only to the published site but also to your editing canvas.

Let's examine the overall structure of the <mark style="color:green;">**Global Code**</mark> **component**:

> <mark style="color:green;">**Global Code**</mark>
>
> <mark style="color:blue;">**`Base Setup`**</mark> <mark style="color:blue;">`css`</mark>
>
> <mark style="color:blue;">**`S2 Attributes & Colors`**</mark> <mark style="color:blue;">`css by CDN`</mark>
>
> <mark style="color:blue;">**`CSS Animations`**</mark> <mark style="color:blue;">`css`</mark>
>
> <mark style="color:blue;">**`Custom Styles`**</mark> <mark style="color:blue;">`css`</mark>
>
> <mark style="color:blue;">**`Custom Attributes`**</mark> <mark style="color:blue;">`css`</mark>
>
> > <mark style="color:green;">**Icon Libraries**</mark>
> >
> > > <mark style="color:blue;">**`code_ph-icons`**</mark> ... default enabled
> > >
> > > <mark style="color:blue;">**`code_fa-icons`**</mark> ... default enabled
> > >
> > > <mark style="color:blue;">**`code_bx-icons`**</mark>
> > >
> > > <mark style="color:blue;">**`code_lni-icons`**</mark>

Our modular approach to custom CSS within the Global Code component makes everything easy to manage. Each module works like a plugin, and you can remove any part that is not useful for your project.

* <mark style="color:blue;">**`Base Setup`**</mark>: Core style configs and resets.
* <mark style="color:blue;">**`S2 Attributes & Colors`**</mark>: **S2 Attributes** is a lightweight library of predefined attributes to help you work faster. **Colors & Palettes** uses the framework's Colors and Palettes variables as attributes.
* <mark style="color:blue;">**`CSS Animations`**</mark>: A set of basic but useful CSS animation attributes.
* <mark style="color:blue;">**`Custom Styles`**</mark>: Global custom styles for enhancements and some S2 Framework features.
* <mark style="color:blue;">**`Custom Attributes`**</mark>: Essential global custom attributes that can be configured as needed.



## Page-specific CSS

For page-specific custom styles, place them inside `css_page` code embed.

> <mark style="color:blue;">**`css_page`**</mark>\
> `/* styles specific to a page */`

Here is a template of media queries that uses Webflow’s breakpoints.

```css
/* media queries template */
/*
@media screen and (min-width: 1280px) {}
@media screen and (min-width: 1440px) {}
@media screen and (min-width: 1920px) {}
@media screen and (max-width: 991px) {}
@media screen and (max-width: 767px) {}
@media screen and (max-width: 479px) {}
*/
```



## JavaScript

{% hint style="warning" %}
Unless a script needs to be placed as early as possible AFTER the `body` tag, or serves a special purpose for a Webflow Component, we recommend avoiding adding JavaScript directly to the canvas using Code Embed whenever possible.

We recommend placing scripts in the site-wide or page-specific **Head code** or **Footer code** areas.
{% endhint %}



