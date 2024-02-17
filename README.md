# ToastNotification Library

The `ToastNotification` library allows you to easily display notification toasts on your web page.

## Getting Started

To use the `ToastNotification` library, follow these steps:

### Step 1: Include the Library

Include the `toastNotification.js` file in your HTML file:

```html
<script src="toastNotification.js"></script>
```

### Step 2: Display a Notification
You can display a notification by calling the `showNotification()` function:
```html
ToastNotification.showNotification("This is a sample notification.", "info");
```
The showNotification() function accepts two parameters:

- `message`: The message content of the notification.
- `type`: The type of notification, which can be 'info', 'warning', or 'error'.

# Example Usage
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notification Example</title>
    <link rel="stylesheet" href="toastNotification.css">
    <script src="toastNotification.js"></script>
</head>
<body>
    <button onclick="showInfoNotification()">Show Info Notification</button>
    <button onclick="showWarningNotification()">Show Warning Notification</button>
    <button onclick="showErrorNotification()">Show Error Notification</button>

    <div id="notification" class="notification"></div>

    <script>
        function showInfoNotification() {
            ToastNotification.showNotification("This is an info message.", "info");
        }

        function showWarningNotification() {
            ToastNotification.showNotification("This is a warning message.", "warning");
        }

        function showErrorNotification() {
            ToastNotification.showNotification("This is an error message.", "error");
        }
    </script>
</body>
</html>
```

