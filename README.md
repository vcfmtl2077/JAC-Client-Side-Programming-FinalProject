![PetsPets 图标](screenShot\pets-logo-15.svg)

# "PetsPets - Your Pet Hub in cyber Space"

## Introduction

> ### Pet Shops
>
> > Pet shops offering the finest products for your pets.
>
> ### Service Providers
>
> > Connect with Pets doctor, groomers, trainers, and adoption.
>
> ### Community Hub
>
> > Community of pet lovers to share stories, tips, and advice.
>
> ### Life book for Pets
>
> > Record every moment for your pets.



## Site Map

![sitmap](screenShot\site map.jpg)

## Tech Stack

![techStack](screenShot\tech stack.jpg)

### Features

> ### Responsive Web design - Bootstrap 5
>
> Multiple layout for different device



> ### Animation - AOS
>
> JavaScript Animation of various types of encryption including `AES`, `DES`, `Rabbit`, and `RC4`.



> ### Data security - secure-ls
>
> Data encrypted - even for local storage
>



> ### Internationalization- i18next
>
> standard i18n features, also a complete solution to localize from web to mobile and desktop.



## codes details

### Responsive

Bootstrap’s grid includes six tiers of predefined classes for building complex responsive layouts. Customize the size of your columns on extra small, small, medium, large, or extra large devices however you see fit.

```html
<div class="container text-center">
  <!-- Stack the columns on mobile by making one full-width and the other half-width -->
  <div class="row">
    <div class="col-md-8">.col-md-8</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
  <div class="row">
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Columns are always 50% wide, on mobile and desktop -->
  <div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
  </div>
</div>
```

------

### Animation

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pets Pets - Contact Us</title>
    <link rel="stylesheet" href="css/contact_us.css">
    <link rel="icon" href="assets/favicon.ico">
    <link href="css/vendor/aos.css" rel="stylesheet">  
</head>

<body>
     </header>
     <img src="assets/Shuo.webp" alt="Profile Picture" class="contact-image" data-aos="zoom-out-up">
      </div>

     <div class="contact-item" data-aos = "fade-right">
      <img src="assets/Wei.webp" alt="Profile Picture" class="contact-image" data-aos="zoom-out-up">
                
    <script src="js/contact_us.js"></script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script>AOS.init();</script> in
</body>

</html>
```

### Data Security 

```javascript
var ls = new SecureLS({ encodingType: 'aes'});
//, isCompression: false, encryptionSecret: 'test' });

```



### Internationalization- i18next

```html
<ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="nav-link scrollto dropdown-en"  	     onclick="changeLanguage('en')">English</a></li>
    <li><a class="nav-link scrollto dropdown-fr" onclick="changeLanguage('fr')">Français</a>
    </li>
</ul>
```

