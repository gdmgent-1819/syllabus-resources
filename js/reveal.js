
function ready(cb) {
    /in/.test(document.readyState)
    ? setTimeout(ready.bind(null, cb), 150)
    : cb();
};

ready(function(){
  // Reveal Transitions
  var revealTransitions = [
    'none',
    'concave',
    'convex',
    'fade',
    'slide',
  ];

  Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,
    transition: revealTransitions[2],
    width: 1280,
    height: 720,

    // Optional reveal.js plugins
    dependencies: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/lib/js/classList.js', condition: function() { return !document.body.classList; } },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/plugin/markdown/markdown.min.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/plugin/highlight/highlight.min.js', async: true, condition: function() { return !!document.querySelector( 'pre code' ); }, callback: function() { hljs.initHighlightingOnLoad(); } },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/plugin/zoom-js/zoom.min.js', async: true },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/plugin/notes/notes.min.js', async: true }
    ]
  }); 
});