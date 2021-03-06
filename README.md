# JSPageAnimator
Adds an EventListener to each html "a" tag and loads links with an animation using an XMLHttpRequest.
## Getting started
Here is a small indrotuction to JSPageAnimator. Look at folder example for more.
### Step 1
Move the content which you want to animate in a div which belong to the class "animated" and put the following into your head tag:
```html
<script src="path-to-HTMLPageAnimator.js"></script>
<link rel="stylesheet" href="path-to-HTMLPageAnimator.css">
```
Now your code should be something like this:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTMLPageAnimator example</title>
    <link rel="stylesheet" href="../HTMLPageAnimator.css">
    <script src="../HTMLPageAnimator.js"></script>
    <link rel="stylesheet" href="example.css">
</head>
<body>
    <div id="menu"><a href="index.html" title='data-animation="fade"'>fade</a><a href="rotateAndFade.html" title='data-animation="rotateAndFade"'>rotateAndFade</a></div>
    <div class="animated">
        <h1>HTMLPageAnimator example</h1>
        <p>This is an example for using HTMLPageAnimator.</p>
    </div>
</body>
</html>

```
You should do this in every html file of your website.
### Step 2
Choose your animation for your link using "data-animation" property. Actually their only two options: "fade" and "rotateAndFade":
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTMLPageAnimator example</title>
    <link rel="stylesheet" href="../HTMLPageAnimator.css">
    <script src="../HTMLPageAnimator.js"></script>
    <link rel="stylesheet" href="example.css">
</head>
<body>
    <div id="menu"><a href="index.html" title='data-animation="fade"'>fade</a><a href="rotateAndFade.html" title='data-animation="rotateAndFade"'>rotateAndFade</a></div>
    <div class="animated" data-animation="fade">
        <h1>HTMLPageAnimator example</h1>
        <p>This is an example for using HTMLPageAnimator.</p>
    </div>
</body>
</html>
```
### More
If your code doesn't work or you need more information look at the examples or checkout the wiki.

## Demo
Look at the example at https://apilonius64.github.io/demos/JSPageAnimator/example/index.html
## License
This repository and all its contents all licensed under the MIT license. Look at the [LICENSE](https://github.com/Apilonius64/JSPageAnimator/blob/main/LICENSE)  file for more information
