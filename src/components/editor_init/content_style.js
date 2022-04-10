const content_style = {
  content_style: `
  @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    body {font-size: 12pt;}
    blockquote {
border: 0;
font-size: 24px;
font-weight: 700;
letter-spacing: .1em;
margin: 2.5em auto;

padding: 0 2rem;
position: relative;
text-align: center;
text-transform: uppercase;
}

blockquote::before {
color: #000000;
content: '“';
font-family: 'georgia';
font-size: 4em;
left: 0%;
pointer-events: none;
position: absolute;
top: -.75em;
}

blockquote::after {
bottom: -1.2em;
color: #000000;
content: '”';
font-family: 'georgia';
font-size: 4em;
pointer-events: none;
position: absolute;
right: 0%;
}
    `,
}
export default content_style
