---
icon: arrow-progress
---

# Other Naming Strategies

## Naming Variables

Use full words and standard English for variable names.

Avoid lengthy names. Other than normal **hyphens** and **spaces**, avoid using underscores and other unnecessary punctuations in variable names.

Compare:

|            | Variable name on the panel                        | Actual code generated                         |
| ---------- | ------------------------------------------------- | --------------------------------------------- |
| **Good** ✅ | **Padding/**&#x54;ablet Small                     | `var(--padding--tablet-small)`                |
| **Bad** ❌  | **Component - Card/**&#x43;ard Body Padding \[LG] | `var(--component-card--card-body-padding-lg)` |

We aim for clear and simple names that are easy to search for in the Webflow panel. They should also be easy to type when coding.



## Naming Components

While it is flexible, we recommend naming Webflow components like natural and brief English titles and capitalizing them correctly. Group components into folders logically, and make their names easily searchable and identifiable. Examples:

<mark style="color:green;">**Blog Card**</mark>

<mark style="color:green;">**Button with Arrow**</mark>

<mark style="color:green;">**Latest Status Block**</mark>

For those who are interested: [Capitalization in Titles: Rules and Examples](https://www.grammarly.com/blog/punctuation-capitalization/capitalization-in-titles/)



## Naming Webflow Interactions

Suggested format: **Name of element** + **\[State:** **Optional description of action]**

The naming convention for Webflow Interactions is the same as that suggested by [Client-First](https://finsweet.com/client-first/docs/interactions-naming). You should also keep the names short and descriptive, for example:

`Section Image [Fade in]`

`Box Icon [Open]`

`Box Icon [Close]`

`Box Icon [Open: Rotate]`

`Box Icon [Close: Back to 0]`

"While scrolling" and "Mouse move" animations don't typically change to a specific state, so you can get more descriptive with them, e.g. `Profile Cards [Floating effect]`.



