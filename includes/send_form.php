<?php

require_once ("phpmailer/class.phpmailer.php");
require_once ("phpmailer/class.smtp.php");
require_once ("phpmailer/class.pop3.php");

error_reporting(E_ERROR | E_PARSE);

//
// Settings
//
$smtp_host = 'smtp.gmail.com';
$smtp_user = 'clientes@adammacias.com.br';
$smtp_pass = '741852963abc';

//
// Filter POST data
//
#extract($_POST);
$data = array();
foreach ($_POST['data'] as $key => $value) {
  $data[$value['name']] = filter_var(trim($value['value']), FILTER_SANITIZE_STRING);;
}
$data['email'] = filter_var($data['email'], FILTER_SANITIZE_EMAIL);

//
// Validate data
//
if( !empty($data['fieldfake']) ){
  die('wow');
}
elseif ( empty($data['name']) || empty($data['email']) || empty($data['message']) ) {
  $response = array(
      'status' => 'error',
      'text' => 'Preencha todos os campos obrigatórios. '// . json_encode($data),
    );
}
elseif ( filter_var($data['email'], FILTER_VALIDATE_EMAIL) == false ) {
    $response = array(
      'status' => 'error',
      'text' => 'Preencha um e-mail válido'
    );
}
else {

  $mail_subject = 'Nova mensagem - '. $data['name'];

  $mail_from = $smtp_user;
  $mail_from_name ='Website - adammacias.com.br';

  $mail_replay = $data['email'];
  $mail_replay_name = $data['name'];

  $mail_to = 'eu@adammacias.com';
  $mail_to_name ='Adam Macias';

  $body = "## Informações \n\n";
  $body .= "Nome: $name \n";
  $body .= "E-mail: $email \n";
  $body .= "Mensagem: \n $message \n\n";
  /*$body .= "## Produtos: \n";

  foreach ($produtos_cats as $cat_key => $cat_value) {
    if( is_array($produto[$cat_key]) ) {
      $body .= "\n** $cat_value **: \n";
      foreach ($produto[$cat_key] as $key => $value) {
        $body .= " - $value \n";
      }
    }
  }*/

  //Tell PHPMailer to use SMTP
  $mail = new PHPMailer();
  $mail->CharSet = "UTF-8";
  $mail->IsSMTP();

  //Enable SMTP debugging
  // 0 = off (for production use)
  // 1 = client messages
  // 2 = client and server messages
  $mail->SMTPDebug = 0;

  //Ask for HTML-friendly debug output
  $mail->Debugoutput = 'html';

  //Set the hostname of the mail server
  $mail->Host = $smtp_host;
  // use
  // $mail->Host = gethostbyname('smtp.gmail.com');
  // if your network does not support SMTP over IPv6

  //Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
  $mail->Port = 587;

  //Set the encryption system to use - ssl (deprecated) or tls
  #$mail->SMTPSecure = 'tls';

  //Whether to use SMTP authentication
  $mail->SMTPAuth = true;

  //Username to use for SMTP authentication - use full email address for gmail
  $mail->Username = $smtp_user;

  //Password to use for SMTP authentication
  $mail->Password = $smtp_pass;

  //Set who the message is to be sent from
  $mail->setFrom($mail_from, $mail_from_name);

  //Set an alternative reply-to address
  $mail->addReplyTo($mail_replay, $mail_replay_name);

  //Set who the message is to be sent to
  $mail->addAddress($mail_to, $mail_to_name);

  //Set the subject line
  $mail->Subject = $mail_subject;

  //Set the body
  $mail->Body = $body;

//Send mail
if ( !$mail->Send() ) {
  $response = array(
            'status' => 'error',
            'text' => 'Desculpe! Ocorreu um erro durante o envio. ' . $mail->ErrorInfo;
        );
}else{
  $response = array(
            'status' => 'success',
            'text' => 'Sua menssagem foi enviada com sucesso. Obrigado!'
        );
}

die( json_encode($response) );





/*




$smtp_host = "smtp.gmail.com";//"karenmaia.com.br";//"smtp.uni5.net"; #"smtp.uni5.net";
$smtp_user = "clientes@adammacias.com.br";//"karenmai";//"clientes@fabricandoweb.com.br"; #"clientes@.com.br";
$smtp_pass = "741852963abc";//"do7w]em";//"123456"; #"123456";
$fromail = "clientes@adammacias.com.br";

$destinatario = 'contato@karenmaia.com.br'; //'contato@karenmaia.com.br';
$destinatario_dois = 'eu@adammacias.com'; //'adam_sfc@hotmail.com';


extract($_POST);
extract($_GET);


if (empty($email) || empty($name) || empty($message)) { echo 'Hey! Por favor, preencha todos os campos! :)';  }

else {

#if($_POST["template"]=='faleconosco')
$corpo = "<html><head></head><body><center><div style='font-family:Trebuchet MS, Arial, Helvetica, sans-serif; width:750px; margin-left:0 auto; color:#666; margin-right:0 auto; margin:auto'><h2 style='margin:0 auto; font-size:23px; font-weight:normal; text-align:center'>Mensagem enviada atrav&eacute;s do website</h2><br clear='all'/><table width='700' border='1' align='center' cellspacing='5' bgcolor='#F2F2F2'><tr bgcolor='#FFFFFF'><td width='200'><strong>Nome</strong></td>
<td width='475'>$name</td></tr><tr bgcolor='#FFFFFF'><td><strong>E-mail</strong></td><td>$email</td></tr><tr bgcolor='#FFFFFF'><td><strong>Mensagem</strong></td><td>$message</td></tr></table></div></center></body></html>";

date_default_timezone_set('America/Sao_Paulo'); // Acerta o horário caso seu servidor caso esteja com horário diferente do seu fuso horário.
$mail = new PHPMailer();
$SMTPDebug->false;
$mail->SetLanguage("br", "language/");
$mail->IsSMTP(); // Configura o objeto para usar SMTP
//$mail->SMTPDebug = 2; // Debug do SMTP (para teste)
// 1 = erros e mensagens
// 2 = somente mensagens


#$mail->From = $fromail;
#$mail->FromName = $name;

#$mail->Mailer = "smtp";
$mail->SMTPAuth = true;// ativa a autenticação SMTP. O Gmail exige autenticação, precisamos disso
$mail->SMTPSecure = "ssl";// Configura o tipo de criptografia do SMTP do Gmail, no caso, SSL
$mail->Host = $smtp_host;
$mail->Port = 465;
$mail->Username = $smtp_user;
$mail->Password = $smtp_pass;


$mail->SetFrom($fromail, $name);
$mail->AddReplyTo($email, $name);



#$mail->IsHTML(true);
#$mail->Body = $corpo;
$mail->AltBody = "Para visualizar a mensagem, por favor, use um cliente de e-mail compatível/configurado para ver mensagens HTML!"; // Mensagem alternativa caso o destinatário. Veja o e-mail em um aplicativo sem suporte ou não configurado para ver mensagens HTML
$mail->MsgHTML($corpo); // Configura o conteúdo do e-mail


$mail->Subject = 'Mensagem do Website - karenmaia.com.br';
$mail->AddAddress($destinatario);
$mail->AddBCC($destinatario_dois);



/* Verifica se email sera enviado
if( !$mail->Send() )
  { echo 'Desculpe! Ocorreu um erro durante o envio.'; }
else
  { echo 1; }

}
