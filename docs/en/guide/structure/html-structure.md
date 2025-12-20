---
icon: file-code
---

# HTML Structure

S2 follows the best practices of semantic HTML structure in the <mark style="color:green;">**Page Template**</mark> component. You can use this template component as a starter template for any new page.



## **Example page structure**

This is our default and recommended structure when you start a page using the <mark style="color:green;">**Page Template**</mark> component or the **New Page Template**.

> **`body`** : This is the <mark style="color:purple;">**`Body`**</mark> tag with class `body`.
>
> > **`page`** : Wrap all content within a div. This practice makes it easier to copy and paste entire pages or sections.
> >
> > > <mark style="color:green;">**Global Code**</mark> : Please refer to [this section](global-code.md) for details.
> > >
> > > **`css_page`** : It allows you to add custom CSS specific to the page and see changes immediately.
> > >
> > > **`main-nav`** : Contains `nav`, the page's main navigation.
> > >
> > > **`main`** : Wraps the main content of the web page.
> > >
> > > > ... Other parts of the website.
> > >
> > > **`footer`** : Footer section.

{% hint style="info" %}
The `main` wrapper of the page SHOULD NOT include the **nav** and **footer**.

A page should always have a <mark style="color:purple;">`Main`</mark> HTML tag.
{% endhint %}



## Semantic HTML Structure

In terms of HTML, the default page structure looks like this (simplified), which is included in the <mark style="color:green;">**Page Template**</mark> component.

{% code lineNumbers="true" %}
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Page Template</title>
</head>
<body class="body">
    <div class="page">
        <!-- Component: Global Code -->
        <!-- Code Embed: css_page -->
        <header>
            <div class="main-nav">
                <nav><!-- Main navigation --></nav>
            </div>
        </header>
        <main>
            <section>
                <div class="container">
                    <header class="title-set">
                        <!-- Page title -->
                    </header>
                    <!-- Section content -->
                </div>
            </section>
            <section>
                <div class="container">
                    <!-- Section content -->
                </div>
            </section>
        </main>
        <footer>
            <!-- Footer content -->
        </footer>
    </div>
</body>
</html>
```
{% endcode %}



