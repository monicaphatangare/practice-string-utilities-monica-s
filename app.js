const stringUtils = require(`./stringUtils`);

console.log(stringUtils.capitalize("hello"));
console.log(stringUtils.capitalize(123));
console.log(stringUtils.reverse("World"));
console.log(stringUtils.reverse(456));
console.log(stringUtils.contains("LaunchCode is awesome!" , "LaunchCode"));
console.log(stringUtils.contains("We like to code", "Hello"));
console.log(stringUtils.contains( '', ''));