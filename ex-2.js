class Notification { 
    constructor(notificationId, createdTime, content, receiver) {
        this.notificationId = notificationId;
        this.createdTime = createdTime;
        this.content = content;
        this.receiver = receiver;
    }
    send() {
        console.log(`Notification has been sent to ${this.receiver}`);
    }
}

class EmailNotification extends Notification { 
    constructor(notificationId, createdTime, content, receiver) {
        super(notificationId, createdTime, content, receiver);
    }
    send() {
        console.log(`Notification has been sent to ${this.receiver}`);
    }
}

class SMSNotification extends Notification { 
    constructor(notificationId, createdTime, content, phoneNumber) {
        super(notificationId, createdTime, content);
        this.phoneNumber = phoneNumber;
    }
    send() {
        console.log(`Notification has been sent to ${this.phoneNumber}`)
    }
}

const email = new EmailNotification(
    "email001",
    "01/01/2024 12:00:00",
    "This is your email.",
    "test01@testmail.com"
);

const sms = new SMSNotification(
    "sms001",
    "02/01/2024 13:00:00",
    "This is your SMS.",
    "098-765-4321"
);

email.send();
sms.send();
