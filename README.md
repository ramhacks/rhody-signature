# rhody-signature

An online email signature creator tool. Allows a user to fill in their contact details, and copy the signature to their system clipboard for setting an email signature in Gmail, Outlook, etc.

**Live Site**: https://signature.rhodyra.ms/

**Contributors**: Ben Dahrooge <bdahrooge@uri.edu>

**License**: MIT License 

## Getting started
1. To run locally, install all npm dependencies by running `npm i`.
2. Start the development server by running `npm run dev`
3. Build a static html version by running `npm run build`


## Adapting for use at your organization 
- Theme colors can be adjusted in Home.module.css
- Logos/images should be uploaded to a CDN/bucket storage (e.g., Amazon S3, Google Storage) if possible, to ensure they are not mistaken for trackers by some email clients
- The signature must *only* contain in-line CSS styles to ensure styling data is preserved when copied to clipboard