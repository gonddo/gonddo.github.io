---
layout: home
---
<section id="gnd-cover-image-section">
</section>

<section id="gnd-institutional-activities">
  <div class="gnd-institutional-retailer">
    <div class="gnd-institutional-title">
      <h2>Varejista</h2><i class="material-icons">store</i>
    </div>
    <div class="gnd-institutional-advantages">
      <ul class="gnd-institutional-advantages-list">
        <li>Encontre produtos naturais e compre no atacado dos melhores fornecedores com <strong>Frete Grátis</strong></li>
      </ul>
    </div>
    <div class="gnd-institutional-advantages-links">
      <a class="gnd-sign-in-link" href="/cadastro-varejista">Quero comprar</a>
    </div>
    <div class="gnd-institutional-learn-more">
      <span onclick="scrollAndPlayVideo()">Saiba mais...</span>
    </div>
  </div>
  <div class="gnd-institutional-supplier">
    <div class="gnd-institutional-title">
      <h2>Fornecedor</h2><i class="material-icons">business</i>
    </div>
    <div class="gnd-institutional-advantages">
      <ul class="gnd-institutional-advantages-list">
        <li>Conecte-se com mais varejistas e aumente sua rede de distribuição</li>
      </ul>
    </div>
    <div class="gnd-institutional-advantages-links">
      <a class="gnd-sign-in-link" href="/cadastro-fornecedor">Quero vender</a>
    </div>
  </div>
</section>

<section id="gnd-inspiration">
  <h2 class="gnd-inspiration-title">Como funciona?</h2>
  <div class="gnd-inspiration-item">
    <div class="gnd-inspiration-container">
      <div class="gnd-inspiration-number">
        <span>1</span>
      </div>
      <div class="gnd-inspiration-item-content">
        <div class="gnd-inspiration-item-title">
          <h3>Amplo sortimento</h3>
        </div>
        <div class="gnd-inspiration-item-text">
          <p>Tenha acesso a muitas marcas e produtos que mais se identificam com sua loja.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="gnd-inspiration-item">
    <div class="gnd-inspiration-container">
      <div class="gnd-inspiration-number">
        <span>2</span>
      </div>
      <div class="gnd-inspiration-item-content">
        <div class="gnd-inspiration-item-title">
          <h3>Melhores prazos</h3>
        </div>
        <div class="gnd-inspiration-item-text">
          <p>Tenha até 60 dias de prazo para pagamento e escolha seu parcelamento.</p>
        </div>
      </div>
    </div>
  </div>
  <div class="gnd-inspiration-item">
    <div class="gnd-inspiration-container">
      <div class="gnd-inspiration-number">
        <span>3</span>
      </div>
      <div class="gnd-inspiration-item-content">
        <div class="gnd-inspiration-item-title">
          <h3>Compras mais simples</h3>
        </div>
        <div class="gnd-inspiration-item-text">
          <p>Simplifique seu processo de compra de estoque, adquirindo produtos em um lugar só.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="gnd-institutional-video">
  <div class="gnd-institutional-video-container">
    <div class="gnd-institutional-video">
      <iframe id="gnd-retailer-video" src="https://www.youtube-nocookie.com/embed/pWnqCJlBBLo?rel=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</section>

<section id="gnd-our-mission">
  <div class="gnd-our-mission-container">
    <div class="gnd-our-mission-content">
      <div class="gnd-our-mission-content-text">
      <h2>Compre seu <strong>estoque</strong> de produtos naturais de forma <strong>descomplicada.</strong></h2>
        <p>Tenha mais tempo para o que realmente importa: seus clientes.</p>
      </div>
      <div class="gnd-our-mission-call">
      <h3>Somos o <strong>futuro</strong> do varejo</h3>
      </div>
    </div>
    <div class="gnd-our-mission-image">
    </div>
  </div>
</section>

<section id="gnd-our-partners">
  <div class="gnd-our-partners-title">
    <h3>Alguns de nossos parceiros</h3>
  </div>
  <div class="gnd-carousel-container">
    {% include carousel.html  height="20" unit="%" duration="7" %}
  </div>
</section>

<script>
  function scrollAndPlayVideo() {
    var videoContainer = document.getElementById('gnd-institutional-video');
    videoContainer.scrollIntoView({ behavior: 'smooth', block: 'center'});
    document.getElementById("gnd-retailer-video").src += "&autoplay=1"
  }
</script>
