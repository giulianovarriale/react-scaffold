**THIS IS A WORK IN PROGRESS PROJECT AND IT WILL ALWAYS BE. FEEL FREE TO GIVE YOUR FEEDBACK ANY TIME.**

Introduction TBD...

### Folder structure

#### /layouts

Imported by a screen component to render a layout (header, sidebar, footer). It accepts a children component, which is going to be the main content of a screen. Example: CommonLayout, CleanLayout

#### /screens

All components rendered directly by a route. Example: Home, Login, Feed

#### /concepts

Concepts are related to business. They are terms with a meaning for the users. Let's use twitter as an example. We could say that "tweet" is a concept and "user" another one.

#### /ui

Generic components. Not related to the business. Example: TextField, Dialog, Accordion, Panel.

#### /router (optional)

If you have to wrap a route component to extend its behaviour, you can create this folder and put it there. Example: PrivateRoute.

### Subfolders

TBD...

### Custom hooks

Creating custom hooks is a good way to remove complexity from components.
You define what the hook is going to provide (API) and then you just consume it on the component.
Custom hooks also make refactorings easier because the component that is using it don't know about the
implementation details. As long the hook keeps the same API, everything can be changed :).
