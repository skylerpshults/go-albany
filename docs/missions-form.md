# Missions team interest form

The static page lives at `missions/index.html` and is available at `/missions/` (hosts with directory index support normally redirect `/missions` there). Serve the repository root for local preview.

## Google Forms

The Missions Team Interest section embeds the Google-hosted form in a titled, lazy-loaded iframe. It fills the available width up to 960px and is centered. Its height is 1200px on desktop and 1600px on mobile to allow for wrapped content; iframe scrolling remains available for longer forms. Because Google serves the cross-origin content, this site cannot automatically measure its height. Review the iframe height if the Google Form changes.

The “Open the form in a new tab” link below the embed opens the same form directly in a new tab and remains available when embedding is blocked.

Google Forms handles all fields, validation, and submissions. Manage questions, access permissions, responses, and notification settings in Google Forms. No backend, database, API credentials, or email service is used by this site.

To replace the form, update both the iframe URL (`?embedded=true`) and the fallback link in `missions/index.html`. Check that the intended visitors can access the form with the permissions configured in Google Forms.

Shared branding and mobile navigation use `assets/css/site.css` and `assets/js/navigation.js`; page-specific styles use `assets/css/missions.css`. Both HTML pages contain navigation markup and already link to the missions page.
