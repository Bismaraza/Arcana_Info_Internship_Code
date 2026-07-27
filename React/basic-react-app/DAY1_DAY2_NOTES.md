React Philosophy

One of React's biggest principles is:

Don't Repeat Yourself (DRY).

If you're copying and pasting the same JSX many times, it's usually a sign that you should create a reusable component.
## Day 01: Basic React Components

Day 01 ka focus React ke basic building blocks par tha. Is day mein alag alag chhote components banaye gaye jinhain mila kar ek complete page tayar kiya gaya.

### 1. Components kya hotay hain?
React component ek reusable UI piece hota hai. Example ke taur par `Heading`, `Button`, `Card` aur `Profile` sab alag components hain. In ka faida ye hai ke ek hi design bar bar likhne ki zaroorat nahi parti.

### 2. JSX kya hota hai?
JSX JavaScript ke andar HTML jaisa syntax hai. React mein UI likhne ke liye JSX use hota hai. Ye syntax readable hota hai aur components ko define karna easy banata hai.

### 3. Import aur Export
Har component ko file se export kiya jata hai aur phir doosri file mein import kiya jata hai. Is tarah code modular rehta hai aur files chhoti aur manageable rehti hain.

### 4. Tailwind CSS utility classes
Day 01 mein styling ke liye Tailwind classes use hui hain, jese `bg-blue-700`, `text-white`, `rounded-lg`, `shadow-lg`, `flex`, `justify-center` etc. Tailwind ka faida ye hai ke CSS file mein zyada custom code likhne ki zaroorat kam ho jati hai.

### 5. `Heading` component
`Heading` sirf ek title show karta hai. Is se basic text rendering aur simple styling ka concept samjha gaya.

### 6. `Button` component
`Button` component se button banaya gaya jisme hover effect aur padding, background color aur shadow jaisi styling di gayi. Is se interactive UI element ka idea mila.

### 7. `Card` component
`Card` ek simple information box hai jo heading, paragraph aur button ko ek saath dikhata hai. Is se component ke andar multiple elements ko combine karna seekha gaya.

### 8. `Profile` component
`Profile` component mein image import ki gayi aur usay card layout ke andar use kiya gaya. Is se assets import karna, image display karna aur personal profile card banana samjha gaya.

### 9. Layout aur spacing
`Day1App` mein components ko vertical order mein arrange kiya gaya aur spacing ke liye classes jese `mt-10`, `flex`, `justify-center` use hui. Is se page structure aur alignment ka concept clear hota hai.

## Day 02: Page Sections aur Props

Day 02 mein basic components se aage barh kar poora mini webpage banaya gaya. Is day mein component composition aur props ka concept important tha.

### 1. Component composition
Ek bade page ko chhote sections mein divide kiya gaya: `Navbar`, `Hero` aur `Footer`. Ye approach code ko readable aur reusable banati hai.

### 2. `Navbar` component
`Navbar` top menu section hai jisme navigation items jese Home, About, Services, Projects aur Contact dikhaye gaye. Is se semantic layout aur horizontal list styling seekhi gayi.

### 3. `Hero` component
`Hero` page ka main introduction section hota hai. Is mein profile image, intro text, call-to-action buttons aur responsive center alignment use hui. Ye section user ka attention grab karne ke liye hota hai.

### 4. `Footer` component
`Footer` page ka closing section hota hai. Is mein usually copyright ya short closing text hota hai.

### 5. React Fragment
`Day2App` mein `<> ... </>` fragment use hua hai. Fragment ka faida ye hai ke extra wrapper div ke baghair multiple components ko ek saath return kiya ja sakta hai.

### 6. Props kya hotay hain?
Props React mein component ko data pass karne ka tareeqa hai. Is ka matlab ye hai ke component hardcoded values par depend nahi karta, balke bahar se values receive karta hai.

### 7. `ProductCard` aur props
`ProductCard` component mein `name`, `price` aur `brand` props pass kiye gaye. Is se same component ko different data ke sath baar baar use kiya ja sakta hai. Ye reusable UI ka sab se important concept hai.

### 8. Dynamic rendering
`PropsApp` mein multiple `ProductCard` components render kiye gaye aur har card ke liye different data use kiya gaya. Is se list-style UI aur repeated component usage ka idea mila.

### 9. `App.jsx` mein active day selection
Root `App.jsx` mein `activeDay` variable ke through decide hota hai ke kaunsa demo show karna hai: Day 1, Day 2 ya Props wala version. Is se conditional rendering ka basic concept samajh aata hai.

## Important Concepts Summary

- Component: UI ka reusable hissa.
- JSX: JavaScript mein HTML jaisa syntax.
- Import/Export: Files ke darmiyan code share karna.
- Props: Parent se child component ko data dena.
- Fragment: Extra wrapper ke baghair multiple elements return karna.
- Tailwind CSS: Utility classes se styling karna.
- Composition: Chhote components ko mila kar bara page banana.

## Short Revision Note

Agar ek line mein samjha jaye to Day 01 mein basic components aur styling seekhi gayi, jabke Day 02 mein poora page sections mein banaya gaya aur props ke through data reusable banaya gaya.

## Examples of What You Learned

- Simple heading banana.
- Button aur card design karna.
- Image import kar ke profile card banana.
- Navbar, hero aur footer se page structure banana.
- Props ke zariye ek hi component ko different data ke sath use karna.

## Final Takeaway

Ye dono days React ke foundation ke liye important hain. Day 01 ne component structure aur Tailwind styling ko clear kiya, aur Day 02 ne real page sections aur props ka practical use dikhaya. Agar ye concepts strong ho jayein to aage forms, state aur API integration seekhna asaan ho jata hai.