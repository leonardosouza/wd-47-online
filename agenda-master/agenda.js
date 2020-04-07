(function() {
    console.log("Starting APP...");

    // UI (User Interface)
    var ui = {
        fields: document.querySelectorAll("input"),
        buttonAdd: document.querySelector(".btn-add"),
        tableContacts: document.querySelector(".table-contacts")
    };

    // Actions
    var validateFields = function(e) {
        e.preventDefault();

        var errors = 0;

        var contact = {};

        ui.fields.forEach(function(field) {
            if(field.value.length == 0) {
                field.classList.add("error");
                errors++;
            } else {
                field.classList.remove("error");
                contact[field.id] = field.value;
            }
        });

        if(errors > 0) {
            document.querySelector(".error").focus();
        } else {
            addContact(contact);
        }
    };

    var addContact = function() {
        debugger;
    };

    var getContacts = function() {};

    var removeContact = function() {};

    var init = function() {
        // Mapping Event
        ui.buttonAdd.onclick = validateFields;

        // debugger;
    }();

    // console.log(ui);
})();
