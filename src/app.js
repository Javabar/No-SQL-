const yargs = require("yargs");

const { connection, client } = require("./db/connection")
const { addFilm, listFilms, removeFilm, editFilm } = require("./utils")


const app = async (yargsObj) => {
    const collection = await connection();
    if(yargsObj.add) {
        await addFilm(collection, {title: yargsObj.title, actor: yargsObj.actor});
        console.log("success, entry added")
    } else if(yargsObj.list) {
        await listFilms(collection);
    } else if (yargsObj.edit) {
        await editFilm(collection, yargsObj.edit, {title: yargsObj.title, actor: yargsObj.actor});
    } else if (yargsObj.delte) {
        await removeFilm(collection, {title: yargsObj.title, actor: yargsObj.actor})
    } else {
        console.log("incorrect command");
    }
    await client.close();
};


app(yargs.argv);
