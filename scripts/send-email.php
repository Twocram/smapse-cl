<?php
$email = $_POST['email'];

$to = "2002maslovartem@gmail.com";
$headers = "From: <$email>\r\n" .
    "Reply-To: $email\r\n" .
    "Content-Type: text/plain; charset=utf-8\r\n" .
    "X-Mailer: PHP/" . phpversion();

if(mail($to, "Уведомление о подписке", "$email оформил подписку")) {
    $response = array('message' => 'Сообщение отправлено!');
} else {
    $response = array('message' => 'Не удалось отправить сообщение!');
}

echo json_encode($response);
