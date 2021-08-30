# Document Structure

All working files are found under `src` folder. Any changes made to the `dist` folder will be overwritten on new builds.

## <span style="color:#f3ef07;">Structure</span>

The folder structure of this repository.

- `/`
  - `.vscode`
  - `dist`
  - `src`
    - `_data`
    - `_includes`
      - `components`
      - `layouts`
      - `partials`
    - `templates`
  - `.eleventy.js`
  - `.gitignore`
  - `.prettierignore`
  - `.prettierrc`
  - `package-lock.json`
  - `package.json`
  - `README.md`

## <span style="color:#f3ef07;">VS Code<span>

Contains set up files for working with VS Code.

1. `settings.json`
   - At the moment, cspell is not in use (Coming Soon).

## <span style="color:#f3ef07;">Dist<span>

Contains set up files for working with VS Code.

1. `/templates`
   - Output folder for the email templates.
2. `index.html`
   - The front-end markup for the website.

## <span style="color:#f3ef07;">Docs<span>

Our documentation for this written in Markdown files.

1. `struture.md`
   - This list out the folder/file structure and what each file is used for.

## <span style="color:#f3ef07;">SRC</span>

This is our working directory. Any updates should be made to files in this.

1. `index.njk`
   - Front-page for the repo (Not for email).

### <span style="color:#ef404d;">Data</span>

- This folder contains our config file and a template version of the affiliate loader file.

1. `affiliates.json`
   - Copy of the `affiliate_loader.json` file we use on Sailtru.
   - Will output the data from this file when running `npm run dev`.
   - Will use Sailthu variables when running `npm run build`.
2. `config.js`
   - Project varibles like the social images, unsub link, privacy links.
   - You can access all of the variables by outputting `{{config.unsub}}` in any of the `njk` files.
     - `author`
     - `description`
     - `environment`
     - `fbLogo`
     - `igLogo`
     - `privacy`
     - `title`
     - `twLogo`
     - `unsub`
     - `url`

### <span style="color:#ef404d;">Includes</span>

This folder contains our config file and a template version of the affiliate loader file.

#### <span style="color:#ffe06a;">Components</span>

This folder contains files of components that are reuseable throughout the emails.

1. `banner-image.njk`
   - Code for banner image with no button.
2. `banner.njk`
   - Code for banner image with a button.
3. `button.njk`
   - Code for bulletproof button.
4. `event-box.njk`
   - Code for event box.
5. `sidebox.njk`
   - Code that places a floating sidebox on the top right.
6. `topper-bg.njk`
   - Code to add a topper section to any email template.
   - To add a topper to any template, you need to add front-matter
     - Add `topper: true` to output.

#### <span style="color:#ffe06a;">Layouts</span>

Contains the base layouts that are wrapping files.

1. `base.njk`
   - `base.njk` is for the front-end `index.html`.
2. `email-base.njk`
   - `email-base.njk` is for the templates being used in the `templates` directory.

#### <span style="color:#ffe06a;">Partials</span>

- Contains elements that are only used once per email like logo, head, footer, styles.

1. `footer.njk`
   - Contains all of the code for the footer.
2. `head.njk`
   - Contains all of the code for the head.
3. `logo.njk`
   - Code for the logo.
4. `preheader.njk`
   - Code for loading pre-header spacing and `{beacon}` only on `build`.
5. `styles.njk`
   - Code for the `<style>` found in the head.
6. `wrapper.njk`
   - This code wraps the content of the email.
   - Content from template file will be output where `{{ content | safe }}` is in this file.

### <span style="color:#ef404d;">Templates</span>

- This folder contains our config file and a template version of the affiliate loader file.

1. `banner.njk`
   - Banner template has a full-width banner image and button.
2. `events.njk`
   - Events template has a full-width banner image and box for displaying the event details.
3. `sidebox.njk`
   - Sidebox template has a floating box with image and button that appear at the top for mobile.
4. `stardard.njk`
   - Standar template is a simple template with the logo, button and signature.
5. `templates.json`
   - File where we can pass data points that are shared across all of the templates. These can be overwritten in the template's front-end file.
