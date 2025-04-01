const html = document.getElementById('html');
const css = document.getElementById('css');
const run = document.getElementById('run');

run.addEventListener('click', function() {
    localStorage.setItem('htmlContent', html.value);
    localStorage.setItem('cssContent', css.value);
});
