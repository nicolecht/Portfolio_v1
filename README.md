# Portfolio_v1
http://www.nicolecht.com/

Below are my ongoing fixes and improvement made:

14 Sep 2022
- fixed sass partial files to include an underscore(_components.scss)
- this avoids transpiling them twice, producing css files for my sass partials modules.
- By default, Sass transpiles all the .scss files directly.
- However, when you want to import a file, you do not need the file to be transpiled directly.
- Sass has a mechanism for this:
- If you start the filename with an underscore, Sass will not transpile it.
- Files named this way are called partials in Sass.
- For more information: <a href="https://www.w3schools.com/sass/sass_import.php">sass import</a>
