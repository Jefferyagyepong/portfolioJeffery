import React from "react";
import Link from "next/link";
import Image from "next/image";
import Post from "./Post";
const Three = () => {
  const blogPosts = [
    {
      title: "Sass",
      body: "Certainly! SASS (Syntactically Awesome Stylesheets) is a popular CSS preprocessor that adds features and syntax enhancements to make styling websites more efficient and maintainable. Here's a beginner's guide to learning SASS:1. Installation:SASS needs to be installed on your machine. You can install it using a package manager like npm or yarn:bash npm install -g sass2. Basic Syntax:SASS allows you to write stylesheets with a more concise and readable syntax. It uses indentation instead of brackets and semicolons. For example:scss $primary-color: #3498db;body font-family: Arial, sans-seri background-color: $primary-color3. Variables:Declare variables with the $ symbol. This allows you to reuse values throughout your stylesheet.scss $primary-color: #3498db;.header background-color: $primary-color4. Nesting: Nest CSS selectors inside one another to create a visual hierarchy and avoid repetition.scss nav ulmargin: 0 padding: 0 list-style: none li display: inline-block5. Partials and Import: Break your styles into smaller, modular files called partials and import them into a main stylesheet.scss $primary-color: #3498db; @import 'variables';body background-color: $primary-color6. Mixins: Use mixins to define reusable pieces of styles. This can include common properties or even entire blocks of styles. @mixin border-radius($radius)-webkit-border-radius: $radius-moz-border-radius: $radius border-radius: $radius button @include border-radius(5px) 7. Extend/Inheritance: Extend allows you to share a set of CSS properties from one selector to another. .message border: 1px solid #ccc padding: 10px color: #333 .success @extend .message border-color: green 8. Operators: SASS supports mathematical operations, making it easier to perform calculations within your styles. scss .container width: 100% - 20px 9. Control Directives: Use control directives like @if, @for, and @each for more dynamic styles. @for $i from 1 through 3 .column-#{$i} width: 30px * $i 10. Compile SASS to CSS: After writing your SASS code, compile it into regular CSS using the sass command. bash sass input.scss output.css Additional Resources: SASS Documentation: The official documentation is an excellent resource for in-depth information. (https://sass-lang.com/documentation) Example SASS Code: scss $primary-color: #3498db; $font-stack: Arial, sans-serif; header { background-color: $primary-color; padding: 10px; h1 { font-family: $font-stack; color: white;} nav { ul { margin: 0; padding: 0; list-style: none;  li { display: inline-block; margin-right: 10px; } }}} .message {border: 1px solid #ccc; padding: 10px; color: #333;} .success { @extend .message border-color: green;} $base-width: 100px; .container { width: $base-width * 2;}SASS can significantly improve the organization and readability of your stylesheets. Practice and experiment to fully grasp its capabilities and enhance your web development workflow.",

      imgUrl: "/logo-sass.svg",
    },
  ];
  return (
    <div id="sass">
      {blogPosts.map((post, index) => (
        <Post key={index} index={index} post={post} />
      ))}
      <nav>
        <Link href={"#sass"}>
          <Image
            src="/arrow-back-circle-outline.svg"
            alt="Coast Republic"
            width={20}
            height={20}
          />
        </Link>
        <Link href={"#javascript"}>
          <Image
            src="/arrow-forward-circle-outline.svg"
            alt="Coast Republic"
            width={20}
            height={20}
          />
        </Link>
      </nav>
    </div>
  );
};
export default Three;
