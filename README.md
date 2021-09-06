**THIS IS A WORK IN PROGRESS PROJECT AND IT WILL ALWAYS BE. FEEL FREE TO GIVE YOUR FEEDBACK ANY TIME.**

Introduction TBD...

### Folder structure

```
├── concepts
│   ├── account
│   │   ├── components
│   │   ├── hooks
│   │   └── services
│   ├── auth
│   │   ├── hooks
│   │   └── services
│   ├── notification
│   │   └── hooks
│   ├── tweet
│   │   ├── components
│   │   ├── hooks
│   │   ├── models
│   │   └── services
│   └── user
│       └── hooks
├── layouts
├── router
├── screens
├── ui
│   ├── components
│   └── hooks
└── utils
```

#### /layouts

Components responsible for rendering the app layout (header, sidebar, footer…). They are imported only by screen components. It accepts a children component, which is going to be the main content of the screen. Example: CommonLayout, CleanLayout

#### /screens

Each component here is an entry point from a client-side route. Example: Home, Login, Feed

#### /concepts

Concepts are mostly related to the business. They are terms with a meaning for the team and users. Inside of the concepts folder, you are going to create a folder for each concept of the app. Let's use twitter as an example. We could say that "tweet" is a concept, “message” and "user" are other two. So, for each one, you could create a folder and put there everything that is related to this concept. The idea here is to keep related things close to each other and also improve reusability.

Tip: You don’t need to create reusable and uncoupled components since the start, just make sure you put it on the proper place, so it is going to be reachable for the whole team and the changes to make it reusable if needed can be made when necessary.

#### /ui

Generic components. Not related to business, only to user interface. Example: TextField, Dialog, Accordion, Panel.

#### /router (optional)

If you have to wrap a route component to extend its behaviour, you can create this folder and put it there. Example: PrivateRoute.

#### /utils
TBD...

### Subfolders

Each folder can have its own subfolders, but basically, the subfolders are there to split the files by type. Example: components, hooks, models, services

### Custom hooks

Creating custom hooks is a good approach to remove complexity away from components.
You begin thinking about what you need to provide to the component (hook API) and then you implement it, making sure you are following the contract expected by the component. Custom hooks also make refactoring easier because, the component that is using it doesn’t know about the implementation details. As long the hook keeps the same API, everything can be changed :)

### Tests

TBD...
