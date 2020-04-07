(function() {
    console.log("Starting APP...");
    // Config
    var endpoint = "http://localhost:7000/contacts";

    // UI (User Interface)
    var ui = {
        fields: document.querySelectorAll("input"),
        buttonAdd: document.querySelector(".btn-add"),
        tableContacts: document.querySelector(".table-contacts tbody")
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

    var genericError = function(err) {
        console.error('ERROR:', err.message);
    };

    var addContact = function(contact) {
        var config = {
            method: "POST",
            body: JSON.stringify(contact),
            headers: new Headers({ "Content-type": "application/json" })
        };

        fetch(endpoint, config)
            .then(getContacts)
            .catch(genericError);
    };

    var getContacts = function() {
        var config = {
            method: "GET",
            headers: new Headers({ "Content-type": "application/json" })
        };

        fetch(`${endpoint}?_sort=id&_order=desc`, config) // Promise 1
            .then(function(resp) { return resp.json(); }) // resolved 1 - Promise 2
                .then(getContactsSuccess) // resolved 2
                .catch(genericError) // rejected 2
            .catch(genericError) // rejected 1;
    };

    var getContactsSuccess = function(contacts) {
        ui.tableContacts.innerHTML = contacts.map(function(contact) {
            return `<tr>
                <td>${contact.id}</td>
                <td>${contact.name}</td>
                <td>${contact.email}</td>
                <td>${contact.phone}</td>
                <td><a href="#">Excluir</a></td>
            </tr>`;
        }).join("");

        cleanFields();
    };

    var cleanFields = function() {
        ui.fields.forEach(function(field) {
            field.value = "";
        });

        document.querySelector("input").focus();
    };

    var removeContact = function() {
        // TODO
    };

    var init = function() {
        // Run Actions
        getContacts();

        // Mapping Event
        ui.buttonAdd.onclick = validateFields;
    }();
})();
