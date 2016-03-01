---
layout: page
title: Contato
permalink: /contact/
group: pages
description: "Envie uma mensagem, conecte-se comigo através das redes sociais e/ou solicite um orçamento."
js: "/assets/js/form-contact.js"
image:
  feature: /media/jw.jpg
  credit: adammacias
  creditlink: http://www.adammacias.com
  background: /media/bg-breakingbad-003.png
  background_outline: true
---

## Conteúdo

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

* * *

## Redes Sociais

Conecte-se, eu não mordo. :dog:

<nav class="nav nav-inline am-nav-social container">
  <a class="nav-link" href="#"><i class="fa fa-facebook fa-fw fa-2x" aria-hidden="true"></i><span class="sr-only">Facebook</span></a>
  <a class="nav-link" href="#"><i class="fa fa-github fa-fw fa-2x" aria-hidden="true"></i><span class="sr-only">GitHub</span></a>
  <a class="nav-link" href="#"><i class="fa fa-google-plus fa-fw fa-2x" aria-hidden="true"></i><span class="sr-only">Google Plus</span></a>
  <a class="nav-link" href="#"><i class="fa fa-instagram fa-fw fa-2x" aria-hidden="true"></i><span class="sr-only">Instagram</span></a>
  <a class="nav-link" href="#"><i class="fa fa-linkedin fa-fw fa-2x" aria-hidden="true"></i><span class="sr-only">LinkedIn</span></a>
  <a class="nav-link" href="#"><i class="fa fa-twitter fa-fw fa-2x" aria-hidden="true"></i><span class="sr-only">Twitter</span></a>
  <a class="nav-link" href="#"><i class="fa fa-wordpress fa-fw fa-2x" aria-hidden="true"></i><span class="sr-only">WordPress</span></a>
  <a class="nav-link" href="#"><i class="fa fa-codepen fa-fw fa-2x" aria-hidden="true"></i><span class="sr-only">Codepen</span></a>
</nav>

* * *

## Contatos

Inicie uma conversa. :speech_balloon:

<ul class="nav nav-inline am-nav-social">
  <li><i class="fa fa-envelope-o fa-fw fa-lgX" aria-hidden="true"></i> eu@adammacias.com</li>
  <li><i class="fa fa-facebook fa-fw fa-whatsapp" aria-hidden="true"></i> (+55) 11 9 8279-7191 <span class="small text-muted">(Horário Comercial)</span></li>
  <li><i class="fa fa-skype fa-fw fa-lgX" aria-hidden="true"></i> adam.requena.macias</li>
</ul>

* * *

## Mensagem / Orçamento

Use o formulário abaixo para enviar uma mensagem ou solicitar um orçamento.

<div class="container">
<div class="jumbotron p-y-3">
<form id="form-basic">
  <fieldset class="form-group" id="in-name">
    <label class="h5 m-b-2" for="in-name-value">Diga seu nome...</label>
    <input type="text" class="form-control form-control-lg" name="in-name-value" id="in-name-value" autofocus>
  </fieldset>
  <fieldset id="in-email" class="form-group">
    <label class="h5 m-y-2" for="in-email-value">Qual seu e-mail?</label>
    <input type="email" class="form-control form-control-lg" name="in-email-value" id="in-email-value">
  </fieldset>
  <fieldset id="in-subject" class="form-group">
    <label class="h5 m-y-2"><span class="getNameValue"></span>, o que você gostaria?</label>
    <div class="btn-group btn-group-lg" data-toggle="buttons">
      <label class="btn btn-secondary active in-subject-label" id="in-subject-label-message">
        <input type="radio" name="in-subject-value-message" id="in-subject-value-message" checked> Enviar Mensagem
      </label>
      <label class="btn btn-secondary in-subject-label" id="in-subject-label-budget">
        <input type="radio" name="in-subject-value-budget" id="in-subject-value-budget"> Solicitar Orçamento
      </label>
    </div>
  </fieldset>
  <fieldset id="in-budget" class="form-group">
    <label class="h5 m-y-2">Escolha serviços de seu interesse:</label>
    <div class="checkbox">
      <label>
        <input type="checkbox" name="in-budget[]" value="Identidade Visual">
        <span class="small">
        &mdash; <b>Identidade Visual</b> (Design) &nbsp;<i class="fa fa-fw fa-paint-brush"></i><br>
        <span class="text-muted">
        Grande e pequenas empresas estão regulamento criando ou redesenhando sua(s) marca(s), algumas radicalmente outras apenas modernizando. Mas o fato é que, uma empresa que inova, esta a um passo a frente de outras.
        </span>
        </span>
      </label>
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox" name="in-budget[]" value="Design de Interfaces">
        <span class="small">
        &mdash; <b>Design de Interfaces</b> (UI/UX) &nbsp;<i class="fa fa-fw fa-desktop"></i><br>
        <span class="text-muted">
        Desde de arquitetura da informação ao layout. Um projeto bem desenhado profissionalmente pode significar o sucesso do seu projeto.
        </span>
        </span>
      </label>
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox" name="in-budget[]" value="Website Estático">
        <span class="small">
        &mdash; <b>Website Estático</b> (Front-end) &nbsp;<i class="fa fa-fw fa-html5"></i><br>
        <span class="text-muted">
        Requer um investimento é menor. Recomendado para hotsites ou websites que não sofreram muitas atualizações.
        </span>
        </span>
      </label>
    </div>
    <div class="checkbox">
      <label>
        <input type="checkbox" name="in-budget[]" value="Website Dinâmico">
        <span class="small">
        &mdash; <b>Website Dinâmico</b> (Back-end) &nbsp;<i class="fa fa-fw fa-wordpress"></i><br>
        <span class="text-muted">
        Permite o usuário criar e gerenciar o conteúdo do website através de um painel administrativo.
        </span>
        </span>
      </label>
    </div>
  </fieldset>
  <fieldset id="in-budget-message" class="form-group">
    <label class="h5 m-y-2" id="in-budget-message-label">Descrição do projeto</label>
    <textarea class="form-control form-control-lg" id="in-budget-message-value" rows="5"></textarea>
    <small class="text-muted">Não se preocupe em economizar palavras.</small>
  </fieldset>
  <fieldset id="in-budget-money" class="form-group">
    <label class="h5 m-y-2" for="in-budget-money-value">Verba disponível para o investimento</label>
    <div class="input-group">
      <span class="input-group-addon">R$</span>
      <input type="text" class="form-control" id="in-budget-money-value" aria-label="Quantidade em Reais">
      <span class="input-group-addon">,00</span>
    </div>
  </fieldset>
  <fieldset id="in-message" class="form-group">
    <label class="h5 m-y-2" for="in-message-value">Mensagem</label>
    <textarea class="form-control form-control-lg" id="in-message-value" rows="3"></textarea>
  </fieldset>
  <button id="btn-form-contact" type="submit" class="btn btn-lg btn-block btn-primary m-t-2"><i class="fa fa-paper-plane fa-fw"></i> Enviar Mensagem</button>
  <button id="btn-form-budget" type="submit" class="btn btn-lg btn-block btn-primary m-t-2"><i class="fa fa-paper-plane fa-fw"></i> Solicitar Orçamento</button>
</form>
</div>
</div>
