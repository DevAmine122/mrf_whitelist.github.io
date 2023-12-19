function sendMessage() {
    var nameInput = document.getElementById('nameInput').value;

    if (nameInput.trim() !== '') {
        // Replace 'WEBHOOK_URL' with your actual Discord webhook URL
        var webhookURL = 'https://discord.com/api/webhooks/1186776986635468911/fLE2BMdzuMKMnXy4Ck8v3gwO1bBNIYPGHG4x94xdS99gHNMdH0Rb-LeAtxlk23eZ-Vvo';

        var data = {
            content: '!Whitelist ' + nameInput
        };

        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => console.log('Message sent:', result))
        .catch(error => console.error('Error sending message:', error));
    }
}