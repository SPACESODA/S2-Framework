---
icon: square-code
---

# Code Embed

## The <mark style="color:green;">Global Code</mark> Component

The custom code in the <mark style="color:green;">**Global Code**</mark> **component** allows styles to be applied on both the editing canvas and the published site. You can place **your custom styles** in the `custom` inside the <mark style="color:green;">**Global Code**</mark> **component**. Let's take a look at the overall structure.

### Default option: By CDN

To place the S2 Framework's base CSS by importing minified CSS from CDN:

> <mark style="color:green;">**Global Code**</mark> <mark style="color:blue;">**`code`**</mark>
>
> > <mark style="color:blue;">**`js`**</mark>
> >
> > <mark style="color:green;">**S2 Base CSS: CDN**</mark> <mark style="color:blue;">**`code`**</mark>
> >
> > > <mark style="color:blue;">**`css`**</mark>
> > >
> > > `/* S2 Framework: Base CSS */`\
> > > <mark style="color:blue;">`<link rel="stylesheet" href="`</mark>[<mark style="color:blue;">`https://cdn.jsdelivr.net/gh/SPACESODA/S2-Framework/webflow/css/s2.min.css`</mark>](https://cdn.jsdelivr.net/gh/SPACESODA/S2-Framework/webflow/css/s2.min.css)<mark style="color:blue;">`" />`</mark>
> >
> > <mark style="color:blue;">**`custom`**</mark>\
> > `/* -- Global Custom Attributes -- */`\
> > `/* -- Global Custom Styles -- */`

### Embed Option

To place the S2 Framework's base CSS by embedding directly on the page:

> <mark style="color:green;">**Global Code**</mark> <mark style="color:blue;">**`code`**</mark>
>
> > <mark style="color:blue;">**`js`**</mark>
> >
> > <mark style="color:green;">**S2 Base CSS: Embed**</mark> <mark style="color:blue;">**`code`**</mark>
> >
> > > <mark style="color:blue;">**`framework`**</mark>\
> > > `/* -- Base Setup -- */`\
> > > `/* -- S2 Attributes -- */`
> > >
> > > <mark style="color:blue;">**`css_colors`**</mark>\
> > > `/* -- S2 Colors & Palettes -- */`
> > >
> > > <mark style="color:blue;">**`css_animations`**</mark>\
> > > `/* -- CSS Animations -- */`
> >
> > <mark style="color:blue;">**`css_custom`**</mark>\
> > `/* -- Global Custom Attributes -- */`\
> > `/* -- Global Custom Styles -- */`



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
Unless a script needs to be placed as early as possible AFTER the `body` tag, or serves a special purpose for a Webflow Component, we recommend avoiding adding JavaScript directly to the canvas using Code Embed.

We recommend placing scripts in the site-wide or page-specific **Head code** or **Footer code** areas.
{% endhint %}

{% hint style="info" %}
Always add a meaningful comment to your scripts.

For example: \
<mark style="color:purple;">`<!-- Icons in Profile Blocks -->`</mark>\
<mark style="color:purple;">`<!-- Showing and hiding of icons inside Profile blocks according to the visitor's browsing history. -->`</mark>
{% endhint %}



