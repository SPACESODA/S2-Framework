---
description: Switching from MAST or the Saddle Framework to the S2 Framework
icon: code-compare
---

# From MAST or The Saddle

Congratulations! You should feel comfortable when starting with S2.

### Class Naming Convention

S2, MAST, and The Saddle share many similar practices. S2 uses u- for utility classes, but is- for combo classes (MAST and the Saddle Framework use cc- for combo classes).

S2 provides a more precise definition of how to use - and \_ in class naming:

1. Use natural English in most cases.
2. Use `-` to separate words of the same context.
3. Use `_` to separate words of different contexts or child elements.

Refer to the [Class Naming](https://s2-framework.gitbook.io/docs/guide-and-documentation/naming-strategies/class-naming) section for more examples.

### S2 Containers and Column Layout System

S2 does not define container and column widths using simple percentage-based values by default. (Of course, you can still easily set up such classes yourself according to design need.)

Instead, S2 follows a **standard 12-column grid system** (though here, "grid" refers to grid guide, not an "grid"). This system includes a gutter variable (set to 1rem by default) for precise layout calculations.

The 12-column system adapts across breakpoints:

* Desktop (Base): 12 columns
* Tablet: 8 columns
* Landscape: 6 columns
* Mobile: 4 columns

This structured makes setting up layouts accurate and easy!



