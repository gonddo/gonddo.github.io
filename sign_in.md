---
layout: home
title: Sign In
---

<section id="gnd-sign-in-page-section">
  <div class="gnd-sign-in-form-container">
    <form class="gnd-sign-in-form" action="https://formspree.io/gonddobr@gmail.com" method="POST">
      <input class="gnd-sign-in-field" 
        id="customer-name" type="text" name="name"
        placeholder="Informe seu nome" required
        oninvalid="this.setCustomValidity('Por favor insira o seu nome completo')"
        oninput="setCustomValidity('')"
        title="Nome Completo">
      <input class="gnd-sign-in-field"
        id="customer-email" type="email" name="_replyto"
        placeholder="Informe seu email" required
        oninvalid="this.setCustomValidity('Por favor insira o seu email')"
        oninput="setCustomValidity('')"
        title="Email">
      <input class="gnd-sign-in-field"
        id="brand-name" type="text" name="Marca"
        placeholder="Sua marca" required
        oninvalid="this.setCustomValidity('Precisamos saber o nome da sua marca :)')"
        oninput="setCustomValidity('')"
        title="Nome da sua Marca">
      <input class="gnd-sign-in-field"
        id="city" type="text" name="Cidade"
        placeholder="Cidade" required
        oninvalid="this.setCustomValidity('Em qual cidade você atua?')"
        oninput="setCustomValidity('')"
        title="Cidade em que atua">
      <div class="gnd-sign-in-radio">
      <span>Fabricante ou Comerciante?</span>
        <div>
          <input type="radio"
             id="occupation-field" name="field"
             value="Fabricante"
             required
             oninvalid="this.setCustomValidity('Precisamos dessa informação para melhor atendê-lo')"
             oninput="setCustomValidity('')"
             title="Selecione a área em que atua">
          <label for="occupation-field">Fabricante</label>
        </div>
        <div>
          <input type="radio"
             name="occupation-field" name="field"
             value="Comerciante" required
             oninvalid="this.setCustomValidity('Precisamos dessa informação para melhor atendê-lo')"
             oninput="setCustomValidity('')"
             title="Selecione a área em que atua">
          <label for="occupation-field">Comerciante</label>
        </div>
      </div>
      <input class="gnd-sign-in-submit-btn" type="submit" value="Cadastrar">
    </form>
  </div>
</section>
