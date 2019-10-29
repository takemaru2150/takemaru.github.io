<?php
mb_language("Japanese");
mb_internal_encoding("UTF-8");
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$to = 'takemaru2150@gmail.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Takeshi Sakurai のお問い合わせフォーム:  $name";
$email_body = "あなたのウェブサイトの連絡フォームから新しいメッセージを受け取りました。\n\n"."＝＝＝＝＝＝＝＝＝>＝＝＝:\n\nお名前: $name\n\nメールアドレス: $email_address\n\n電話番号: $phone\n\nメッセージ:\n$message";
$headers = "From: kjj418sakurai@icloud.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>