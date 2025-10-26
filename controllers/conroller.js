async function handlertoHomepage(req,res) {

    res.render("home");
    
}

async function handlertogetdata(req,res) {

    console.log(req.body)

    console.log(req.files);

    res.send("rec")
    
}


module.exports = {handlertoHomepage,handlertogetdata};