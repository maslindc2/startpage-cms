import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const urls =["https://i.lensdump.com/i/RLJni1.gif",
                 "https://i.lensdump.com/i/RLJLLK.gif",
                 "https://i2.lensdump.com/i/RLJMaZ.gif",
                 "https://i.lensdump.com/i/RLJokP.gif"];
const router = new Router();
router.get("/", (ctx) => {
    const randomIndex = Math.floor(Math.random() * (urls.length));

    const randomUrl = urls[randomIndex];
    const responseData = {
        gif:{randomUrl},
    }
    ctx.response.body = JSON.stringify(responseData);
});

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 8080 });