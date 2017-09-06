# Atom Notifications Browser™️

Atom notifications are wonderful, so why don't use them in browser applications,or just any other app?
With this plugin you can use them as you would use in atom.

## Install

(this plugin requires less and jquery so inser the cdn or local href)
Include these lines in your html

```
<script src='https://code.jquery.com/jquery-3.2.1.min.js'></script>
<link rel="stylesheet/less" type="text/less" href="notifications.less">
<script src="https://cdnjs.cloudflare.com/ajax/libs/less.js/2.7.2/less.js"></script>
<script src="notifications.js"></script>

```

## Usage

```
atom.notifications.addError("text");
atom.notifications.addSuccess("text");
atom.notifications.addWarning("text");
atom.notifications.addInfo("text");
```
