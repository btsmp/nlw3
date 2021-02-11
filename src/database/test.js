const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async (db) => {
    //insert data on table db
    await saveOrphanage(db, {
        lat: "-9.653746",
        lng: "-35.7321577",
        name: "Lar dos meninos",
        about:
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        whatsapp: "82999999999",
        images: [
            "https://images.unsplash.com/photo-1610675863703-5fdd6c856031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
            "https://images.unsplash.com/photo-1612364461060-38075479ec26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
        ].toString(),
        instructions:
            "Venha como se sentir a vontade e traga muito amor e paciência para dar. ",
        opening_hours: "Horário de visitas Das 8h até 18h",
        open_on_weekends: "0",
    });
    //verify data in db
    //const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    //console.log(selectedOrphanages);
});
