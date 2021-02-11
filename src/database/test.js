const Database = require("./db");

Database.then(async (db) => {
    //insert data on table db
    await db.run(`
    INSERT INTO orphanages (
        lat,
        lng,
        name,
        about,
        whatsapp,
        images,
        instructions,
        opening_hours,
        open_on_weekends
    ) VALUES (
        "-9.653746",
        "-35.7421577",
        "Lar das meninas",
        "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        "82993191313"
        "https://images.unsplash.com/photo-1610675863703-5fdd6c856031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
        "Venha como se sentir a vontade e traga muito amor e paciência para dar. ",
        "Horário de visitas Das 18h até 8h",
        "0"
    );
    `);

    //verify data in db
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"');
    console.log(orphanage);
});
