To install:
- npm install
- npm run build
- upload dist/ to chrome extension
- navigate to a zendesk ticket, e.g. https://digitalbrain.zendesk.com/agent/tickets/341

Example screenshot:
TODO


Known issues:
- Sometimes injection script fails to find the DOM node to inject, in which case
you will not see the buttons and toast. Suspect a potential race in the
injection process. Some mitigation being put in place to solve this but still
doesn't always work.
