import express from "express"
import runGraph from "./ai/graph.ai.js"

const app = express();

app.get("/", async (req,res)=>{
    const result = await runGraph("write an code for Facotial function in js")

    res.json(result)
})

export default app;