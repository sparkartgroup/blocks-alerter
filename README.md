Alerts is a UMD JavaScript module for displaying arbitrary messaging to communicate certain states in a web app.

An `Alerter()` instance does two things;
1) Injects alert messages along with markup templates into your page, and removes the markup when the alerts are dismissed.
2) Emits events when alerts are created or dismissed.

# Getting the Module
You can get the module in any one of the following ways;
- Download [the latest release](https://github.com/blocks/alerts/releases) from GitHub
- Or install with npm; `npm install alerter`
- Or install with Bower; `bower install alerter`

# Quick Start
To get started, you'll need to include the script on your page. To create an `Alerter()` instance you can do;

```
var myAlerter = new Alerter({
  appendTo: 'body'
});
```

You can then create an alert like this;

`var myAlert = myAlerter.create(message, 'warning');`

# Advanced Usage

## Options
There are several options available when you initialize a new `Alerter()` object;

### `appendTo`
A DOM element, jQuery element, or selector string to refer to the placeholder element, where alerts will be injected. By default, alerts will be injected at the top of the `<body>`.

### `template`
Out of the box, the module will generate BEM markup with the namespace `alert-message` that contains all of the markup needed to display the alert. If you want to customize the markup, you can pass in a *compiled* handlebars template. (Defaults to `false`).

## Methods

### `Alerter.create(message, type)`
Creates a new alert DOM object and injects it into the page via the `Alerter()` object.
- `message` **(Required)** this is a string with the message you want to display. You can use plain text or an HTML string.
- `type` is a string and allows you to choose the class of alert which can be used for CSS styling, attaching events, etc. This string will be combined with the BEM namespace and used to generate a BEM class name in the inserted markup. For example, passing `'warning'` as the type will result in the alert element having a class name of `alert-message--warning`. The default is `'info'`.

## Events
Every instance of `Alerter()` will emit events when an alert is created or dismissed. You can listen for these events to assist with transitions, modal dialogs, cleanup, etc in your app.

### `alertCreated`
Fires whenever an alert is created. Contains a payload object with the alert message and other data.

### `alertDismissed`
Fires whenever an alert message is dismissed. Contains a payload object with the unique id of the alert that was dismissed.

# Testing the Module
If you want to build and test this module yourself, you can do so by running `gulp` to build the module and start a server or `gulp test` to build the module, start a server, open a tunnel to BrowserStack and run mocha tests. Before you can run mocha tests, you'll have to define a BrowserStack key in both `/tests/mocha-test.js` and `/gulp/startBrowserStackTunnel.js`.