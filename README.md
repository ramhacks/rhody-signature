# rhody-signature

An online email signature creator tool. Allows a user to fill in their contact details, and copy the signature to their system clipboard for setting an email signature in Gmail, Outlook, etc.

**Live Site**: https://ramhacks.github.io/rhody-signature/

**Contributors**: Ben Dahrooge <bdahrooge@uri.edu>

**License**: MIT License

## Getting started

1. To run locally, install all npm dependencies by running `npm i`.
2. Start the development server by running `npm run dev`
3. Build a static html version by running `npm run build`

## Adapting for use at your organization

- Theme colors can be adjusted in Home.module.css
- Logos/images should be uploaded to a CDN/bucket storage (e.g., Amazon S3, Google Storage) if possible, to ensure they are not mistaken for [pixel trackers](https://en.wikipedia.org/wiki/Spy_pixel) by some email clients
- The signature must _only_ contain in-line CSS styles to ensure styling data is preserved when copied to clipboard
- Any images used should be resized using an image editor to the exact size you want, as some email clients do not support CSS width and height attributes

## Todo's/Help wanted

Pull requests are welcome, here are some ideas:

- Localstorage caching of user info for easier updating
- Specific degree formatting options for students
- Web URL feild
- Input validation (email, phone format)
- Message about Github repo, license
- Offer different styles?
