---
icon: square-code
---

# Global Code

## The <mark style="color:green;">Global Code</mark> Component

The custom code in the <mark style="color:green;">**Global Code**</mark> **component** allows styles to be applied on both the editing canvas and the published site. You can place **your custom styles** in <mark style="color:blue;">`css_custom`</mark> inside the <mark style="color:green;">**Global Code**</mark> **component**. Let's take a look at the overall structure.

Apply the S2 Framework's base CSS by importing minified CSS from CDN.

> <mark style="color:green;">**Global Code**</mark> <mark style="color:blue;">`code`</mark>
>
> > <mark style="color:blue;">`js`</mark>
> >
> > <mark style="color:green;">**- Framework Base CSS**</mark> <mark style="color:blue;">`css`</mark>
> >
> > <mark style="color:green;">**- Icon Libraries**</mark> <mark style="color:blue;">`css`</mark>
> >
> > <mark style="color:blue;">`css_custom`</mark>\
> > `/* -- Global Custom Attributes -- */`\
> > `/* -- Global Custom Styles -- */`

{% hint style="info" %}
**How can I switch to the "embed option" globally?**

Click into the <mark style="color:green;">**Global Code**</mark> component and switch the visibility setting from CDN to Embed options to apply it globally.
{% endhint %}



## Page-specific CSS

For page-specific custom styles, place them inside `css_page` code embed.

> <mark style="color:blue;">`css_page`</mark>\
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



