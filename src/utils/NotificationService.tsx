import { Platform } from 'react-native';
import PushNotification, { Importance } from 'react-native-push-notification';

export const configure = () => {
    PushNotification.configure({
        onAction: function (notification) {
            if (notification.action === 'Accept') {
                console.log('Alarm Snoozed');
            } else if (notification.action === 'Reject') {
                console.log('Alarm Stopped');
            } else {
                console.log('Notification opened');
            }
        },
        requestPermissions: Platform.OS === 'ios'
    });

    PushNotification.createChannel(
        {
            channelId: 'study-reminder-channel', // Channel ID for Android
            channelName: 'Study Reminder', // Channel name
            importance: Importance.HIGH,
            vibrate: true, // Vibration option for Android
        },
        (created) =>
            console.log(`Channel 'study-reminder-channel' created: ${created}`)
    );
};

export const scheduleNotification = (subject: string, time: Date) => {
    const notificationId = Math.random().toString();

    PushNotification.localNotificationSchedule({
        id: notificationId,
        channelId: 'study-reminder-channel', // Channel ID for Android
        title: 'Study Reminder',
        message: `It's time to study ${subject}!`,
        date: time,
        actions: ['Accept', 'Reject'],
    });
};
