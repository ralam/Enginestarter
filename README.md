# Enginestarter

Best viewed in Chrome.

## Description

![site](https://github.com/ralam/Enginestarter/blob/master/app/assets/images/screenshot.jpg)

Enginestarter is a Kickstarter-inspired crowdfunding site built on Rails and Backbone. To experience the full functionality of the site, log into the guest account using the link in the top right of the navbar.

Users can:
 - Create new accounts and/or log in using the guest account.
 - View active projects.
 - Filter which projects by category.
 - View supporter levels available for each project.
 - Support projects at various reward levels (restricted to once per reward level per project).
 - Support a project multiple times at different reward levels.
 - View the active projects they've supported from their user profile page.
 - Create new projects.
 - Set as many rewards as they want per project (minimum of one).
 - Edit the description and image of their active projects.
 - Add new rewards to their active projects via the edit form.

## Minimum Viable Product
Users can:

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Create projects
- [x] View projects
- [x] Support projects
- [x] Discover projects
- [x] Filter projects by category

## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, Project Creation (~1 day)
I will implement user authentication in Rails. By the end of this phase, users
will be able to create projects using a simple text form in a Rails view. The most
important part of this phase will be pushing the app to Heroku and ensuring that
everything works before moving on to Phase 2.

### Phase 2: Viewing Projects (~2 days)
I will add API routes to serve project data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to create and view projects.

### Phase 3: Editing and Displaying Projects (~2 days)
I plan to use third-party libraries to add functionality to the `ProjectForm`
and `ProjectShow` views in this phase. First I'll need to add a Markdown editor
to the `ProjectForm`, and make sure that the Markdown is properly escaped and
formatted in the `ProjectShow` view. I also plan to integrate Cloudinary for
file upload so users can add images to their projects.

### Phase 4: Supporting Projects and Project Updates (~2 days)

I will implement the ability for users to support projects by setting up the
necessary Backbone routes. Users should not be able to support their own
projects or projects that reached their deadline. Projects should update their
goal information appropriately as users support them. Users can view projects
they have supported on a basic profile page.

### Phase 5: Project Categories (~2 days)
I'll add `category` route to the Projects controller and a `CategoryIndex`
composite view and a `CategoryShow` view to the Backbone views. This will use
the `projects` collection and fetch from the `category` routes.

### Bonus Features (TBD)
- [ ] Users receive updates when projects hit their goal/deadline
- [ ] Users can comment on Projects
- [ ] User avatars
- [ ] Users can share projects via email or social media
