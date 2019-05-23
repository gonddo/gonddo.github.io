---
layout: home
title: Sign In
---

<section id="gnd-sign-in-page-section">
  <div class="gnd-sign-in-form-container">
  <div class="gnd-sign-in-form">
    <form action="https://formspree.io/gonddobr@gmail.com" method="POST">
      <label for="customer-name">Nome:</label>
      <input id="customer-name" type="text" name="name" placeholder="Informe seu nome">
      <label for="customer-email">Email:</label>
      <input id="customer-email" type="email" name="_replyto" placeholder="Informe seu email">
      <span>Fabricante ou Comerciante?</span>
      <div>
        <input type="radio" id="occupation-field" name="field" value="Fabricante">
        <label for="occupation-field">Fabricante</label>
      </div>
      <div>
        <input type="radio" name="occupation-field" name="field" value="Comerciante">
        <label for="occupation-field">Comerciante</label>
      </div>
      <label for="brand-name">Nome da sua marca:</label>
      <input id="brand-name" type="text" name="Marca" placeholder="Sua marca">
      <label for="city">Cidade em que atua:</label>
      <input id="city" type="text" name="Cidade" placeholder="Cidade">
      <input type="submit" value="Enviar">
    </form>
    </div>
  </div>
</section>
