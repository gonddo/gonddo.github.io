---
layout: home
title: Sign In
---

<section id="gnd-sign-in-page-section">
  <div class="gnd-sign-in-form-container">
    <form class="gnd-sign-in-form" action="https://formspree.io/gonddobr@gmail.com" method="POST">
      <input class="gnd-sign-in-field" id="customer-name" type="text" name="name" placeholder="Informe seu nome">
      <input class="gnd-sign-in-field" id="customer-email" type="email" name="_replyto" placeholder="Informe seu email">
      <input class="gnd-sign-in-field" id="brand-name" type="text" name="Marca" placeholder="Sua marca">
      <input class="gnd-sign-in-field" id="city" type="text" name="Cidade" placeholder="Cidade">
      <div class="gnd-sign-in-radio">
      <span>Fabricante ou Comerciante?</span>
        <div>
          <input type="radio" id="occupation-field" name="field" value="Fabricante">
          <label for="occupation-field">Fabricante</label>
          </div>
          <div>
          <input type="radio" name="occupation-field" name="field" value="Comerciante">
          <label for="occupation-field">Comerciante</label>
        </div>
      </div>
      <input class="gnd-sign-in-submit-btn" type="submit" value="Cadastrar">
    </form>
  </div>
</section>
