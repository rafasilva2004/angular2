"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var contatos = [
            { id: 1, nome: 'Madara Uchiha', email: 'Madara@email.com', telefone: '(00) 0000-0000' },
            { id: 2, nome: 'Kiba Inuzuka', email: 'Kiba@email.com', telefone: '(00) 0000-0000' },
            { id: 3, nome: 'Shino Aburame', email: 'Shino@email.com', telefone: '(00) 0000-0000' },
            { id: 4, nome: 'Hinata Hyuga', email: 'Hinata@email.com', telefone: '(00) 0000-0000' },
            { id: 5, nome: 'Choji Akimichi', email: 'Choji@email.com', telefone: '(00) 0000-0000' },
            { id: 6, nome: 'Shikamaru Nara', email: 'Shikamaru@email.com', telefone: '(00) 0000-0000' },
            { id: 7, nome: 'Might Guy', email: 'Guy@email.com', telefone: '(00) 0000-0000' }
        ];
        return { 'contatos': contatos };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map