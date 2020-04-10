console.log("=== CEP ===");

// jQuery Wrapper
jQuery(function() {
    // Actions
    var getAddressError = function(err) {
      if(err.status == 0) {
        // console.log("Falha na comunicação!");
        $("legend")
          .text("Falha na comunicação!")
          .css("color", "red");
      }
    };

    var getAddressSuccess = function(address) {
      console.table(address);
      var { logradouro, bairro, localidade, uf } = address;
      $("#logradouro").val(logradouro);
      $("#bairro").val(bairro);
      $("#cidade").val(localidade);
      $("#estado").val(uf);
    };

    var getAddress = function(cep) {
      $.ajax({
        url: `https://viacep.com.br/ws/${cep}/json/`,
        dataType: "json",
        error: getAddressError,
        success: getAddressSuccess
      });
    };

    var validateEntry = function(e) {
      console.log(this, this.value);
      if(this.value.length == 8) {
        getAddress(this.value);
        // this.classList.remove("error");
        $(this).removeClass("error");
      } else {
        // this.classList.add("error");
        $(this).addClass("error").focus();
      }
    };

    var onlyNumbers = function(e) {
      this.value = this.value.replace(/\D+/g, "")
    };

    // UI - Apply Events
    $("#cep")
      .on("focusout", validateEntry)
      .on("input", onlyNumbers);

});
