# Frontend Mentor - Loopstudios landing page solution

This is a solution to the [Loopstudios landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/loopstudios-landing-page-N88J5Onjw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Links

- Solution URL: [Repository](https://github.com/Fbeye04/loopstudios-landing-page)
- Live Site URL: [Live site](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Tailwindcss

### What I learned

#### Introduction to Tailwind CSS

In this NFT Preview Card project, I explored Tailwind CSS as a utility-first CSS framework. This was my first experience using a CSS framework, and I discovered several valuable benefits and learning points:

##### 1. Utility-First Approach

Tailwind CSS employs a utility-first approach that allowed me to build designs directly in HTML using utility classes. This differs significantly from traditional CSS approaches where we write separate selectors and rules. For example:

```html
<!-- Traditional Approach: Requires writing separate CSS -->
<div class="card">...</div>

<!-- Tailwind Approach: Styling directly in HTML -->
<div
  class="bg-very-dark-blue-card text-white rounded-2xl p-6 max-w-[350px] shadow-2xl">
  ...
</div>
```

This enables faster development without switching between HTML and CSS files.

##### 2. Easy Responsiveness

Tailwind provides an intuitive prefix system (`sm:`, `md:`, `lg:`, etc.) for applying different styles at different screen sizes. Example:

```html
<h1 class="text-lg md:text-xl lg:text-2xl">Responsive Heading</h1>
```

##### 3. Group Modifier for Interactions

I learned to use Tailwind's `group` and `group-hover` features to create complex interactions like image overlays:

```html
<div class="relative group">
  <img src="image.jpg" class="rounded-lg" />
  <div
    class="absolute inset-0 bg-cyan opacity-0 group-hover:opacity-50 transition-opacity duration-300">
    <img src="icon.svg" class="opacity-0 group-hover:opacity-100" />
  </div>
</div>
```

##### 4. Transitions and Animations

Tailwind has excellent utility classes for transitions and animations that make adding interactivity easy:

```html
<button class="bg-blue-500 hover:bg-blue-700 transition-colors duration-300">
  Button with Transition
</button>
```

##### 5. Mobile-First Mindset

Tailwind encourages a mobile-first approach to design, which is a modern practice in responsive web development. I started by designing for mobile devices, then expanded for larger screens.

##### 6. Pseudo-classes and Pseudo-elements

Tailwind provides an easy way to apply styles to various element states using prefixes like `hover:`, `focus:`, `active:`, etc.

```html
<a class="text-blue-500 hover:text-blue-700 hover:underline"
  >Link with Hover Effect</a
>
```

#### Challenges and Solutions

Some challenges I faced and how I overcame them:

1. **Learning Curve:** Initially, it was difficult to memorize all the utility classes, but Tailwind's excellent documentation and editor IntelliSense were extremely helpful.

2. **Lengthy HTML Markup:** Tailwind classes can make HTML look long and hard to read. The solution was to break components into smaller parts and use comments for organization.

3. **Mindset Adaptation:** Switching from traditional CSS to a utility-first approach required a change in how I think about styling.

#### Conclusion

Tailwind CSS has proven to be a powerful tool for rapid front-end development. Although there is an initial learning curve, productivity increases once you become familiar with its ecosystem. This framework is ideal for small to medium projects and works well for UI components like the NFT Preview Card I created.

I plan to continue exploring and deepening my knowledge of Tailwind CSS in future projects!

### Useful resources

- [Tailwind docs](https://tailwindcss.com/docs) - the documentation prepared by tailwind officials is very helpful in transitioning to using this framework.
- [tailwind 4.1 user guide](https://youtu.be/Kh3xj-5nMqw?si=a8dv9hHOpzFJSewx) - for anyone who feels lost in the initial setup of the latest tailwind.
- [guide to some changes in tailwind 4.0](https://youtu.be/sHnG8tIYMB4?si=PHep3VChewNiJiF3)

## Author

- LinkedIn - [Muhammad Fachrezi Barus](https://www.linkedin.com/in/muhammad-fachrezi-barus/)
- Frontend Mentor - [@Fbeye04](https://www.frontendmentor.io/profile/Fbeye04)
- GitHub - [@Fbeye04](https://github.com/Fbeye04)
