# CS 260 Notes

[My startup - Simon](https://simon.cs260.click)

## Helpful links

- [Course instruction](https://github.com/webprogramming260)
- [Canvas](https://byu.instructure.com)
- [MDN](https://developer.mozilla.org)

## Markdown
So I've never actually used markdown before, and it's crazy how quickly I'm starting to udnerstand concepts i've struggled with for a long time. I've never erally understood the best way to use girhub and for some reason never thoguht to learn markdown (not that it's very complex.). It's effectivly a text document for the most part but with a lot of cool features. I was shocked to see you could put full UML sequences in just via mermaid.

## AWS

Public IP is: 98.95.44.7
I know that a lot was glossed over in the starting of this instance but i still gleaned a lot from it. I certainly better undertand the interactions between DNS and IPs.
It is very intuitive so if I ever wanted to make another site I'm sure it wouldnt be that difficult -- however, the details of some of the prepackaged AMI would be nice to know.
I had to reboot my instance -- not sure exactly why, but everything is working smoothly now.

## Caddy

No problems worked just like it said in the [instruction](https://github.com/webprogramming260/.github/blob/main/profile/webServers/https/https.md).

## HTML

Never really had a ton of expereince with HTML--
Structure with absolutley no dictation over the style of the site

Title as a subtree of head is rendered in the tab title
p -- paragraph element
a -- href hypperlinks
img has both alt path and source enabling display for users with visiual impairment
h1 - h5 heading sizes
ol, ul -- ordered and unordered lists
-- li is a list item


## CSS

Cascading Style Sheets -- possible to make complex images with just CSS but that's a bit excessive

"the browser doesn't decide my destiny, i decide my destiny"
We absolutley flew through this in class, I'll need to play around with this for a prolonged period of time.

```html
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand">
            <img src="logo.svg" width="30" height="30" class="d-inline-block align-top" alt="" />
            Calmer
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" href="play.html">Play</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="index.html">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
```

### Responsive Design
```html
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1"
    />
```
Block displays are directly proportional to the display interface and are most commonly used for paragraphs
Inlines on the other hand are still relative to display in regards to orientation, but maintain size.

I also used SVG to make the icon and logo for the app. This turned out to be a piece of cake.

## React Part 1: Routing

This was pretty base level, but the fact that HTML and CSS can effectively converted into JSX elements and then injected is a great introduction to JSX and routing. There is still a grotesque amount i can learn in regards to JSX routing, but at the core its very simple.

## React Part 2: Reactivity

This was a lot of fun to see it all come together. I had to keep remembering to use React state instead of just manipulating the DOM directly.

Handling the toggling of the checkboxes was particularly interesting.

```jsx
<div className="input-group sound-button-container">
  {calmSoundTypes.map((sound, index) => (
    <div key={index} className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        value={sound}
        id={sound}
        onChange={() => togglePlay(sound)}
        checked={selectedSounds.includes(sound)}
      ></input>
      <label className="form-check-label" htmlFor={sound}>
        {sound}
      </label>
    </div>
  ))}
</div>
```
