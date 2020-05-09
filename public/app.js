'use strict';

function brendon() {
  let template = document.getElementById('template').innerHTML;
  let skills = document.getElementById('skills').innerHTML;
  let languages = Mustache.render(skills, {
    skills: {
      html: ' HTML',
      css: ' CSS',
      js: ' Javascript',
      flex: ' Flexbox',
      jq: ' Jquery',
      sql: ' SQL',
    },
  });
  let nameAge = Mustache.render(template,{
    name: 'Brendon',
    age:31,
  });
  document.getElementById('title').innerHTML = nameAge;
  document.getElementById('forte').innerHTML = languages;
}




