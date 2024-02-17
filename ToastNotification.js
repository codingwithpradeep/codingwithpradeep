// toastNotification.js

let ToastNotification = (function() {
    // Define CSS styles
    var cssStyles = `
    .notification {
        visibility: hidden;
        min-width: 250px;
        background-color: #333;
        color: #fff;
        text-align: center;
        border-radius: 2px;
        padding: 16px;
        position: fixed;
        z-index: 1;
        top: 0%;
        right: 30px;
        margin-top:10px;
        transform: translateX(-50%);
      }
      .show {
        visibility: visible;
        animation: fadein 0.5s, fadeout 0.5s 2.5s;
      }
      
      .info {
        background-color: #3498db;
      }
      
      .warning {
        background-color: #f39c12;
      }
      
      .error {
        background-color: #e74c3c;
      }
      
      @keyframes fadein {
        from {opacity: 0;}
        to {opacity: 1;}
      }
      
      @keyframes fadeout {
        from {opacity: 1;}
        to {opacity: 0;}
      }    
    `;

    // Append CSS to document head
    var styleElement = document.createElement('style');
    styleElement.innerHTML = cssStyles;
    document.head.appendChild(styleElement);

    // Function to show notification
    function showNotification(message, type) {
        var notification = document.getElementById("notification");
        var validTypes = ['info', 'warning', 'error'];

        // Validate type
        if (!validTypes.includes(type)) {
            console.error("Invalid notification type. Valid types are: 'info', 'warning', 'error'.");
            return;
        }

        // Set message and type
        notification.textContent = message;
        notification.className = "notification " + type;
        notification.classList.add("show");

        // Remove notification after 3 seconds
        setTimeout(function(){
            notification.classList.remove("show");
        }, 5000);
    }

    return {
        showNotification: showNotification
    };
})();
