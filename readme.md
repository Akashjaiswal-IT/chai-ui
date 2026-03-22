== CHAI-UI UTILITY REFERENCE (COMPLETE DOCUMENTATION) ==

++ CORE UTILITIES ++

----- SPACING (PADDING / MARGIN / SIZE) -----

1.  p-{val}          → sets padding on all sides
2.  pt-{val}         → sets padding-top
3.  pb-{val}         → sets padding-bottom
4.  pl-{val}         → sets padding-left
5.  pr-{val}         → sets padding-right
6.  px-{val}         → sets padding-left and padding-right
7.  py-{val}         → sets padding-top and padding-bottom

8.  m-{val}          → sets margin on all sides
9.  mt-{val}         → sets margin-top
10. mb-{val}         → sets margin-bottom
11. ml-{val}         → sets margin-left
12. mr-{val}         → sets margin-right
13. mx-{val}         → sets margin-left and margin-right
14. my-{val}         → sets margin-top and margin-bottom

15. h-{val}          → sets height
16. w-{val}          → sets width


----- DISPLAY & BOX MODEL -----

17. block            → display: block
18. inline           → display: inline
19. inlineblock      → display: inline-block
20. flex             → display: flex (also enables flex behavior)
21. grid             → display: grid (also enables grid behavior)
22. hidden           → display: none

23. borderbox        → box-sizing: border-box
24. contentbox       → box-sizing: content-box


----- COLORS -----

25. bg-{color}       → sets background color
26. text-{color}     → sets text color


----- TYPOGRAPHY -----

27. fontsize-{size}  → sets font-size (xs, sm, lg, xl, etc.)
28. font-{weight}    → sets font-weight (thin → extrabold)
29. textalign-{dir}  → sets text-align (left, center, right)


----- BORDER -----

30. border           → applies default 1px solid border
31. border-{num}     → sets border width
32. border-{color}   → sets border color
33. border-{style}   → sets border style (solid, dashed, dotted, double)


----- BORDER RADIUS -----

34. rounded          → applies small border-radius
35. rounded-{size}   → sets full border-radius
36. rounded-t-{size} → radius on top corners
37. rounded-b-{size} → radius on bottom corners
38. rounded-l-{size} → radius on left corners
39. rounded-r-{size} → radius on right corners


----- FLEXBOX -----

40. flex             → enables flex container
41. flex-{dir}       → flex-direction (row, col, row-reverse, col-reverse)
42. flex-{wrap}      → wrapping behavior (wrap, nowrap, wrap-reverse)


----- GRID -----

43. grid             → enables grid container
44. grid-cols-{n}    → sets number of columns
45. grid-rows-{n}    → sets number of rows


----- ALIGNMENT -----

46. justify-{val}    → justify-content (start, center, end, between, etc.)
47. items-{val}      → align-items (start, center, end, stretch)
48. content-{val}    → align-content
49. self-{val}       → align-self


----- GAP -----

50. gap-{val}        → sets gap between grid/flex items


----- POSITION -----

51. absolute         → position: absolute
52. relative         → position: relative
53. fixed            → position: fixed
54. sticky           → position: sticky
55. static           → position: static

56. top-{val}        → sets top offset
57. bottom-{val}     → sets bottom offset
58. left-{val}       → sets left offset
59. right-{val}      → sets right offset


----- Z-INDEX -----

60. z-{num}          → sets z-index (positive)
61. negz-{num}       → sets z-index (negative)


----- OPACITY -----

62. opacity-{num}    → sets opacity (0–100 → converted to 0–1)


----- OVERFLOW -----

63. overflow-{val}   → sets overflow (hidden, scroll, auto)


----- CURSOR -----

64. cursor-{val}     → sets cursor (pointer, default, notallowed)


----- SHADOW -----

65. shadow-{size}    → applies box-shadow (sm, md, lg)


----- TRANSFORM -----

66. scale-{num}      → scales element (transform: scale)
67. rotate-{deg}     → rotates element (transform: rotate)


----- TRANSITION -----

68. transition       → enables smooth transition (all 0.3s ease)


----- VISIBILITY -----

69. visible          → visibility: visible
70. invisible        → visibility: hidden


----- OBJECT FIT -----

71. objectfit-{val}  → sets object-fit (cover, contain)



== VARIANT UTILITIES ==

Variant utilities are prefixes that control WHEN a utility is applied.
They must be combined with a base utility.

Syntax:
variant:utility


----- STATE VARIANTS -----

72. hover:{utility}   → applies utility on hover
    Example: hover:bg-blue-500

73. focus:{utility}   → applies utility on focus
    Example: focus:bg-green-500

74. dark:{utility}    → applies utility when dark mode is active
    Example: dark:bg-gray-800


----- RESPONSIVE VARIANTS -----

75. sm:{utility}      → applies when screen ≥ 640px
    Example: sm:flex

76. md:{utility}      → applies when screen ≥ 768px
    Example: md:grid

77. lg:{utility}      → applies when screen ≥ 1024px
    Example: lg:p-20

78. xl:{utility}      → applies when screen ≥ 1280px
    Example: xl:text-white


----- COMBINED VARIANTS -----

79. hover:md:{utility}    → applies when hover AND md breakpoint
    Example: hover:md:bg-green-500

80. dark:hover:{utility}  → applies in dark mode + hover
    Example: dark:hover:bg-yellow-500


----- VARIANT SYSTEM NOTES -----

• Multiple variants work as AND conditions  
• All utilities support variants  
• Handled dynamically by parser (no CSS classes needed)


== TOTAL: 71 CORE + VARIANT SYSTEM (100+ COMBINATIONS) ==
