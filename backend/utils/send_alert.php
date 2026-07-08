<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . "/../PHPMailer/src/Exception.php";
require __DIR__ . "/../PHPMailer/src/PHPMailer.php";
require __DIR__ . "/../PHPMailer/src/SMTP.php";

function sendAlert($subject, $message)
{
    $mail = new PHPMailer(true);

    try {

        $mail->isSMTP();
        $mail->Host = "smtp.gmail.com";
        $mail->SMTPAuth = true;

        // Gmail Account
        $mail->Username = "prf.sarthak@iiita.ac.in";

        // Gmail App Password (16 characters, no spaces)
        $mail->Password = "rmsaxgacgyvjduyo";

        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        $mail->setFrom("prf.sarthak@iiita.ac.in", "BDA Lab Admin");

        // Admin Email
        $mail->addAddress("prf.sarthak@iiita.ac.in");

        $mail->isHTML(true);

        $mail->Subject = $subject;

        $ip = $_SERVER["REMOTE_ADDR"] ?? "Unknown";

        $mail->Body = "
            <h2>BDA Lab Security Alert</h2>

            <p>{$message}</p>

            <hr>

            <b>Time:</b> " . date("d-m-Y h:i:s A") . "<br>

            <b>IP Address:</b> {$ip}
        ";

        // DO NOT ENABLE SMTP DEBUG IN PRODUCTION
        // $mail->SMTPDebug = 2;

        $mail->send();

        return true;

    } catch (Exception $e) {

        // Optional: write errors to a log file instead of printing them
        error_log("PHPMailer Error: " . $mail->ErrorInfo);

        return false;
    }
}