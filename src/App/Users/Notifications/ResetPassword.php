<?php
namespace App\Users\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class ResetPassword extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(
        public string $token
    ) {}

    /**
     * Get the notification's delivery channels.
     */
    public function via(mixed $notifiable): array
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(mixed $notifiable): MailMessage
    {
        $reset_url = url('/create-new-password?token=' . $this->token);
        $app_name = get_settings('app_title') ?? 'GoLink';

        return (new MailMessage)
            ->subject($app_name . __t('reset_password_subject'))
            ->view('mails.notifications.reset-password-email', [
                'url' => $reset_url,
                //'name' => $notifiable->name,
                //'avatar' => $notifiable->avatar,
            ]);
            /*->greeting(__t('hello'))
            ->line(__t('reset_password_line_1'))
            ->action(__t('reset_password'), $reset_url)
            ->line(__t('reset_password_line_2'))
            ->salutation(__t('salutation') . ', ' .  $app_name);*/
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
        ];
    }
}
